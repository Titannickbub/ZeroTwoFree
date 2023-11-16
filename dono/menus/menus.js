//DEFINIÇÕES 

//Dinheiro a ser resgatado diariamente 
const dinheiro_resgate = 100
const emoji = ` `
const aviso = ``

const menu = (prefix, NomeDoBot, sender) => {
  //MENU PRINCIPAL 
// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 📃MENU PRINCIPAL📃
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji}📃LISTA DE MENUS📃
┃├──────────
┃├${emoji} ${prefix}Info ℹ️
┃├${emoji} ${prefix}Stikers💟
┃├${emoji} ${prefix}Menudono🔰
┃├${emoji} ${prefix}Menuadm🛡️
┃├${emoji} ${prefix}Menu18 🔞
┃├${emoji} ${prefix}Menupremium 👑
┃├${emoji} ${prefix}Logos 🖌️
┃├${emoji} ${prefix}Pesquisas🔍
┃├${emoji} ${prefix}Downloads 📥📤
┃├${emoji} ${prefix}Alteradores 🎥 🎶
┃├${emoji} ${prefix}Brincadeiras ⚽
┃├${emoji} ${prefix}Loja 🛍️
┃├${emoji} ${prefix}inventario📦
┃└──────────
┃┌──────────
┃├${emoji} 🔧SUPORTE/INFO🔧
┃├──────────
┃├${emoji} ${prefix}Dono 🔷
┃├${emoji} ${prefix}Sugestao (DICA) ✅
┃├${emoji} ${prefix}Bug (QUESTIONE) ⚠️
┃├${emoji} ${prefix}Avalie (O-QUAO-BOM) ✅
┃├${emoji} ${prefix}Alugar_bot💵
┃└──────────
┃┌──────────
┃├${emoji} 🪙MONEY/LOJA🪙
┃├──────────
┃├${emoji} ${prefix}Resgatar💴
┃├${emoji} ${prefix}Saldo💴
┃├${emoji} ${prefix}Rifa 🎟️
┃├${emoji} ${prefix}Cassino 🎰
┃├${emoji} ${prefix}Roleta_n (numero/aposta) 🎰
┃└──────────
┃┌──────────
┃├${emoji}🎮JOGOS🎮
┃├──────────
┃├${emoji} ${prefix}Iniciar_forca ➰
┃├${emoji} ${prefix}Ppt (PEDRA/PAPEL/TESOURA) 🪨📄✂️
┃├${emoji} ${prefix}Jogodavelha (@MARCAR) ❌⭕
┃└──────────
┗━━━━━━━━━━━
`;
};


const menustk = (prefix,NomeDoBot,sender) => {
  ///MENU DE FIGURINHAS 
  return`${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji}💟 FIGURINHAS 💟
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji}✍️CRIAR FIGURINHAS✍️
┃├──────────
┃├${emoji} ${prefix}Fsticker (MARCAR-FOTO)💟
┃├${emoji} ${prefix}Sticker (MARCAR-FOTO)💟
┃├${emoji} ${prefix}Figsemfundo (MARCAR-FOTO)💟
┃├${emoji} ${prefix}Triggered (MARCAR-FOTO)💟👑
┃├${emoji} ${prefix}Placaloli (TEXT)🪧
┃└──────────
┃┌──────────
┃├${emoji} 😁FIGU DE EMOJI😁
┃├──────────
┃├${emoji} ${prefix}Emoji 😏/whatsapp 👑
┃├${emoji} ${prefix}Emojimix 😉+🙂 👑
┃└──────────
┃┌──────────
┃├${emoji} ↩️REVERTER FIGU↩️
┃├──────────
┃├${emoji} ${prefix}Toimg (MARCAR-FIGU)🖼️
┃├${emoji} ${prefix}Togif (MARCAR-FIGU)🎥
┃└──────────
┃┌──────────
┃├${emoji} 🔫Roubar figurinha🔫
┃├──────────
┃├${emoji} ${prefix}Rbale (MARCAR FIGU)👮
┃├${emoji} ${prefix}Roubar (TEXT)📝
┃└──────────
┃┌──────────
┃├${emoji} 🎨TEXTO RGB🎨
┃├──────────
┃├${emoji} ${prefix}Attp (TEXTO)🎨
┃└──────────
┃┌──────────
┃├${emoji} 📩FIGU DE BOLHA DO WHATS📩
┃├──────────
┃├${emoji} ${prefix}Qc (TEXTO)🤍
┃├${emoji} ${prefix}Qc2 (TEXTO)💌
┃├${emoji} ${prefix}Qcdark (TEXTO)💌
┃├${emoji} ${prefix}Qcdark2 (TEXTO)💌
┃├${emoji} ${prefix}Qcblack (TEXTO)🖤
┃├${emoji} ${prefix}Qccinza (TEXTO)🩶
┃├${emoji} ${prefix}Qcroxo (TEXTO)💜
┃├${emoji} ${prefix}Qcamar (TEXTO)💛
┃├${emoji} ${prefix}Qcred (TEXTO)❤️
┃├${emoji} ${prefix}Qcrosa (TEXTO)🩷
┃├${emoji} ${prefix}Qcpink (TEXTO)💗
┃├${emoji} ${prefix}Qcwgre (TEXTO)💚
┃├${emoji} ${prefix}Qcdgre (TEXTO)💚🖤
┃├${emoji} ${prefix}Qcwazul (TEXTO)💙
┃├${emoji} ${prefix}Qcdazul (TEXTO)💙🖤
┃├${emoji} ${prefix}Qccyan (TEXTO)🩵
┃├${emoji} ${prefix}Qclar (TEXTO)🧡
┃├${emoji} ${prefix}Qctrans (TEXTO)🤍
┃├${emoji} ${prefix}Qctrans2 (TEXTO)🖤
┃└──────────
┗━━━━━━━━━━━

