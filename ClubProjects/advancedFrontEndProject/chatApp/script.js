// local variables
var messageCount = 0;


var send = document.querySelector('.send');
var textMessage = document.querySelector('textarea');
var messages = document.querySelector('.messages');
var profileName = document.querySelector(".profileName");


// event listiner

send.addEventListener("click", sendMessage);




function sendMessage() {
    console.log("clicked", textMessage)
    var insideTextAreaData = textMessage.value;
    var chatMessage = textMessage.value;
    if (insideTextAreaData) {
        var date = new Date();


        console.log(insideTextAreaData)


        var helloRegex = /(^\s*hello\s*$)|(^\s*hi\s*$)/gi;
        var dateRegex = /^date$/gi;

        if (helloRegex.test(insideTextAreaData)) {
            chatMessage = `Hello ${profileName.innerText}`;
        }

        if (dateRegex.test(insideTextAreaData)) {
            chatMessage = `Today's date is : ${date}`;
        }

        messageCount++;
        var data1 = document.createElement('div');
        data1.setAttribute('class', `message-user ${messageCount}`);
        data1.innerText = `User-text\n${insideTextAreaData}`;
        messages.appendChild(data1);


        /* Chat-bot message */

        var data2 = document.createElement('div');
        data2.setAttribute('class', `message-chat-bot ${messageCount}`);
        data2.innerText = `Chatbot-msg\n${chatMessage}`;
        messages.appendChild(data2);



        textMessage.value = "";
        console.log(messages);
    }
}


