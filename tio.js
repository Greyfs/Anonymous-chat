require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const { ytMp4, ytMp3, ytPlay } = require('./lib/ytdl')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const xfar = require('xfarr-api')
const google = require('google-it')
const maker = require('mumaker')
const naztod = require("tod-api")
const request = require('request');
const textpro = require('./lib/textpro')
const bochil = require('@bochilteam/scraper')
const { mediafireDl } = require('./lib/mediafire.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const esce = omlen
const ini_kangbaned = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
global.prem = require("./lib/premium")
gambar = fs.readFileSync('./media/image/tio.jpg')
//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'OHAYOU🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi lord🌉'
 } 
 
// read database
let game = db.data.game
let tebaklagu = game.tebaklagu = []
let _family100 = game.family100 = []
let kuismath = game.math = []
let tebakgambar = game.tebakgambar = []
let tebakkata = game.tebakkata = []
let caklontong = game.lontong = []
let caklontong_desk = game.lontong_desk = []
let tebakkalimat = game.kalimat = []
let tebaklirik = game.lirik = []
let tebaktebakan = game.tebakan = []
let vote = db.data.others.vote = []

module.exports = tio = async (tio, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const arg = body.substring(body.indexOf(" ") + 1);
        const pushname = m.pushName || "No Name"
        const botNumber = await tio.decodeJid(tio.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
	    
        // Group
        const groupMetadata = m.isGroup ? await tio.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || isCreator || prem.checkPremiumUser(m.sender, premium);
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
                '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
		
	function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
	const klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
	const kloadq = klqor[Math.floor(Math.random() * klqor.length)]
	const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
	const filsk = filsj[Math.floor(Math.random() * filsj.length)]
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!tio.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            tio.readMessages([m.key])
        }
        //  Di sini editing autovn dan auto ketik
        // selebihnya jangan di edit nanti error
       /**if (m.message) {
tio.sendPresenceUpdate('composing', m.chat)
tio.readMessages([m.key])
}
 if (m.message) {
tio.sendPresenceUpdate('recording', m.chat)
tio.readMessages([m.key])
}**/


        if (m.text.includes('🗿')) {
    tio.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
        //Console logs by Tio
   if (m.message) {
      	await console.log(chalk.black(chalk.bgRed('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.white(chalk.bgBlue(isCmd ? body : m.mtype || body.slice(0, 20))) + '\n' + chalk.black(chalk.bgCyan('[ ~> from ]')), chalk.black(chalk.bgWhite(pushname)), chalk.black(chalk.bgYellow(m.sender)) + '\n' + chalk.black(chalk.bgMagentaBright('[ ~> in ]')), chalk.black(chalk.bgYellow(m.isGroup ? pushname : 'Private Chat')), chalk.black(chalk.bgCyan(m.chat)))
		  console.log('\n')      
            }               
//Premium Exp
prem.expiredCheck(tio, m, premium);
                
//sticker url
const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './database/stick' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './database/stick' + names + '.png'
                    let asw = './database/stick' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        tio.sendMessage(to, { sticker: media}, {quoted: m})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            
      //Resize
         const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
             
      //warna
      var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffa500'];
			const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
     //fyt 
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log('Download Video With ytdl-core')
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await tio.sendMessage(m.chat, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log('Download Audio With ytdl-core')
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await tio.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
             //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${weem}`, orderTitle: 'Tio', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${weem}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`${weem}`, "title": `${botname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
        const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${weem}`, "description": `${botname}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `${weem}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${weem}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${weem}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${weem}`, "caption": `${weem}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${weem}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${weem}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${weem}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
		const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `${weem}`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${weem}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;weem,;;;\nFN:weem\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${weem}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
        // total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/tio.com/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/tio.com${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await tio.setStatus(`${tio.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
			
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 WARNING  」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick yahaha ga ada promosi disini ‼️,yang mau juga silahkan kirim link‼️*`)
        if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
        let gclink = (`https://chat.whatsapp.com/`+await tio.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
        if (isAdmins) return m.reply(`*maaf kamu admin*`)
        if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
        tio.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      
      const deploy = (teks) => { tio.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: tio.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, tio.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        tio.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            tio.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await tio.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, tio.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await tio.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, tio.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await tio.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, tio.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await tio.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, tio.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await tio.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, tio.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await tio.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, tio.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await tio.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, tio.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await tio.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await tio.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    tio.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    tio.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) tio.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) tio.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) tio.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    tio.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) tio.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) tio.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    tio.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await tio.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await tio.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            tio.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
            this.suit[id] = {
            chat: await tio.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) tio.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    tio.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    tio.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    tio.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    tio.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    tio.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    tio.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    tio.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await tio.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await tio.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    tio.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    tio.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, tio.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    tio.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    tio.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, tio.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    tio.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    tio.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, tio.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    tio.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    tio.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, tio.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    tio.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    tio.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, tio.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    tio.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    tio.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, tio.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                tio.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'vrtx': {
            	deploy('hehe')
            	}
            break
            case 'poll': {
if (!isCreator) return mess.owner
if (!text) throw `Example : ${prefix + command} Owner Ganteng|Iya|Tidak`
let poll1 = `${text.split("|")[1]}`
let poll2 = `${text.split("|")[2]}`
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `${text.split("|")[0]}`,
"options": [
	{
"optionName": poll1
	},
	{
"optionName": poll2
	}
],
"selectableOptionsCount": 2
	}
}), { userJid: m.chat})
tio.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id})
}
break
            