`
}



const menu18 = (prefix, sender, NomeDoBot) => {
return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 🔞MENU ADULTO🔞
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji}🇯🇵IMAGENS ANIME🇯🇵
┃├──────────
┃├${emoji} ${prefix}cuckold 😈
┃├${emoji} ${prefix}cum 😈
┃├${emoji} ${prefix}ero 😈
┃├${emoji} ${prefix}femdom 😈
┃├${emoji} ${prefix}foot 😈
┃├${emoji} ${prefix}gangbang 😈
┃├${emoji} ${prefix}glasses 😈
┃├${emoji} ${prefix}jahy 😈
┃├${emoji} ${prefix}manga 😈
┃├${emoji} ${prefix}hentai 😈
┃├${emoji} ${prefix}ahegao 😈
┃├${emoji} ${prefix}ass 😈
┃├${emoji} ${prefix}bdsm 😈
┃├${emoji} ${prefix}blowjob 😈
┃├${emoji} ${prefix}masturbation 😈
┃├${emoji} ${prefix}neko 😈
┃├${emoji} ${prefix}orgy 😈
┃├${emoji} ${prefix}panties 😈
┃├${emoji} ${prefix}pussy 😈
┃├${emoji} ${prefix}neko2 😈
┃├${emoji} ${prefix}tentacles 😈
┃├${emoji} ${prefix}thighs 😈
┃├${emoji} ${prefix}yuri 😈
┃├${emoji} ${prefix}zettai 😈
┃└──────────
┗━━━━━━━━━━━
`
}
const dowloads = (prefix, sender , NomeDoBot) =>{
  //MENU DE DOWNLOADS
return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 📩 DOWNLOADS 📩
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 🔗LINKS🔗
┃├──────────
┃├${emoji} ${prefix}Imgpralink (imagem)🔗
┃├${emoji} ${prefix}Videopralink (Video)🔗
┃├${emoji} ${prefix}Dowloadlink (link)🔗
┃├${emoji} ${prefix}Encurtalink (link)🔗
┃└──────────
┃┌──────────
┃├${emoji} ▶️ MUSICA/VIDEO/YOUTUBE ️▶️
┃├──────────
┃├${emoji} ${prefix}Play_audio (nome/link)📥🎶
┃├${emoji} ${prefix}Play_video (nome/link)📥📼
┃├${emoji} ${prefix}YouTube (nome)
┃└──────────
┃┌──────────
┃├${emoji} 📷 INSTAGRAM 📷
┃├──────────
┃├${emoji} ${prefix}Instagram (Reels/story)📥📼
┃├${emoji} ${prefix}Insta_video (Reels/story)📥📼
┃├${emoji} ${prefix}Insta_audio (Reels/story📥🎶
┃└──────────
┃┌──────────
┃├${emoji} 🎵TIKTOK SEM MARCA🎵
┃├──────────
┃├${emoji} ${prefix}Tiktok_video (Link)📥📼
┃├${emoji} ${prefix}Tiktok_audio (Link)📥🎶
┃└──────────
┃┌──────────
┃├${emoji} 🟦 FACEBOOK 🟦
┃├──────────
┃├${emoji} ${prefix}Face_video (Link)📥📼
┃├${emoji} ${prefix}Face_audio (Link)📥🎶
┃└──────────
┃┌──────────
┃├${emoji} 🐦 TWITTER 🐦
┃├──────────
┃├${emoji} ${prefix}Twitter_video (Link)📥📼
┃├${emoji} ${prefix}Twitter_audio (Link)📥🎶
┃└──────────
┗━━━━━━━━━━━
`
}
const menuprem = (prefix, sender,NomeDoBot,comandos) => { 
//MENU PREMIUM 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 👑 COMANDOS VIP 👑
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 👑 COMANDOS VIP 👑
┃├──────────
${comandos}┃└──────────
┗━━━━━━━━━━━
`;
};

const noticias = (prefix,NomeDoBot) => {
  return`${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} ℹ️ NOTÍCIAS ℹ️
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃└──────────
┗━━━━━━━━━━━
`
}

const pesquisas = (prefix,NomeDoBot) => {
return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 🔍 PESQUISAS 🔍
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃└──────────
┃┌──────────
┃├${emoji} 🧠 IAS 🧠
┃├──────────
┃├${emoji} ${prefix}GPT (texto)🤖
┃└──────────
┃┌──────────
┃├${emoji} 🔍 PESQUISA TEXTO 🔍
┃├──────────
┃├${emoji} ${prefix}Pesquisa (texto)🔍
┃├${emoji} ${prefix}Ytsearch (Texto)🔍
┃├${emoji} ${prefix}Celular (modelo)📱
┃├${emoji} ${prefix}Signo (seu signo)♉
┃├${emoji} ${prefix}playstore (app)▶️
┃└──────────
┃┌──────────
┃├${emoji} 🖼️ PESQUISA IMAGEM 🖼️
┃├──────────
┃├${emoji} ${prefix}Gimage 🌐
┃├${emoji} ${prefix}Pinterest (Texto)🖼️
┃└──────────
┗━━━━━━━━━━━

`;

}
/*
┃├${emoji} ${prefix}Destrava 🈚
┃├${emoji} ${prefix}Destrava2🈚
┃├${emoji} ${prefix}GerarCPF📃
┃├${emoji} ${prefix}Signo (seu signo)♑
*/
const apps = (prefix,NomeDoBot,sender) =>{
  //LISTA DE APPS
 return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 📱APPS📱
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 📱 ANDROID 📱
┃├──────────
┃├${emoji} Disponível na Loja🛍️
┃├${emoji} ${prefix}Loja 🛍️
┃└──────────
┗━━━━━━━━━━━
`
}
const menuinfo = (prefix, NomeDoBot, sender) => {
  //MENU DE INFORMAÇÕES 
  return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} ℹ️ INFORMAÇÕES ℹ️
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 👑LOJA/ALUGUEL/VIP💱
┃├──────────
┃├${emoji} ${prefix}Info_vip👑
┃├${emoji} ${prefix}Lojamaker🛍️
┃├${emoji} ${prefix}info_loja🛍️
┃├${emoji} ${prefix}Recargas 💱
┃├${emoji} ${prefix}Alugar_bot 💱
┃└──────────
┃┌──────────
┃├${emoji} 📃 OUTROS COMANDOS 📃
┃├──────────
┃├${emoji} ${prefix}Infoduelo⚔️
┃├${emoji} ${prefix}Infotransmitir📢
┃├${emoji} ${prefix}Infoaluguel💵
┃├${emoji} ${prefix}InfoMultiPrefixo👥
┃├${emoji} ${prefix}InfoBemvindo🏠
┃├${emoji} ${prefix}Infopalavrão🤬
┃├${emoji} ${prefix}Infolistanegra🚫
┃├${emoji} ${prefix}Infobancarac📝
┃├${emoji} ${prefix}InfoBanghost👻
┃├${emoji} ${prefix}Infosorteio🎰
┃├${emoji} ${prefix}InfoAnotação 📝
┃└──────────
┃┌──────────
┃├${emoji} 🤖BOT E GRUPO🤖
┃├──────────
┃├${emoji} ${prefix}Ping (VELO) 💨
┃├${emoji} ${prefix}Gitdobot 📥
┃├${emoji} ${prefix}Atividade📫
┃├${emoji} ${prefix}Rankativo📫
┃├${emoji} ${prefix}Checkativo (@MARCAR)📫
┃├${emoji} ${prefix}Ranklevel (DE-TODOS) 🏅
┃└──────────
┗━━━━━━━━━━━
`
};
//DIVISÓRIA ANTES DOS PRODUTOS 
exports.meioloja = `┃├${emoji} `;
const loja = (prefix, NomeDoBot, sender,lista_de_loja) => {
return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 🛍 ️LOJA 🛍️
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 💸 COMPRAR/USAR PRODUTOS 💸
┃├──────────
┃├${emoji} ${prefix}ver (produto na loja)🛍️
┃├${emoji} ${prefix}Comprar (produto)🛍️
┃├${emoji} ${prefix}Inventario📦
┃├${emoji} ${prefix}verinv (item no inventário) 📦
┃├${emoji} ${prefix}Usar (produto do inv)📦
┃└──────────
┃┌──────────
┃├${emoji} ⚙️CRIAR/EDIT PRODUTOS⚙️
┃├──────────
┃├${emoji} ${prefix}lojamaker 🛍️🖌️
┃├${emoji} ${prefix}Novoproduto 🆕
┃├${emoji} ${prefix}Ver_template 🖌️🛍️
┃├${emoji} ${prefix}Setpdr (function)🖌️🛍️
┃├${emoji} ${prefix}Salvarpdr ✅
┃├${emoji} ${prefix}Editar_Produto(nome) 🖊️
┃└──────────
┃┌──────────
┃├${emoji} 🛍 RECARREGAR ¥ 🛍️
┃├──────────
┃├${emoji} ${prefix}Recargas💵
┃├${emoji} ${prefix}Rifa 🎟️
┃└──────────
┃┌──────────
┃├${emoji} 🛍 PRODUTOS ️🛍️
┃├──────────
${lista_de_loja}┃└──────────
┗━━━━━━━━━━━
`
}

const inventario = (prefix, NomeDoBot, sender, pushname) => {
  
// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 📦 INVENTÁRIO 📦
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} ▶️ USAR/VER ITENS ▶️
┃├──────────
┃├${emoji} ${prefix}verinv (item no inventário) 📦
┃├${emoji} ${prefix}Usar (item do inventário ) ▶️
┃└──────────
`;
}
exports.inventario = inventario ;
exports.divinventario = 
`┃┌──────────
┃├${emoji} 📦 SEUS ITENS 📦
┃├──────────
`;
exports.divinventario2 = ``;
exports.meioinventario = `┃├${emoji} `;
exports.meioinventario2 = `┃`;
const  baseinventario = (NomeDoBot) => {
  return `┃└──────────
