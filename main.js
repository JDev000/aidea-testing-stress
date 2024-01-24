const { readFileSync } = require('fs');
const login = require("facebook-chat-api");

loginPath = { appState: JSON.parse(readFileSync(__dirname + "/appstate.json", "utf-8")) };

login(loginPath, (err,api) => {
    if (err) return console.error(err);
    
   api.listenMqtt((error,message)=>{
    if (error) return console.error(err);

    // api.sendMessage(message.body, message.threadID, message.messageID)

    if(message.body == "hi") 
        api.sendMessage("How's your day?", message.threadID, message.messageID)
   })
})