//Pembatas FUN===============================================
            case 'slot': {
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
            tio.sendMessage(m.chat, { text: sloth }, {quoted: m})
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, jawab, tio.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, jawab, esce, m, {mentions: menst})
            }
            break
            case 'gbtku': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m, {quoted: ftoko})
            }
            break
            case 'bisakah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
                tio.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'apakah': {
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Apakah ${text}*\nJawab : ${kah}`
                tio.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'kapan': case 'kapankah': {
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nJawab : ${koh}`
                tio.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'cekmati': {
            	if (m.text.includes('@')) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
                //if (m.text.includes(/^1|2|3|4|5|6|7|8|9|0/)) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
                if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa anjir?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                let jawab = (`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
                tio.sendMessage(m.chat, { text: jawab }, {quoted: m})
            }
            break
            case 'mylove': case 'love': case 'cintaku': case 'cinta': {
            	let mlove = ['⟪1%⟫','⟪2%⟫','⟪3%⟫','⟪4%⟫','⟪5%⟫','⟪6%⟫','⟪7%⟫','⟪8%⟫','⟪9%⟫','⟪10%⟫','⟪11%⟫','⟪12%⟫','⟪13%⟫','⟪14%⟫','⟪15%⟫','⟪16%⟫','⟪17%⟫','⟪18%⟫','⟪19%⟫','⟪20%⟫','⟪21%⟫','⟪22%⟫','⟪23%⟫','⟪24%⟫','⟪25%⟫','⟪26%⟫','⟪27%⟫','⟪28%⟫','⟪29%⟫','⟪30%⟫','⟪31%⟫','⟪32%⟫','⟪33%⟫','⟪34%⟫','⟪35%⟫','⟪36%⟫','⟪37%⟫','⟪38%⟫','⟪39%⟫','⟪40%⟫','⟪41%⟫','⟪42%⟫','⟪43%⟫','⟪44%⟫','⟪45%⟫','⟪46%⟫','⟪47%⟫','⟪48%⟫','⟪49%⟫','⟪50%⟫','⟪51%⟫','⟪52%⟫','⟪53%⟫','⟪54%⟫','⟪55%⟫','⟪56%⟫','⟪57%⟫','⟪58%⟫','⟪59%⟫','⟪60%⟫','⟪61%⟫','⟪62%⟫','⟪63%⟫','⟪64%⟫','⟪65%⟫','⟪66%⟫','⟪67%⟫','⟪68%⟫','⟪69%⟫','⟪70%⟫','⟪71%⟫','⟪72%⟫','⟪73%⟫','⟪74%⟫','⟪75%⟫','⟪76%⟫','⟪77%⟫','⟪78%⟫','⟪79%⟫','⟪80%⟫','⟪81%⟫','⟪82%⟫','⟪83%⟫','⟪84%⟫','⟪85%⟫','⟪86%⟫','⟪87%⟫','⟪88%⟫','⟪89%⟫','⟪90%⟫','⟪91%⟫','⟪92%⟫','⟪93%⟫','⟪94%⟫','⟪95%⟫','⟪96%⟫','⟪97%⟫','⟪98%⟫','⟪99%⟫','⟪100%⟫']
                let mcinta = mlove[Math.floor(Math.random() * mlove.length)]
                let jawab = (`*Sebesar : ${mcinta} Padanya*`)
                tio.sendMessage(m.chat, { text: jawab }, {quoted: m})
            	}
            break
            case 'daurulang': {
            	let mdaur = ['♳','♴','♵','♶','♷','♸','♹','♺']
                let mulng = mdaur[Math.floor(Math.random() * mdaur.length)]
                let jawab = (`*Telah Di Daur Ulang Sebanyak : ${mulng}*`)
               tio.sendMessage(m.chat, { text: jawab }, {quoted: m})
            	}
            break
            case 'dadu': {
            	let ddsa = ['⚀','⚁','⚂','⚃','⚄','⚅']
                let klow = ddsa[Math.floor(Math.random() * ddsa.length)]
            	m.reply(klow)
            	}
            break
            case 'rate': case 'nilai': {
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    tio.sendMessage(m.chat, { text: `Rate Bot : *${te}%*` }, { quoted: m })
                    }
					break
			case 'ganteng': case 'gantengcek': case 'handsome': case 'handsomecheck': {
				    if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} Tio`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    tio.sendMessage(m.chat, { text: `Cek Ganteng : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
                    }
					break
			case 'cantik': case 'cantikcek': case 'beautiful': case 'beautifulcheck': {
				    if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} Nopan`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    tio.sendMessage(m.chat, { text: `Cek Cantik : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
                    }
					break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) throw `Example : ${prefix + command} saya menang?`
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let koh = krng[Math.floor(Math.random() * krng.length)]
                let jawab = `*${command} ${text}*\n*Jawab : ${koh}*`
                tio.sendMessage(m.chat, { text: jawab }, {quoted: m})
				}
				break
				case 'fitnah': {
if (args.length < 1) throw `Usage :\n${prefix}fake [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fake 0|hai|hai juga markenlin`
var gh = body.slice(10)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
var ftelo = {key: {fromMe: false, participant: `${mentioned}`, ...(m.chat ? { remoteJid: m.chat } : {})}, message: { conversation: `${targetq}` }}
tio.sendMessage(m.chat, {text: bot}, {quoted: ftelo})
}
break
           
            case 'totalfitur': case 'totalfiture': case 'fiture': case 'fitur': {
            	m.reply('*Total Ada 300 Fitur*\n_Ketik Req Untuk Request Fitur_')
            }
            break
            case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                tio.sendMessage(m.chat, { image: fs.readFileSync('./media/image/tio.jpg'), caption: `*${ucapanWaktu} ${m.pushName}*\n\nBot ini di jalankan dengan perangkat terbatas, dan server yang tidak begitu kuat, jika kamu merasa senang dan terbantu dengan bot ini kamu bisa berdonasi atau menyewa bot.

*Donate*
 Gopay: 089637196946             
 Dana: 089637196946
 Paypal: Not yet available
 Saweira: https://saweria.co/Greyx
 
 *Sewa Bot*
 10k Seminggu
 30k Sebulan
 65k permanen

*Premium*
Sebulan 5k
                
                Terima kasih🥰
                
                ` }, { quoted: m })
            }
            break
            case 'sc': {
                m.reply('https://youtube.com/@novxler9753/')
            }
            break		 
            case 'ceklimit': case 'checklimit': case 'limit':{
					m.reply('*Limit Lu :* ' + (db.data.users[m.sender].limit))
					}
					break 
		    case 'totalhit': case 'hit': {
			m.reply(`*Total Hit : ${jumlahcmd}*\n*Total Hit Harian : ${jumlahharian}*`)
			}
			break
            case 'runtime': case 'tes': {
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                tio.sendMessage(m.chat, { text: lowq }, {quoted: fkontak})
                tio.setStatus(`${tio.user.name} | Runtime : ${runtime(process.uptime())}`)
            	}
            break
            case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'THANKS' }, type: 1 }]
            await tio.sendButtonText(ownernya, buttons, pjtxt, esce, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request Telah Terkirim*\n*Ke Owner @${ownernya.split('@')[0]}*\n_Terima Kasih🙏_`
            await tio.sendButtonText(m.chat, buttons, akhji, esce, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'myip': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 My public IP address is: " + ip);
                    })
                })
            }
            break
            case 'tagme': {
            if (!m.isGroup) throw mess.group
            let me = m.sender
            let jawab = `*@${me.split('@')[0]}*`
            let ments = [me]
            let buttons = [{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
            tio.sendMessage(m.chat, {react: {text: kloadq,key: m.key}})
            await tio.sendButtonText(m.chat, buttons, jawab, esce, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: m.key
                    }
                }
                tio.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isPremium) throw mess.premime
                if (!text) throw 'Masukkan Link Group, dan jangan lupa sewa agar di konfirmasi'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await tio.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await tio.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setowner': {
               if (!isCreator) throw mess.owner
               if (m.text.includes('@')) return m.reply(`*Invalid!*\n\n*Pake Nomer Woy*\n*Jangan Pakai Tag!*`)
               if (!text) throw `Example : ${prefix + command} 6289637196946`
              global.owner = text
              global.ownernomer = text
              m.reply(`Owner berhasil diubah menjadi\n\n *»* Owner : ${global.owner}\n *»* OwnerNumber : ${global.ownernomer}`)
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n *»* Packname : ${global.packname}\n *»* Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await tio.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await tio.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await tio.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await tio.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await tio.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await tio.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'addprem':
				if (!isCreator) return m.reply(mess.owner)
				{ q, args } {
				if (args.length < 2)
				return m.reply(
				`Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`
				);
				if (m.mentionedJid.length !== 0) {
				for (let i = 0; i < m.mentionedJid.length; i++) {
				prem.addPremiumUser(m.mentionedJid[0], args[1], premium);
						}
				tio.sendMessage(m.chat, { text: "Sukses Premium" }, { quoted: fkontak });
					} else {
				prem.addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
				tio.sendMessage(m.chat, { text: "Sukses Via Nomor" }, { quoted: fkontak });
						}
					}
				break
			case 'delprem':
				if (!isCreator) return m.reply(mess.owner)
				{ q, args, arg } {
				if (args.length < 1) throw `Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						premium.splice(prem.getPremiumPosition(m.mentionedJid[i], premium), 1);
						fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
					}
					tio.sendMessage(m.chat, { text: "Sukses Delete" }, { quoted: fkontak });
				} else {
				premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
				fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
				tio.sendMessage(m.chat, { text: "Sukses Via Nomer" }, { quoted: fkontak });
				}
				}
				break
		case 'listprem': {
			if (!isCreator) return m.reply(mess.owner)
			let data = require("./database/premium.json")
			let txt = `*------「 LIST PREMIUM 」------*\n\n`
                    for (let i of data) {
                txt += `*Nomer : ${i.id}*\n*Expired : ${i.expired} Second*\n\n`
                }
            m.reply(txt)
			}
			break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await tio.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await tio.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await tio.downloadAndSaveMediaMessage(quoted)
                await tio.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await tio.downloadAndSaveMediaMessage(quoted)
                await tio.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               tio.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let teks = `══• *Tag All* •══
 
                ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += ` *»* @${mem.id.split('@')[0]}\n`
                }
                tio.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            tio.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += ` *»* *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: tio.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            tio.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: tio.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            tio.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: tio.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            tio.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${tio.user.id}
`
tio.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await tio.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Sukses Menutup Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await tio.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Sukses Membuka Group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, `Mode Group`, tio.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await tio.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Sukses Membuka Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await tio.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Sukses Menutup Edit Info Group*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open kh?' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close kh?' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, `Mode Edit Info`, tio.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Sudah Aktif kak Sebelumnya*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink Sekarang Aktif !*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Sudah Tidak Aktif Sebelumnya*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink Sekarang Tidak Aktif !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, `Mode Antilink`, tio.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya gan`)
                db.data.chats[m.chat].mute = true
                m.reply(`${tio.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya gan`)
                db.data.chats[m.chat].mute = false
                m.reply(`${tio.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, `Mute Bot`, tio.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await tio.groupInviteCode(m.chat)
                tio.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n👾Link Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'revoke':
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                await tio.groupRevokeInvite(m.chat)
                    .then(res => {
                        m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => m.reply(jsonformat(err)))
                break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await tio.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await tio.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                tio.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'lapor': {
            	if (!text) throw `Example : ${prefix + command} Lapor Ada Fitur Yang error`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Pesan Dari : @${me.split('@')[0]} \nUntuk : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'THANKS LAPORANNYA😁😚' }, type: 1 }]
            await tio.sendButtonText(ownernya, buttons, pjtxt, esce, m, {mentions: ments})
            let akhji = `Laporan Telah Terkirim\nKe Owner @${ownernya.split('@')[0]}\n*Terima Kasih Laporannya🙏*\n_Nomermu Akan Terblokir_\n_Jika Laporan Hanya Di Buat Buat dan main main😠🔥_`
            await tio.sendButtonText(m.chat, buttons, akhji, esce, m, {mentions: ments})
            }
            break
            case 'hehehe': {
                reactionMessage = {
                    react: {
                        text: '❤',
                        key: m.key
                    }
                }
                tio.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
            case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await tio.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'SEWA📌' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
await tio.sendButtonText(i, buttons, txt, esce, m, {quoted: fkontak})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		await sleep(1500)
		let txt = `「 Broadcast Bot 」\n\n${text}`
		let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'SEWA📌' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
            await tio.sendButtonText(yoi, buttons, txt, esce, m, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
}
break
case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⌕ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⌕ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⌕ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
await tio.sendButtonText(m.chat, buttons, teks, esce, m, {mentions: [i.userJid], quoted: fkontak})
}}
break
            case 'q': case 'quoted': {
        try {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await tio.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
		} catch (e) {
		    m.reply(mess.errmor)}
            }
	    break
            case 'listpc': {
            	if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n\n───────────────\n\n`
                 let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'SEWA📌' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
await tio.sendButtonText(m.chat, buttons, teks, esce, m, {mentions: [i], quoted: fkontak})
}}
             break
                case 'listgc': {
                	if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await tio.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n─────────────────\n\n`
                 let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'Rules' }, type: 1 }]
await tio.sendButtonText(m.chat, buttons, teks, esce, m, {mentions: [metadata.owner], quoted: fkontak})
}}
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    tio.sendText(m.chat, 'List Online:\n\n' + online.map(v => ' *»* @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await tio.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                tio.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                tio.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan🤔`
                tio.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE🗄️ 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan📖`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group, chat gue!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                tio.sendButtonText(m.chat, buttons, `*Hi ${await tio.getName(m.sender)} Welcome To Anonymous Chat*\n\n*Klik Button Dibawah Ini Untuk Mencari Partner*`, tio.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, `*Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner*`)
                    throw false
                }
                m.reply('Kamu telah keluar dari percakapan, ketik .start jika mau mencari lagi')
                let other = room.other(m.sender)
                if (other) await tio.sendText(other, `*Your partner has stopped the dialog 😞
                Type /search to find a new partner*`, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop⛔' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, `*Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda🤔*`, tio.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip🔙' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop⛔' }, type: 1 }
                    ]
                    await tio.sendButtonText(room.a, buttons, `Partner found 🤗

.next — find a new partner
.stop — stop this dialog`, tio.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await tio.sendButtonText(room.b, buttons, `Partner found 🤗

.next — find a new partner
.keluar — stop this dialog`, tio.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop⛔' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, `*Looking for a partner...*`, tio.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!🛂')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start🚀' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, `*Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner😃*`)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await tio.sendText(other, `Your partner has stopped the dialog 😞
Type .next to find a new partner`, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip🔙' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop⛔' }, type: 1 }
                    ]
                    await tio.sendButtonText(room.a, buttons, `Partner found ✅

/next — find a new partner
/stop — stop this dialog`, tio.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await tio.sendButtonText(room.b, buttons, `Partner found ✅

/next — find a new partner
/stop — stop this dialog`, tio.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop⛔' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, `*Looking for a partner...🚀*`, tio.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                tio.public = true
                m.reply('*Sukse Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                tio.public = false
                m.reply('*Sukses Change To Self Usage🐕*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 INFO SERVER
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage🗄️_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python3 speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                tio.sendContact(m.chat, global.owner, m)
            }
            break
  case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT🔃",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                tio.sendListMsg(m.chat, `pilih aja *${pushname}* Setmenu nya!`, esce, `*Hello Kak* !`, `Pilih Set Menu`, sections, m)
                }
            }
            break

            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await tio.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
                let media = await quoted.download()
                let encmedia = await tio.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
            break
            case 'stikerwm': case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'take': case 'wm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await tio.downloadMediaMessage(qmsg)
                    let encmedia = await tio.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await tio.downloadMediaMessage(qmsg)
                    let encmedia = await tio.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'emoji': {
            	if (!text) throw 'Mana Emojinya?'
			if (!q) return m.reply('emojinya?')
			let kukiw = `*Kak ${pushname}*`
			let sections = [
                {
	           title: 'Pilih Jenis Emojinya',
	           rows: [
	            {title: "Iphone", rowId: `iphoneemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI IPHONE`},
                {title: "Google", rowId: `googleemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI GOOGLE`},
                {title: "Samsung", rowId: `samsungemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI SAMSUNG`},
                {title: "Microsoft", rowId: `microsoftemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI MICROSOFT`},
                {title: "Whatsapp", rowId: `whatsappemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI WHATSAPP`},
                {title: "Twitter", rowId: `twitteremoji ${text}`, description: `KLIK UNTUK PILIH EMOJI TWITTER`},
                {title: "Facebook", rowId: `facebookemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI FACEBOOK`},
                {title: "Skype", rowId: `skypeemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI SKYPE`},
                {title: "Joy", rowId: `joyemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI JOY`},
                {title: "Moji", rowId: `mojiemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI MOJI`},
                {title: "Pedia", rowId: `pediaemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI PEDIA`},
                {title: "Instagram", rowId: `instagramemoji ${text}`, description: `KLIK UNTUK PILIH EMOJI INSTAGRAM`}
	            ]
                }
                ]
                tio.sendListMsg(m.chat, kukiw, esce, `*${ucapanWaktu}*`, `Click Here`, sections, fkontak)
            }
            break
case 'iphoneemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[0].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'googleemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[1].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'samsungemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[2].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'microsoftemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[3].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'whatsappemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'twitteremoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[5].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'facebookemoji': 
case 'fbemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[6].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'skypeemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[7].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'joyemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[8].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'mojiemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[9].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'pediaemoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[10].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
case 'igemoji': 
case '=emoji': {
if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[11].url}`
    		sendStickerFromUrl(m.chat,`${teks}`)	
    		console.log(teks)
   			})
            }
