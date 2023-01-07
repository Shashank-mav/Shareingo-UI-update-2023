var userAgent = navigator.userAgent.toLowerCase();
var divWarning = document.getElementById("warning");
if (!window.isRtcSupported) {
    divWarning.innerText = 'The browser you are currently using does not support WebRTC，Please use another browser to open this page。Safari is recommended、Firefoxor Chrome wait for the browser。';
    divWarning.style.display = "block";
} else if (userAgent.indexOf("wechat") > -1 || userAgent.indexOf("micromessenger") > -1) {
    divWarning.innerText = '， To receive documents，To receive documents”。Safari is recommended、Firefoxor browsers such as Chrome。';
    divWarning.style.display = "block";
}