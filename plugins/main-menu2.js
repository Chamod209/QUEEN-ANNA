let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './ANNA.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}ping_
│ _${usedPrefix}uptime_
│ _${usedPrefix}enable_
│ _${usedPrefix}alive_
│ _${usedPrefix}owner_
│ _${usedPrefix}report_
│ _${usedPrefix}bot_
│ _${usedPrefix}script_
│ _${usedPrefix}runtime_
│ _${usedPrefix}infobot_
│ _${usedPrefix}donate_
│ _${usedPrefix}groups_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}listprem_
╰─────────────⦁

╭───❮ *𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}*on/off* public_
│ _${usedPrefix}*on/off* autoreact_
│ _${usedPrefix}fullpp_
│ _${usedPrefix}update_
│ _${usedPrefix}setsudo_
│ _${usedPrefix}dltsudo_
│ _${usedPrefix}autoadmin_
│ _${usedPrefix}left_
│ _${usedPrefix}banchat_
│ _${usedPrefix}unbanchat_
│ _${usedPrefix}ban_
│ _${usedPrefix}unban_
│ _${usedPrefix}banlist_
│ _${usedPrefix}block_
│ _${usedPrefix}unblock_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}bc_
│ _${usedPrefix}bcgc_
│ _${usedPrefix}join_ 
│ _${usedPrefix}restart_
│ _${usedPrefix}setpp_
│ _${usedPrefix}setprefix_
│ _${usedPrefix}resetprefix_
│ _${usedPrefix}resetuser_
│ _${usedPrefix}getfile_
│ _${usedPrefix}getplugin_
╰─────────────⦁
${readMore} 
╭───❮ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}kick *@tag*_
│ _${usedPrefix}promote *@tag*_
│ _${usedPrefix}demote *@tag*_
│ _${usedPrefix}infogroup_
│ _${usedPrefix}getbio *@tag*_
│ _${usedPrefix}resetlink_
│ _${usedPrefix}link_
│ _${usedPrefix}*on/off* antilink_
│ _${usedPrefix}*on/off* antidelete_
│ _${usedPrefix}invite_
│ _${usedPrefix}setppgc *image*_
│ _${usedPrefix}setname *text*_
│ _${usedPrefix}setdesc *text*_
│ _${usedPrefix}setwelcome *text*_
│ _${usedPrefix}setbye *text*_
│ _${usedPrefix}hidetag *text/image/audio/vid*_
│ _${usedPrefix}warn *@tag*_
│ _${usedPrefix}unwarn *@tag*_
│ _${usedPrefix}listwarn_
│ _${usedPrefix}listnum_
│ _${usedPrefix}kicknum_
│ _${usedPrefix}group *open/close*_
│ _${usedPrefix}tagall_
╰─────────────⦁

╭───❮ *𝙵𝚄𝙽 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}character_
│ _${usedPrefix}truth_
│ _${usedPrefix}dare_
│ _${usedPrefix}flirt_
│ _${usedPrefix}gay_
│ _${usedPrefix}shayeri_
│ _${usedPrefix}ship_
│ _${usedPrefix}waste_
│ _${usedPrefix}simpcard_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}ytcomment_
│ _${usedPrefix}stupid_
│ _${usedPrefix}lolicon_
╰─────────────⦁

╭───❮ *𝙳𝙻 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}play_
│ _${usedPrefix}song_
│ _${usedPrefix}yta <link>_
│ _${usedPrefix}ytv <link>_
│ _${usedPrefix}ytmp3 <link>_
│ _${usedPrefix}ytmp4 <link>_
│ _${usedPrefix}gimage_
│ _${usedPrefix}pinterest_
│ _${usedPrefix}mediafire <link>_
│ _${usedPrefix}gdrive <link>_
│ _${usedPrefix}gitclone <link>_
│ _${usedPrefix}twitter <link>_
│ _${usedPrefix}tiktok <link>_
│ _${usedPrefix}tiktokstalk_
│ _${usedPrefix}instagram <link>_
│ _${usedPrefix}spotify_
│ _${usedPrefix}facebook <link>_
╰─────────────⦁

╭───❮ *𝙴𝙲𝙾𝙽𝙾𝙼𝚈 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}claim/daily_
│ _${usedPrefix}weekly_
│ _${usedPrefix}monthly_
│ _${usedPrefix}leaderboard_
│ _${usedPrefix}bet_
│ _${usedPrefix}heal_
│ _${usedPrefix}craft_
│ _${usedPrefix}balance_
│ _${usedPrefix}shop_
│ _${usedPrefix}sell_
│ _${usedPrefix}adventure_
│ _${usedPrefix}opencrate_
│ _${usedPrefix}mine_
│ _${usedPrefix}work_
│ _${usedPrefix}transfer_
│ _${usedPrefix}todiamond_
│ _${usedPrefix}tomoney_
╰─────────────⦁