break
         case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await tio.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await tio.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': {
           if (!text) throw `Example : ${prefix + command} text`
           await tio.sendMedia(m.chat, `https://api.botcahx.biz.id/api/maker/attp?text=${text}&apikey=Admin`, 'attp.webp', '', m, { asSticker: true })
         }
           break
               case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await tio.sendMedia(m.chat, `https://api.botcahx.biz.id/api/maker/ttp?text=${text}&apikey=Admin`, 'ttp.webp', '', m, { asSticker: true })
         }
         break
         case 'tts': {
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.botcahx.biz.id/api/soundoftext?text=${text}&lang=id-ID&apikey=Admin`)
             tio.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mpeg', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
		    try {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/uploader')
            let mee = await tio.downloadAndSaveMediaMessage(qmsg)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await tio.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(awikwok)
	        } catch (e) {
		    m.reply(`Error\nHarus Pakai Gambar!`)
		    }
            }
	       break     
            case 'geturl': {
         	if (!text) throw `Example : ${prefix + command} url/link`
             m.reply(mess.wait)
             let igmk = await getBuffer(`${text}`)
             tio.sendMessage(m.chat, { image: igmk}, { quoted: ftroli }).catch((err) => m.reply(mess.error))
         	}
         break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await tio.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    tio.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await tio.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await tio.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            tio.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            tio.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${tio.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            tio.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption gan*${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await tio.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await tio.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await tio.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'toqr': case 'qr': {
            	if (!text) throw 'No Query Text'
               m.reply(mess.wait)
               tio.sendMessage(m.chat, { image: { url: `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}` }, caption: `Nih Bro` }, { quoted: m })
            	}
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await tio.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    tio.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'menfes': case 'menfess': {
		        if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
            	if (!text) throw `Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Lokasimu', jpegThumbnail: thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('PESAN RAHASIA')
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\n${m3}`
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'LIKE' }, type: 1 }]
            await tio.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
            let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
            await tio.sendButtonText(m.chat, buttons, akhji, esce, m, {mentions: ments})
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += ` *»* No : ${no++}\n *»* Type : ${i.type}\n *»* Video ID : ${i.videoId}\n *»* Title : ${i.title}\n *»* Views : ${i.views}\n *»* Duration : ${i.timestamp}\n *»* Upload At : ${i.ago}\n *»* Author : ${i.author.name}\n *»* Url : ${i.url}\n\n─────────────────\n\n`
                }
                tio.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += ` *»* *Title* : ${g.title}\n`
                teks += ` *»* *Description* : ${g.snippet}\n`
                teks += ` *»* *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        	try {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(args.join(" "), async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images.url },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
 *Query* : ${text}
 *Media Url* : ${images.url}`,
                    footer: esce,
                    buttons: buttons,
                    headerType: 4
                }
                tio.sendMessage(m.chat, buttonMessage, { quoted: m })
                })
                } catch (e) {
		        m.reply(mess.errmor)}
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
 *»* Title : ${anu.title}
 *»* Ext : Search
 *»* ID : ${anu.videoId}
 *»* Duration : ${anu.timestamp}
 *»* Viewers : ${anu.views}
 *»* Upload At : ${anu.ago}
 *»* Author : ${anu.author.name}
 *»* Channel : ${anu.author.url}
 *»* Description : ${anu.description}
 *»* Url : ${anu.url}`,
                    footer: tio.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                tio.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
/**case 'ytmp3':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`Linknya Jelek`)
m.reply(mess.wait)
anu = await ytMp4(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
tio.sendMessage(m.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: ftoko })
tio.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: ftroli })
break
case 'ytmp4':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks= args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return m.reply(`Linknya Jelek`)
m.reply(mess.wait)
anu = await ytMp4(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
tio.sendMessage(m.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: ftoko })
tio.sendMessage(m.chat, { video: { url: anu.result }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: ftroli })
break**/

case 'ytmp3': case 'mp3':{
if (!text) return m.reply('Masukan Link!')
m.reply(mess.wait)
downloadMp3(text)
}
break
case'ytmp4': case 'mp4':{
if (!text) return m.reply('Masukan Link!')
m.reply(mess.wait)
downloadMp4(text)
}		
break
	 
	    case 'getmusic': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                tio.sendImage(m.chat, media.thumb, ` *»* Title : ${media.title}\n *»* File Size : ${media.filesizeF}\n *»* Url : ${urls[text - 1]}\n *»* Ext : MP3\n *»* Resolusi : ${args[1] || '128kbps'}`, m)
                tio.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                tio.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` *»* Title : ${media.title}\n *»* File Size : ${media.filesizeF}\n *»* Url : ${urls[text - 1]}\n *»* Ext : MP3\n *»* Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                tio.sendMessage(m.chat, { image: { url: result }, caption: ' *»* Media Url : '+result }, { quoted: m })
            }
            break
            case 'waifu': {
            	tesk = `*${ucapanWaktu} Kak ${pushname}*\n*Silahkan Pilih Dibawah Ini*\n\n_Dosa Tanggung Sendiri :v_`
            	let buttons = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `sfw`, buttonText: {displayText: 'SFW'}, type: 1}]
                await tio.sendButtonText(m.chat, buttons, tesk, esce, m, {quoted: fkontak})
            	}
            break
            case 'sfw': {
            	m.reply(mess.wait)
                anu = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer = await getBuffer(anu.url)
                tio.sendMessage(m.chat, { image: buffer, caption: `Random Waifu`, footer: esce}, { quoted: m })
            }
            break
	    case 'couple': case 'ppcp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                tio.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                tio.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.botcahx.biz.id/api/randomgambar/coffee?apikey=Admin' },
                    fileLength: jumlah,
                    caption: `Random Coffe`,
                    footer: esce,
                    buttons: buttons,
                    headerType: 4
                }
                tio.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'randomcolor': case 'color': case 'warnarandom': case 'warna': {
            	m.reply(mess.wait)
                anu = await fetchJson(`https://api.popcat.xyz/randomcolor`)
                buffer = await getBuffer(anu.image)
                tio.sendMessage(m.chat, { image: buffer, caption: `*Nama Warna : ${anu.name}*\n*Code : ${anu.hex}*`, footer: esce}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: ` *»* Title : ${result.title}\n *»* Category : ${result.type}\n *»* Detail : ${result.source}\n *»* Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: esce,
                    buttons: buttons,
                    headerType: 4
                }
                tio.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gcsearch': {
            	try {
            	if (!text) return m.reply(`Example :\n${prefix}searchgc Classy Editor`)
                nae = args.join(" ")
                hx.linkwa(nae).then(res => {
                teks = '```「 Search Group 」```'
                for (let i of res) {
                teks += `\n\n•> Group Whatsapp :\n`
                teks += `${i.link}\n`
                teks += `*${i.nama}`
                }
                tio.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6cbed9af4ca002de3a801.jpg' }, caption: teks, footer: esce}, { quoted: fkontak })
                })} catch (e) {
		        m.reply(mess.errmor)}
                }
                break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: ` *»* Title : ${result.title}\n *»* Source : ${result.source}\n *»* Media Url : ${result.image}`,
                    footer: esce,
                    buttons: buttons,
                    headerType: 4
                }
                tio.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tinyurl': case 'shortlink': {
            	if (!text) throw 'Masukkan Query Link!'
                let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`)
                tio.sendMessage(m.chat,{ text: anu.data + `\nNih Bro`}, { quoted: fdoc })
            }
            break
            case 'linkpoi': {
            	if (!text) throw 'Masukkan Query Link!'
                let poi = await fetchJson(`https://linkpoi.ga/api.php?url=${text}`)
                tio.sendMessage(m.chat, { text: poi.shorturl + `\nNih Bro`}, { quoted: fdoc })
            }
            break
case 'bitly': {
            	if (!text) throw 'Masukkan Query Link!'
                let bitly = await fetchJson(`https://api.botcahx.biz.id/api/linkshort/bitly?link=${text}&apikey=Admin`)
                tio.sendMessage(m.chat, { text: bitly.result + `\nNih Bro`}, { quoted: fdoc })
            }
            break
