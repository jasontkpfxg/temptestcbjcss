document.cookie = "_gcl_au=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_1QLPNMKFSB=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_7L7DVB3ESW=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_X40F2R9XTK=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_C2LNYF88H0=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_B7TFWF5EFS=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_090XLNZZ3Q=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_B7F9XHPRC6=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_H6LDWLC82Q=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_gid=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_B1QX9SERGQ=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_0QYMYJCHSX=.v-circle.com/; SameSite=None; Secure";
document.cookie = "googtrans=.v-circle.com/; SameSite=None; Secure";
document.cookie = "_ga_DVL1YRSJLN=.v-circle.com/; SameSite=None; Secure";

document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const agentID = urlParams.get("agentID");
    const agentCode = urlParams.get("agentCode");
    const userID = urlParams.get("userID");
    const lang = urlParams.get("lang");
    const token = urlParams.get("token");
    const timestamp = Date.now();

    var url = "https://vera-ai-chatbot.v-circle.com/chat/embed?" + timestamp;

    if (agentID)
        url = url + "&agentID=" + encodeURIComponent(agentID);
    if (agentCode)
        url = url + "&agentCode=" + encodeURIComponent(agentCode);
    if (userID)
        url = url + "&userID=" + encodeURIComponent(userID);
    if (lang)
        url = url + "&lang=" + encodeURIComponent(lang);
    if (token)
        url = url + "&token=" + encodeURIComponent(token);

    var iframe = document.createElement("iframe");
    iframe.id = "VERA-chatbot";
    iframe.title = "VERA Chatbot";
    iframe.allow = "microphone; geolocation";
    iframe.src = url;

    var chatbotContainer = document.createElement("div");
    chatbotContainer.classList.add("chatbot");
    chatbotContainer.classList.add("chatbot--closed");
    chatbotContainer.appendChild(iframe);

    document.body.appendChild(chatbotContainer);

    // Dynamically add CSS styles
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "https://jasontkpfxg.github.io/temptestcbjcss/testcb.css"; // Replace with the actual URL of your CSS file
    document.head.appendChild(cssLink);
});

window.onmessage = function (e) {
    if (e.data == "CHATBOT_OPENED")
        chatbotOpened();
    else if (e.data == "CHATBOT_CLOSED")
        chatbotClosed();
}

function chatbotOpened() {
    var chatbotContainer = document.querySelector(".chatbot");
    chatbotContainer.classList.remove("chatbot--closed");
    chatbotContainer.classList.add("chatbot--expanded");
}

function chatbotClosed() {
    var chatbotContainer = document.querySelector(".chatbot");
    chatbotContainer.classList.remove("chatbot--expanded");
    chatbotContainer.classList.add("chatbot--closed");
}
