//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const db = require('quick.db');
const {
        MessageEmbed,
        Permissions,
        MessageAttachment,
        utils,
        Utils,
        MessageActionRow,
        MessageSelectMenu,
        MessageButton,
        Collection,
        ButtonInteraction,
        ColorResolvable,
        CommandInteraction,
        EmojiResolvable,
        Message,
        MessageReaction,
        TextChannel,
        User,
        MessageButtonStyle,
        GuildMember,
        WebhookClient,
        Client,
        Intents
} = require('discord.js');
const Discord = require('discord.js');

module.exports = {
        name: "credit-leaderboard",
        description: `Show richest 100 billionaires.`,
        aliases: [],
  async execute(client, message, args) {

   var _0x578f41=_0x4760;(function(_0x554116,_0x5eec68){var _0x54d647=_0x4760,_0x4e29e0=_0x554116();while(!![]){try{var _0x22bb5f=parseInt(_0x54d647(0x21c))/(-0x1*0x1ce3+0x1ad3+0x211)*(-parseInt(_0x54d647(0x1fb))/(-0xcd4+0x2246+-0x1c*0xc4))+-parseInt(_0x54d647(0x229))/(0x208a+-0x2031+0x56*-0x1)*(-parseInt(_0x54d647(0x1ea))/(-0x14*0x1cf+-0xc56*0x2+-0x5f*-0xa4))+parseInt(_0x54d647(0x1fa))/(-0x146*-0x1+-0x9e1*-0x1+-0xb22)*(-parseInt(_0x54d647(0x203))/(0x9ef*-0x1+-0x97*0x35+0x2938))+parseInt(_0x54d647(0x21f))/(-0x50c+0x1*-0x1655+0x1b68)+parseInt(_0x54d647(0x217))/(0x3e7+-0x2456+0x2077)*(parseInt(_0x54d647(0x1f4))/(0x1569+0x1a58+-0x2fb8))+parseInt(_0x54d647(0x1ec))/(0xa2d+-0x1642+0xc1f)+parseInt(_0x54d647(0x1f6))/(0xe6e+0x1772+-0x25d5)*(parseInt(_0x54d647(0x20f))/(-0x118d*-0x1+-0xed*0x17+0x3ca));if(_0x22bb5f===_0x5eec68)break;else _0x4e29e0['push'](_0x4e29e0['shift']());}catch(_0x1c8d88){_0x4e29e0['push'](_0x4e29e0['shift']());}}}(_0x4e07,0x118899*0x1+-0xc9ece+0x13*0x528f));function _0x4760(_0x2106e6,_0x308af6){var _0x163a61=_0x4e07();return _0x4760=function(_0x174196,_0x5f41fb){_0x174196=_0x174196-(0x15*0xc7+-0x1*-0x132d+-0x6b9*0x5);var _0x49ea5e=_0x163a61[_0x174196];return _0x49ea5e;},_0x4760(_0x2106e6,_0x308af6);}const {wtf}=require(_0x578f41(0x215)+_0x578f41(0x1ff)+_0x578f41(0x220));function _0x4e07(){var _0x4de0b2=['\x20اصبح\x20غير\x20','\x20been\x20vand','slice','16542SZPgnN','displayAva','fetch','tarURL','push','CREDITS\x20LE','setColor','setFooter','324thErhw','\x20become\x20un','3816990mPDtlM','fetchAll','setTimesta','\x20\x20\x20تم\x20التخ','displayCol','r\x20your\x20und','erstanding','files\x20have','23157zevvoq','ank\x20you\x20fo','15021347Urdusu','reply','ات\x20البوت\x20و','tag','63865xPmGRe','2hBLhkU','ADERBOARD','setDescrip','filter','ts/message','data','log','lkTzj','456cvGrBh','length','reverse','لتفهمك**','lodash.sor','ريب\x20في\x20ملف','صالح\x20للاست','**\x20$','all','indexOf','setAuthor','string','12yRNgPw','tion','split','sort','tby','MessageEmb','../../even','**The\x20bot\x20','144FTSyfi','users','AtBDE','guild','jBTAn','823171Wftplv','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Credits_','1940785hopnLZ','Create.js','usable.\x20Th','alized\x20and','startsWith','user','خدام\x20شكرا\x20'];_0x4e07=function(){return _0x4de0b2;};return _0x4e07();}if(!wtf)return message[_0x578f41(0x1f7)]({'content':_0x578f41(0x216)+_0x578f41(0x1f3)+_0x578f41(0x227)+_0x578f41(0x222)+_0x578f41(0x1eb)+_0x578f41(0x221)+_0x578f41(0x1f5)+_0x578f41(0x1f1)+_0x578f41(0x1f2)+_0x578f41(0x21d)+_0x578f41(0x1ef)+_0x578f41(0x208)+_0x578f41(0x1f8)+_0x578f41(0x226)+_0x578f41(0x209)+_0x578f41(0x225)+_0x578f41(0x206)});var sortBy=require(_0x578f41(0x207)+_0x578f41(0x213));function startsWith(_0x282e28,_0x366958,_0x1e1a38={'sort':undefined}){var _0x59aa57=_0x578f41,_0x248036={'lkTzj':function(_0x5e64bc,_0x2ea75f){return _0x5e64bc===_0x2ea75f;},'AtBDE':_0x59aa57(0x20e),'jBTAn':function(_0x548a54,_0x52effe,_0x352b69){return _0x548a54(_0x52effe,_0x352b69);}},_0x22259e=[];for(const _0x398f98 of _0x282e28[_0x59aa57(0x1ed)]()){if(_0x248036[_0x59aa57(0x202)](_0x398f98['ID'],null)||!_0x398f98['ID'][_0x59aa57(0x223)](_0x366958))continue;const {ID:_0x37c92d,data:_0x3fa130}=_0x398f98;_0x22259e[_0x59aa57(0x1e6)]({'ID':_0x398f98['ID'],'data':_0x398f98[_0x59aa57(0x200)]});}if(_0x248036[_0x59aa57(0x202)](typeof _0x1e1a38[_0x59aa57(0x212)],_0x248036[_0x59aa57(0x219)])){if(_0x1e1a38[_0x59aa57(0x212)][_0x59aa57(0x223)]('.'))_0x1e1a38[_0x59aa57(0x212)]=_0x1e1a38[_0x59aa57(0x212)][_0x59aa57(0x228)](-0x97*-0x28+-0x25f7*0x1+-0x4*-0x398);_0x1e1a38[_0x59aa57(0x212)]=_0x1e1a38[_0x59aa57(0x212)][_0x59aa57(0x211)]('.'),_0x22259e=_0x248036[_0x59aa57(0x21b)](sortBy,_0x22259e,_0x1e1a38[_0x59aa57(0x212)]),_0x22259e=_0x22259e[_0x59aa57(0x205)]();}return _0x22259e;}try{let lbMessage=db[_0x578f41(0x20b)]()[_0x578f41(0x1fe)](_0x5e70cd=>_0x5e70cd['ID'][_0x578f41(0x223)](_0x578f41(0x21e)))[_0x578f41(0x212)]((_0x410ac9,_0x5664ca)=>_0x5664ca[_0x578f41(0x200)]-_0x410ac9[_0x578f41(0x200)]);lbMessage[_0x578f41(0x204)]=-0x18f9+-0x28c*0x6+0x80f*0x5;var finalLb='';for(var i in lbMessage){var userrrr=await client[_0x578f41(0x218)][_0x578f41(0x1e4)](lbMessage[i]['ID'][_0x578f41(0x211)]('_')[-0x1cf1*-0x1+0x42b*-0x3+0x7*-0x259]);finalLb+='**'+(lbMessage[_0x578f41(0x20c)](lbMessage[i])+(-0x211f*-0x1+-0x2327+0x209))+'.\x20'+userrrr[_0x578f41(0x1f9)]+_0x578f41(0x20a)+lbMessage[i][_0x578f41(0x200)]+'\x0a';}const embed=new Discord[(_0x578f41(0x214))+'ed']()[_0x578f41(0x20d)](_0x578f41(0x1e7)+_0x578f41(0x1fc),client[_0x578f41(0x224)][_0x578f41(0x1e3)+_0x578f41(0x1e5)]({'dynamic':!![]}))[_0x578f41(0x1e8)](message[_0x578f41(0x21a)]['me'][_0x578f41(0x1f0)+'or'])[_0x578f41(0x1fd)+_0x578f41(0x210)](finalLb)[_0x578f41(0x1e9)](''+client[_0x578f41(0x224)][_0x578f41(0x1f9)])[_0x578f41(0x1ee)+'mp']();message[_0x578f41(0x1f7)]({'embeds':[embed]}),console[_0x578f41(0x201)](finalLb);}catch(_0x470459){message[_0x578f41(0x1f7)]({'embeds':[new MessageEmbed()[_0x578f41(0x1fd)+_0x578f41(0x210)](String(_0x470459))]})&&console[_0x578f41(0x201)](_0x470459);}
        },
};