╭───❮ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}toanime_
│ _${usedPrefix}tomp3_
│ _${usedPrefix}toimg_
│ _${usedPrefix}tovid_
╰─────────────⦁

╭───❮ *𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}botmenu_
│ _${usedPrefix}ownermenu_
│ _${usedPrefix}groupmenu_
│ _${usedPrefix}funmenu_
│ _${usedPrefix}animemenu_
│ _${usedPrefix}dlmenu_
│ _${usedPrefix}gamemenu_
│ _${usedPrefix}logomenu_
│ _${usedPrefix}stickermenu_
│ _${usedPrefix}economymenu_
│ _${usedPrefix}nsfwmenu_
│ _${usedPrefix}toolmenu_
╰─────────────⦁

╭───❮ *𝚁𝙰𝙽𝙳𝙾𝙼 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}bts_
│ _${usedPrefix}cr7_
│ _${usedPrefix}cat_
│ _${usedPrefix}coffee_
│ _${usedPrefix}cartoon_
│ _${usedPrefix}cyberspace_
│ _${usedPrefix}couplepp_
│ _${usedPrefix}dog_
│ _${usedPrefix}doraemon_
│ _${usedPrefix}ff_
│ _${usedPrefix}hacker_
│ _${usedPrefix}messi_
│ _${usedPrefix}pubg_
│ _${usedPrefix}pentol_
│ _${usedPrefix}planet_
│ _${usedPrefix}tech_
│ _${usedPrefix}wpmountain_
│ _${usedPrefix}wpgaming_
│ _${usedPrefix}wprandom_
╰─────────────⦁

╭───❮ *𝙰𝚄𝙳𝙸𝙾 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}bass_
│ _${usedPrefix}blown_
│ _${usedPrefix}deep_
│ _${usedPrefix}earrape_
│ _${usedPrefix}fat_
│ _${usedPrefix}fast_
│ _${usedPrefix}nightcore_
│ _${usedPrefix}reverse_
│ _${usedPrefix}squrrel_
│ _${usedPrefix}slow_
╰─────────────⦁

╭───❮ *𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}waifu_
│ _${usedPrefix}neko_
│ _${usedPrefix}loli_
│ _${usedPrefix}naruto_
│ _${usedPrefix}itachi_
│ _${usedPrefix}akira_
│ _${usedPrefix}asuna_
│ _${usedPrefix}akiyama_
│ _${usedPrefix}boruto_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}ayuzawa_
│ _${usedPrefix}anna_
│ _${usedPrefix}chiho_
│ _${usedPrefix}chitoge_
│ _${usedPrefix}deidara_
│ _${usedPrefix}erza_
│ _${usedPrefix}elaina_
│ _${usedPrefix}emilia_
│ _${usedPrefix}hestia_
│ _${usedPrefix}hinata_
│ _${usedPrefix}inori_
│ _${usedPrefix}isuzu_
│ _${usedPrefix}kagura_
│ _${usedPrefix}kaori_
│ _${usedPrefix}keneki_
│ _${usedPrefix}kurumi_
│ _${usedPrefix}madara_
│ _${usedPrefix}mikasa_
│ _${usedPrefix}miku_
│ _${usedPrefix}minato_
│ _${usedPrefix}nezuko_
│ _${usedPrefix}sagiri_
│ _${usedPrefix}sasuke_
│ _${usedPrefix}sakura_
│ _${usedPrefix}kotori_
╰─────────────⦁

╭───❮ *𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}tictactoe_
│ _${usedPrefix}delttt_
│ _${usedPrefix}math_
│ _${usedPrefix}math answer_
│ _${usedPrefix}ppt_
│ _${usedPrefix}slot_
│ _${usedPrefix}casino_
╰─────────────⦁

╭───❮ *𝚂𝚃𝙸𝙲𝙺𝙴𝚁  𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}sticker_
│ _${usedPrefix}take_
│ _${usedPrefix}smaker_
│ _${usedPrefix}getsticker_
│ _${usedPrefix}emix_
│ _${usedPrefix}attp_
╰─────────────⦁

╭───❮ *𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}autosticker_
│ _${usedPrefix}pdf_
│ _${usedPrefix}whatmusic_
│ _${usedPrefix}tempmail_
│ _${usedPrefix}checkmail_
│ _${usedPrefix}pokedex_
│ _${usedPrefix}calc_
│ _${usedPrefix}google_
│ _${usedPrefix}lyrics_
│ _${usedPrefix}readmore_
│ _${usedPrefix}ssweb_
│ _${usedPrefix}tts_
│ _${usedPrefix}trt_
│ _${usedPrefix}wiki_
│ _${usedPrefix}nowa_
│ _${usedPrefix}qrmaker_
│ _${usedPrefix}true_
│ _${usedPrefix}fancy_
│ _${usedPrefix}weather_
│ _${usedPrefix}alexa_
│ _${usedPrefix}itunes_
│ _${usedPrefix}technews_
╰─────────────⦁