case 'cuttly': {
            	if (!text) throw 'Masukkan Query Link!'
                let cuttly = await fetchJson(`https://api.botcahx.biz.id/api/linkshort/cuttly?link=${text}&apikey=Admin`)
                tio.sendMessage(m.chat, { text: cuttly.result.shortLink + `\nNih Bro`}, { quoted: fdoc })
            }
            break
          
            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'holographic':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'neonlight2': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'greenneon': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': 
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             if (!q) return m.reply(`Example : ${prefix + command} ${global.ownername}`) 
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/neonlight2/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
             if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
             if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
             if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
             tio.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
             case 'glitch2': case 'harrypot': case 'graffiti': case 'pornhub': case 'glitch3': case '3dspace': case 'lion': case 'wolf': case 'retro': case '8bit': {
             if(!q) return m.reply(`Use ${prefix + command} text1|text2`)
             m.reply(mess.wait)
             teks1 = q.split("|")[0]
             teks2 = q.split("|")[1]
             let link
             if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
             if (/harrypot/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/graffiti/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
             if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
             if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
             if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
             if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/wolf/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
             if (/retro/.test(command)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'
             if (/8bit/.test(command)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
             let anu = await maker.textpro(link, [`${teks1}`,`${teks2}`])
             tio.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname},For my Darling ` }, { quoted: m })
             }
             break
            
case 'patrick': case 'patricksticker': case 'petrik': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tio.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'dogesticker': case 'dogestick': case 'doge': case 'domge': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tio.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker': case 'lovestick' : case 'slove': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tio.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura': case 'gurastick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tio.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'paimon': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tio.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'sanime': case 'animestick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tio.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'mukelu': case 'lu': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await tio.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}' \n\nAnime : ${result.anime}\n\n- ${result.up_at}`,
                    footer: esce,
                    buttons: buttons,
                    headerType: 2
                }
                tio.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288296785106`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nomor HP :* ${anu.message.nomer_hp}\n *»* *Angka Shuzi :* ${anu.message.angka_shuzi}\n *»* *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n *»* *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Mimpi :* ${anu.message.mimpi}\n *»* *Arti :* ${anu.message.arti}\n *»* *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama Anda :* ${anu.message.nama_anda.nama}\n *»* *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *»* *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *»* *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama Anda :* ${anu.message.nama_anda.nama}\n *»* *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *»* *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *»* *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama Suami :* ${anu.message.suami.nama}\n *»* *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n *»* *Nama Istri :* ${anu.message.istri.nama}\n *»* *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama Anda :* ${anu.message.nama_anda.nama}\n *»* *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *»* *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *»* *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *»* *Sisi Positif :* ${anu.message.sisi_positif}\n *»* *Sisi Negatif :* ${anu.message.sisi_negatif}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Tio Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Arti :* ${anu.message.arti}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Tio, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Life Path :* ${anu.message.life_path}\n *»* *Destiny :* ${anu.message.destiny}\n *»* *Destiny Desire :* ${anu.message.destiny_desire}\n *»* *Personality :* ${anu.message.personality}\n *»* *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Asep|Wiwin`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendImage(m.chat,  anu.message.gambar, ` *»* *Nama Anda :* ${anu.message.nama_anda}\n *»* *Nama Pasangan :* ${anu.message.nama_pasangan}\n *»* *Sisi Positif :* ${anu.message.sisi_positif}\n *»* *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Tanggal Pernikahan :* ${anu.message.tanggal}\n *»* *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Lahir :* ${anu.message.hari_lahir}\n *»* *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Lahir :* ${anu.message.hari_lahir}\n *»* *Rezeki :* ${anu.message.rejeki}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Lahir :* ${anu.message.hari_lahir}\n *»* *Pekerjaan :* ${anu.message.pekerjaan}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Analisa :* ${anu.message.analisa}\n *»* *Angka Akar :* ${anu.message.angka_akar}\n *»* *Sifat :* ${anu.message.sifat}\n *»* *Elemen :* ${anu.message.elemen}\n *»* *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Analisa :* ${anu.message.analisa}\n *»* *Sektor :* ${anu.message.sektor}\n *»* *Elemen :* ${anu.message.elemen}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendImage(m.chat, anu.message.image, ` *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Simbol Tarot :* ${anu.message.simbol_tarot}\n *»* *Arti :* ${anu.message.arti}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Tio,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tahun_lahir}\n *»* *Gender :* ${anu.message.jenis_kelamin}\n *»* *Angka Kua :* ${anu.message.angka_kua}\n *»* *Kelompok :* ${anu.message.kelompok}\n *»* *Karakter :* ${anu.message.karakter}\n *»* *Sektor Baik :* ${anu.message.sektor_baik}\n *»* *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Kala Tinantang :* ${anu.message.kala_tinantang}\n *»* *Info :* ${anu.message.info}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}\n *»* *Info :* ${anu.message.info}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Hari Lahir :* ${anu.message.hari_lahir}\n *»* *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *»* *Hari Naas :* ${anu.message.hari_naas}\n *»* *Info :* ${anu.message.catatan}\n *»* *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Hari Lahir :* ${anu.message.hari_lahir}\n *»* *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *»* *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Hari Lahir :* ${anu.message.hari_lahir}\n *»* *tanggal Lahir :* ${anu.message.tgl_lahir}\n *»* *Arah Rezeki :* ${anu.message.arah_rejeki}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} Tio,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Tanggal :* ${anu.message.tanggal}\n *»* *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n *»* *Watak Hari :* ${anu.message.watak_hari}\n *»* *Naga Hari :* ${anu.message.naga_hari}\n *»* *Jam Baik :* ${anu.message.jam_baik}\n *»* *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Tio, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Nopan, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Nama :* ${anu.message.nama}\n *»* *Lahir :* ${anu.message.tgl_lahir}\n *»* *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Hasil :* ${anu.message.result}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                tio.sendText(m.chat, ` *»* *Zodiak :* ${anu.message.zodiak}\n *»* *Nomor :* ${anu.message.nomor_keberuntungan}\n *»* *Aroma :* ${anu.message.aroma_keberuntungan}\n *»* *Planet :* ${anu.message.planet_yang_mengitari}\n *»* *Bunga :* ${anu.message.bunga_keberuntungan}\n *»* *Warna :* ${anu.message.warna_keberuntungan}\n *»* *Batu :* ${anu.message.batu_keberuntungan}\n *»* *Elemen :* ${anu.message.elemen_keberuntungan}\n *»* *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n *»* *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'mediafire': {
if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
tio.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply(mess.error))
}
break  
case 'tiktok': case 'tt': case 'tiktoknowm': 
 if (!text) throw 'Masukkan Query Link!'
 anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/tikok?url=${text}&apikey=Admin`)
 tio.sendMessage(m.chat, { video: { url: anu.result.video }, fileName: 'tiktok.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
 break
case 'facebook': case 'fb': case 'fbdl': 
 if (!text) throw 'Masukkan Query Link!'
 anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=Admin`)
 tio.sendMessage(m.chat, { video: { url: anu.result.Normal_video }, fileName: 'facebook.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
 break
case 'ig': 
case 'igdl': 
case 'instagramreel': 
case 'igreel': 
case 'instagramstory': 
case 'igstory': 
case 'igdlstroy':
 if (!text) throw 'Masukkan Query Link!'
anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/igdowloader?url=${text}&apikey=Admin`)
for (let i of anu.result.url){
tio.sendMessage(m.chat,{video:{url:i.url}, caption:`nih ${command}`}, {quoted:fkontak})
tio.sendMessage(m.chat,{image:{url:i.url}, caption:`nih ${command}`}, {quoted:fkontak})
tio.sendMessage(m.chat,{video:{url:i.url}, caption:`nih ${command}`}, {quoted:fkontak})
tio.sendMessage(m.chat,{image:{url:i.url}, caption:`nih ${command}`}, {quoted:fkontak})
}
break
 case 'twitter': case 'tw': case 'twitdl':     
 if (!text) throw 'Masukkan Query Link!'
 anu = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/twitter?url=${text}&apikey=Admin`)
 tio.sendMessage(m.chat, { video: { url: anu.result.HD }, fileName: 'twitter.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
 break  
 case 'ssweb': case 'ss': case 'sshp': {
 if (!text) throw 'Masukkan Query Link!'
let img = `https://api.botcahx.biz.id/api/tools/ssweb?link=${text}&apikey=Admin`
tio.sendMessage(m.chat,{ image :{ url : img } , caption : '*Nih..*' }, { quoted: fkontak })
}
break
case 'ai': case 'openai': {
if (!text) throw 'Masukkan text!'
var api = await fetchJson(`https://mfarels.my.id/api/openai?text=${text}`)
tio.sendMessage(m.chat, { text: api.result }, {quoted: ftoko })
}
break
case 'aiimg': case 'openaiimg': case 'aigambar': {
 if (!text) throw 'Masukan text!'
let img = await fetchJson(`https://mfarels.my.id/api/openai-image?text=${text}`)
tio.sendMessage(m.chat,{ image :{ url : img.result } , caption : '*Hasil penelusuran Ai*' }, { quoted: ftoko })
}
break
case 'stalkgithub': case 'githubstalk': case 'ghstalk': {
if (!q) throw `Contoh :\n${prefix+command} BOTCAHX`
m.reply(mess.wait)
var nama = q
var git = await fetchJson(`https://api.github.com/users/${nama}`)
var tbGit = await getBuffer(git.avatar_url)
let textGitthub =`*STALK-GITHUB*
id : ${git.id}
login : ${git.login}
html_url : ${git.html_url}
type : ${git.type}
admin : ${git.admin}
name : ${git.name}
location : ${git.location}
bio : ${git.bio}
public_repos : ${git.public_repos}
followers : ${git.followers}
following : ${git.following}
created : ${git.created_at}
updated : ${git.updated_at}`
tio.sendMessage(m.chat, { image: tbGit, caption: textGitthub }, { quoted: ftoko })
}
break

