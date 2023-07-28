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

    // Attempt to set SameSite cookies from a CORS request
    function setSameSiteCookiesFromCORS() {
        fetch('https://vera-ai-chatbot.v-circle.com/', {
            method: 'GET',
            credentials: 'include', // Include cookies in the CORS request
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then(response => {
            // Check if the CORS request was successful and the 'Set-Cookie' header is present
            if (response.ok && response.headers.has('Set-Cookie')) {
                // Extract the cookies from the 'Set-Cookie' header
                const cookies = response.headers.get('Set-Cookie').split(';');

                // Set the cookies with SameSite=None and Secure attributes on your domain
                cookies.forEach(cookie => {
                    document.cookie = cookie.trim() + '; SameSite=None; Secure';
                });
            }
        })
        .catch(error => {
            // Handle errors
            console.error('Error making CORS request:', error);
        });
    }

    // Call the function to attempt to set SameSite cookies from the CORS request
    setSameSiteCookiesFromCORS();
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