┗━━━━━━━━━━━
`}

exports.baseinventario = baseinventario

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

// MENU DE ADMINISTRADORES 

const adms = (prefix,NomeDoBot, sender) => { 
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
	return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 🛡️MENU DOS ADMS🛡️
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} ⚙️ CONFIG DO GRUPO ⚙️
┃├──────────
┃├${emoji} ${prefix}Status ⚙️
┃├${emoji} ${prefix}Grupoinfo ℹ️
┃├${emoji} ${prefix}so_adm 🛡️
┃├${emoji} ${prefix}Atividades (DO-GRUPO) 🗓️
┃├${emoji} ${prefix}Linkgp 🔗
┃├${emoji} ${prefix}Descgp (TXT)📝
┃├${emoji} ${prefix}Nomegp (Nome)📝
┃├${emoji} ${prefix}Grupo f/a 🔒🔓
┃├${emoji} ${prefix}Limpar (texto-invisível-gp)🧼
┃└──────────
┃┌──────────
┃├${emoji} ♊ MARCAR ♊
┃├──────────
┃├${emoji} ${prefix}Marcar (marca tds do gp)♊
┃├${emoji} ${prefix}Marcar2 (Marca-tds-Wa.me/)♊
┃├${emoji} ${prefix}Totag (menciona-algo)♊
┃├${emoji} ${prefix}Hidetag (txt) (marcação)♊
┃└──────────
┃┌──────────
┃├${emoji} 🚫 BANIR/PROMOVER 🚫
┃├──────────
┃├${emoji} ${prefix}Kick [@] (pra-remover) ☢️
┃├${emoji} ${prefix}Ban (responder-mensagem)☢️
┃├${emoji} ${prefix}listanegra (NÚMERO) ⛔
┃├${emoji} ${prefix}tirardalista (NÚMERO)⛔🗑️
┃├${emoji} ${prefix}listanegraG (NÚMERO) ⛔
┃├${emoji} ${prefix}tirardalistaG (NÚMERO)⛔🗑️
┃├${emoji} ${prefix}Promover [@] (Ser-ADM)🛡️
┃├${emoji} ${prefix}Rebaixar [@] (rebaixar-adm)🚫🛡️
┃└──────────
┃┌──────────
┃├${emoji} 🛡 SEGURANÇA ️🛡️
┃├──────────
┃├${emoji} ${prefix}Antipalavrão 1 / 0🤬
┃├${emoji} ${prefix}Antipalavra 1 / 0📝🚫
┃├${emoji} ${prefix}Antilink 1 / 0 🚫🔗
┃├${emoji} ${prefix}Antilinkgp 1 / 0 🚫👥
┃├${emoji} ${prefix}Antinotas 1 / 0 🚫💷
┃├${emoji} ${prefix}limitecaracteres 1 / 0 🚫📘
┃├${emoji} ${prefix}Antifake 1 / 0 🚫🇺🇲
┃├${emoji} ${prefix}Antivideo 1 / 0 🚫🎥
┃├${emoji} ${prefix}Anticatalogo 1 / 0 🚫🏪
┃├${emoji} ${prefix}Antiloc 1 / 0 🚫📍
┃├${emoji} ${prefix}Antiimg 1 / 0 🚫🖼️
┃├${emoji} ${prefix}Antiaudio 1 / 0 🚫▶️
┃├${emoji} ${prefix}Antidoc 1 / 0 🚫📁
┃├${emoji} ${prefix}anticontato 1 / 0 🚫👤
┃├${emoji} ${prefix}antisticker 1 / 0 🚫💟
┃└──────────
┃┌──────────
┃├${emoji} 🌸 RECEPÇÃO E GAMES🌸
┃├──────────
┃├${emoji} ${prefix}Enquete (titulo/ops)❓
┃├${emoji} ${prefix}Anagrama 1 / 0
┃├${emoji} ${prefix}ModoNSFW 1 / 0 🔞
┃├${emoji} ${prefix}X9 1 / 0 📣🛡️
┃├${emoji} ${prefix}X9visuunica 1 / 0📣1️⃣
┃├${emoji} ${prefix}Modobrincadeira 1 / 0⚽
┃├${emoji} ${prefix}BemVindo 1 / 0📣🎉📷
┃├${emoji} ${prefix}BemVindo2 1 / 0📣🎉
┃├${emoji} ${prefix}Leveling 1 / 0 🎮
┃├${emoji} ${prefix}Simih 1 / 0 🙋🏻‍♀️
┃├${emoji} ${prefix}Autorepo 1 / 0 🤖
┃└──────────
┃┌──────────
┃├${emoji} 📝 ANOTAÇÕES 📝
┃├──────────
┃├${emoji} ${prefix}Criartabela (ESCREVA-ALGO)🧱
┃├${emoji} ${prefix}Tabelagp🧱
┃├${emoji} ${prefix}Anotar (titulo/anotação)
┃├${emoji} ${prefix}Nota (Anotação)
┃├${emoji} ${prefix}Anotações (todas)
┃└──────────
┗━━━━━━━━━━━
`;
};
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
// MENU DE DONO
const menudono = (prefix, sender,NomeDoBot) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode alterar ele tod0, menos as definições, só se quiser apagar a definição completa. 	
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 🔰 MENU DO DONO 🔰
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 👑 PREMIUM/VIP 👑
┃├──────────
┃├${emoji} ${prefix}Premiumgp 1/0👥👑
┃├${emoji} ${prefix}PremiumList📃
┃├${emoji} ${prefix}Serpremium👑
┃├${emoji} ${prefix}Delpremium @(marca)👑
┃├${emoji} ${prefix}Addpremium @(marca)👑
┃├${emoji} ${prefix}Addvipd @(marca <dias>)👑
┃├${emoji} ${prefix}Setvipd @(marca <dias>)👑
┃├${emoji} ${prefix}Addcmdvip @(marca)👑
┃├${emoji} ${prefix}Delcmdvip @(marca)👑
┃└──────────
┃┌──────────
┃├${emoji} 💳 ALUGUEL 💳
┃├──────────
┃├${emoji} ${prefix}Set_dias_al (dias)💳
┃├${emoji} ${prefix}add_dias_al (dias)💳
┃└──────────
┃┌──────────
┃├${emoji} 💱 MONEY 💱
┃├──────────
┃├${emoji} ${prefix}Recarregar(marcar/money) 💴
┃├${emoji} ${prefix}Delmoney(marcar/money) 💴
┃└──────────
┃┌──────────
┃├${emoji} 🎟 RIFA ️🎟️
┃├──────────
┃├${emoji} ${prefix}Resetar_rifa🎟️
┃├${emoji} ${prefix}Setrifa🎟️🔧
┃├${emoji} ${prefix}Lista_rifa🎟️
┃├${emoji} ${prefix}Addrifa (marca mensagem)➕🎟️
┃└──────────
┃┌──────────
┃├${emoji} 🌸 WELLCOME 🌸
┃├──────────
┃├${emoji} ${prefix}Legenda_estrangeiro (msg)📝
┃├${emoji} ${prefix}Legendabv (oq qr)📝
┃├${emoji} ${prefix}Legendasaiu (oq qr)📝
┃├${emoji} ${prefix}Legendasaiu2 (oq qr)📝
┃├${emoji} ${prefix}Legendabv2 (oq qr)📝
┃├${emoji} ${prefix}Fundobemvindo (marcar-img)🖼️
┃├${emoji} ${prefix}Fundosaiu (marcar-img)🖼️
┃└──────────
┃┌──────────
┃├${emoji} 🤖 SOBRE O BOT 🤖
┃├──────────
┃├${emoji} ${prefix}Configurar-bot⚙️
┃├${emoji} ${prefix}Fotomenu (MARCAR-IMG) 🖼️
┃├${emoji} ${prefix}Antipv 🚫
┃├${emoji} ${prefix}Antipv2 📨
┃├${emoji} ${prefix}Boton 🟢
┃├${emoji} ${prefix}Botoff 🔴
┃├${emoji} ${prefix}Visualizarmsg ✅
┃├${emoji} ${prefix}Console 🖥️
┃├${emoji} ${prefix}Setprefix  (prefixo-novo)❗
┃├${emoji} ${prefix}Antiligar 1 / 0📞
┃├${emoji} ${prefix}Block [@] (bloq de usar cmds) 🚫
┃├${emoji} ${prefix}Unblock [@] (desbloquear) 🚫
┃├${emoji} ${prefix}Ativo 🟢
┃├${emoji} ${prefix}Ausente (fale-oq-faz)🔴
┃├${emoji} ${prefix}broxyskey
┃├${emoji} ${prefix}Clonar [@] (rouba ft de prf)🫣
┃├${emoji} ${prefix}Fotobot (img, = foto do BT)🖼️
┃├${emoji} ${prefix}Descriçãogp (digite-algo)📝
┃├${emoji} ${prefix}Bcgp (TM-PRA-PV-MEMBROS) 📣
┃└──────────
┃┌──────────
┃├${emoji} 🟢 GRUPOS 🟢
┃├──────────
┃├${emoji} ${prefix}Blockcmd  (cmd) 🚫
┃├${emoji} ${prefix}Unblockcmd (cmd)🚫
┃├${emoji} ${prefix}Bangp ⛔
┃├${emoji} ${prefix}Unbangp⛔
┃├${emoji} ${prefix}Listagp📄
┃├${emoji} ${prefix}Addpalavra (palavrão)🤬
┃├${emoji} ${prefix}Delpalavra (palavrão)🤬
┃└──────────
┗━━━━━━━━━━━
`;
};
// MENU DE LOGOS 
const menulogos = (prefix, sender, NomeDoBot) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 🖌 LOGOS ️🖌️
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 🖌 2 TEXTOS️ 🖌️
┃├──────────
┃├${emoji} ${prefix}Comporn (txt|txt) 
┃├${emoji} ${prefix}Pornhub (txt|txt) 
┃├${emoji} ${prefix}Glitch (txt|txt)
┃├${emoji} ${prefix}Glitch3 (txt|txt)
┃├${emoji} ${prefix}Grafity (txt|txt)
┃├${emoji} ${prefix}Space (txt|txt)
┃├${emoji} ${prefix}Marvel (txt|txt)
┃├${emoji} ${prefix}America (txt|txt)
┃├${emoji} ${prefix}Stone (txt|txt)
┃├${emoji} ${prefix}Steel (txt|txt)
┃└──────────
┃┌──────────
┃├${emoji} 🖌 1 TEXTO ️🖌️
┃├──────────
┃├${emoji} ${prefix}Angelwing (txt)
┃├${emoji} ${prefix}Fpsmascote (txt)
┃├${emoji} ${prefix}Equipemascote (txt)
┃├${emoji} ${prefix}Txtquadrinhos (txt)
┃├${emoji} ${prefix}Ffavatar (txt)
┃├${emoji} ${prefix}Mascotegame (txt)
┃├${emoji} ${prefix}Gizquadro (txt)
┃├${emoji} ${prefix}Wingeffect (txt)
┃├${emoji} ${prefix}Blackpink (txt)
┃├${emoji} ${prefix}Metalgold (txt)
┃├${emoji} ${prefix}Girlmascote (txt)
┃├${emoji} ${prefix}Logogame (txt)
┃├${emoji} ${prefix}Fiction (txt)
┃├${emoji} ${prefix}3dstone (txt)
┃├${emoji} ${prefix}Areia (txt)
┃├${emoji} ${prefix}Style (txt)
┃├${emoji} ${prefix}Blood (txt)
┃├${emoji} ${prefix}Pink (txt)
┃├${emoji} ${prefix}Cattxt (txt)
┃├${emoji} ${prefix}Neondevil (txt)
┃├${emoji} ${prefix}Carbon (txt)
┃├${emoji} ${prefix}Metalfire (txt)
┃├${emoji} ${prefix}Metalblue (txt)
┃├${emoji} ${prefix}Metalgold (txt)
┃├${emoji} ${prefix}Thunder (txt)
┃├${emoji} ${prefix}Thunderv2 (txt)
┃├${emoji} ${prefix}Vidro (txt)
┃├${emoji} ${prefix}Jokerlogo (txt)
┃├${emoji} ${prefix}Transformer (txt)
┃├${emoji} ${prefix}Demonfire (txt)
┃├${emoji} ${prefix}Jeans (txt)
┃├${emoji} ${prefix}Natal (txt)
┃├${emoji} ${prefix}Ossos (txt)
┃├${emoji} ${prefix}Asfalto (txt)
┃├${emoji} ${prefix}Break (txt)
┃├${emoji} ${prefix}Glitch2 (txt)
┃├${emoji} ${prefix}Colaq (txt)
┃├${emoji} ${prefix}Neongreen (txt)
┃├${emoji} ${prefix}Neon (txt)
┃├${emoji} ${prefix}Neon1 (txt)
┃├${emoji} ${prefix}Neon2 (txt)
┃├${emoji} ${prefix}Neon3 (txt)
┃├${emoji} ${prefix}Neon3d (txt)
┃├${emoji} ${prefix}Hackneon (txt)
┃├${emoji} ${prefix}Efeitoneon (txt)
┃├${emoji} ${prefix}Nuvem (txt)
┃├${emoji} ${prefix}Horror (txt)
┃├${emoji} ${prefix}Matrix (txt)
┃├${emoji} ${prefix}Berry (txt)
┃├${emoji} ${prefix}Luxury (txt)
┃├${emoji} ${prefix}Lava (txt)
┃├${emoji} ${prefix}Fire (txt)
┃├${emoji} ${prefix}Neve (txt)
┃├${emoji} ${prefix}Gelo (txt)
┃├${emoji} ${prefix}3dgold (txt)
┃├${emoji} ${prefix}Lapis (txt)
┃├${emoji} ${prefix}Toxic (txt)
┃├${emoji} ${prefix}Demongreen (txt)
┃├${emoji} ${prefix}Rainbow (txt)
┃├${emoji} ${prefix}Halloween (txt)
┃├${emoji} ${prefix}Shadow (txt)
┃├${emoji} ${prefix}Cup (txt)
┃├${emoji} ${prefix}Coffecup (txt)
┃├${emoji} ${prefix}Coffecup2 (txt)
┃├${emoji} ${prefix}Txtborboleta (txt)
┃├${emoji} ${prefix}Cemiterio (txt)
┃├${emoji} ${prefix}Harryp (txt)
┃├${emoji} ${prefix}Lobometal (txt)
┃├${emoji} ${prefix}Madeira (txt)
┃├${emoji} ${prefix}Lovemsg (txt)
┃├${emoji} ${prefix}Lovemsg2 (txt)
┃├${emoji} ${prefix}Lovemsg3 (txt)
┃├${emoji} ${prefix}Florwooden (txt)
┃├${emoji} ${prefix}Narutologo (txt)
┃├${emoji} ${prefix}Romantic (txt)
┃├${emoji} ${prefix}Smoke (txt)
┃├${emoji} ${prefix}Papel (txt)
┃└──────────
┗━━━━━━━━━━━
`;
};
// MENU DE ALTERAR ÁUDIOS E VÍDEOS
const alteradores = (prefix, sender, NomeDoBot) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return`${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 🎵 ALTERNADORES 📼
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 📼 VIDEO 📼
┃├──────────
┃├${emoji} ${prefix}Videolento (marca)🐌
┃├${emoji} ${prefix}Videorapido (marca)🐇
┃├${emoji} ${prefix}Videocontrario (marca)⏪
┃└──────────
┃┌──────────
┃├${emoji} 🎵 AUDIO 🎵
┃├──────────
┃├${emoji} ${prefix}Audiolento (marca)🐌
┃├${emoji} ${prefix}Audiorapido (marca)🐇
┃├${emoji} ${prefix}Grave (marca)🔊
┃├${emoji} ${prefix}Grave2 (marca)🔊
┃├${emoji} ${prefix}Esquilo (marca)🐿️
┃├${emoji} ${prefix}Estourar (marca)🧨
┃├${emoji} ${prefix}Bass (marca)🔊
┃├${emoji} ${prefix}Bass2 (marca)🔊
┃├${emoji} ${prefix}Vozmenino (marca)👦
┃└──────────
┃┌──────────
┃├${emoji} 🖼️ IMAGENS 🖼️
┃├──────────
┃├${emoji} ${prefix}Legenda (marcar)-(img)📜
┃├${emoji} ${prefix}Procurado (marcar)-(img)⛓️
┃├${emoji} ${prefix}Hitler (marcar)-(img)🇩🇪
┃├${emoji} ${prefix}Preso (marcar)-(img)⛓️
┃├${emoji} ${prefix}Lixo (marcar)-(img)🗑️
┃├${emoji} ${prefix}Deletem (marcar)-(img)🖥️
┃├${emoji} ${prefix}Morto (marcar)-(img) ☠️
┃├${emoji} ${prefix}Lgbt (marcar)-(img)🏳️‍🌈
┃└──────────
┗━━━━━━━━━━━
`;
};
// MENU DE BRINCADEIRAS.. 
const brincadeiras = (prefix, sender,NomeDoBot) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} ⚽ BRINCADEIRAS ⚽
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 🤣 PORCENTAGENS 🤣
┃├──────────
┃├${emoji} ${prefix}Gay2 (marca (@))🏳️‍🌈
┃├${emoji} ${prefix}Punheteiro2 (marca (@)) 💦😏
┃├${emoji} ${prefix}Preto2 (marca (@))⬛
┃├${emoji} ${prefix}Pobre2 (marca (@))💲
┃├${emoji} ${prefix}Feio2 (marca (@)) 👹
┃├${emoji} ${prefix}Corno2 (marca (@))🐂
┃├${emoji} ${prefix}Vesgo2 (marca (@))😵‍💫
┃├${emoji} ${prefix}Bebado2 (marca (@))🫨
┃├${emoji} ${prefix}Gostoso2 (marca (@))😋
┃├${emoji} ${prefix}Gostosa2 (marca (@))😋
┃├${emoji} ${prefix}Chance (fale algo) 🔢
┃└──────────
┃┌──────────
┃├${emoji} 🫣 AÇÕES 🫣
┃├──────────
┃├${emoji} ${prefix}Beijo (marca (@))😘
┃├${emoji} ${prefix}Matar (marca (@))☠️
┃├${emoji} ${prefix}Tapa (marca (@))👋
┃├${emoji} ${prefix}Chute (marca (@))🦵
┃├${emoji} ${prefix}Dogolpe (marca (@)) 🎩
┃├${emoji} ${prefix}Nazista (marca (@))🇩🇪
┃└──────────
┃┌──────────
┃├${emoji} 💹 RANKS/CASAL 💹
┃├──────────
┃├${emoji} ${prefix}Casal 👩🏻‍❤️‍💋‍👨🏻
┃├${emoji} ${prefix}Rankgay 🏳️‍🌈
┃├${emoji} ${prefix}Rankgado🐂
┃├${emoji} ${prefix}Rankcorno  🐂
┃├${emoji} ${prefix}Rankgostoso😋
┃├${emoji} ${prefix}Rankgostosa😋
┃├${emoji} ${prefix}Ranknazista🇩🇪
┃├${emoji} ${prefix}Rankotakus⛩️
┃├${emoji} ${prefix}Rankpau🪵
┃└──────────
┃┌──────────
┃├${emoji} 🕹 BRINCADEIRAS 2 ️🕹️
┃├──────────
┃├${emoji} ${prefix}legal (marcar) 🎉
┃├${emoji} ${prefix}louco (marcar) 🎉	
┃├${emoji} ${prefix}louca (marcar) 🎉	
┃├${emoji} ${prefix}traumatizado (marcar) 🎉	
┃├${emoji} ${prefix}traumatizada (marcar) 🎉	
┃├${emoji} ${prefix}chifre (marcar) 🎉
┃├${emoji} ${prefix}leal (marcar) 🎉		
┃├${emoji} ${prefix}inteligente (marcar) 🎉	
┃├${emoji} ${prefix}magra (marcar) 🎉	
┃├${emoji} ${prefix}wandinha (marcar) 🎉	
┃├${emoji} ${prefix}cheirosa (marcar) 🎉	
┃├${emoji} ${prefix}bunnie (marcar) 🎉	
┃├${emoji} ${prefix}maçaneta (marcar) 🎉		
┃├${emoji} ${prefix}corinthiana (marcar) 🎉		
┃├${emoji} ${prefix}grêmio (marcar) 🎉	
┃├${emoji} ${prefix}corinthiano (marcar) 🎉	
┃├${emoji} ${prefix}flamenguista (marcar) 🎉	
┃├${emoji} ${prefix}gremio (marcar) 🎉	
┃├${emoji} ${prefix}diva (marcar) 🎉	
┃├${emoji} ${prefix}preta (marcar) 🎉	
┃├${emoji} ${prefix}capivara (marcar) 🎉	
┃├${emoji} ${prefix}obesa (marcar) 🎉	 
┃├${emoji} ${prefix}obeso (marcar) 🎉		
┃├${emoji} ${prefix}sentaforte (marcar) 🎉	
┃├${emoji} ${prefix}itgirl (marcar) 🎉	
┃├${emoji} ${prefix}lerda (marcar) 🎉	
┃├${emoji} ${prefix}smt (marcar) 🎉
┃├${emoji} ${prefix}restodeaborto (marcar) 🎉
┃├${emoji} ${prefix}paunocu (marcar) 🎉
┃├${emoji} ${prefix}sentafofa (marcar) 🎉	
┃├${emoji} ${prefix}sentafofo (marcar) 🎉
┃├${emoji} ${prefix}cabare (marcar) 🎉		
┃├${emoji} ${prefix}cabaré (marcar) 🎉		
┃├${emoji} ${prefix}negodoborel (marcar) 🎉	
┃├${emoji} ${prefix}burra (marcar) 🎉	
┃├${emoji} ${prefix}burro (marcar) 🎉	
┃├${emoji} ${prefix}vagabunda (marcar) 🎉	
┃├${emoji} ${prefix}vagabundo (marcar) 🎉	
┃├${emoji} ${prefix}fiel (marcar) 🎉	
┃├${emoji} ${prefix}gostosura (marcar) 🎉
┃├${emoji} ${prefix}fadataylor (marcar) 🎉
┃├${emoji} ${prefix}rock (marcar) 🎉
┃├${emoji} ${prefix}my (marcar) 🎉
┃├${emoji} ${prefix}vsf (marcar) 🎉
┃├${emoji} ${prefix}fofo (marcar) 🎉
┃├${emoji} ${prefix}fofa (marcar) 🎉
┃├${emoji} ${prefix}foda (marcar) 🎉
┃├${emoji} ${prefix}socaforte (marcar) 🎉
┃├${emoji} ${prefix}viado (marcar) 🎉
┃├${emoji} ${prefix}viada (marcar) 🎉
┃├${emoji} ${prefix}midzy (marcar) 🎉
┃├${emoji} ${prefix}otaku (marcar) 🎉
┃├${emoji} ${prefix}corna (marcar) 🎉
┃├${emoji} ${prefix}hetero (marcar) 🎉
┃├${emoji} ${prefix}hétero (marcar) 🎉			
┃├${emoji} ${prefix}putadalaynne (marcar) 🎉
┃├${emoji} ${prefix}laynne (marcar) 🎉
┃├${emoji} ${prefix}amada (marcar) 🎉
┃├${emoji} ${prefix}amado (marcar) 🎉
┃├${emoji} ${prefix}socafofo (marcar) 🎉
┃├${emoji} ${prefix}socafofa (marcar) 🎉
┃├${emoji} ${prefix}gado (marcar) 🎉
┃├${emoji} ${prefix}once (marcar) 🎉
┃├${emoji} ${prefix}gloria (marcar) 🎉	
┃├${emoji} ${prefix}glória (marcar) 🎉
┃├${emoji} ${prefix}cadaver (marcar) 🎉
┃├${emoji} ${prefix}cadáver (marcar) 🎉
┃├${emoji} ${prefix}bosta (marcar) 🎉
┃├${emoji} ${prefix}gostosa (marcar) 🎉
┃├${emoji} ${prefix}gostoso (marcar) 🎉
┃├${emoji} ${prefix}sapatao (marcar) 🎉
┃├${emoji} ${prefix}sapatão (marcar) 🎉
┃├${emoji} ${prefix}safada (marcar) 🎉
┃├${emoji} ${prefix}safado (marcar) 🎉
┃├${emoji} ${prefix}blink (marcar) 🎉
┃├${emoji} ${prefix}vsfd (marcar) 🎉
┃├${emoji} ${prefix}army (marcar) 🎉
┃├${emoji} ${prefix}lixo (marcar) 🎉	
┃├${emoji} ${prefix}londo (marcar) 🎉
┃├${emoji} ${prefix}linda (marcar) 🎉
┃├${emoji} ${prefix}lindo (marcar) 🎉
┃├${emoji} ${prefix}falsa (marcar) 🎉
┃├${emoji} ${prefix}falso (marcar) 🎉
┃├${emoji} ${prefix}puto (marcar) 🎉
┃├${emoji} ${prefix}puta (marcar) 🎉
┃├${emoji} ${prefix}bonita (marcar) 🎉
┃├${emoji} ${prefix}bonito (marcar) 🎉
┃├${emoji} ${prefix}feia (marcar) 🎉
┃└──────────
┗━━━━━━━━━━━
`;
};
// MENU DE EFEITOS DE IMAGEM, MONTAGEM Tops Kkk

const efeitos = (prefix, sender,NomeDoBot) => {
// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 🖼 EFEITOS ️🖼️
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 🖼 IMAGEM ️🖼️
┃├──────────
┃├${emoji} MOVIDOS PARA O MENU
┃├${emoji} ${prefix}Alteradores 🖌️
┃└──────────
┗━━━━━━━━━━━
`;
};