case 'stalknpm': case 'npmstalk': {
if (!q) throw `Contoh :\n${prefix+command} @adiwajshing/baileys`
var x = await fetchJson(`https://api.popcat.xyz/npm?q=${q}`)
var npm_text =`*NPM STALKER*
name : ${x.name}
version : ${x.version}
description : ${x.description}
author : ${x.author}
author_email : ${x.author_email}
last_published : ${x.last_published}
maintainers : ${x.maintainers}
repository : ${x.repository}

keywords : ${x.keywords}`
m.reply(npm_text)
}
break
case 'infogempa':
case 'gempa' :
{
let gempa = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
let teks =`   『 *"INFO GEMPA TERBARU"* 』\n\n*Tanggal :* "${gempa.Infogempa.gempa.Tanggal}"\n*Jam :* "${gempa.Infogempa.gempa.Jam}"\n*Date Time :* "${gempa.Infogempa.gempa.DateTime}"\n*Kordinat :* "${gempa.Infogempa.gempa.Coordinates}"\n*Lintang :* "${gempa.Infogempa.gempa.Lintang}"\n*Bujur :* "${gempa.Infogempa.gempa.Bujur}"\n*Getaran :* "${gempa.Infogempa.gempa.Magnitude}"\n*Kedalaman :* "${gempa.Infogempa.gempa.Kedalaman}"\n*Wilayah :* "${gempa.Infogempa.gempa.Wilayah}"\n*Potensi :* "${gempa.Infogempa.gempa.Potensi}"\n*Dirasakan :* "${gempa.Infogempa.gempa.Dirasakan}"\n\nSumber : https://data.bmkg.go.id\n\n*©Copyright all rights reserved this is a recode by grey*`
m.reply(teks)
}
break
break
case 'cuaca':
if (!q) throw `_Contoh_\n${prefix+command} tegal`
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*
Nama: ${cuaca.name + "," + cuaca.sys.country}
Longitude: ${cuaca.coord.lon}
Latitude: ${cuaca.coord.lat}
Suhu: ${cuaca.main.temp + " C"}
Angin: ${cuaca.wind.speed + " m/s"}
Kelembaban: ${cuaca.main.humidity + "%"}
Cuaca: ${cuaca.weather[0].main}
Keterangan: ${cuaca.weather[0].description}
Udara: ${cuaca.main.pressure + " HPa"}`
m.reply(text_cuaca)
break
case 'getcase': case 'c': 
 if (!isCreator) return m.reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("./tio.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
.catch((err) => m.reply(mess.error))
break
	case'true' : {
            if(!text && !text.startsWith("+")) return m.reply('*Error : Please Give Correct Format number* \n*Example :*.true +6288296785106')
             await tio.sendMessage(m.chat, { react: { text: `🔍`, key: m.key }})
              await tio.sendMessage(m.chat, { react: { text: `📞`, key: m.key }})
            const api = await fetchJson(`https://outrageous-fish-dress.cyclic.app/api/other/truecaller?number=${args[0]}`)
const msg = `*${m.pushName} Your Number Truecaller Restarts*


*◈ Name* ${api.data.data[0].name}
*◈ Access* ${api.data.data[0].access}
*◈ Score* ${api.data.data[0].score}
*◈ E164* ${api.data.data[0].phones[0].e164Format}
*◈ National* ${api.data.data[0].phones[0].nationalFormat}
*◈ D Code* ${api.data.data[0].phones[0].dialingCode}
*◈ Country Code* ${api.data.data[0].phones[0].countryCode}
*◈ Time Zone* ${api.data.data[0].addresses[0].timeZone}
*◈ Company* ${api.data.data[0].phones[0].carrier}
*◈ Type* ${api.data.data[0].phones[0].type}

*© *`
const truei = await m.reply(msg)
 await tio.sendMessage(m.chat, { react: { text: `📋`, key: truei.key }})
 await tio.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
            }
            break
