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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_27_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDU4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVVZIbWZlUVcvYTllL3NVQnZtTE1Ob1psS1JzTHk5dFQ2R1MrTWpjVkRxbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzMTQ5Mjc3MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZEMjZGQzQyM0E1ODBENzQ1RDJEQjFGQkY4MDdGN0YzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzM2MDg1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWczBRRi1hVFFycXBRdnZGYU1Xa2NBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1ZDY3ODRkLWEwZmQtNDJkNy04NzRlLTE0NGE0N2VkZGY5NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICA3NSxcbiAgICAgIDcsXG4gICAgICA2NyxcbiAgICAgIDE1LFxuICAgICAgMTgyLFxuICAgICAgNTksXG4gICAgICA1OSxcbiAgICAgIDE5NSxcbiAgICAgIDU4LFxuICAgICAgNTIsXG4gICAgICAyMDcsXG4gICAgICAxNTEsXG4gICAgICAzMixcbiAgICAgIDE1MixcbiAgICAgIDIxNCxcbiAgICAgIDExMCxcbiAgICAgIDE2LFxuICAgICAgMjEsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDczLFxuICAgICAgMjQ1LFxuICAgICAgNCxcbiAgICAgIDg5LFxuICAgICAgNzMsXG4gICAgICA4MSxcbiAgICAgIDIxMixcbiAgICAgIDI0MCxcbiAgICAgIDExMSxcbiAgICAgIDIzMSxcbiAgICAgIDEwMSxcbiAgICAgIDEzNCxcbiAgICAgIDIyLFxuICAgICAgMjA4LFxuICAgICAgMTU1LFxuICAgICAgOCxcbiAgICAgIDc4LFxuICAgICAgMTYxLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0tDNVhSWFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNzcxMDo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTgxODM0ODkzMTA4MzY6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3lNeDljR0VNZmUxYmNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUaXNObVJxNWZCaWIzQmRrYW42N3NsSG4rd201NldSYnVzUEJadG5WR2dBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVmeHBEM3ZOM0ViZ2ZWeFIwRjFxUWMrdmlTMHFmRHhseVRQOEI5VW82cHJVRXdMTVVZWDlObDNOa2x5Q2l3YjhmQzFmS1h3TGpNNUVNTTk5bUFGM0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJjOC81aVorUUFoRkRmcnNSY2tuZURnZkxrWEFSYmFuRDBnbEkvUHZrTnRPcjAyZDdDb0VRY2JuOG8zb2ErRE53bXp5UGh1aktodW1MeDZ5UHRkNUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNzcxMDo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MzYwODQzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