const info_recarga = (prefix,NomeDoBot,numerodono_ofc,sender) => {
  return `${aviso}
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 💱 RECARGAS PIX 💱
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 💱 RECARREGAR MONEY💱
┃├──────────
┃├${emoji} 0,20 R$ ==  1 800¥💱
┃├${emoji} 0,40 R$ ==  3 600¥💱
┃├${emoji} 1,50 R$ == 10 000¥💱
┃├${emoji} 2,00 R$ == 18 000¥💱
┃├${emoji} 5,00 R$ == 50 000¥💱
┃└──────────
┃┌──────────
┃├${emoji} 👑 RECARREGAR VIP👑
┃├──────────
┃├${emoji} 👑TAMBEM DISPONÍVEL NA LOJA
┃├${emoji} 2,00$ == (Premium de 10 dias)👑
┃├${emoji} 5,00$ == (premium 30 dias)👑
┃└──────────
┃┌──────────
┃├${emoji} 💸 ALUGAR BOT 💸
┃├──────────
┃├${emoji} 10,00$ == 30 DIAS (Plano basico)🤖
┃├${emoji}  5,00$ == 10 DIAS (Plano basico)🤖
┃├${emoji} 15,00$ == 30 DIAS (Plano + Vip no grupo)👑
┃├${emoji}  7,50$ == 10 DIAS  (Plano + Vip no grupo)👑
┃└──────────
┃┌──────────
┃├${emoji} ❓ INFORMAÇÃO❓
┃├──────────
┃├${emoji} Caso se interesse , chame o dono do bot
┃├${emoji} Nos grupos oficiais ou nas redes sociais
┃├${emoji} ${prefix}Dono 🔰
┃└──────────
┗━━━━━━━━━━━
  `
}