╭───❮ *𝙽𝚂𝙵𝚆* ❯
│ _${usedPrefix}genshin_
│ _${usedPrefix}swimsuit_
│ _${usedPrefix}schoolswimsuit_
│ _${usedPrefix}white_
│ _${usedPrefix}barefoot_
│ _${usedPrefix}touhou_
│ _${usedPrefix}gamecg_
│ _${usedPrefix}hololive_
│ _${usedPrefix}uncensored_
│ _${usedPrefix}sunglasses_
│ _${usedPrefix}glasses_
│ _${usedPrefix}weapon_
│ _${usedPrefix}shirtlift_
│ _${usedPrefix}chain_
│ _${usedPrefix}fingering_
│ _${usedPrefix}flatchest_
│ _${usedPrefix}torncloth_
│ _${usedPrefix}bondage_
│ _${usedPrefix}demon_
│ _${usedPrefix}wet_
│ _${usedPrefix}pantypull_
│ _${usedPrefix}headdress_
│ _${usedPrefix}headphone_
│ _${usedPrefix}tie_
│ _${usedPrefix}anusview_
│ _${usedPrefix}shorts_
│ _${usedPrefix}stokings_
│ _${usedPrefix}topless_
│ _${usedPrefix}beach_
│ _${usedPrefix}bunnygirl_
│ _${usedPrefix}bunnyear_
│ _${usedPrefix}idol_
│ _${usedPrefix}vampire_
│ _${usedPrefix}gun_
│ _${usedPrefix}maid_
│ _${usedPrefix}bra_
│ _${usedPrefix}nobra_
│ _${usedPrefix}bikini_
│ _${usedPrefix}whitehair_
│ _${usedPrefix}blonde_
│ _${usedPrefix}pinkhair_
│ _${usedPrefix}bed_
│ _${usedPrefix}ponytail_
│ _${usedPrefix}nude_
│ _${usedPrefix}dress_
│ _${usedPrefix}underwear_
│ _${usedPrefix}foxgirl_
│ _${usedPrefix}uniform_
│ _${usedPrefix}skirt_
│ _${usedPrefix}sex_
│ _${usedPrefix}sex2_
│ _${usedPrefix}sex3_
│ _${usedPrefix}breast_
│ _${usedPrefix}twintail_
│ _${usedPrefix}spreadpussy_
│ _${usedPrefix}tears_
│ _${usedPrefix}seethrough_
│ _${usedPrefix}breasthold_
│ _${usedPrefix}drunk_
│ _${usedPrefix}fateseries_
│ _${usedPrefix}spreadlegs_
│ _${usedPrefix}openshirt_
│ _${usedPrefix}headband
│ _${usedPrefix}food_
│ _${usedPrefix}close_
│ _${usedPrefix}tree_
│ _${usedPrefix}nipples_
│ _${usedPrefix}erectnipples_
│ _${usedPrefix}horns_
│ _${usedPrefix}greenhair_
│ _${usedPrefix}wolfgirl_
│ _${usedPrefix}catgirl_
│ _${usedPrefix}nsfw_
│ _${usedPrefix}ass_
│ _${usedPrefix}boobs_
│ _${usedPrefix}lesbian_
│ _${usedPrefix}pussy_
│ _${usedPrefix}pack_
│ _${usedPrefix}xvid_
│ _${usedPrefix}xnxx_
╰─────────────⦁

╭───❮ *𝙼𝙰𝚁𝙺𝙴𝚁* ❯
│ _${usedPrefix}blur_
│ _${usedPrefix}difuminar2_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}hornylicense_
│ _${usedPrefix}gfx1_
│ _${usedPrefix}gfx2_
│ _${usedPrefix}gfx3_
│ _${usedPrefix}gfx4_
│ _${usedPrefix}gfx5_
│ _${usedPrefix}gfx6_
│ _${usedPrefix}gfx7_
│ _${usedPrefix}gfx8_
│ _${usedPrefix}gfx9_
│ _${usedPrefix}gfx10_
│ _${usedPrefix}gfx11_
│ _${usedPrefix}gfx12_
│ _${usedPrefix}simpcard_
│ _${usedPrefix}itssostupid_
│ _${usedPrefix}iss_
│ _${usedPrefix}stupid_
│ _${usedPrefix}tweet <comment>_
│ _${usedPrefix}lolicon_
│ _${usedPrefix}ytcomment <comment>
╰─────────────⦁

╭───❮  *𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰* ❯
│      𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈
│   𝚃𝙾𝙶𝙴 𝙸𝙽𝚄𝙼𝙰𝙺𝙸☘️
╰────────────⦁`  
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('📃')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'list'] 

export default handler 
  
