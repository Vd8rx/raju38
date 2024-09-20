const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923314927710" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314927710";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_28_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgMjM0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMjI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyLFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzLFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL2xRWG5RVndDSm9PMjdZU3JVQjVJMms3Qm5zRjZSeUtjcGxZZ1lPY09Uaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNjRWcGZacFVRbEt6NzYwTURSeXlkZ1wiLFxuICBcInBob25lSWRcIjogXCI4ZmYyZTY5NC04NTA1LTRkMmItOTY3NS1lMTNmYWRjNGI1ZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTEsXG4gICAgICAxMTUsXG4gICAgICA5NixcbiAgICAgIDE0MCxcbiAgICAgIDE4MCxcbiAgICAgIDQ5LFxuICAgICAgMjE1LFxuICAgICAgMzcsXG4gICAgICAxMzUsXG4gICAgICA2MCxcbiAgICAgIDE0LFxuICAgICAgMTIwLFxuICAgICAgMTU4LFxuICAgICAgOCxcbiAgICAgIDEzMCxcbiAgICAgIDEzNCxcbiAgICAgIDIxOSxcbiAgICAgIDE5MyxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAxMTcsXG4gICAgICA2OSxcbiAgICAgIDIyNCxcbiAgICAgIDEzNSxcbiAgICAgIDU2LFxuICAgICAgMTg2LFxuICAgICAgMTcyLFxuICAgICAgMTQ1LFxuICAgICAgMTQ1LFxuICAgICAgMjcsXG4gICAgICA3MixcbiAgICAgIDIzMSxcbiAgICAgIDIxOSxcbiAgICAgIDEzLFxuICAgICAgMTIsXG4gICAgICAyMjUsXG4gICAgICAyLFxuICAgICAgMjAwLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjdFUzgxOThcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNzcxMDo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTgxODM0ODkzMTA4MzY6NjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3lNeDljR0VLbkZ0cmNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUaXNObVJxNWZCaWIzQmRrYW42N3NsSG4rd201NldSYnVzUEJadG5WR2dBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJoZGY0b1RGbmZpTk1zd2piUHEzOTB4UjNaWCs2YldQeGtJYks4RVJ0OTlqbHQ3LzlEZnVJcitadit5T01ENlNHcThQWWEyMzBUTU1pM1pSQk9hS0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkYzSGxzNnI2VGZ4MStxNDVvajRCUkZBb1hYK2Rub3R1TFNYczk1VUhwYm50aDR6aTlEajNmRmhreHpwSHNtREZuTGtmWEhmak5DdWJldGxDcjhhRUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNzcxMDo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2ODQ5NzEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSzdvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLN28uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzdnFUQWpEVnhLS1BjL0k1OEp2aW5RUUJFR3R1SVdNL1NJR3pwV05rcFI4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3OTQyMjk4MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "Raju",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
