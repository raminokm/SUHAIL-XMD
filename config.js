const fs = require('fs-extra')
rif (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "989368187813";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_02_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3LFxuICAgICAgICA2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA2NixcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgMTM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiUWt4dW5mU1JjeStESFVEQ0Rlanl0dXEvZm8vMXBBMHV4L3QvaFkxaWlNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk4OTM2ODE4NzgxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDE4MjBFOTk1QzFBRDQzRUZBMTk5NEU5NTA1NTE3MUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5ODQ2OTQyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBxQm1RNEtGUmg2dUtPQ0VKb015M3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjY3YTZjYjktZjJjNC00NDkyLWE2MjktYTgwZmYxZjA5NWYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDM4LFxuICAgICAgNDIsXG4gICAgICA2OSxcbiAgICAgIDE5NCxcbiAgICAgIDE4NixcbiAgICAgIDExLFxuICAgICAgMTQ0LFxuICAgICAgMjEyLFxuICAgICAgMTU0LFxuICAgICAgMTUsXG4gICAgICA2NyxcbiAgICAgIDExOCxcbiAgICAgIDk2LFxuICAgICAgMjAsXG4gICAgICAxLFxuICAgICAgMTQyLFxuICAgICAgMTAzLFxuICAgICAgMTUsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgNjIsXG4gICAgICAxMjIsXG4gICAgICAzMixcbiAgICAgIDE3LFxuICAgICAgODAsXG4gICAgICAxNDIsXG4gICAgICA3NixcbiAgICAgIDI3LFxuICAgICAgMTE2LFxuICAgICAgNzIsXG4gICAgICAyMTUsXG4gICAgICAxMjgsXG4gICAgICAxODYsXG4gICAgICAyMyxcbiAgICAgIDM0LFxuICAgICAgMjEzLFxuICAgICAgMTY1LFxuICAgICAgMTUsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJUUDJMVkhEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5ODkzNjgxODc4MTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJcIixcbiAgICBcImxpZFwiOiBcIjE5NzUwODQzMzE5OTIyNTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tTaHorUURFSm05N2JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM0NLcG5mWUs2R3lhelgzZVd6MGRPYzNJb1MwQWFwWlBEM2I1bGhwSnhCST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyOWovamhYemdvd1dkSy9Pa0hrdGdUQm9rZnQraTNqeXZCU0U2YzB4SUdaZ2tFSlpSUUpUYTM5Wk52SUJOSGtvczdvbUN4Nk9jc3BGci94dEljd2JBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvMkV0VUJqZTE1eXFuU25nSGxxaHptSTYrUncrU0VwSmc2VzMrWnFwcmVwM0VkcUpyRGFCOEYxSXBMaEpzMFcxNDFYbjA1S09LSnNENERJRlBMV1BEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5ODkzNjgxODc4MTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk4NDY5MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJTmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlOay5qc29uIjogIntcImtleURhdGFcIjpcIkgySHNiNTdPZTNic2Vwb1lIQ3J2QXgyRjFBY2tnblBVL0k1citpUlNzdlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxNjMyMDE2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5ODQ2OTQyNTAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
