//ubah nomor owner dan wm di sini 

const fs = require('fs')
const chalk = require('chalk')
global.owner = ['6288296785106']
global.ownernomer = "6288296785106"
global.premium = ['6289637196946']
global.packname = 'sticker by'
global.author = '𝗚𝗿𝗲𝘆'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'SUCCESS✅',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thumb = fs.readFileSync('./media/image/tio.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/Greyfs'
global.webmy = 'https://saweria.co/Greyx'
global.ghme = 'https://github.com/Greyfs'
global.botname = '𝗔𝗶𝗹𝗶𝗮 𝗔𝘀𝘀𝗶𝘀𝘁𝗲𝗻'
global.omlen = 'Copyright ©2023 greyfs all right reserved '
global.weem = '𝗔𝗶𝗹𝗶𝗮 𝗔𝘀𝘀𝗶𝘀𝘁𝗲𝗻'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
