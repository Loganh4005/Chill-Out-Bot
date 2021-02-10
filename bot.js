console.log("Welcome To Logan's Bots")
 
// Varibles
 
const Eris = require('eris');
const logger = require('winston');
const auth = require('./auth.json');
const roles = require('./roles.json');
var fs = require('fs');
 
// var YoutubeMp3Downloader = require("youtube-mp3-downloader");
var u2s = ""
var id = ""
 
// Youtube 2 MP3 4 Music
 
// var YD = new YoutubeMp3Downloader({
//    "ffmpegPath": "/ffmpeg",        // Where is the FFmpeg binary located?
//    "outputPath": "/musicCache",    // Where should the downloaded and encoded files be stored?
//    "youtubeVideoQuality": "highest",       // What video quality should be used?
//    "queueParallelism": 2,                  // How many parallel downloads/encodes should be started?
//    "progressTimeout": 2000                 // How long should be the interval of the progress reports
// });
 
// Server ID
var serverID = "790580375364567041"
 
// Roles
 
var roleOwner = roles.owner
var roleCoOwner = "516888239408152577"
var roleAdmin = roles.admin
var roleMod = "522748999090962434"
var roleTraniee = "522749162912088077"
var roleMod = "522748999090962434"
var roleManager = "552524650530471938"
var roleMuted = roles.muted
var devRole = roles.developer
 
// Arrays
let modRoles = [roleOwner, roleCoOwner, roleAdmin, roleMod, roleTraniee, roleManager]
 

 
// Sleep Funtion
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}  
 
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Eris(auth.token);
 
 
function playingLoop() {
    bot.editStatus("online", {name: "Relaxing in Chill Out"});
    sleep(10000).then(() => {
        // This will execute 10 seconds from now
            bot.editStatus("online", {name: "Prefix is >"});
            sleep(10000).then(() => {
                // This will execute 10 seconds from now
                    playingLoop();
                });
            });

};
 
 var defaultPlayerConfig = {
  mutedtime: '',
  warns: '',
  flavor: 'chocolate',
  beverage: 'coffee'
};

var data = JSON.stringify(defaultPlayerConfig);

//Functions
//YD.on("finished", function(err, data) {
//    console.log(JSON.stringify(data));
//});
 
bot.on('ready', () => {
    console.log("Bot Initialized")
    playingLoop();
});
 
// bot.on('messageCreate', async (msg, args) => {
// bot.createMessage("552092806852902923", 
//   embed: {
//    description: "User: <@! \nChannel: <#>",
//    color: 14936353,
//    timestamp: "2020-07-04T15:55:12.708Z",
//    footer: {
//      text: "Message ID: 12345678910"
//    },
//    thumbnail: {
//      url: ""
//    },
//    author: {
//      name: "Message Edited",
//      icon_url: "https://media.discordapp.net/attachments/506838906872922145/603643138854354944/messageupdate.png"
//    },
//    fields: [
//      {
//        name: "Before:",
//        value: "oldMsg.content"
//      },
//      {
//        name: "After:",
//        value: "newMessage.content"
//      }
//    ]
//   }
// );
// });
 
 
 
//bot.on('messageDelete', function (oldMsg, newMessage) {console.log("Test");});
 
//bot.on('messageUpdate', function (oldMsg, newMessage) {
// Delete Function
//                    bot.createMessage(
//                        "552092806852902923",
//  embed: {
//    "description": "User: <@!" + oldMsg.author.id + ">\nChannel: <#" + oldMsg.channel_id + ">\n\n" + oldMsg.content,
//    "color": 16711680,
//    "timestamp": "2020-07-04T15:55:12.708Z",
//    "footer": {
//      "text": "Message ID: 12345678910"
//    },
//    "thumbnail": {
//      "url": ""
//    },
//    "author": {
//      "name": "Message Deleted",
//      "icon_url": "https://media.discordapp.net/attachments/506838906872922145/603642595419357190/messagedelete.png"
//    }
//  }
//console.log(JSON.stringify(oldMsg, null, 2));
//                    bot.createMessage({
//                        "552092806852902923",
//                        embed: {
//                            "description": "User: <@!" + oldMsg.author.id + "\nChannel: <#" + oldMsg.channel_id + ">",
//                            "color": 14936353,
//                            "timestamp": "2020-07-04T15:55:12.708Z",
//                            "footer": {
//                                "text": "Message ID: 12345678910"
//                             },
//                             "thumbnail": {
//                                "url": ""
//                             },
//                             "author": {
//                                "name": "Message Edited",
//                                "icon_url": "https://media.discordapp.net/attachments/506838906872922145/603643138854354944/messageupdate.png"
//                             },
//                             "fields": [
//                                {
//                                   "name": "Before:",
//                                   "value": oldMsg.content
//                               },
//                                {
//                                   "name": "After:",
//                                   "value": newMessage.content
//                                }
//                             ]
//                        }
//                    });
//
//});
 
 
// bot.on('disconnect', function(errMsg, code) {setTimeout(() => {
//  bot.connect();
//}, 3000);});
 