const info_vip = (prefix, NomeDoBot, sender) => {
  return `${aviso}
🌟 Benefícios do Premium na Zero Two Dark 🌟

👑Uso do bot no privado, assim tendo total privacidade para uso dos comandos e criação de figurinhas

👑Comandos exclusivos como Chat Gpt 3.5 , renomear figurinhas, e receber lista de figurinhas aleatória

🫣Uso do criador de plaquinhas do menu18

⚠️NOVIDADE 

👑Descontos em recargas de ¥

ℹ️COMO EU POSSO ME TORNAR UM USUÁRIO VIP?

🪪 Ao fazer login em ${NomeDoBot} , você recebe uma degustação do plano que se aplica do momento do registro ate meia noite do mesmo dia

👥 Entrar em um grupo que contratou o plano vip, nesse caso o bot não irá funcionar no pv , mas os comandos vip irão funcionar no grupo

👑 Recarregar uma assinatura vip , Nesse caso você tera todos os benefícios de ser um usuário vip citados no começo, os preços da recarga então em ${prefix}
`
}

const lojamaker = (prefix, NomeDoBot, sender) => {
return `
Aviso Importante:

- Este tutorial é apenas um exemplo de como configurar um produto usando os comandos "${prefix}".
- A configuração do produto (${prefix}setpdr) deve ser feita no PV do bot para evitar banimento por envio de links em grupos.
- O dinheiro das compras dos produtos é direcionado diretamente para a conta do criador do produto.
- O valor da criação é calculado multiplicando o valor do produto pela quantidade e dividindo por 10.


Passo 1: Criar um novo produto
- Envie o comando "${prefix}novoproduto" para criar um template vazio para o produto.

Passo 2: Visualizar a template do produto
- Envie o comando "${prefix}verprodutomk" para visualizar a template do produto que está sendo criado.

Passo 3: Configurar o produto
- Nome do produto:
  - Envie o comando "${prefix}setpdr name|Figura de Ação da ZERO TWO" para configurar o nome do produto como "Figura de Ação da ZERO TWO".

- Descrição do produto:
  - Envie o comando "${prefix}setpdr info|Incrível figura de ação da personagem ZERO TWO do anime Darling in the Franxx" para configurar a descrição do produto.

- Valor do item:
  - Envie o comando "${prefix}setpdr valor|2000" para definir o valor do produto como ¥2000.

- Quantidade disponível:
  - Envie o comando "${prefix}setpdr quantidade|10" para configurar a quantidade disponível do produto como 10 unidades.

- Imagem do produto:
  - Envie a imagem para esse site https://xatimg.com/ e copie o link que terminar em .jpg ou .png
  - Cole o link recebido no comando "${prefix}setpdr img|link_do_telegra.ph_da_imagem" para adicionar a imagem do produto. Certifique-se de substituir "link_do_telegra.ph_da_imagem" pelo link real da imagem.

- Mensagem do produto:
  - Envie o comando "${prefix}setpdr function|Olá! Obrigado por adquirir a Figura de Ação da ZERO TWO. Esperamos que você aproveite essa incrível figura de ação da personagem ZERO TWO do anime Darling in the Franxx!" para configurar a mensagem que será enviada no PV do usuário ao usar o produto.

Passo 4: Verificar o custo de criação do produto
- Envie o comando "${prefix}savepdr" para verificar o custo de criação do produto. O custo é calculado multiplicando a quantidade configurada pelo valor do produto e dividindo por 10.

Passo 5: Salvar o produto
- Envie o comando "${prefix}savepdr save" para salvar o produto configurado.

`
}

