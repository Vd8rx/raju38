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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_16_08_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICA4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxLFxuICAgICAgICA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ2d6dUV3clNRamdrNndnWUpmL3hUdUxqRFJyOENzelMyOEpLOXoxMnhMOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYmZGY203dDdTOEtOdXFjQWRXTV8tUVwiLFxuICBcInBob25lSWRcIjogXCJjNDljNTliMi0xMTJiLTRlOGQtYWRiOC0zZTYzOGIyZmIwZDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTc2LFxuICAgICAgMTg3LFxuICAgICAgMTQyLFxuICAgICAgNzQsXG4gICAgICAyMDAsXG4gICAgICAxMjMsXG4gICAgICA1OCxcbiAgICAgIDE0MixcbiAgICAgIDIyMCxcbiAgICAgIDIxMyxcbiAgICAgIDIzMixcbiAgICAgIDIyLFxuICAgICAgMjMyLFxuICAgICAgMTczLFxuICAgICAgMjIyLFxuICAgICAgMjE5LFxuICAgICAgMTM1LFxuICAgICAgMjMzLFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgMjQ2LFxuICAgICAgMjEyLFxuICAgICAgMjA4LFxuICAgICAgMTUyLFxuICAgICAgMTI5LFxuICAgICAgMTcyLFxuICAgICAgNTEsXG4gICAgICAyNixcbiAgICAgIDEzNyxcbiAgICAgIDIwNSxcbiAgICAgIDY5LFxuICAgICAgMTczLFxuICAgICAgMzUsXG4gICAgICAxOTMsXG4gICAgICAyMSxcbiAgICAgIDYxLFxuICAgICAgMjAyLFxuICAgICAgMjU0LFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkw5TlJKR0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNzcxMDo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTgxODM0ODkzMTA4MzY6NjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2lNeDljR0VNaWt3TFlHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUaXNObVJxNWZCaWIzQmRrYW42N3NsSG4rd201NldSYnVzUEJadG5WR2dBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5pTVVzdlRMWk94bUx6bDJDenVxb0xFZHR2OFRXVzYxQ2pmb3VGeGtWSjQzd3ZGNE1kVUc0cFVqbGZnMnovTGNJamxVZ1hPSkJpSE9oWGpkQUVBVUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxFLzRrRTY4RzhZNWRtTjdlMFhpcityS25iWkQ4Z0gweXkrZUM3aHBQc1E2SEd1eHJnV1IvRURYTVZnODVVNmM1Qk1taVVzRGR1OHB6VGxlZHJYbkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNzcxMDo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0OTEyMjA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRStKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFK0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUM3JFVVRWQXFiUmdqMUVXWkhrcGloVVdGb3JUL1hKQzZCTWdBeWNiSlkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3OTQyMjk3OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjQ3NzA3OTgzNjdcIn0iCn0="  // PUT your SESSION_ID 


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
