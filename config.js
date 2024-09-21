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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_31_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDMxLFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicVExMDdLOTdmSWwvZGVBUVNBUWpCNFd5MWg4bWM0dk9lOFBFM2xKVkQwMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzE3ODI2MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA1NjRBMDc5RTdDQjhFREI3MTc3QkM1NjZDMTc2MzFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjkyOTA4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTc4MjYyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODE1OTJCMkUwMkVEOTk2Q0Y1RUM4M0Q2RDYyMzA5QzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2OTI5MDgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVrWkUwRG1rUWNhUmw3M25wbEhSVEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGQ2ZTQ0Y2UtODIzYS00MGRiLWJjYWUtNGQ1NjA0OGZlNDUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDEwOCxcbiAgICAgIDE1NCxcbiAgICAgIDIyMixcbiAgICAgIDExNixcbiAgICAgIDgzLFxuICAgICAgOTEsXG4gICAgICAxMzcsXG4gICAgICAxOTEsXG4gICAgICA2OCxcbiAgICAgIDMxLFxuICAgICAgMTksXG4gICAgICAyMzEsXG4gICAgICAxNTAsXG4gICAgICAxNTgsXG4gICAgICAxOTYsXG4gICAgICAxNDUsXG4gICAgICAxMzAsXG4gICAgICAyMTYsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICA1NSxcbiAgICAgIDE2OCxcbiAgICAgIDI3LFxuICAgICAgMjA2LFxuICAgICAgODMsXG4gICAgICA0MyxcbiAgICAgIDIzOCxcbiAgICAgIDIwNCxcbiAgICAgIDE3NixcbiAgICAgIDI1NCxcbiAgICAgIDIxNCxcbiAgICAgIDE2NSxcbiAgICAgIDE0NCxcbiAgICAgIDE4NyxcbiAgICAgIDI2LFxuICAgICAgMTYwLFxuICAgICAgMTAsXG4gICAgICAyMzQsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNUg2OThSUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Vu/CdlpfwnZaU8J2Wi/CdlorwnZaY8J2WmPCdlpTwnZaXXCIsXG4gICAgXCJsaWRcIjogXCIyNTk0ODk1NzYwMDU4Nzc6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9nNWFNSEVMS3h1N2NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYVHR0K0ZmcloxZ1FNcVZETGtPeHdJcUZpSXY3eXd2aE04T1RYeitnZDE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtudVJRcGxwOXFsa0xKRi92TzFoNTRQUGxsanQyaEUyaHJQWUovWlFqUjZrT2V5dmF3YW5FZ2ZZTzlUcWFEOUJIRFprNnIrSmpGMlllTmRTcnkzUUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1zVGt5UGZlN2U0MlBqaVdCN2NROHAySVpZZXlVa3RQT3Zxdmovb200NStVL2x1c2dKVlZYU1E2SW9iSEs2eE5ldm5uKzR1aVN6T0NxK3Qza3IxdEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTc4MjYyNjo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY5MjkwNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCUVNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJRUy5qc29uIjogIntcImtleURhdGFcIjpcIi9YUmxFM0R6QUF2LzFhQUExZ2ZPL1BjdWVnSG1kaUYxblNuVzM2a0N1aEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1NDEwNzM5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2OTI5MDgxOTY1XCJ9Igp9"  // PUT your SESSION_ID 


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
