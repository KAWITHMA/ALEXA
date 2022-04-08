/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX Alexa
*/

const Amazone = require('../events');
const {
    MessageType,
    GroupSettingChange,
    Mimetype,
    MessageOptions
} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('amazone');
var clh = {
    cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv',
    pay: ''
}
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
let tk = Config.WORKTYPE == 'public' ? false: true

Amazone.addCommand({
    pattern: 'cmf', fromMe: tk, desc: Lang.MENU, dontAddCommandList: true
}, (async (message, match) => {
        // send a list message!
        const rows = [{
            title: '.alive', description: "❓ check online bot.\n\n\n**◄━━━━━━━⦁⦁ONLINE CHECK⦁⦁━━━ ", rowId: "rowid1"
           },
           {
                title: '.alexa', description: "❓ All command list.\n\n\n*╭─「 QUEEN ALEXA COMMOND 」", rowId: "rowid45"
            },     
            {
                title: '.logo pack', description: "❓ Alexa logo pack.\n\n\n╭─ 💟LOGO PACK💟 ╰────「 ©️AMAZONE 」.\n\n", rowId: "rowid3
            }]

        const sections = [{
            title: "𝗤𝘂𝗲𝗲𝗻 𝗔𝗹𝗲𝘅𝗮", rows: rows
        }]

        const button = {
            buttonText: 'ALEXA CMD',
            description: "*╭────────═✪═────────╮*\n  *◄◯ QUEEN ALEXA MENU ◯►*\n*╰────────═✪═────────╯*",
            sections: sections,
            listType: 1
        }

        await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));

if (Config.WORKTYPE == 'public') {

    Amazone.addCommand({
        pattern: 'cmdmenu', fromMe: true, dontAddCommandList: true
    }, (async (message, match) => {
        // send a list message!
            const rows = [{
                title: '🕊 HELP-LIST', description: "🚹 About Queen Alexa Besic Help.\n\n\n*⦁◊═⦁QUEEN 🧝‍♀️ ALEXA⦁═◊⦁*\n\n🎭 *.alive* \n🔮 Bot ක්‍රියාත්මක වේදැයි පරීක්ෂා කරයි.\n\n🎭 *.alexa* \n🎭*.menu*\n🔮 සම්පූර්ණ විධාන ලැයිස්තුව පෙන්වයි.\n\n🎭 *.owner* \n🔮 බොට් අයිතිකරුවාගේ විස්තර පෙන්නයි\n\n🎭 *.setvar BOT_NAME: your text\n🔮ඔබෙ බොට්ගෙ නම වෙනස් කිරීමට මෙය ඔබේ Logo captions වල හා වෙනත් විධාන වල පෙන්වයි.\n\n🎭 *.setvar WORK_TYPE: public* \n🔮 Bot public කිරීමට.\n\n🎭 *.setvar WORK_TYPE: private* \n🔮 Bot private කිරීමට.\n\n🎭 *.restart* \n🔮 Bot නැවත පනගැන්වීමට සිරවූ විටක\n\n🎭 *.shutdown* \n\n🔮 Bot වසා දැමිමට⚙️ නැවත On කිරිමට Herokuහි Resources වලින් on කල යුතුය\n\n🎭 *.setvar SUDO: 94XXXXXXXX* \n🔮 Bot වෙත තවත් පාලකයෙකු ලබදීමටpublic/private අවස්ථා දෙකෙහිදීම ඔහුට පාලනය කල හැක.\n\n🎭 *.dyno* \n🔮 ඔබගේ Heroku පැය ප්‍රමාණය කොපමනද බැලීමට. මාසිකව පැය 550ක් ලැබෙන අතර එය මසකට පෙර අවසන් වූවිට ඔබගේ bot ක්‍රියා විරහිත වේ.ඊලග මාසය එනතුරු බලා හිදීම හෝ  අලුත් හෙරොකු එකක සාදාගත යුතු වේ. \n\n🎭 *.adon AI_BOT:false* \n\n🔮 AI Bot (.bot විධානය) ක්‍රියාවිරහිත කිරීමට මෙය භාවිතා කරන්න\n\n🎭 *.adon AI_BOT:true* \n\n🔮 AI bot නැවත On කිරීම මෙය මඟින් සිදුකල හැක.\n\🎭 *.eva on* \n\n🔮 AI EVA චැට් බොට් ක්‍රියාත්මක කිරීම මෙය මගින් හැක.\n🎭 *.eva off* \n🔮 AI EVA චැට් බොට් ක්‍රියාවිරහිත කරයි.\n\n🎭 *.filter text1 text2* \n🔮 යමෙකු යම් වචනයක් ඇතුලත් කලහොත් එයට පිලිතුරක් සකසා ගැනිමට\n⚙️ text1 ඇතුලත් කලහොත් text2 පෙන්නයි\n\n🎭  *.setown*\n🔮 Owner Menu එක සැකසිමට.\n⚙️ ඉදිරියෙන් අදාල විස්තර එකොලහ hash මගින් වෙන්කර ඇතුලත් කරන්න. \n🧚 වැඩි විස්තර සදහා *.cmd setown* එක ඇතුලත් කරන්න\n\n🎭 *setvar ALIVE_MESSAGE:අදාල MSG එක* \n🔮 Bot ගෙ Alive Message එක වෙනස් කරන්න ඕනෙ නම්.\n\n🎭 *setvar ALIVE_LOGO: link*\n🔮 Bot ගෙ alive පින්තූරෙ වෙනස් කරන්න ඔනෙනම් පහල Site එකට ඔයාගෙ Photo එක Upload කරලා Link එක දාන්න\n🎲 https:imgbb.com/\n🔮 ටෙලිග්‍රෑම් පාවිච්චි කරනවනම් ලේසියෙන් මේ Bot ට Img එක දාලා link එක ගන්න පුලුවන්\n🎲 https:t.me/FnTelegraphBot\n🎭 *setvar WELCOME_GIF: link* \n🔮 මේකෙන් ඔයාට Welcome msg එකේ GIF එක වෙනස් කරන්න පුලුවන් එතනටත් පහල site එක්කට GIF එකක් Upload කරලා link එක දාන්න\n🎲 https:www.mailboxdrive.com/upload/\n🔮 ටෙලිග්‍රෑම් පාවිච්චි කරනවනම්🎲 https:t.me/FnTelegraphBot\n🎭 *setvar BYE_GIF: link*\n🔮 ඒකෙත් Good bye Logo වෙනස් කරන්න,පුලුවන්උඩ විදිහටම ඒකටත් දාන්න\n\n", rowId: "rowid1"
           },
           {
                title: '🕊 SUPPER TTP-LIST', description: "🚹 Sinhala Attp List.\n\n\n*╭─「 ALEXA SUPER TTP 」*\n│ \n│🕊 Queen Alexa Super TTP pack)\n│ සිංහල Font Support 😍\n╰────\n╭─「 COMMANDS」\n│ \n│ • 1ttp <your Text >\n│ • 2ttp <your Text >\n│ • 3ttp <your Text >\n╰────\n「 ©️Amazone-teenuhx」", rowId: "rowid45"
            },     
            {
                title: '🕊 LOGO-LIST', description: "🚹 Queen Alexa Logo Command.\n\n\n╭─「 🧝‍♀️LOGO PACK 」\n│ \n*│💰How To Create Logo*\n│🔅Example : .holo hi\n│🔅Example : .glitch Queen/Alexa\n│🔅Example : Command <your text>\n│\n│ • holo\n│ • glitch\n│ • s3d\n│ • nlogo\n│ • blackpink\n│ • neonlight\n│ • ninjalogo\n│ • 3dtext\n│ • buttonyt\n│ • 2ninja\n│ • drop\n│ •1917\n│ • boxed\n│ • battle\n│ • blood\n│ • pubg\n│ • phub\n│ • break\n│ • 2glitch\n│ • barlog\n│ • writingchalk\n│ • 2galaxy\n│ • paulscholes\n│ • multicolor3d\n│ • juventus\n│ • brokenglass\n│ • graffiti3\n│ • hotmetalic\n│ • lightgalaxy\n│ • nneon\n│ • cloud\n│ • zombie3d\n│ • bearlogo\n│ • birthdaycake\n│ • cake\n│ • artpapercut\n│ • 3dwood\n│ • realisticvintage\n│ • neondevil\n│ • neon2\n│ • thunder\n│ • graffiti5\n│ • snake\n│ • graffiticolor\n│ • metal\n│ •wordgreen\n│\n╰────「 ©️AMAZONE 」.\n\n", rowId: "rowid3"
            },
            {
                title: '🕊 MEDIA-LIST', description: "🚹 Media Editing Command List.\n\n\n*⦁◊═⦁QUEEN ALEXA MEDIA COMMAND⦁═◊⦁*\n\n💻Usage: *.mp4enhance*\nℹ️Desc: \n🇱🇰 Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc: \n🇱🇰 Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: \n🇱🇰 Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc: \n🇱🇰 Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: \n🇱🇰 Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc: \n🇱🇰 Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc: \n🇱🇰 Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: \n🇱🇰 Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: \n🇱🇰 Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: \n🇱🇰 Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc: \n🇱🇰 Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc: \n🇱🇰 Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: \n🇱🇰 Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: \n🇱🇰 Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: \n🇱🇰 Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: \n🇱🇰 Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:  \n🇱🇰 Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc:  \n🇱🇰 Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc:  \n🇱🇰 Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc:  \n🇱🇰 Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc:  \n🇱🇰 Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc:  \n🇱🇰 Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc:  \n🇱🇰 Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc:\n🇱🇰 Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc:  \n🇱🇰 Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:  \n🇱🇰 Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:  \n🇱🇰 Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:  \n🇱🇰 Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:  \n🇱🇰 Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  \n🇱🇰 Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc:  \n🇱🇰 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc:  \n🇱🇰 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc:  \n🇱🇰 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc:  \n🇱🇰 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc:  \n🇱🇰 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc:  \n🇱🇰 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc:  \n🇱🇰 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc:  \n🇱🇰 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc:  \n🇱🇰 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc:  \n🇱🇰 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc:  \n🇱🇰 Applies a art effect to the photo.", rowId: "rowid4"
            },
            {
                title: '🕊 DOWNLOAD-LIST', description: "🚹 Media Downloading Command list.\n\n\n◁===👩‍🦰Amazone Alexa Download List===▷\n\n*⏱විධානය*  : .song\n*🔄විස්තරය* : එය ගීත බාගත කරයි.\n\n*⏱විධානය*  : .dcsong\n*🔄විස්තරය* : ගීත document ලෙස download කරයි.\n\n*⏱විධානය*  : .video\n*🔄විස්තරය* : Youtube video බාගත කරයි.\n\n*⏱විධානය*  : .yt\n*🔄විස්තරය* : Youtube හි search කරයි.\n\n*⏱විධානය*  : .mp4\n*🔄විස්තරය* : එය Direct ඔබ ලබා දෙන වීඩියෝ බාගත කරයි.\n\n*⏱විධානය*  : .wallpaper \n*🔄විස්තරය* : අහඹු ලෙස Wallpaper ලබා දෙයි.\n\n*⏱විධානය*  : .img\n*🔄විස්තරය* : ඡායාරූප බාගත කරයි.\n\n*⏱විධානය*  : .vinsta\n*🔄විස්තරය* : Instergram Video බාගත කරයි.\n\n*⏱විධානය*  : .pinsta\n*🔄විස්තරය* : Instergram Post බාගත කරයි.\n\n*⏱විධානය*  : .twt\n*🔄විස්තරය* : Twitter Video බාගත කරයි.", rowId: "rowid5"
            },
            {
                title: '🕊 ADMIN-LIST', description: "⚙පරිපාලක වරුන්ගෙ විධාන ලැයිස්තුව ලබා ගැනීම.\n\n\n*◁=====👩‍🦰Queen Alexa Admin Panel====▷*\n\n*🧞‍♀️විධානය* : .ban\n*💠විස්තරය* : ```කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩය mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයකු ටැග් කරන්න```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .mute\n*💠විස්තරය* : ```කණ්ඩායමේ chat නිශ්ශබ්ද කරන්න. පණිවිඩය යැවිය හැක්කේ admin පමණි```\n\n*🧞‍♀️විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.```\n\n*🌀විධානය* : .clear\n*💠විස්තරය* : ```Chat මකා දමයි.```\n\n*🧞‍♀️විධානය* : .promote\n*💠විස්තරය* : ```සාමාජිකයන් admin කරයි.```\n\n*🧞‍♀️විධානය* : .demote\n*💠විස්තරය* : ```Admin සාමාජිකයකු බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .plugin\n*💠විස්තරය* : ```plugin ස්ථාපනය කරන්න.```\n\n*🧞‍♀️විධානය* : .remove\n*💠විස්තරය* : ```plugin ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ ආරාධනා ලින්කුව සපයයි.```\n\n*🧞‍♀️විධානය* : .afk\n*💠විස්තරය* : ```එය bot AFK බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .restart\n*💠විස්තරය* : ```Restart the bot.```\n\n*🧞‍♀️විධානය* : .shutdown\n*💠විස්තරය* : ```Shutdown the Bot.```\n\n*🧞‍♀️විධානය* : .setvar\n*💠විස්තරය* : ```Heroku config vars සකසන්න.```\n\n*🧞‍♀️විධානය* : .getvar\n*💠විස්තරය* : ```Heroku config var ලබා ගන්න```\n\n*🧞‍♀️විධානය* : .speedtest\n*💠විස්තරය* : ``` Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.```\n\n*🧞‍♀️විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.```\n\n*🧞‍♀️විධානය* :  .stop\n*💠විස්තරය* : ``` ඔබ කලින් එකතු කළ filters නවත්වයි.```\n\n*🧞‍♀️විධානය* :  .welcome\n*💠විස්තරය* : ``` එය පිළිගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .kickme\n*💠විස්තරය* : ```එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .pp\n*💠විස්තරය* : ```ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.```\n\n*🧞‍♀️විධානය* : .block\n*💠විස්තරය* : ```Block tagged user.```\n\n*🧞‍♀️විධානය* : .unblock\n*💠විස්තරය* : ```Unblock tagged user.```\n\n*🧞‍♀️විධානය* : .jid\n*💠විස්තරය* : ```පරිශීලකයාගේ JID ලබා දෙයි.```\n\n*🧞‍♀️විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.```\n\n*🧞‍♀️විධානය* : .update\n*💠විස්තරය* : ```Updates පරීක්ෂා කරයි.```\n\n*🧞‍♀️විධානය* : .update now\n*💠විස්තරය* : ```එය බොට් update කරයි.```\n\n*🧞‍♀️විධානය* : .dyno\n*💠විස්තරය* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .sysd\n*💠විස්තරය* : ```පද්ධති සංඛ්යාලේඛන පෙන්වීම```\n\n*🌀විධානය* : .rename\n*💠විස්තරය* : සමූහයෙ නම වෙනස් කරයි.\n\n*🌀විධානය* : .safemode on -off\n*💠විස්තරය* : අර queen මේ queen ඔයාගෙ ගෲප් එක ස්පෑම් ගහන්න හැදුවොත් Auto Remove.", rowId: "rowid6"
            },
            {
                title: '🕊 ANIME-LIST', description: "⚙Ramdom ඇනිම් ලැයිස්තුව.\n\n\n*👩‍🦰Amazone Alexa Anime List*\n\n╔═════════▷\n╠🌼: .loli\n╠🌼: .wifu\n╠🌼: .neko\n╠🌼: .ava\n╠🌼: .kemo\n╠🌼: .awoo\n╠🌼: .shinobu\n╠🌼: .megumin\n╚═════════▷", rowId: "👩‍🦰ANIME-LIST"
            },
            {
                title: '🕊 MEME-LIST', description: "⚙මීම් සැකසීමෙ ලැයිස්තුව.\n\n\n*╔═════◉ᴀᴍᴀᴢᴏɴᴇ◉═════╗*\n           👩‍🦰ǫᴜᴇᴇɴ ᴀᴍᴀᴢᴏɴᴇ 🪐\n*❖═මීම් ලැයිස්තුව ᴍᴇᴍᴇ ᴘᴀᴄᴋ═❖*\n\n*💠.yasai       ❴your text❵*\n*💠.uddika    ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii             ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*💠.anura       ❴your text❵*\n*💠.gemba       ❴your text❵*\n*💠.wow       ❴your text❵*\n*💠.hapo       ❴your text❵*\n*💠.babah       ❴your text❵*\n*💠.mcn       ❴your text❵*\n*💠.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: එ.මි.ස ¡v*", rowId: "rowid8"
            },
            {
                title: '🕊 TTP-LIST', description: "⚙TTP ලැයිස්තුව.\n\n\n*◁====👩‍🦰Amazone Alexa TTP list===▷*\n\n╔══════════▷\n*╠📑: .tblue < your Text>*\n*╠📑: .tyellow < your Text>*\n*╠📑: .tgreen< your Text>*\n*╠📑: .tpink < your Text>*\n*╠📑: .tpurple < your Text>*\n*╠📑: .tred < your Text>*\n*╠📑: .tblack < your Text>*\n*╠📑: .tbrown < your Text>*\n╠📑: .tpurple < your text>\n╚══════════▷", rowId: "rowid9"
            },
            {
                title: '🕊 BOOK-LIST', description: "පොත් ලැයිස්තුව.\n\n\n*◁=====👩‍🦰Amazone සිංහල නවකතා ලැයිස්තුව====▷*\n\n🔎  .1book\n📚රාවණා\n\n🔎 .2book\n📚ශ්‍රී රාවණා පුවත\n\n🔎 .3book\n📚මළවුන්ගෙන් අවුරුදු දා\n\n🔎 .4book\n📚මළගිය ඇත්තෝ\n\n🔎 .5book\n📚ගග අද්දර\n\n🔎 .6book\n📚මීනා\n\n🔎 .7book\n📚පිච්ච මල\n\n🔎 .8book\n📚අම්මා\n\n🔎 .9book\n📚තෙරීසා\n\n🔎 .10book\n📚සෙංකොට්ටං\n\n🔎 .11book\n📚අරණකට පෙම් බැද\n\n🔎 .12book\📚ජනාධිපති තාත්තා\n\n🔎 .13book\n📚පිපියන් දාස්පෙති\n\n🔎 .14book\n📚වනගත වීරයෝ\n\n🔎 .15book\n📚මනමාල මුවැත්තී\n\n🔎 .16book\n📚සුදු රෙදි හොරා\n\n🔎 .17book\n📚ලොවීනා\n\n🔎 .18book\n📚පවුකාරයාට ගල් ගැසීම\n\n🔎 .19book\n📚ආදරෙයි බුබුළු\n\n🔎 .20book\n📚අහම්බ කාරක\n\n*⏱දිනෙන් දින මෙම ලැයිස්තුව Update වේ පොත් 2500ක් ඇතුලත් කිරීම අරමුණ වේ📑*", rowId: "rowid10"
            },
            {
                title: '🕊 APK-LIST!', description: "⚙APK ලැයිස්තුව.\n\n\nඉදිරියෙදි බලාපොරොත්තු වන්න◁===👩‍🦰Amazone Alexa MOD list===▷\n_🚀 premium Unlocked_\n\n*⚙Command* : .1apk\n*🔄App Name* : \n\n*⚙Command* : .2apk\n*🔄App Name* : FlipaClip v2.5.7\n\n*⚙Command* : .3apk\n*🔄App Name* : PDF Reader v2.18\n\n*⚙Command* : .4apk\n*🔄App Name* : Dual Space Lite\n\n*⚙Command* : .5apk\n*🔄App Name* : VivaVideo v8.11.0\n\n*⚙Command* : .6apk\n*🔄App Name* : Thumbnail Maker v11.7.1\n\n*⚙Command* : .7apk\n*🔄App Name* : Epic! v3.20.3\n\n*⚙Command* : .8apk\n*🔄App Name* : Candy Selfie v4.4.1655\n\n*⚙Command* : .9apk\n*🔄App Name* : Glitch Video Effect\n\n*⚙Command* : .10apk\n*🔄App Name* : RAR v6.02 [Pro].apk\n\n*⚙Command* : .11apk\n*🔄App Name* : Banner Maker v3.0.2\n\n*⚙Command* : .12apk\n*🔄App Name* : Hungama v5.2.31 [Pro].\n\n*⚙Command* : .13apk\n*🔄App Name* : AutoResponder for WA\n\n*⚙Command* : .14apk\n*🔄App Name* : VivaCut v2.4.5 Pro\n\n*⚙Command* : .15apk\n*🔄App Name* : XRecorder v2.1.0.2 Pro\n\n*⚙Command* : .16apk\n*🔄App Name* : ToonMe v0.6.8 Pro\n", rowId: "rowid9"
            },
            {
                title: '🕊 UPDATE!', description: "⚙UPDATE ලැයිස්තුව.\n\n\nඉදිරියෙදි බලාපොරොත්තු වන්න◁===👩‍🦰Amazone Alexa MOD list===▷\n_🚀 premium Unlocked_\n\n*⚙Command* : VOICE REPLY\n*🔄App Name* : voice reply send \n\n*⚙Command* : PLAY STORE APK\n*🔄App Name* : downloads play store app\n\n*⚙Command* : SPAM\n*🔄App Name* : send spam\n\n*⚙Command* : BUTTON DOWNLOADER\n*🔄App Name* : BUTTON DOWNLOADER\n", rowId: "rowid9"
            },
            {
                title: '🕊 ALL-COMMANDS', description: "⚙සම්පූර්ණ විධාන ලැයිස්තුව.\n\n\nසම්පූර්ණ විධාන ලැයිස්තුව ලබා ගැනීමට (.alexa) බාවිතා කරන්න", rowId: "rowid2"
            }]
            const sections = [{
                title: "𝗤𝘂𝗲𝗲𝗻 𝗔𝗹𝗲𝘅𝗮", rows: rows
            }]

            const button = {
                buttonText: 'ALEXA CMD',
                description: "*╭────────═✪═────────╮*\n  *◄◯ QUEEN ALEXA MENU ◯►*\n*╰────────═✪═────────╯*",
                sections: sections,
                listType: 1
            }

            await message.client.sendMessage(message.jid, button, MessageType.listMessage)

        }));
}