case'ktpmaker':
			if (!q) return m.reply(`*Pengunaan :*\n${command} Nik| Provinsi| Kabupaten |Nama |TempatTanggalLahir |JenisKel |Alamat |RtRw |KelDesa |Kecamatan |Agama |Status |Pekerjaan |Region |Berlaku |golongan darah |LinkGambar\n\n${command} 6288296785106|Provinsi Jawa Barat|Kabupaten Bekasi|Arda Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|Ngoding|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
			get_args = args.join(" ").split("|")
			nik = get_args[0]
			prov = get_args[1]
			kabu = get_args[2]
			name = get_args[3]
			ttl = get_args[4]
			jk = get_args[5]
			jl = get_args[6]
			rtrw = get_args[7]
			lurah = get_args[8]
			camat = get_args[9]
			agama = get_args[10]
			nikah = get_args[11]
			kerja = get_args[12]
			warga = get_args[13]
			until = get_args[14]
			gd = get_args[15]
			img = get_args[16]
			bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
			console.log(bikin)
			ardaktp = await getBuffer(bikin)
						await sleep(8000)
			tio.sendMessage(m.chat, {
				image: ardaktp,
				caption: `*Ktp Maker*`
			}, {
				quoted: ftoko
			})
	
			break
                     case'qc': case 'quotely':
                     if (!text) return m.reply(`Kirim perintah *${prefix}qc* teks`)
                     let jsonnya = {
                     type: "quoted",
                     format: "webp",
                     backgroundColor: apiColor,
                     width: 768,
                     height: 768,
                     scale: 2,
                     messages: [
                   {
                   entities: [],
                   avatar: true,
                   from: {
                     id: 1,
                     name: pushname,
                    photo: {
                      url: await tio.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
                     }
                     },
                     text: text,
                     replyMessage: {},
                     },
                   ],
                 }
                 const post = await axios.post("https://bot.lyo.su/quote/generate",
                  jsonnya,{
                    headers: { "Content-Type": "application/json"},
                  })
                  let buff = await Buffer.from(post.data.result.image, "base64")
                  if (buff == undefined) return reply('error')
                  tio.sendImageAsSticker(m.chat, buff, mek, { packname, author })
						
                  /**tio.sendMessage(m.chat, {
				image: buff,
				caption: `*© TioXd*`
			}, {
				quoted: floc2
			})**/
	
			break
case'dinokuning':
var stiks = `http://api.lannn.me/api/sticker/dinokuning?apikey=Lann`
  tio.sendImageAsSticker(m.chat, stiks, m, { packname: global.packname, author: global.author })
  break
case 'translateid': case 'trid': {
if (!q) return m.reply(`Ex : ${prefix+command} Teks Yang Ingin Di Translate\n\nContoh :\n${prefix+command} halo nama saya botcahx`)
var jsons = await fetchJson(`https://api.botcahx.biz.id/api/info/translate?text=${q}&lang=id&apikey=Admin`)
var hasil = jsons.result
m.reply(hasil)
}
break

case 'translateen': case 'tren': {
if (!q) return m.reply(`Ex : ${prefix+command} Teks Yang Ingin Di Translate\n\nContoh :\n${prefix+command} Hello my name is botcahx`)
var jsons = await fetchJson(`https://api.botcahx.biz.id/api/info/translate?text=${q}&lang=en&apikey=Admin`)
var hasil = jsons.result
m.reply(hasil)
}
break						


        case 'img': case 'pinterest': case 'image': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
		       let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                tio.sendMessage(m.chat, { image: { url: result }, fileLength: jumlah, caption: `Media Url :\n`+result}, { quoted: fkontak })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
 *»* Title : ${anu.title}
 *»* Author : ${anu.author.name}
 *»* Like : ${anu.like}
 *»* Caption : ${anu.caption}
 *»* Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: esce,
			buttons,
			headerType: 4
		    }
		    tio.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        tio.sendMessage(m.chat, { image: { url }, caption: ` *»* Title : ${anu.title}\n *»* Author : ${anu.author.name}\n *»* Like : ${anu.like}\n *»* Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		tio.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		
		case 'playstore': {
			try {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            if(!q) return m.reply('what are you looking for?')
            let play = await hx.playstore(q)
            let storee = '❉─────────────────────❉\n'
            for (let i of play){
            storee += `\n*「 *PLAY STORE* 」*\n
            - *Name* : ${i.name}
            - *Link* : ${i.link}\n
            - *Dev* : ${i.developer}
            - *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
            }
            m.reply(storee)
            } catch (e) {
		    m.reply(mess.errmor)
		    }
		    }
            break
            case 'tvschedule': case 'jadwaltv': case 'tv': {
            if (!q) throw 'Pilih Channelnya Bro\n1.rcti\n2.nettv\n3.antv\n4.gtv\n5.indosiar\n6.inewstv\n7.kompastv\n8.metrotv\n9.mnctv\n10.rtv\n11.sctv\n12.trans7\n13.transtv\n14.tvone\n15.tvri'
            let { jadwaltv }= require('./lib/jadwaltv')
            m.reply(await jadwaltv(q))
            }
            break
            case 'film': {
        	try {
            if (!q) return m.reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
	        m.reply(mess.wait)
            xfar.Film(q)
            .then(data => {console.log(data)
            let krl = `*❒「  Film ${q} 」*\n*Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               tio.sendMessage(m.chat, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdoc })
                })
                } catch (e) {
		    m.reply(mess.errapi)
		    }
		     }
                break
            case 'webtonsearch': case 'webtoon': {
                if (!text) return m.reply('What Are you Looking For??')
                await m.reply(mess.wait)
                xfar.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*✍️ Title :* ${i.judul}\n`
                        txt += `*🙀 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*📔 Genre :* ${i.genre}\n`
                        txt += `*🛣️ Url :*\n${i.url}\n ----------------------------------------------------------\n`
                    }
                    await m.reply(txt)
                })
                .catch((err) => {
                    m.reply(mess.errapi)
                })
                }
            break
           
            case 'help': {
rules = `╭── ★「 *Bantuan* 」

Halo, kamu masih bingung ya, cukup ketik .anonymous atau .menu aja kok lalu kelik tombol *Cari Teman*

│.               *RULES*
├ Dilarang spam Command (Sabar)
├ Dilarang menelpon Bot (Block)
├ Dilarang culik, bayar bro buat server
├ Anu, ini gan jangan lupa donate
├ Dilarang Menganggu pengguna lain

├ _*Report jika ada pengguna yang bermasalh*_ ketik .owner lalu laporkan!

               *Note*
Bot ini memiliki fitur tersembunyi, kamu bisa ketik .allmenu untuk melihat fitur tersembunyi 

                _Pemberitahuan_
                *Akhir akhir ini update WhatsApp mengalami _BUG_ tombol, jadi jika kalian tidak bisa melihat tombol bot itu artinya WhatsApp kalian versi terbaru yang mengalami bug.*
                
Kalian bisa tetap memakai perintah
.anonymous
.start
.stop
.next
Untuk memakai bot 

Nomor cadangan jika ada masalah pada bot yang ini
wa.me/6288296785106

Enjoy your time✨

-grey

`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Kembali' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donate' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, rules, esce, m, {quoted: fkontak})
            }
            break
            case 'sponsor': {
            if (!m.isGroup) throw mess.group
            let qontak = `6288298785106@s.whatsapp.net`
let dana = `6289637196946@s.whatsapp.net`
let shopeeotp = `6288298785106@s.whatsapp.net`
let shopee = `6288298785106@s.whatsapp.net`
let tokopedia = `6288298785106@s.whatsapp.net`
let smartfrend = `6288298785106@s.whatsapp.net`
let getcontact = `6288298785106@s.whatsapp.net`
let facebook = `6288298785106@s.whatsapp.net`
let pasarpolis = `6288298785106@s.whatsapp.net`
let kominfo = `6288298785106@s.whatsapp.net`
let alfamart = `6288298785106@s.whatsapp.net`
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let jawab = `*Bot* 
-Creator :  @${ownernya.split('@')[0]}\n-Lu : @${me.split('@')[0]}\n-Powered  : @${ini_kangbaned.split('@')[0]}\n- :  @${qontak.split('@')[0]}\n- :  @${dana.split('@')[0]}\n- :  @${shopeeotp.split('@')[0]}\n- :  @${shopee.split('@')[0]}\n- :  @${tokopedia.split('@')[0]}\n- :  @${smartfrend.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${facebook.split('@')[0]}\n- :  @${pasarpolis.split('@')[0]}\n- :  @${getcontact.split('@')[0]}\n- :  @${kominfo.split('@')[0]}\n- :  @${alfamart.split('@')[0]}`
            let ments = [ownernya, me, ini_kangbaned, qontak, dana, shopeeotp, shopee, tokopedia, smartfrend, getcontact, facebook, pasarpolis, kominfo, alfamart]
            let buttons = [
                        { buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 }
                    ]
                    await tio.sendButtonText(m.chat, buttons, jawab, tio.user.name, m, {mentions: ments})
            }
            break
            case 'menu': {
            let ownernya = '0@s.whatsapp.net'
            let me = m.sender
            let jawab = `*${ucapanWaktu}*
            
Selamat datang di Bot Cari Teman WhatsApp, Bot ini bisa mencari teman dan kamu ngobrol tanpa perlu tahu nomor nya, Ayo cari teman mu Secara anonim di bot ini✨

Ketik .help untuk bantuan lebih lanjut atau kamu bisa tekan tombol di bawah

Jangan lupa share nomor bot ke teman kamu
`
            let ments = [ownernya, me, ini_kangbaned]
            let buttons = [{ buttonId: 'manonymous', buttonText: { displayText: 'Cari Teman' }, type: 1 },{ buttonId: 'help', buttonText: { displayText: 'Help' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donate💰' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : omlen + (` | Halo ${pushname}`),
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: jawab,
  footer: esce,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: 'Anonymous Chat',
  body: 'Find your friends!', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: ghme,
  sourceUrl: webmy
  }}
  }
  tio.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
  }
 break
            case 'simplemenu': case 'list': case 'help': {
            let ownernya = '0@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_kangbaned]
            let kukiw = `*Kak ${pushname}*`
                let sections = [
                {
	           title: ' ∫ » Sewa Bot? –––––––·•',
	           rows: [
	            {title: "💪🏿 • Sewa", rowId: `donasi`, description: `KLIK UNTUK SEWA BOT`},
                {title: "📱 • Owner", rowId: `owner`, description: `KLIK UNTUK BERTANYA KEPADA OWNER`}
	            ]
                },{
                title: "⚠︎  ∫ » CHANGE MENU BOT « ★",
                rows: [
                {title: "✦  「 Group 」", rowId: `mgroup`, description: `╰ ► 👥Fitur Buat Grup, Tapi Hati Hati Admin :v`},
                {title: "✦  「 Webzone 」", rowId: `mwebzone`, description: `╰ ► 📹Cari Film? Sini Tempatnya, bajakan 🤫`},
                {title: "✦  「 Downloader 」", rowId: `mdownloader`, description: `╰ ► 📥Buat Download Apaan? Bok*p? 🤨`},
                {title: "✦  「 Search 」", rowId: `msearch`, description: `╰ ► 🔍Cari Apa Hayo km🧐`},
                {title: "✦  「 Random 」", rowId: `mrandom`, description: `╰ ► ❔Random Moment🗿`},
                {title: "✦  「 Text Pro 」", rowId: `mtextpro`, description: `╰ ► ❇Teksnya Keren Kan😭?`},
                {title: "✦  「 Photo Oxy 」", rowId: `mphotooxy`, description: `╰ ► ♻️Gabut Amat`},
                {title: "✦  「 Ephoto 」", rowId: `mephoto`, description: `╰ ► 🗳Buat Edit Apaan njir?`},
                {title: "✦  「 Fun 」", rowId: `mfun`, description: `╰ ► 🔫Buat Fun² Bro`},
                {title: "✦  「 Primbon 」", rowId: `mprimbon`, description: `╰ ► 😂Ngakak`},
                {title: "✦  「 Convert 」", rowId: `mconvert`, description: `╰ ► 🛠Mau Buat Apa?`},
                {title: "✦  「 Main 」", rowId: `mmain`, description: `╰ ► 💾Senjata Admin & Owner`},
                {title: "✦  「 Database 」", rowId: `mdatabase`, description: `╰ ► 📁Engak Ada Apa² Disini`},
                {title: "✦  「 Anonymous 」", rowId: `manonymous`, description: `╰ ► 🎭Fitur Rahasia Jangan Dipake !`},
                {title: "✦  「 Voice 」", rowId: `mvoice`, description: `╰ ► 🎶Req Lagu Apa Ngab?`},
                {title: "✦  「 Owner 」", rowId: `mowner`, description: `╰ ► 🎟Jangan Ganggu Mastahhh!!!😡`}
                ]
                },{
	           title: ' ∫ » SUPPORT ME –––––––·•',
	           rows: [
	            {title: "🤑 • Donasi", rowId: `donasi`, description: `╰ ► 🤔 Donasi ︎`},
                {title: "🌀 • Menu", rowId: `menu`, description: `╰ ► 📢 Kembali ke menu awal︎`},
                {title: "🥦 • Youtube", rowId: `sc`, description: `╰ ► 🎷 Subscribe my channel`}
	]
  },
]
                tio.sendListMsg(m.chat, kukiw, esce, `*${ucapanWaktu}*`, `KLIK DISINII`, sections, fkontak)
            }
            break
            case 'mgroup': {
goup = `╭──❍「 *Group Menu* 」
│ *»* ${prefix}linkgroup
│ *»* ${prefix}ephemeral [option]
│ *»* ${prefix}setppgc [image]
│ *»* ${prefix}setname [text]
│ *»* ${prefix}setdesc [text]
│ *»* ${prefix}group [option]
│ *»* ${prefix}editinfo [option]
│ *»* ${prefix}add @user
│ *»* ${prefix}kick @user
│ *»* ${prefix}hidetag [text]
│ *»* ${prefix}tagall [text]
│ *»* ${prefix}antilink [on/off]
│ *»* ${prefix}mute [on/off]
│ *»* ${prefix}promote @user
│ *»* ${prefix}demote @user
│ *»* ${prefix}vote [text]
│ *»* ${prefix}devote
│ *»* ${prefix}upvote
│ *»* ${prefix}cekvote
│ *»* ${prefix}hapusvote
│ *»* ${prefix}tagme
│ *»* ${prefix}totag
│ *»* ${prefix}quoted
│ *»* ${prefix}wm
│ *»* ${prefix}emoji
│ *»* ${prefix}toqr
│ *»* ${prefix}gcsearch 
╰─────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu🕳️' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, goup, esce, m, {quoted: fkontak})
            }
            break
      case 'mwebzone': {
wbzone = `╭──「 *Web Zone Menu* 」
│ *»* ${prefix}playstore
│ *»* ${prefix}webtoon
│ *»* ${prefix}dogesticker
│ *»* ${prefix}patricksticker
│ *»* ${prefix}lovesticker
│ *»* ${prefix}gura
│ *»* ${prefix}paimon
│ *»* ${prefix}mukelu
│ *»* ${prefix}sanime
│ *»* ${prefix}myip
│ *»* ${prefix}dinokuning
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '️🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu🕳️' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, wbzone, esce, m, {quoted: fkontak})
            }
            break
            case 'mdownloader': {
dwnloader = `╭──「 *Downloader Menu* 」
│ *»* ${prefix}tiktok [url]
│ *»* ${prefix}instagram [url]
│ *»* ${prefix}instagramreel [url]
│ *»* ${prefix}instagramstory [url]
│ *»* ${prefix}twitter [url]
│ *»* ${prefix}facebook [url]
│ *»* ${prefix}pinterest [url]
│ *»* ${prefix}ytmp3 [url]
│ *»* ${prefix}ytmp4 [url]
│ *»* ${prefix}getmusic [query]
│ *»* ${prefix}getvideo [query]
│ *»* ${prefix}umma [url]
│ *»* ${prefix}ssweb [url]
│ *»* ${prefix}sshp [url]
│ *»* ${prefix}ss [url]
│ *»* ${prefix}ai
│ *»* ${prefix}aigambar
│ *»* ${prefix}tts
│ *»* ${prefix}githubstalk [url]
│ *»* ${prefix}stalknpm [url]
│ *»* ${prefix}infogempa
│ *»* ${prefix}cuaca
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi🔃' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, dwnloader, esce, m, {quoted: fkontak})
            }
            break
            case 'msearch': {
sarch = `╭──「 *Search Menu* 」
│ *»* ${prefix}true [+6288]
│ *»* ${prefix}play [query]
│ *»* ${prefix}yts [query]
│ *»* ${prefix}google [query]
│ *»* ${prefix}gimage [query]
│ *»* ${prefix}pinterest [query]
│ *»* ${prefix}wallpaper [query]
│ *»* ${prefix}wikimedia [query]
│ *»* ${prefix}ytsearch [query]
│ *»* ${prefix}ringtone [query]
│ *»* ${prefix}totalhit
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, sarch, esce, m, {quoted: fkontak})
            }
            break
            case 'mrandom': {
rndom = `╭──「 *Random Menu* 」
│ *»* ${prefix}gbtku
│ *»* ${prefix}coffe
│ *»* ${prefix}quotesanime
│ *»* ${prefix}dilanquote
│ *»* ${prefix}bucinquote
│ *»* ${prefix}katasenja
│ *»* ${prefix}puisi
│ *»* ${prefix}couple
│ *»* ${prefix}anime
│ *»* ${prefix}waifu
│ *»* ${prefix}sound1-161
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '️🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🔃Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, rndom, esce, m, {quoted: fkontak})
            }
            break
            case 'mtextpro': {
txtpro = `╭──「 *Textpro Menu* 」
│ *»* ${prefix}3dchristmas
│ *»* ${prefix}3ddeepsea
│ *»* ${prefix}americanflag
│ *»* ${prefix}3dscifi
│ *»* ${prefix}3drainbow
│ *»* ${prefix}3dwaterpipe
│ *»* ${prefix}halloweenskeleton
│ *»* ${prefix}sketch
│ *»* ${prefix}bluecircuit
│ *»* ${prefix}space
│ *»* ${prefix}metallic
│ *»* ${prefix}fiction
│ *»* ${prefix}greenhorror
│ *»* ${prefix}transformer
│ *»* ${prefix}berry
│ *»* ${prefix}thunder
│ *»* ${prefix}magma
│ *»* ${prefix}3dcrackedstone
│ *»* ${prefix}3dneonlight
│ *»* ${prefix}impressiveglitch
│ *»* ${prefix}naturalleaves
│ *»* ${prefix}fireworksparkle
│ *»* ${prefix}matrix
│ *»* ${prefix}dropwater
│ *»* ${prefix}harrypotter
│ *»* ${prefix}foggywindow
│ *»* ${prefix}neondevils
│ *»* ${prefix}christmasholiday
│ *»* ${prefix}3dgradient
│ *»* ${prefix}blackpink
│ *»* ${prefix}gluetext
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🔃Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, txtpro, esce, m, {quoted: fkontak})
            }
            break
            case 'mphotooxy': {
potooxy = `╭──❍「 *Photo Oxy Menu* 」
│ *»* ${prefix}harrypotter
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '️🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🔃Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, potooxy, esce, m, {quoted: fkontak})
            }
            break
            case 'mephoto': {
ehoto = `╭──❍「 *Ephoto Menu* 」
│ *»* ${prefix}galaxy
│ *»* ${prefix}glass
│ *»* ${prefix}neon
│ *»* ${prefix}beach
│ *»* ${prefix}blackpink
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '️🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🔃Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, ehoto, esce, m, {quoted: fkontak})
            }
            break
           case 'mfun': {
mun = `╭──❍「 *Fun Menu* 」
│ *»* ${prefix}halah
│ *»* ${prefix}hilih
│ *»* ${prefix}huluh
│ *»* ${prefix}heleh
│ *»* ${prefix}holoh
│ *»* ${prefix}jadian
│ *»* ${prefix}jodohku
│ *»* ${prefix}apakah
│ *»* ${prefix}bisakah
│ *»* ${prefix}kapan
│ *»* ${prefix}slot
│ *»* ${prefix}delttt
│ *»* ${prefix}tictactoe
│ *»* ${prefix}family100
│ *»* ${prefix}tebak [option]
│ *»* ${prefix}math [mode]
│ *»* ${prefix}suitpvp [@tag]
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🔃Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, mun, esce, m, {quoted: fkontak})
            }
            break
            case 'mprimbon': {
pimbon = `╭──❍「 *Primbon Menu* 」
│ *»* ${prefix}nomorhoki
│ *»* ${prefix}artimimpi
│ *»* ${prefix}artinama
│ *»* ${prefix}ramaljodoh
│ *»* ${prefix}ramaljodohbali
│ *»* ${prefix}suamiistri
│ *»* ${prefix}ramalcinta
│ *»* ${prefix}cocoknama
│ *»* ${prefix}pasangan
│ *»* ${prefix}jadiannikah
│ *»* ${prefix}sifatusaha
│ *»* ${prefix}rezeki
│ *»* ${prefix}pekerjaan
│ *»* ${prefix}nasib
│ *»* ${prefix}penyakit
│ *»* ${prefix}tarot
│ *»* ${prefix}fengshui
│ *»* ${prefix}haribaik
│ *»* ${prefix}harisangar
│ *»* ${prefix}harisial
│ *»* ${prefix}nagahari
│ *»* ${prefix}arahrezeki
│ *»* ${prefix}peruntungan
│ *»* ${prefix}weton
│ *»* ${prefix}karakter
│ *»* ${prefix}keberuntungan
│ *»* ${prefix}memancing
│ *»* ${prefix}masasubur
│ *»* ${prefix}zodiak
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🔃Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, pimbon, esce, m, {quoted: fkontak})
            }
            break
            case 'mconvert': {
cnvert = `╭──❍「 *Convert Menu* 」
│ *»* ${prefix}attp
│ *»* ${prefix}ttp
│ *»* ${prefix}toimage
│ *»* ${prefix}removebg
│ *»* ${prefix}sticker
│ *»* ${prefix}emojimix
│ *»* ${prefix}emojimix2
│ *»* ${prefix}tovideo
│ *»* ${prefix}togif
│ *»* ${prefix}tourl
│ *»* ${prefix}tovn
│ *»* ${prefix}tomp3
│ *»* ${prefix}toaudio
│ *»* ${prefix}ebinary
│ *»* ${prefix}dbinary
│ *»* ${prefix}styletext
│ *»* ${prefix}smeme
│ *»* ${prefix}ktpmaker
│ *»* ${prefix}qc
│ *»* ${prefix}translateid
│ *»* ${prefix}translateen
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '️🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🔃Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, cnvert, esce, m, {quoted: fkontak})
            }
            break
            case 'mmain': {
min = `╭──❍「 *Main Menu* 」
│ *»* ${prefix}ping
│ *»* ${prefix}owner
│ *»* ${prefix}report
│ *»* ${prefix}menu / ${prefix}help / ${prefix}?
│ *»* ${prefix}delete
│ *»* ${prefix}infochat
│ *»* ${prefix}quoted
│ *»* ${prefix}listpc
│ *»* ${prefix}listgc
│ *»* ${prefix}listonline
│ *»* ${prefix}speedtest
│ *»* ${prefix}menfes
│ *»* ${prefix}tinyurl [link]
│ *»* ${prefix}shrturl [link]
│ *»* ${prefix}linkpoi
│ *»* ${prefix}bitly
│ *»* ${prefix}cuttly
│ *»* ${prefix}runtime
│ *»* ${prefix}request
│ *»* ${prefix}ceklimit
│ *»* ${prefix}$
│ *»* ${prefix}~>
│ *»* ${prefix}.>
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, min, esce, m, {quoted: fkontak})
            }
            break
            case 'mdatabase': {
dtbase = `╭──❍「 *Database Menu* 」
│ *»* ${prefix}setcmd
│ *»* ${prefix}listcmd
│ *»* ${prefix}delcmd
│ *»* ${prefix}lockcmd
│ *»* ${prefix}addmsg
│ *»* ${prefix}listmsg
│ *»* ${prefix}getmsg
│ *»* ${prefix}delmsg
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, dtbase, esce, m, {quoted: fkontak})
            }
            break
            case 'manonymous': {
aonymous = `╭──❍「 *Anonymous Menu* 」
│ *»* ${prefix}anonymous
│ *»* ${prefix}start
│ *»* ${prefix}next
│ *»* ${prefix}keluar
╰──wa.me/12019778056?text=.start`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: '🔙Back' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donate' }, type: 1 },{ buttonId: 'help', buttonText: { displayText: 'Bantuan' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, aonymous, esce, m, {quoted: fkontak})
            }
            break
      
case 'mvoice': {
vice = `╭──❍「 *Voice Changer Menu* 」
│ *»* ${prefix}bass
│ *»* ${prefix}blown
│ *»* ${prefix}deep
│ *»* ${prefix}earrape
│ *»* ${prefix}fast
│ *»* ${prefix}fat
│ *»* ${prefix}nightcore
│ *»* ${prefix}reverse
│ *»* ${prefix}robot
│ *»* ${prefix}slow
│ *»* ${prefix}tupai
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, vice, esce, m, {quoted: fkontak})
            }
            break
            case 'mowner': {
oner = `╭──❍「 *Owner Menu* 」
│ *»* ${prefix}react [emoji]
│ *»* ${prefix}chat [option]
│ *»* ${prefix}join [link]
│ *»* ${prefix}leave
│ *»* ${prefix}block @user
│ *»* ${prefix}unblock @user
│ *»* ${prefix}bcgroup [text]
│ *»* ${prefix}bcall [text]
│ *»* ${prefix}setppbot [image]
│ *»* ${prefix}setexif
│ *»* ${prefix}setmenu [option]
│ *»* ${prefix}setowner
│ *»* ${prefix}getcase
│ *»* ${prefix}public
│ *»* ${prefix}addprem/delprem
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '🔙Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: 'List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: 'Donasi' }, type: 1 }]
            await tio.sendButtonText(m.chat, buttons, oner, esce, m, {quoted: fkontak})
            }
            break
            case 'allmenu': {
            let ownernya = '0@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_kangbaned]
                anu = `*${ucapanWaktu}*\n*kak @${me.split('@')[0]}*\n*Powered : @${ini_kangbaned.split('@')[0]}*
                
                  *Spesial Command*

*»  ${prefix}getmsg*
Akses kumpulan spesial media dari owner!
*»  ${prefix}ai*
Tanya jawab sama Ai!
*»  ${prefix}aigambar*
Minta suatu gambar sama ai
*»  ${prefix}totalhit*
Cek Total hit bot
*»  ${prefix}totalfitur [query]*

╭──❍「 *Group Menu* 」
│ *»* ${prefix}linkgroup
│ *»* ${prefix}ephemeral [option]
│ *»* ${prefix}setppgc [image]
│ *»* ${prefix}setname [text]
│ *»* ${prefix}setdesc [text]
│ *»* ${prefix}group [option]
│ *»* ${prefix}editinfo [option]
│ *»* ${prefix}add @user
│ *»* ${prefix}kick @user
│ *»* ${prefix}hidetag [text]
│ *»* ${prefix}tagall [text]
│ *»* ${prefix}antilink [on/off]
│ *»* ${prefix}mute [on/off]
│ *»* ${prefix}promote @user
│ *»* ${prefix}demote @user
│ *»* ${prefix}vote [text]
│ *»* ${prefix}devote
│ *»* ${prefix}upvote
│ *»* ${prefix}cekvote
│ *»* ${prefix}hapusvote
│ *»* ${prefix}tagme
│ *»* ${prefix}totag
│ *»* ${prefix}quoted
│ *»* ${prefix}wm
│ *»* ${prefix}emoji
│ *»* ${prefix}toqr
│ *»* ${prefix}gcsearch 
╰────❍
╭──❍「 *Webzone Menu* 」
│ *»* ${prefix}playstore
│ *»* ${prefix}webtoon
│ *»* ${prefix}dogesticker
│ *»* ${prefix}patricksticker
│ *»* ${prefix}lovesticker
│ *»* ${prefix}gura
│ *»* ${prefix}paimon
│ *»* ${prefix}mukelu
│ *»* ${prefix}myip
│ *»* ${prefix}sanime
│ *»* ${prefix}dinokuning 
╰────❍
╭──❍「 *Downloader Menu* 」
│ *»* ${prefix}tiktok [url]
│ *»* ${prefix}instagram [url]
│ *»* ${prefix}instagramreel [url]
│ *»* ${prefix}instagramstory [url]
│ *»* ${prefix}twitter [url]
│ *»* ${prefix}facebook [url]
│ *»* ${prefix}pinterest [url]
│ *»* ${prefix}ytmp3 [url]
│ *»* ${prefix}ytmp4 [url]
│ *»* ${prefix}getmusic [query]
│ *»* ${prefix}getvideo [query]
│ *»* ${prefix}umma [url]
│ *»* ${prefix}ssweb [url]
│ *»* ${prefix}sshp [url]
│ *»* ${prefix}ss [url]
│ *»* ${prefix}ai
│ *»* ${prefix}aigambar
│ *»* ${prefix}tts
│ *»* ${prefix}githubstalk [url]
│ *»* ${prefix}stalknpm [url]
│ *»* ${prefix}infogempa 
│ *»* ${prefix}cuaca
╰────❍
╭──❍「 *Search Menu* 」
│ *»* ${prefix}true [+6288]
│ *»* ${prefix}play [query]
│ *»* ${prefix}yts [query]
│ *»* ${prefix}google [query]
│ *»* ${prefix}gimage [query]
│ *»* ${prefix}pinterest [query]
│ *»* ${prefix}wallpaper [query]
│ *»* ${prefix}wikimedia [query]
│ *»* ${prefix}ytsearch [query]
│ *»* ${prefix}ringtone [query]
│ *»* ${prefix}totalhit
│ *»* ${prefix}totalfitur [query]
╰────❍
╭──❍「 *Random Menu* 」
│ *»* ${prefix}gbtku
│ *»* ${prefix}coffe
│ *»* ${prefix}quotesanime
│ *»* ${prefix}dilanquote
│ *»* ${prefix}bucinquote
│ *»* ${prefix}katasenja
│ *»* ${prefix}puisi
│ *»* ${prefix}couple
│ *»* ${prefix}anime
│ *»* ${prefix}waifu
│ *»* ${prefix}sound1-161
╰────❍
╭──❍「 *Textpro Menu* 」
│ *»* ${prefix}3dchristmas
│ *»* ${prefix}3ddeepsea
│ *»* ${prefix}americanflag
│ *»* ${prefix}3dscifi
│ *»* ${prefix}3drainbow
│ *»* ${prefix}3dwaterpipe
│ *»* ${prefix}halloweenskeleton
│ *»* ${prefix}sketch
│ *»* ${prefix}bluecircuit
│ *»* ${prefix}space
│ *»* ${prefix}metallic
│ *»* ${prefix}fiction
│ *»* ${prefix}greenhorror
│ *»* ${prefix}transformer
│ *»* ${prefix}berry
│ *»* ${prefix}thunder
│ *»* ${prefix}magma
│ *»* ${prefix}3dcrackedstone
│ *»* ${prefix}3dneonlight
│ *»* ${prefix}impressiveglitch
│ *»* ${prefix}naturalleaves
│ *»* ${prefix}fireworksparkle
│ *»* ${prefix}matrix
│ *»* ${prefix}dropwater
│ *»* ${prefix}harrypotter
│ *»* ${prefix}foggywindow
│ *»* ${prefix}neondevils
│ *»* ${prefix}christmasholiday
│ *»* ${prefix}3dgradient
│ *»* ${prefix}blackpink
│ *»* ${prefix}gluetext
╰────❍
╭──❍「 *Ephoto Menu* 」
│ *»* ${prefix}galaxy
│ *»* ${prefix}glass
│ *»* ${prefix}neon
│ *»* ${prefix}beach
│ *»* ${prefix}blackpink
╰────❍
╭──❍「 *Fun Menu* 」
│ *»* ${prefix}halah
│ *»* ${prefix}hilih
│ *»* ${prefix}huluh
│ *»* ${prefix}heleh
│ *»* ${prefix}holoh
│ *»* ${prefix}jadian
│ *»* ${prefix}jodohku
│ *»* ${prefix}apakah
│ *»* ${prefix}bisakah
│ *»* ${prefix}kapan
│ *»* ${prefix}slot
│ *»* ${prefix}delttt
│ *»* ${prefix}tictactoe
│ *»* ${prefix}family100
│ *»* ${prefix}tebak [option]
│ *»* ${prefix}math [mode]
│ *»* ${prefix}suitpvp [@tag]
╰────❍
╭──❍「 *Primbon Menu* 」
│ *»* ${prefix}nomorhoki
│ *»* ${prefix}artimimpi
│ *»* ${prefix}artinama
│ *»* ${prefix}ramaljodoh
│ *»* ${prefix}ramaljodohbali
│ *»* ${prefix}suamiistri
│ *»* ${prefix}ramalcinta
│ *»* ${prefix}cocoknama
│ *»* ${prefix}pasangan
│ *»* ${prefix}jadiannikah
│ *»* ${prefix}sifatusaha
│ *»* ${prefix}rezeki
│ *»* ${prefix}pekerjaan
│ *»* ${prefix}nasib
│ *»* ${prefix}penyakit
│ *»* ${prefix}tarot
│ *»* ${prefix}fengshui
│ *»* ${prefix}haribaik
│ *»* ${prefix}harisangar
│ *»* ${prefix}harisial
│ *»* ${prefix}nagahari
│ *»* ${prefix}arahrezeki
│ *»* ${prefix}peruntungan
│ *»* ${prefix}weton
│ *»* ${prefix}karakter
│ *»* ${prefix}keberuntungan
│ *»* ${prefix}memancing
│ *»* ${prefix}masasubur
│ *»* ${prefix}zodiak
╰────❍
╭──❍「 *Convert Menu* 」
│ *»* ${prefix}attp
│ *»* ${prefix}ttp
│ *»* ${prefix}toimage
│ *»* ${prefix}removebg
│ *»* ${prefix}sticker
│ *»* ${prefix}emojimix
│ *»* ${prefix}emojimix2
│ *»* ${prefix}tovideo
│ *»* ${prefix}togif
│ *»* ${prefix}tourl
│ *»* ${prefix}tovn
│ *»* ${prefix}tomp3
│ *»* ${prefix}toaudio
│ *»* ${prefix}ebinary
│ *»* ${prefix}dbinary
│ *»* ${prefix}styletext
│ *»* ${prefix}smeme
│ *»* ${prefix}ktpmaker
│ *»* ${prefix}qc
│ *»* ${prefix}translateid
│ *»* ${prefix}translateen
╰────❍
╭──❍「 *Main Menu* 」
│ *»* ${prefix}ping
│ *»* ${prefix}owner
│ *»* ${prefix}report
│ *»* ${prefix}menu / ${prefix}help / ${prefix}?
│ *»* ${prefix}delete
│ *»* ${prefix}infochat
│ *»* ${prefix}quoted
│ *»* ${prefix}listpc
│ *»* ${prefix}listgc
│ *»* ${prefix}listonline
│ *»* ${prefix}speedtest
│ *»* ${prefix}menfes 
│ *»* ${prefix}tinyurl [url]
│ *»* ${prefix}shrturl [url]
│ *»* ${prefix}linkpoi
│ *»* ${prefix}bitly
│ *»* ${prefix}cuttly
│ *»* ${prefix}runtime
│ *»* ${prefix}request
│ *»* ${prefix}ceklimit
│ *»* ${prefix}$
│ *»* ${prefix}~>
│ *»* ${prefix}.>
╰────❍
╭──❍「 *Database Menu* 」
│ *»* ${prefix}setcmd
│ *»* ${prefix}listcmd
│ *»* ${prefix}delcmd
│ *»* ${prefix}lockcmd
│ *»* ${prefix}addmsg
│ *»* ${prefix}listmsg
│ *»* ${prefix}getmsg
│ *»* ${prefix}delmsg
╰────❍
╭──❍「 *Anonymous Menu* 」
│ *»* ${prefix}anonymous
│ *»* ${prefix}start
│ *»* ${prefix}next
│ *»* ${prefix}keluar
╰────❍
╭──❍ *Voice Changer*
│ *»* ${prefix}bass
│ *»* ${prefix}blown
│ *»* ${prefix}deep
│ *»* ${prefix}earrape
│ *»* ${prefix}fast
│ *»* ${prefix}fat
│ *»* ${prefix}nightcore
│ *»* ${prefix}reverse
│ *»* ${prefix}robot
│ *»* ${prefix}slow
│ *»* ${prefix}tupai
╰────❍
╭──❍「 *Owner Menu* 」
│ *»* ${prefix}react [emoji]
│ *»* ${prefix}chat [option]
│ *»* ${prefix}join [link]
│ *»* ${prefix}leave
│ *»* ${prefix}block @user
│ *»* ${prefix}unblock @user
│ *»* ${prefix}bcgroup [text]
│ *»* ${prefix}bcall [text]
│ *»* ${prefix}setppbot [image]
│ *»* ${prefix}setexif
│ *»* ${prefix}setmenu [option]
│ *»* ${prefix}setowner
│ *»* ${prefix}public
│ *»* ${prefix}getcase
│ *»* ${prefix}addprem/delprem
╰────❍`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'Donate' }, type: 1 },{ buttonId: 'help', buttonText: { displayText: 'Bantuan' }, type: 1 }]
            tio.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, footer: esce, mentions: ments})
            }
            break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
tio_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await tio.sendMessage(m.chat, { audio: tio_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
            default:
                if (budy.startsWith('~>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('.>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner🚀', 'Keluar🌀', 'Lanjut🔙', 'Stop◀️'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    tio.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})