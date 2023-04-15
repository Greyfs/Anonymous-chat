# CATATAN ( NOTE )
- Script ini hanyalah hasil recode dari sc asli Hisoka-Morrow
saya hanya memperbaiki sebagian fitur yg error.

- Telah menggunakan Sessions Multi auth state.

<p align="center">
	<img src="https://telegra.ph/file/2f2dff89c65c9e5a1dddc.png" width="35%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">BOTCAHX</h1>

This is Script of WhatsApp multi device, working with [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)

## NOTE
- Script ini untuk semua orang, bukan untuk Dijual apalagi disalah gunakan. 
- Jika apikey habis atau expired daftar [`Disini`](https://api.botcahx.biz.id)
- Jika Butuh Apikey Lain Daftar [`Disini`](https://api.lannn.me)
- Gunakan pm2 agar bot tetap online tanpa harus me-restart manual di terminal.
```bash
$ npm install -g pm2
$ pm2 start "npm start" && pm2 save && pm2 logs

//jika menggunakan token pm2//

$ pm2 start "npm start" && pm2 [token] && pm2 save && pm2 logs
```
## Free Hosting With uffizzi.com
[`Deploy Now`](https://www.uffizzi.com/)

## Ingin Hosting Di Heroku Lagi?
[`Beli Disini`](https://wa.me/6285842647866?text=Bang+Mau+Beli+Heroku)

## Ingin Beli Gh Student Murah ?
[`Beli Disini`](https://wa.me/6285842647866?text=Bang+Mau+Beli+Akun+Gh+Student)

## Group Discussion
- Join grup dibawah jika kamu ada pertanyaan, kamu bertanya-tanya?.
[`Group Link`](https://chat.whatsapp.com/D6BZVRSymWaFU28t2lxaO0)
## My Project
* Script Plugins [`Go here`](https://github.com/BOTCAHX/RTXZY-MD) (`Multiple Sessions Bot`)
* Original Script [`DikaArdnt/Hisoka-Morrow`](https://github.com/DikaArdnt/Hisoka-Morrow) (Sc Original)
* WhatsApp Bot Using Library whatsapp-web.js [`hisoka-waweb.js`](https://github.com/Hisoka-Morrou/hisoka-waweb.js/)

## Setting Autotyping & Recording
- Tambahkan tanda ```[/**] ``` dan ``` [**/]```  untuk mengaktifkan atau menonaktifkan fitur tersebut
- Edit Di Baris [`Line`](https://github.com/BOTCAHX/Hoream-MD/blob/609bb8e1690bece0460f05250fd9f59e1fb25dba/tio.js#L189)
- Contoh Mematikan Fitur:
```bash

        /**if (m.message) {
tio.sendPresenceUpdate('composing', m.chat)
tio.readMessages([m.key])
}
 if (m.message) {
tio.sendPresenceUpdate('recording', m.chat)
tio.readMessages([m.key])
}**/

```
- Contoh Mengaktifkan Fitur
```bash
if (m.message) {
tio.sendPresenceUpdate('composing', m.chat)
tio.readMessages([m.key])
}
 if (m.message) {
tio.sendPresenceUpdate('recording', m.chat)
tio.readMessages([m.key])
}
```

## UNTUK PENGGUNA WINDOWS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)


```bash
git clone https://github.com/BOTCAHX/Hoream-MD 
cd Hoream-MD 
npm install && npm update
```

## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git nodejs ffmpeg -y
git clone https://github.com/BOTCAHX/Hoream-MD 
cd Hoream-MD 
npm install && npm update
```

## RECOMMENDED INSTALL ON TERMUX

```bash
pkg install yarn
yarn
```

## Installing
```bash
$ npm start
```

## Thanks To
* [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
* [`Nurutomo`](https://github.com/Nurutomo)
* [`BOTCAHX`](https://github.com/BOTCAHX)
* [`DikaArdnt`](https://github.com/DikaArdnt)
* [`Fatih Arridho`](https://github.com/FatihArridho)
* [`Naze Dev`](https://github.com/nazedev)
* [`AzRyCb`](https://github.com/AzRyCb)
* [`ERLANRAHMAT`](https://github.com/ERLANRAHMAT)
* [`Rizal`](https://github.com/rizal333)

```Thanks to all who have participated in the development of this script```
