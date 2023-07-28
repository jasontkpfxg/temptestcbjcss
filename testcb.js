document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const agentID = urlParams.get("agentID");
    const agentCode = urlParams.get("agentCode");
    const userID = urlParams.get("userID");
    const lang = urlParams.get("lang");
    const token = urlParams.get("token");
    const timestamp = Date.now();
    console.log(agentCode);
    console.log(token);
    var url = "https://vera-ai-chatbot.v-circle.com/sit/chat/embed?" + timestamp;

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
    iframe.id = "VERA-chatbot" + url;
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
