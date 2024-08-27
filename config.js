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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_18_08_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyOSxcbiAgICAgICAgNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDc3LFxuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllSeFRJMDJYZFZKSlRzUkxHMzF1TmFQcGErTHF5SUlKRjEvUHMrNVllR289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MEJCMTM4QTI1OUY3QkVBQjk5OUJEN0E0OENDNENDRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjQ1NzM4NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzE3ODI2MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRCQUU5OTYwNDhENDcwM0NDODc2NDBGOURCQTMxM0YwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNDU3Mzg3OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTc4MjYyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzU4QzMxODJBMzE1MURERTI3RjJCOTRGNUIwMzBBRkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI0NTczODgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxNzgyNjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNkFDNUU4OEM4QzVBQ0JCMEEyQTI1MDA3N0M3RUQyMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjQ1NzM4ODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNTZZMzZIOU5RNmlhU05FMXlTa1VpQVwiLFxuICBcInBob25lSWRcIjogXCI3ZmM1MTNiNy1mZWVkLTQ4OGMtOGE2Ni04YTMxZWNjNWM4N2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMTIxLFxuICAgICAgMjMsXG4gICAgICAxNzQsXG4gICAgICAxOTAsXG4gICAgICAxMTQsXG4gICAgICAxMzksXG4gICAgICA5NixcbiAgICAgIDM1LFxuICAgICAgMzEsXG4gICAgICAxMjAsXG4gICAgICAxNjMsXG4gICAgICAxMzYsXG4gICAgICAxODYsXG4gICAgICAyNyxcbiAgICAgIDE3NyxcbiAgICAgIDE4NCxcbiAgICAgIDIzMCxcbiAgICAgIDEwNSxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDI0MSxcbiAgICAgIDUwLFxuICAgICAgMTQwLFxuICAgICAgMTY0LFxuICAgICAgMTc5LFxuICAgICAgMTcyLFxuICAgICAgOTUsXG4gICAgICAyMjQsXG4gICAgICAyMTksXG4gICAgICA1NSxcbiAgICAgIDk0LFxuICAgICAgNixcbiAgICAgIDI0NyxcbiAgICAgIDExOCxcbiAgICAgIDg5LFxuICAgICAgOTUsXG4gICAgICAxNTMsXG4gICAgICAxOTgsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUU1RQN0ZMRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZW78J2Wl/CdlpTwnZaL8J2WivCdlpjwnZaY8J2WlPCdlpdcIixcbiAgICBcImxpZFwiOiBcIjI1OTQ4OTU3NjAwNTg3NzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtZjVhTUhFTEhScTdZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFR0dCtGZnJaMWdRTXFWRExrT3h3SXFGaUl2N3l3dmhNOE9UWHorZ2QxOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvSk13ZGkrNDJkVE1zRVJacXJwSFo5VWkzVjJhbmF4VSthb0didi8vcnhLa0JzeklVWnEvYUVkWXlFdDJ5dTdDbFAvZmNQdVJ0Z29kOEZUZi83UkVDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwdVBZSmdheEZCRmFjdkY5MGlqdEN3TEpQTFZiRFRpYUhSTm9iY3dJNUJYM1BhQWRMZ2xWelFNYUZPTWRObmFDaWxDT1NESEpwNkQxc2N1cnFJdmhqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ1NzM4NzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDK0hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMrSC5qc29uIjogIntcImtleURhdGFcIjpcInMwQkFxTGVlRmwrR1RtazhTVzZiVHdBbGkzclk3ODE2b0R6UTMxUXFlTFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1NDEwNzM4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI0NTczODc4Njk5XCJ9Igp9"  // PUT your SESSION_ID 


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