const alugar_bot = (prefix, sender , numerodono_ofc ) => {
  return `
  ⭐ Zero two BOT WHATSAPP ⭐

🔹 O melhor bot da web com mais de 500 comandos incríveis 🔹

💡 Por que é necessário um pagamento?

Grupos com um grande número de membros podem gerar sobrecarga no sistema do Zero two Bot WhatsApp. Para garantir um serviço de qualidade e oferecer uma experiência excelente para todos os usuários, decidimos implementar um sistema de pagamento.

⚡ Compensação por falhas no bot:

Entendemos a importância de um serviço confiável e eficiente. Caso ocorra alguma falha no Zero two Bot, comprometendo sua funcionalidade, garantimos que você receberá um tempo adicional de plano ativo como compensação. Sua satisfação é nossa prioridade.

🌟 Aproveite e turbine seu grupo com funcionalidades exclusivas! 🌟

💪 Suporte contínuo:

Ao adquirir o plano do Zero two Bot WhatsApp, você terá acesso a um suporte contínuo e dedicado. Estamos aqui para ajudar, solucionar dúvidas e garantir que você aproveite ao máximo os recursos incríveis oferecidos pelo bot.

📲 Entre em contato para obter mais informações e aproveitar os recursos incríveis do Zero two Bot WhatsApp!
🔰Criador : ${prefix}Dono
💲Preços: 
${prefix}Recargas
`
}
const info_loja_inv  = (prefix, NomeDoBot, sender) => {
  return `
  Aviso Importante:

  - Este tutorial é apenas um exemplo.
  - O dinheiro das compras dos produtos é direcionado diretamente para a conta do criador do produto.
  
1. **${prefix}comprar:**
Para adquirir o produto "auto_responder pro", você precisa usar o comando "${prefix}comprar auto_responder pro". O sistema processará a compra e adicionará o produto ao seu inventário.

2. **${prefix}ver:**
Se você quiser obter mais detalhes sobre o produto "auto_responder pro", digite o comando "${prefix}ver auto_responder pro". O sistema exibirá informações adicionais sobre o produto, como sua descrição, preço e recursos.

3. **${prefix}inventario:**
Para visualizar os produtos que você comprou, incluindo o "auto_responder pro", use o comando "${prefix}inventario". O sistema mostrará uma lista dos itens presentes no seu inventário.

4. **${prefix}verinv:**
Caso queira ver detalhes específicos do produto "auto_responder pro" no seu inventário, utilize o comando "${prefix}verinv auto_responder pro". O sistema exibirá informações detalhadas sobre o produto, como a data da compra e sua validade.

5. **${prefix}usar:**
Para usar o produto "auto_responder pro" e receber o link de um arquivo ou a mensagem relacionada ao produto no privado do usuário, digite o comando "${prefix}usar auto_responder pro". O sistema executará a ação associada a esse produto, enviando o link do arquivo desejado diretamente para a conversa privada do usuário.

  `
}

