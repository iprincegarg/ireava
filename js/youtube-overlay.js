!function(e){try{if("function"==typeof define&&define.amd)define("cmb-youtube-overlay",(function(){return e(window,document)}));else{if(!window||"object"!=typeof window)throw new Error("Error on Load -> Check - May be not sure about your dev environment");window.YoutubeOverlayModule=e(window,document)}}catch(e){return}}((function(e,r){var o=function(e){try{if(!e){throw new Error("Youtube overlay requires a request object argument.");return}if(!("sourceUrl"in e)||!("triggerElement"in e)){throw new Error("Youtube overlay requires requestObject with mandatory props");return}if("string"!=typeof e.sourceUrl||"string"!=typeof e.triggerElement){throw new Error("Youtube overlay requires requestObject with mandatory props which are of string types.");return}if(e.progressCallback&&"function"!=typeof e.progressCallback)throw new Error("Youtube overlay - Progress Callback must be of function type if it is specified in the request");this.overlayContainer="#youtubePlayerOverlay",this.sourceUrl=e.sourceUrl,this.triggerElement=e.triggerElement,this.progressCallback=e.progressCallback,this._isDoneDone={progressType:"request-completed",progressMessage:"Your request has been accepted and processed."},this._isBeingDone={progressType:"processing-request",progressMessage:"Your request is being processed. Please wait."},this._isBeingClosed={progressType:"player-closed",progressMessage:"The overlay player has been closed down."}}catch(e){}},t=o.prototype;return t.activateDeployment=function(){this.createPlayerContainer()},t.createPlayerContainer=function(){if(0===$(this.overlayContainer).length){var e=$('<div class="videoPlayerOverlay hide hiddenTransform" id="youtubePlayerOverlay" data-hasloaded="false"></div>'),r=$('<button id="youtubeOverlayCloser" class="defaultButton closeIcon"><img src="https://s3.ap-south-1.amazonaws.com/choosemybicycle/cmb-website-icons/cancel-close-icons/x-mark-black-icon.svg" class="img-responsive center-block" alt="Close" title="close"/></button>'),o=$("body");r.appendTo(e),e.appendTo(o)}this.triggerCheck()},t.triggerCheck=function(){var e=this;try{if(0===$(e.triggerElement).length){throw new Error("Youtube Overlay Constructor -> Not able to locate the required Trigger-Element. Can you please check id? ---\x3e "+e.triggerElement);return}e.activateOnClickHandler()}catch(e){}},t.activateOnClickHandler=function(){var e=this,r=e.triggerElement,o=(e.sourceUrl,e.overlayContainer);$(r).on("click",(function(){e.progressCallback(e._isBeingDone);var t=$(o).attr("data-hasloaded"),a=$(r).attr("id");if(t===a)e.openPlayerOverlay(),e.progressCallback(e._isDoneDone);else{$(o).find("iframe").remove();var n=$('<iframe width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen mozallowfullscreen webkitallowfullscreen></iframe>');n.attr({src:e.sourceUrl+"?showinfo=0&rel=0"}),n.appendTo($(o)),$(o).attr("data-hasloaded",a),e.openPlayerOverlay(),e.progressCallback(e._isDoneDone)}}))},t.openPlayerOverlay=function(){var e=this,r=e.overlayContainer;function o(){var o=$(r).find("iframe")[0];o.src+="&autoplay=1",$(r).find("#youtubeOverlayCloser").off("click").on("click",(function(){var r=o.src.split("&autoplay=1")[0],t=r+"&autoplay=0";o.src=t,o.src=r,e.closePlayerOverlay()})),e.closeOnEscapeKeyPress()}$(r).removeClass("hide"),setTimeout((function(){$(r).removeClass("hiddenTransform"),setTimeout(o,280)}),80)},t.closePlayerOverlay=function(){var e=this,r=e.overlayContainer;$(r).addClass("hiddenTransform"),setTimeout((function(){$(r).addClass("hide"),e.progressCallback(e._isBeingClosed)}),260)},t.closeOnEscapeKeyPress=function(){var e=this.overlayContainer;$(r).on("keyup",(function(r){27!==r.which||$(e).hasClass("hiddenTransform")||$(e).find("#youtubeOverlayCloser").trigger("click")}))},t.closeOnClickingOverlay=function(){var e=$(this.overlayContainer);e.on("click",(function(r){"iframe"!==r.target.tagName.toLowerCase()&&"youtubePlayerOverlay"===r.target.id&&e.find("#youtubeOverlayCloser").trigger("click")}))},o}));
