const fs = require("fs");
const chalk = require("chalk");

/*
 * Create By Naze
 * Follow https://github.com/nazedev
 * Whatsapp : wa.me/6282113821188
 */

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ["6285728153452"];
global.packname = "Bot Whatsapp";
global.author = "Kazuya";
global.botname = "Xzuya-Botz";
global.listv = [
	"•",
	"●",
	"■",
	"✿",
	"▲",
	"➩",
	"➢",
	"➣",
	"➤",
	"✦",
	"✧",
	"△",
	"❀",
	"○",
	"□",
	"♤",
	"♡",
	"◇",
	"♧",
	"々",
	"〆"
];
global.tempatDB = "database.json";
global.pairing_code = true;

global.fake = {
	anonim: "https://www.imghost.net/ib/eFTbJiT9WNqUJVx_1730365750.jpg",
	thumbnailUrl: "https://www.imghost.net/ib/eFTbJiT9WNqUJVx_1730365750.jpg",
	docs: fs.readFileSync("./src/media/fake.pdf"),
	listfakedocs: [
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		"application/vnd.openxmlformats-officedocument.presentationml.presentation",
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		"application/pdf"
	]
};

global.my = {
	gh: "https://github.com/Kazuya-X",
	gc: "https://chat.whatsapp.com/JvL2aKXY39kJFSfeEy2d8",
	ch: "120363300164759454@newsletter"
};

global.limit = {
	free: 10,
	premium: 999,
	vip: "VIP"
};

global.uang = {
	free: 2000,
	premium: 1000000,
	vip: 10000000
};

global.mess = {
	owner: "this command can only be used by Owner!",
	admin: "this command can only be used by Admin!",
	botAdmin: "this command can only be used if the bot becomes Admin!",
	group: "this command can only be used In Group!",
	private: "Specifically In Private Chat!",
	prem: "Specifically for Premium Users!\n> Type .buyprem to switch to premium user",
	wait: "Please wait a moment!",
	error: "there is an error!",
	done: "by © Xzuya ",
	limit: "Maaf Limit Anda Sudah Habis ",
	wm: "> ©xzuya "
};

global.egg = "15";
global.loc = "1";
global.domain = "https://lexxy2nd-devv.serverindo.me";
global.apikey = "ptla_jrn2OdZ5Gey1WnPxaw5FZZGQFHDuYRSxAUjTYuhgkcf";
global.capikey = "ptlc_fonvwO5UTAIPEBeQFr1jKLDBJ8BlQnUFu6Eopd6Arfu";
// global.APIs = {
// 	zaynn: 'https://api.zaynn.my.id/api',
// }
// global.APIKeys = {
// 	'https://api.zaynn.my.id/api': 'Najedev',
// }
//
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});