const infoaluguel = (prefix, pushname) => {
return`
1. Registrar um aluguel:
   - Utilize o comando "${prefix}rg_aluguel" seguido da data de expiração e do número do dono separados por "|".
   
   Exemplo: "${prefix}rg_aluguel 01/01|coloca o número do dono aqui"
   
   - Isso registrará o aluguel com a data de expiração em 01/01 e associará o número do dono a ele.
   - O sistema enviará uma mensagem no seu privado no dia em que o aluguel expirar e renovará automaticamente para o próximo mês, na mesma data.

2. Remover um aluguel do registro:
   - Utilize o comando "${prefix}rm_aluguel" seguido do ID do grupo em que o aluguel está registrado.
   
   Exemplo: "${prefix}rm_aluguel iddogrupo"
   
   - Substitua "iddogrupo" pelo ID do grupo correspondente.
   - Isso removerá o aluguel registrado para o grupo especificado.

3. Visualizar todos os aluguéis registrados:
   - Utilize o comando "${prefix}lista_aluguel".
   
   Exemplo: "${prefix}lista_aluguel"
   
   - Isso exibirá uma lista com todos os aluguéis registrados.
   - Você poderá ver os IDs dos grupos associados a cada aluguel.

4. Obter o ID de um grupo:
   - Utilize o comando "${prefix}iddogrupo".
   
   Exemplo: "${prefix}iddogrupo"
   
   - Isso exibirá o ID do grupo em que você está atualmente.

Boa sorte..
`;
};

const infotransmitir = (prefix, pushname) => {
return`
Olá, ${pushname}! Irei explicar como funcionam os seguintes comandos:

1. Registrar grupo para transmissão:
   - Para registrar um grupo ou chat privado para receber transmissões, digite "${prefix}rgtm".

2. Remover grupo da transmissão:
   - Caso queira remover um grupo da lista de transmissões, entre no grupo e digite "${prefix}tirardatm". Se você já saiu do grupo, procure o ID do grupo no comando "${prefix}listatm" para identificá-lo e, em seguida, utilize "${prefix}tirardatm" seguido do ID do grupo.

3. Realizar transmissão para grupos registrados:
   - Para enviar uma transmissão para todos os grupos registrados, digite "${prefix}fazertm". Em seguida, envie o conteúdo que deseja transmitir. Você pode marcar uma imagem com legenda, enviar uma imagem com legenda, enviar um documento, vídeo, texto, entre outros tipos de conteúdo.

É isso! Agora você está familiarizado com o funcionamento desses comandos relacionados a transmissões em grupos. Espero que isso ajude!
`;
};

exports.infotransmitir = infotransmitir;


const anotacao = (prefix) => {
return `

1. Visualizar todas as anotações do grupo:
   - Digite "${prefix}anotações".
   - Isso mostrará todas as anotações criadas no grupo.

2. Criar uma nova anotação:
   - Utilize o comando "${prefix}anotar" seguido do título e do conteúdo da anotação separados por "|".
   
   Exemplo: "${prefix}anotar ABC|ABC são 3 letras do alfabeto, utilizadas bastante"
   
   - Isso criará uma nova anotação com o título "ABC" e o conteúdo "ABC são 3 letras do alfabeto, utilizadas bastante".
   
   OBS: Certifique-se de usar o caractere "|" para separar o título e o conteúdo da anotação.

3. Excluir uma anotação:
   - Utilize o comando "${prefix}tirar_nota" seguido do título da anotação que deseja excluir.
   
   Exemplo: "${prefix}tirar_nota ABC"
   
   - Isso removerá a anotação com o título "ABC".

4. Buscar uma anotação pelo título:
   - Utilize o comando "${prefix}nota" seguido do título da anotação que deseja buscar.
   
   Exemplo: "${prefix}nota ABC"
   
   - Isso exibirá a anotação com o título "ABC" e seu respectivo conteúdo, se existir.

É isso... 

Boa sorte. 
`;
};

exports.anotacao = anotacao;


/////////FRASES DO BOT
const msg_antipv = (prefix,pushname,NomeDoBot,numerodono_ofc) => {
  return`
Oioi ${pushname}, Infelizmente meu dono não me deu autorização para que eu possa atender no pv de usuários comuns

Caso queira usar comandos no pv você precisa comprar a assinatura vip do bot use o comando *${prefix}recargas*

Meu dono: ${numerodono_ofc}
`
}

