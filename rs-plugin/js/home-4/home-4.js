window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = false;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = 'compiled';
function setREVStartSize(e){
//window.requestAnimationFrame(function() {
	window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;
	window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;
	try {
		var pw = document.getElementById(e.c).parentNode.offsetWidth,
			newh;
		pw = pw===0 || isNaN(pw) || (e.l=="fullwidth" || e.layout=="fullwidth") ? window.RSIW : pw;
		e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
		e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
		e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
		e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
		e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
		e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
		e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);
		if(e.layout==="fullscreen" || e.l==="fullscreen")
			newh = Math.max(e.mh,window.RSIH);
		else{
			e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
			for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];
			e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
			e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
			for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
								
			var nl = new Array(e.rl.length),
				ix = 0,
				sl;
			e.tabw = e.tabhide>=pw ? 0 : e.tabw;
			e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
			e.tabh = e.tabhide>=pw ? 0 : e.tabh;
			e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;
			for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
			sl = nl[0];
			for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}
			var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);
			newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
		}
		var el = document.getElementById(e.c);
		if (el!==null && el) el.style.height = newh+"px";
		el = document.getElementById(e.c+"_wrapper");
		if (el!==null && el) {
			el.style.height = newh+"px";
			el.style.display = "block";
		}
	} catch(e){
		console.log("Failure at Presize of Slider:" + e)
	}
//});
};
if(typeof revslider_showDoubleJqueryError === "undefined") {function revslider_showDoubleJqueryError(sliderID) {console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");console.log("To fix this, you can:");console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");console.log("2. Find the double jQuery.js inclusion and remove it");return "Double Included jQuery Library";}}
var	tpj = jQuery;
if(window.RS_MODULES === undefined) window.RS_MODULES = {};
if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider61"] = {once: RS_MODULES.modules["revslider61"]!==undefined ? RS_MODULES.modules["revslider61"].once : undefined, init:function() {
	window.revapi6 = window.revapi6===undefined || window.revapi6===null || window.revapi6.length===0  ? document.getElementById("rev_slider_6_1") : window.revapi6;
	if(window.revapi6 === null || window.revapi6 === undefined || window.revapi6.length==0) { window.revapi6initTry = window.revapi6initTry ===undefined ? 0 : window.revapi6initTry+1; if (window.revapi6initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider61"].init()}); return;}
	window.revapi6 = jQuery(window.revapi6);
	if(window.revapi6.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_6_1"); return;}
	revapi6.revolutionInit({
			revapi:"revapi6",
			DPR:"dpr",
			visibilityLevels:"1240,1024,778,480",
			gridwidth:1240,
			gridheight:550,
			lazyType:"smart",
			spinner:"spinner0",
			perspective:600,
			perspectiveType:"local",
			editorheight:"550,768,960,720",
			responsiveLevels:"1240,1024,778,480",
			progressBar:{disableProgressBar:true},
			navigation: {
				mouseScrollNavigation:false,
				wheelCallDelay:1000,
				onHoverStop:false,
				arrows: {
					enable:true,
					style:"hephaistos",
					hide_onleave:true,
					left: {

					},
					right: {

					}
				}
			},
			viewPort: {
				global:true,
				globalDist:"-200px",
				enable:false,
				visible_area:"20%"
			},
			fallbacks: {
				nextSlideOnWindowFocus:true,
				allowHTML5AutoPlayOnAndroid:true
			},
	});
	
}} // End of RevInitScript
if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};