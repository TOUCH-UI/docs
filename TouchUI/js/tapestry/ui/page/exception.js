!function(e,t,n){"use strict";function a(e){var a=n.getElementById("detail_text");if(a&&a.nodeType){var o=n.getElementById("detail_div");if(o&&o.nodeType&&"none"!=o.style.display)if(n.selection){var i=n.body.createTextRange();i.moveToElementText(a),i.moveEnd("character"),i.select()}else{var l=t.getSelection(),i=n.createRange();i.selectNodeContents(a),l.removeAllRanges(),l.addRange(i)}o=null,s&&clipboardData.setData("text",a.innerText),a=null}}function o(){var t=e("#detail_div");t&&t.length&&("none"==t.css("display")?(t.css("display",""),e("#btn_toggledetail").text(e.lang.get("ui.page.excep.hide-detail"))):(t.css("display","none"),e("#btn_toggledetail").text(e.lang.get("ui.page.excep.show-detail")))),t=null}function i(){if(!backPopup("btn_back"))if(c){var t=e("#backPage");t.length&&t.val()?e.redirect.toUrl(t.val()):history.back(-1),t=null}else e.nav.close()}function l(){var n=t.wadeExceptionReporter;n&&e.isString(n)&&e.httphandler.submit("report_cond",n,"report",null,function(){MessageBox.success("",e.lang.get("ui.page.excep.report.success")),e.endLoading()},function(t,n){MessageBox.error("",e.lang.get("ui.page.excep.report.error")+":<br />"+t+"<br />"+n),e.endLoading()})}if(e){var c=!e.isSameDomain(top)||e.isSamePage(top),s=!e.os.pad&&!e.os.phone&&e.browser.msie;e(n).ready(function(){c||(e("#btn_back [tag=ico]").attr("className","e_ico-close"),e("#btn_back [tag=text]").text(e.lang.get("ui.page.excep.btntext.close"))),e("#btn_back").focus()}),e(function(){e("#btn_copydetail").bind("tap",a),e("#btn_back").bind("tap",i),e("#btn_toggledetail").bind("tap",o),e("#btn_smbterr").bind("tap",l)}),t.goBack=i}}(window.Wade,window,document);