const msg_ja_resgatou = (prefix,pushname,sender) => {
return `Olá ${pushname}, você ja resgatou hoje`
}

//Isso é no inventário quando você gasta um produto ate acabar
exports.tag_pdr_acabou = `🚫Acabou`

const msgs = (prefix,NickDono) => {
return {
grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
premium: `[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS* \n\n Caso queira virar use o comando ${prefix}info_vip` ,
mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${NickDono}*`,
banido: '❌ Você foi banido de utilizar os comandos, entre em contato com o proprietário pra saber o porque ❌' ,
donosmt: '[❗] Este é um recurso especial para o proprietário ❌',
donosmt2: '[❗] Este é um recurso especial para o proprietário ❌',
adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
Badmin: ' [❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
nonumber: `[❗] O valor precisa ser um número [❗] `}
}
//aparência de alguns comandos 
const msg_resgatar = (prefix,tempo,NomeDoBot,sender,pushname) => {
return `
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 💲RESGATE DIARIO💲
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃├${emoji}💲RESGATOU: ${dinheiro_resgate}¥
┃└──────────
┗━━━━━━━━━━━
`
}

//ISSO SO MODIFICA NA INDEX , IGNORE POR ENQUANTO 
const msg_transferir = (prefix,remetente,destinatario,valor,time3,time2,sender) => {
return `
┏━━━━━━━━━━━
┃┌──────────
┃├${emoji} 💸 TRANSFERÊNCIAS 💸
┃├──────────
┃├${emoji}🤖BOT: ${NomeDoBot}
┃├${emoji}👤USER: @${sender.split('@')[0]}
┃└──────────
┃┌──────────
┃├${emoji} 💸 INFO 💸
┃├──────────
┃├${emoji}📅DATA: ${time3}
┃├${emoji}📟HORA: ${time2}
┃├${emoji}👤DESTINATÁRIO: 
┃├${emoji}💲VALOR: 
┃└──────────
┗━━━━━━━━━━━
` 
}

//ISSO SO MODIFICA NA INDEX , IGNORE POR ENQUANTO 
const msg_transferir_erro = (prefix,pushname,destinatario,txt3,time3,time2,sender) => {
return `🌸 Olá, meu amado Darling! 🌸

❌ Erro na Transferência ❌

⚡️━━━━━━━━━━━━━━━━━━━━━━━
${time3} às ${time2}

🚫 A transferência não pôde ser concluída!
   Remetente: ${pushname} (@${sender.split("@")[0]})
   Destinatário: ${destinatario}
   Motivo: Conta inexistente.

⚠️ Certifique-se de inserir o número de conta correto ou marcar no grupo e tente novamente.
⚡️━━━━━━━━━━━━━━━━━━━━━━━
`
}


const msg_novo_pdr = (prefix,NomeDoBot) => {
return `
Template criado

Para editar o nome do seu produto, utilize o comando ${prefix}setpdr name|nome do seu produto.

Exemplo:
${prefix}setpdr name|Zero Two VIP
`
}

msg_existe_pdr = (prefix) => {
return`Aparentemente ja existe um produto criado , use o comando ${prefix}lojamaker para entender como editar um produto 
`
}

msg_selecionar_editar = (prefix) => {
return `
Exemplo de uso:
Para editar as informações detalhadas do produto "Zerotwo", envie a seguinte mensagem:
${prefix}Editar_Produto Zerotwo
⚠️ Você deve ser o criador do produto para isso
Ao usar esse comando seu produto é deletado da loja  ,o dinheiro que você pagou para criar é devolvido em referência a quantidade que ainda tem no estoque, e assim você irá editar ele pelo mesmo comando de criar PRODUTOS
`
}

const msg_setpdr_name = (prefix,nomepdr) => {
return `✅Nome do seu produto alterado para *${nomepdr}*

♻️Para editar novamente o nome do produto repita o comando trocando o nome

ℹ️Para editar a descrição do seu produto use ${prefix}setpdr info|descrição do seu produto

Exemplo:
${prefix}setpdr info|o melhor bot da web`
}

const msg_setpdr_info = (prefix,descpdr) => {
return `✅Descrição do seu produto alterado para *${descpdr}*

♻️Para editar novamente a descrição do produto repita o comando trocando a descrição

ℹ️Para editar o valor do seu produto use ${prefix}setpdr valor|Custo em ¥ do seu produto 

Exemplo:
${prefix}setpdr valor|100`
}

const msg_setpdr_valor = (prefix,valorpdr) => {
return `
✅Valor do seu produto alterado para *${valorpdr}*

♻️Para editar novamente o valor do produto repita o comando trocando o valor

🔗Para criar um link de imagem use esse site https://xatimg.com/ , envie a imagem para ele e copie o link direto que terminar em .png ou .jpg

ℹ️Para editar a imagem do seu produto use ${prefix}setpdr img|link da Imagem 

Exemplo:
${prefix}setpdr img|link da imagem`
}

const frases = (prefix,numerodono_ofc) => {
return {
notmakerpdr: `Oh, parece que você ainda não criou nenhum produto para adicionar à loja do bot.

use ${prefix}Novopdoduto se quiser criar`,
editpdrst: `- Para editar o nome do produto:
${prefix}setpdr name|*NOME DO PRODUTO*

- Para editar a descrição do produto: 
${prefix}setpdr info|*DESCRIÇÃO*

- Para editar a quantidade disponível do produto: 
${prefix}setpdr quant|*QUANTIDADE DISPONÍVEL*

- Para editar o preço do produto: 
${prefix}setpdr valor|*PREÇO*

- Para editar a função/link do produto: 
${prefix}setpdr function|*LINK ENVIADO NO PV*
`,  
ismakerpdr: `Para acessar e editar a Template, utilize o comando ${prefix}lojamaker.
`,

errnumbermoney: `
Para transferir uma quantia de 10¥ para o usuário mencionado, basta utilizar o comando:

${prefix}transferir @${numerodono_ofc} 10
`,
notlogin: `❌ Aparentemente você não fez login❌
Para fazer envie o comando *${prefix}Registrar`,
nomoney: `no momento você não possui saldo suficiente para realizar essa ação`,
isLogado: ` Aparentemente você ja fez login no bot `
}
}

///EXPORTS DE MODULOS
//NÃO MEXA AQUI PRA BAIXO 

//MENUS 
exports.menustk = menustk
exports.menu = menu;
exports.dowloads = dowloads
exports.efeitos = efeitos;
exports.brincadeiras = brincadeiras;
exports.alteradores = alteradores;
exports.menulogos = menulogos;
exports.menudono = menudono;
exports.adms = adms;
exports.menuprem = menuprem;
exports.apps = apps
exports.menuinfo = menuinfo;
exports.loja = loja
exports.noticias = noticias
//FRASES
exports.msg_transferir_erro = msg_transferir_erro
exports.msg_transferir = msg_transferir_erro
exports.msg_resgatar = msg_resgatar

exports.msg_setpdr_name = msg_setpdr_name
exports.msg_setpdr_valor = msg_setpdr_valor
exports.msg_existe_pdr = msg_existe_pdr
exports.msg_selecionar_editar = msg_selecionar_editar
exports.msg_novo_pdr = msg_novo_pdr
exports.msg_setpdr_info = msg_setpdr_info

exports.emoji2 = emoji
exports.dinheiro_resgate = dinheiro_resgate

exports.msg_ja_resgatou = msg_ja_resgatou
exports.msg_antipv = msg_antipv
exports.infoaluguel = infoaluguel;
exports.alugar_bot = alugar_bot
exports.lojamaker = lojamaker
exports.info_loja_inv = info_loja_inv
exports.info_recarga = info_recarga
exports.info_vip = info_vip
exports.msgs = msgs
exports.frases = frases
exports.menu18 = menu18
exports.pesquisas = pesquisas