bot.on('messageCreate', async (msg, args) => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `?`
 
    if (msg.content.substring(0, 1) == '>') {
        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];
        var args1 = args[1];
        var args2 = args[2];
        var args3 = args[3];
        var args4 = args[4];
 
        args = args.splice(1);
		
        switch(cmd) {
            // ?ping
            case 'writetest':
                console.log(msg.author.username + " Ran ?writetest")
                bot.createMessage(msg.channel.id, 'Writing To WriteData...... ');
				console.log(msg.author.id);
				fs.mkdir("./" + msg.author.id, function(err) {
  if (err) {
    				fs.writeFile('./' + msg.author.id + '/config.json', data, function (err) {
  if (err) {
    console.log('There has been an error saving your configuration data.');
    console.log(err.message);
    return;
  }
  console.log('Configuration saved successfully.')
});
  } else {
    				fs.writeFile('./' + msg.author.id + '/config.json', data, function (err) {
  if (err) {
    console.log('There has been an error saving your configuration data.');
    console.log(err.message);
    return;
  }
  console.log('Configuration saved successfully.')
});
  }
})

            break;
            // ?help
            case 'help':
                console.log(msg.author.username + " Ran ?help")
                bot.createMessage(
                    msg.channel.id,
                     'Uh Oh, It looks like this command isn\'t finished yet, please check back soon!'
                );
            // Just add any case commands if you want to..
            break;
            case 'mute':
                console.log(msg.author.username + " Ran ?mute")
                if (msg.member.roles.includes(roleOwner) || msg.member.roles.includes(roleCoOwner) || msg.member.roles.includes(roleAdmin) || msg.member.roles.includes(roleMod) || msg.member.roles.includes(roleTraniee) || msg.member.roles.includes(roleManager) || "656295698790219806") {
                    id = args1.match(/(\d+)/)
                    id = id[0]
                    bot.addGuildMemberRole(serverID, id, roleMuted);
                    bot.createMessage(
                        msg.channel.id,
                         "You Have Muted <@!" + id + ">"
                    );
                 } else {
                    bot.createMessage(
                        msg.channel.id,
                         "You do not have perms to do ```?mute```"
                    );
                    bot.createMessage(
                        "526701768416165918",
                         "The User <@!" + userID + "> attempted to run ?mute"
                    );
             }
                console.log(id);
            // Just add any case commands if you want to..
            break;
            case 'unmute':
                console.log(msg.author.username + " Ran ?unmute")
                if (msg.member.roles.includes(roleOwner) || msg.member.roles.includes(roleCoOwner) || msg.member.roles.includes(roleAdmin) || msg.member.roles.includes(roleMod) || msg.member.roles.includes(roleTraniee) || msg.member.roles.includes(roleManager) || "656295698790219806") {
                    id = args1.match(/(\d+)/)
                    id = id[0]
                    bot.removeGuildMemberRole(serverID, id, roleMuted);
                    bot.createMessage(
                        msg.channel.id,
                         "You Have Muted <@!" + id + ">"
                    );
                 } else {
                    bot.createMessage(
                        msg.channel.id,
                         "You do not have perms to do ```?mute```"
                    );
                    bot.createMessage(
                        "526701768416165918",
                         "The User <@!" + userID + "> attempted to run ?mute"
                    );
             }
                console.log(id);
            // Just add any case commands if you want to..
            break;
            case 'ban':
                console.log(msg.author.username + " Ran ?ban")
                if (msg.member.roles.includes(roleOwner) || msg.member.roles.includes(roleCoOwner) || msg.member.roles.includes(roleAdmin) || msg.member.roles.includes(roleMod) || msg.member.roles.includes(roleTraniee) || msg.member.roles.includes(roleManager)) {
                    id = args1.match(/(\d+)/)
                    id = id[0]
					bot.banGuildMember(serverID, id)
                    bot.createMessage(
                        msg.channel.id,
                         "You Have Banned <@!" + id + ">"
//                         'Sorry But the Ban Command is a Work In Progress :frowning:'
                    );
                 } else {
                    bot.createMessage(
                        msg.channel.id,
                         "You do not have perms to do ```?ban```"
                    );
                    bot.createMessage(
                        "526701768416165918",
                         "The User <@!" + userID + "> attempted to run ?ban"
                    );
                  }
                  break;
            case 'unban':
                console.log(msg.author.username + " Ran ?unban")
                if (msg.member.roles.includes(roleOwner) || msg.member.roles.includes(roleCoOwner) || msg.member.roles.includes(roleAdmin) || msg.member.roles.includes(roleMod) || msg.member.roles.includes(roleTraniee) || msg.member.roles.includes(roleManager)) {
                    id = args1.match(/(\d+)/)
                    id = id[0]
					try {
                    bot.unbanGuildMember(serverID, id)
					}
					catch(err) {
						bot.createMessage(
                        msg.channel.id,
                         "Something Went Wrong :frowning: Err: Invalid_User_ID"
                    );
					}
                    bot.createMessage(
                        msg.channel.id,
                         "You Have Unbanned <@!" + id + ">"
//                         'Sorry But the Ban Command is a Work In Progress :frowning:'
                    );
                 } else {
                    bot.createMessage(
                        msg.channel.id,
                         "You do not have perms to do ```?unban```"
                    );
                    bot.createMessage(
                        "526701768416165918",
                         "The User <@!" + msg.author.id + "> attempted to run ?unban"
                    );
                  }
                console.log(id);
            // Just add any case commands if you want to..
				
            // ?ping
            case 'ping':
                console.log(msg.author.username + " Ran ?ping")
                bot.createMessage(msg.channel.id, 'Pong!');
            break;				
         }
     }
});
 
bot.connect();