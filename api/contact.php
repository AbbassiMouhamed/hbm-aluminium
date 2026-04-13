<?php
// Brevo (Sendinblue) contact form sender
// Expects POST fields: name, phone, email, service, message
// Configure via environment variables:
// - BREVO_API_KEY (required)
// - BREVO_TO_EMAIL (required)
// - BREVO_FROM_EMAIL (required; must be a sender allowed in your Brevo account)
// - BREVO_FROM_NAME (optional)

function respond_json($statusCode, $payload) {
  http_response_code($statusCode);
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($payload, JSON_UNESCAPED_UNICODE);
  exit;
}

function starts_with($haystack, $needle) {
  if ($needle === '') return true;
  return strncmp($haystack, $needle, strlen($needle)) === 0;
}

function ends_with($haystack, $needle) {
  if ($needle === '') return true;
  $len = strlen($needle);
  if ($len === 0) return true;
  return substr($haystack, -$len) === $needle;
}

function load_dotenv_if_present($path) {
  if (!is_readable($path)) return;
  $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
  if (!$lines) return;
  foreach ($lines as $line) {
    $line = trim($line);
    if ($line === '' || starts_with($line, '#')) continue;
    $eq = strpos($line, '=');
    if ($eq === false) continue;

    $key = trim(substr($line, 0, $eq));
    $val = trim(substr($line, $eq + 1));
    if ($key === '') continue;

    // Strip optional quotes
    if ((starts_with($val, '"') && ends_with($val, '"')) ||
        (starts_with($val, "'") && ends_with($val, "'"))) {
      $val = substr($val, 1, -1);
    }

    // Don't overwrite already-defined env vars
    $existing = getenv($key);
    if ($existing !== false && $existing !== '') continue;

    putenv($key . '=' . $val);
    $_ENV[$key] = $val;
    $_SERVER[$key] = $val;
  }
}

function is_html_request() {
  $accept = isset($_SERVER['HTTP_ACCEPT']) ? $_SERVER['HTTP_ACCEPT'] : '';
  return stripos($accept, 'text/html') !== false;
}

function redirect_back($sent) {
  $location = '../contact.html' . ($sent ? '?sent=1' : '?sent=0');
  header('Location: ' . $location, true, 303);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  if (is_html_request()) redirect_back(false);
  respond_json(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

// Optional .env loader (for local/dev). In production, prefer real environment variables.
load_dotenv_if_present(__DIR__ . '/../.env');

$apiKey = getenv('BREVO_API_KEY');
$toEmail = getenv('BREVO_TO_EMAIL');
$fromEmail = getenv('BREVO_FROM_EMAIL');
$fromName = getenv('BREVO_FROM_NAME') ?: 'HBM ALU Website';

if (!$apiKey || !$toEmail || !$fromEmail) {
  if (is_html_request()) redirect_back(false);
  respond_json(500, ['ok' => false, 'error' => 'server_not_configured']);
}

$name = trim((string)($_POST['name'] ?? ''));
$phone = trim((string)($_POST['phone'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$service = trim((string)($_POST['service'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));

if ($name === '' || $phone === '' || $email === '' || $service === '') {
  if (is_html_request()) redirect_back(false);
  respond_json(400, ['ok' => false, 'error' => 'missing_fields']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  if (is_html_request()) redirect_back(false);
  respond_json(400, ['ok' => false, 'error' => 'invalid_email']);
}

if (strlen($message) < 3) {
  $message = '(no message)';
}

$subject = 'Nouveau message (Site) - ' . $service;

function esc_html($s) {
  return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$html = '';
$html .= '<div style="font-family:Arial,sans-serif;line-height:1.5">';
$html .= '<h2>Nouveau message depuis le site</h2>';
$html .= '<p><strong>Nom:</strong> ' . esc_html($name) . '</p>';
$html .= '<p><strong>Téléphone:</strong> ' . esc_html($phone) . '</p>';
$html .= '<p><strong>Email:</strong> ' . esc_html($email) . '</p>';
$html .= '<p><strong>Service:</strong> ' . esc_html($service) . '</p>';
$html .= '<p><strong>Message:</strong><br />' . nl2br(esc_html($message)) . '</p>';
$html .= '</div>';

$payload = [
  'sender' => [
    'name' => $fromName,
    'email' => $fromEmail,
  ],
  'to' => [
    [
      'email' => $toEmail,
      'name' => 'HBM ALU',
    ],
  ],
  'replyTo' => [
    'email' => $email,
    'name' => $name,
  ],
  'subject' => $subject,
  'htmlContent' => $html,
];

$ch = curl_init('https://api.brevo.com/v3/smtp/email');

curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    'accept: application/json',
    'content-type: application/json',
    'api-key: ' . $apiKey,
  ],
  CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE),
  CURLOPT_TIMEOUT => 20,
]);

$response = curl_exec($ch);
$httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr = curl_error($ch);

curl_close($ch);

if ($response === false) {
  if (is_html_request()) redirect_back(false);
  respond_json(502, ['ok' => false, 'error' => 'curl_error', 'details' => $curlErr]);
}

if ($httpCode < 200 || $httpCode >= 300) {
  if (is_html_request()) redirect_back(false);
  respond_json(502, ['ok' => false, 'error' => 'brevo_error', 'status' => $httpCode, 'response' => $response]);
}

if (is_html_request()) redirect_back(true);
respond_json(200, ['ok' => true]);
