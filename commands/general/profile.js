//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const canvas = require('canvas'),
  { registerFont } = require('canvas'),
  db = require('quick.db'),
  { createCanvas, loadImage } = require('canvas');
registerFont('./data/fonts/Amiri-Bold.ttf', { family: 'CYBER' });
const { convert } = require("davie-convert");
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

const pbg = './data/images/profile.png';
const image1 = './data/images/xp.png';

module.exports = {
  name: "profile",
  description: `View your or someone else's customizable personal global profile card.`,
  aliases: [],
  async execute(client, message, args) {
var _0x298fe3=_0x1ec1;(function(_0x29adfb,_0x590376){var _0x30eb7b=_0x1ec1,_0x33d04f=_0x29adfb();while(!![]){try{var _0x14eb0f=parseInt(_0x30eb7b(0x1d5))/(-0x1055+0x1558+-0x502)*(-parseInt(_0x30eb7b(0x1da))/(-0x1e33+0x1*0x20d8+-0x2a3))+-parseInt(_0x30eb7b(0x203))/(0x2ec+0x1a7*0x11+-0x1f00)+parseInt(_0x30eb7b(0x1fe))/(0x1*-0x11d7+-0x8e5*-0x1+-0x3e*-0x25)+-parseInt(_0x30eb7b(0x19d))/(-0x1c8c+-0xa9e+0x599*0x7)*(parseInt(_0x30eb7b(0x1b2))/(-0x172+0x880+-0x708))+-parseInt(_0x30eb7b(0x1c7))/(0x1*-0x1e65+-0x145*0x1d+-0x7*-0x99b)+parseInt(_0x30eb7b(0x1d7))/(0x48d+0x2500+0x2985*-0x1)*(-parseInt(_0x30eb7b(0x1b5))/(-0xd28+0xef2+0x1*-0x1c1))+-parseInt(_0x30eb7b(0x1de))/(-0x1*0x1d6e+0x4*-0x32d+0x1*0x2a2c)*(-parseInt(_0x30eb7b(0x1d6))/(-0x1d69*-0x1+-0x2f*-0x23+0x341*-0xb));if(_0x14eb0f===_0x590376)break;else _0x33d04f['push'](_0x33d04f['shift']());}catch(_0x4aeeee){_0x33d04f['push'](_0x33d04f['shift']());}}}(_0x269f,-0x1ab5*-0x2+-0x1acdc+-0xb*-0x5edb));const {wtf}=require(_0x298fe3(0x1e0)+_0x298fe3(0x1cc)+_0x298fe3(0x1af));if(!wtf)return message[_0x298fe3(0x1be)]({'content':_0x298fe3(0x199)+_0x298fe3(0x1a2)+_0x298fe3(0x18e)+_0x298fe3(0x1cf)+_0x298fe3(0x1a4)+_0x298fe3(0x1e6)+_0x298fe3(0x1a1)+_0x298fe3(0x1ce)+_0x298fe3(0x204)+_0x298fe3(0x190)+_0x298fe3(0x1ab)+_0x298fe3(0x191)+_0x298fe3(0x19e)+_0x298fe3(0x1c8)+_0x298fe3(0x1ac)+_0x298fe3(0x19f)+_0x298fe3(0x1e8)});var sortBy=require(_0x298fe3(0x1e4)+_0x298fe3(0x1d0));function startsWith(_0x265cd7,_0xc41b8b,_0x58b461={'sort':undefined}){var _0x331375=_0x298fe3,_0x1ccfdf={'jCvrd':function(_0x14ad2e,_0x1d7630){return _0x14ad2e===_0x1d7630;},'QNrOk':_0x331375(0x1e7),'lfCiI':function(_0x43dc05,_0x417a54,_0x4887ef){return _0x43dc05(_0x417a54,_0x4887ef);}},_0x2b3f37=[];for(const _0x591ef8 of _0x265cd7[_0x331375(0x19a)]()){if(_0x1ccfdf[_0x331375(0x202)](_0x591ef8['ID'],null)||!_0x591ef8['ID'][_0x331375(0x1bb)](_0xc41b8b))continue;const {ID:_0x4d04dc,data:_0x484beb}=_0x591ef8;_0x2b3f37[_0x331375(0x1f4)]({'ID':_0x591ef8['ID'],'data':_0x591ef8[_0x331375(0x1a0)]});}if(_0x1ccfdf[_0x331375(0x202)](typeof _0x58b461[_0x331375(0x1d4)],_0x1ccfdf[_0x331375(0x1ea)])){if(_0x58b461[_0x331375(0x1d4)][_0x331375(0x1bb)]('.'))_0x58b461[_0x331375(0x1d4)]=_0x58b461[_0x331375(0x1d4)][_0x331375(0x1e9)](-0x48e*0x3+0xc5f*0x2+-0xb13);_0x58b461[_0x331375(0x1d4)]=_0x58b461[_0x331375(0x1d4)][_0x331375(0x1c0)]('.'),_0x2b3f37=_0x1ccfdf[_0x331375(0x1bf)](sortBy,_0x2b3f37,_0x58b461[_0x331375(0x1d4)]),_0x2b3f37=_0x2b3f37[_0x331375(0x194)]();}return _0x2b3f37;}let lbMessage=db[_0x298fe3(0x1d3)]()[_0x298fe3(0x192)](_0xa57dd9=>_0xa57dd9['ID'][_0x298fe3(0x1bb)](_0x298fe3(0x1fb)))[_0x298fe3(0x1d4)]((_0x36c149,_0x2c275a)=>_0x2c275a[_0x298fe3(0x1a0)]-_0x36c149[_0x298fe3(0x1a0)]);function _0x1ec1(_0x36c988,_0x46ce3b){var _0x32594a=_0x269f();return _0x1ec1=function(_0x2fff14,_0x457dac){_0x2fff14=_0x2fff14-(0x1e74+0x1f4f+-0x3c35);var _0x30df93=_0x32594a[_0x2fff14];return _0x30df93;},_0x1ec1(_0x36c988,_0x46ce3b);}try{var user=await client[_0x298fe3(0x1a5)][_0x298fe3(0x1b7)][_0x298fe3(0x1ba)](message[_0x298fe3(0x1f7)][_0x298fe3(0x1c0)]('\x20')[_0x298fe3(0x1e9)](-0x501+0x24b+0x2b7)[-0x29*-0x22+0xa97*0x1+-0x1009])||message[_0x298fe3(0x1ef)][_0x298fe3(0x1a5)][_0x298fe3(0x1a6)]()||message[_0x298fe3(0x1b4)],userimg=user[_0x298fe3(0x1ee)]({'format':_0x298fe3(0x19c)});if(!message[_0x298fe3(0x207)])return;if(user[_0x298fe3(0x1bd)])return;var reps=db[_0x298fe3(0x1ba)](_0x298fe3(0x1d2)+user['id']),credits=db[_0x298fe3(0x1ba)](_0x298fe3(0x1c1)+user['id']),title=db[_0x298fe3(0x1ba)](_0x298fe3(0x198)+user['id'])||'',user_xp=db[_0x298fe3(0x1ba)](_0x298fe3(0x1f8)+user['id']),user_level=db[_0x298fe3(0x1ba)](_0x298fe3(0x1fb)+user['id']);if(!reps)db[_0x298fe3(0x1dc)](_0x298fe3(0x1d2)+user['id'],-0x55*-0x3d+-0x213d+0xcfc);let i=lbMessage[_0x298fe3(0x1ff)](_0x11226f=>_0x11226f['ID'][_0x298fe3(0x1c0)]('_')[0x1*0x1bd3+0xe97+-0x2a69]===user['id']);const canvas=createCanvas(-0x5*-0xf1+-0x5d9+-0x2*-0x29e,-0x2255+-0x3f6+-0xe21*-0x3),ctx=canvas[_0x298fe3(0x1d1)]('2d'),ctx1=canvas[_0x298fe3(0x1d1)]('2d'),ctx2=canvas[_0x298fe3(0x1d1)]('2d');loadImage(pbg)[_0x298fe3(0x1d9)](_0x15ff85=>{var _0x534ebd=_0x298fe3,_0x12be3c={'AxLnk':function(_0x207154,_0x27286e){return _0x207154*_0x27286e;},'fXEHY':function(_0x6ebf04,_0x255212){return _0x6ebf04(_0x255212);},'oYkGp':_0x534ebd(0x19c),'gcoEh':_0x534ebd(0x1ca)+'g','BVOjE':_0x534ebd(0x1c5),'vVbqx':_0x534ebd(0x1ae)+_0x534ebd(0x1f3),'mxGVu':function(_0x2412d6,_0x10e32c){return _0x2412d6||_0x10e32c;},'pkBjF':_0x534ebd(0x1e5)+_0x534ebd(0x196),'thTfw':function(_0x590be1,_0x4db981){return _0x590be1+_0x4db981;},'pRRZl':_0x534ebd(0x1fd)+_0x534ebd(0x196),'isYHw':function(_0x3e75c4,_0x485813){return _0x3e75c4||_0x485813;},'rfNnm':function(_0x1d203d,_0xf55e17){return _0x1d203d||_0xf55e17;},'iRBqL':_0x534ebd(0x1d8)+_0x534ebd(0x1f3),'CqaBT':function(_0x1e15fe,_0x595067){return _0x1e15fe||_0x595067;},'NeOrS':_0x534ebd(0x1ed)+'t','tUpfd':_0x534ebd(0x1f9),'lKpIq':function(_0x2bb757,_0x34bc75){return _0x2bb757/_0x34bc75;},'AfgLA':function(_0x461995,_0x16ab76){return _0x461995*_0x16ab76;},'yfzCm':_0x534ebd(0x1f0)+'t','YuVRt':function(_0x3ba3a7,_0x1d424c){return _0x3ba3a7(_0x1d424c);}};ctx[_0x534ebd(0x1f2)](_0x15ff85,0x1076+-0x3*0x1b7+0x1*-0xb51,0x1fe2+0x2186+-0x4168,-0x14cc+-0x18f4+-0x4fc*-0xa,-0x103d+0x16c7+-0x272),ctx[_0x534ebd(0x1c9)]=_0x12be3c[_0x534ebd(0x1b8)],ctx[_0x534ebd(0x201)](-0x1f7d+0x19b0+-0x9*-0xa5),ctx[_0x534ebd(0x1e3)]=_0x12be3c[_0x534ebd(0x205)];var _0x3c2f3b='';ctx[_0x534ebd(0x1cd)](''+_0x12be3c[_0x534ebd(0x193)](title,''),0x26ae+0x17*0xfa+-0x4*0xedb,-0x1*0x48d+0x2623+0x4*-0x7eb),ctx[_0x534ebd(0x1cd)](''+_0x12be3c[_0x534ebd(0x193)](_0x3c2f3b,''),-0x18*0xa8+-0x26cf*0x1+0x2*0x1c21,0x466*0x5+-0x1091*0x1+-0x351),ctx[_0x534ebd(0x1e3)]=_0x12be3c[_0x534ebd(0x1f1)],ctx[_0x534ebd(0x1cd)](''+_0x12be3c[_0x534ebd(0x1cb)](i,0x120c+0xf4f+0x10ad*-0x2),-0x2197+0x1fa4+-0x4*-0x8d,-0x4*0x23f+0x27*-0x35+0xa6f*0x2),ctx[_0x534ebd(0x1e3)]=_0x12be3c[_0x534ebd(0x1dd)],ctx[_0x534ebd(0x1cd)](user[_0x534ebd(0x19b)],-0xf8a+-0x2ea*0xd+0x36fc,-0xf1b*0x1+0x1f81+-0xf6c),ctx[_0x534ebd(0x1cd)]('$'+_0x12be3c[_0x534ebd(0x1e1)](convert,_0x12be3c[_0x534ebd(0x193)](credits,'0')),0x1094+-0x8cc*-0x4+-0x3392,-0x2*-0x5ea+-0x128a+0x9e5),ctx[_0x534ebd(0x1cd)](''+_0x12be3c[_0x534ebd(0x195)](reps,0x14e1+0x13c6+-0x28a7),0x17e9+-0x20c6+0x91e,0x6*-0xef+-0x1*-0x2629+-0x1df6),ctx[_0x534ebd(0x1cd)](''+_0x12be3c[_0x534ebd(0x1c3)](user_level,-0x655*-0x1+0x21*-0xb5+-0x100*-0x11),-0x1f50+0x10ea+0xea7,-0x1d80+0x1890+0x2*0x377),ctx[_0x534ebd(0x1e3)]=_0x12be3c[_0x534ebd(0x1fc)],ctx[_0x534ebd(0x1cd)](_0x12be3c[_0x534ebd(0x206)](user_xp,0x5*-0x61d+0x1*0x1107+0xd8a)+_0x534ebd(0x1c4),-0xe2*0x26+0x1a66+0xa00,-0xb*0x343+-0x1747*-0x1+0x1037),ctx[_0x534ebd(0x1e3)]=_0x12be3c[_0x534ebd(0x1f5)],ctx[_0x534ebd(0x1c9)]=_0x12be3c[_0x534ebd(0x1b9)],ctx[_0x534ebd(0x1fa)](-0x1d*-0xc2+-0xdd9+-0x66e,-0xc02+-0x1c97+0x15ef*0x2+0.5,Math[_0x534ebd(0x18f)](_0x12be3c[_0x534ebd(0x1a7)](_0x12be3c[_0x534ebd(0x1bc)](user_xp,-0x1*0x1367+-0x1*-0x16f7+0x20b*-0x1),-0x1*0x1f6f+-0x98f*0x1+0x2ce6)),0x27+-0xcc6+0xcc6),ctx[_0x534ebd(0x1e3)]=_0x12be3c[_0x534ebd(0x1b3)],_0x12be3c[_0x534ebd(0x1c2)](loadImage,image1)[_0x534ebd(0x1d9)](_0x1f2821=>{var _0x126238=_0x534ebd,_0x5b23dd={'FGwCU':_0x12be3c[_0x126238(0x1db)]};ctx[_0x126238(0x1f2)](_0x1f2821,-0x1c5f+-0x2664+0x4467,-0x4*-0x2f1+0x251*0x7+-0x5*0x4f6+0.5,-0x3dc+0xa9*-0x17+0x1522,0x1c21+0x9*0x21e+0x1*-0x2ed3),ctx[_0x126238(0x1ad)](),ctx[_0x126238(0x1eb)](0x2*0x12c8+-0x2358+0x1*-0x167,0x164+0x1*-0x1e87+0x1dcd,-0x1*-0x1181+0x112e*-0x1+0x4a,0x15d+0x1d06+-0x1e63,_0x12be3c[_0x126238(0x1ec)](Math['PI'],-0x34f+-0x4c3+0x814),![]),ctx[_0x126238(0x1b6)](),ctx[_0x126238(0x1a3)](),_0x12be3c[_0x126238(0x1e1)](loadImage,userimg)[_0x126238(0x1d9)](_0xe48444=>{var _0x44973f=_0x126238;ctx[_0x44973f(0x1f2)](_0xe48444,0x2*0x83c+-0x204d*-0x1+-0x1*0x3098,0x1*-0xc15+0x4*0x3a3+-0x1*0x277,-0x602*0x1+0xaac+-0x1*0x34c,0x97b+0x2a1*-0x3+-0x2*0x1d),ctx1[_0x44973f(0x1ad)](),ctx1[_0x44973f(0x1eb)](-0x1660+0x25e4+-0xdf4,0xa2d+-0x6cc+-0x1d1,-0x1905+0x189b+-0x2*-0x3f,-0x1*0x245d+-0xe*-0xa0+0x1b9d,_0x12be3c[_0x44973f(0x1ec)](Math['PI'],0x9d4+-0x1cff+-0x132d*-0x1),![]),ctx1[_0x44973f(0x1b6)](),_0x12be3c[_0x44973f(0x1e1)](loadImage,message[_0x44973f(0x207)][_0x44973f(0x1c6)]({'dynamic':!![],'format':_0x12be3c[_0x44973f(0x1f6)]}))[_0x44973f(0x1d9)](_0x45a81f=>{var _0x14a03d=_0x44973f;const _0x239fb1=new Discord[(_0x14a03d(0x1df))+(_0x14a03d(0x197))](canvas[_0x14a03d(0x1b0)](),_0x5b23dd[_0x14a03d(0x200)]);message[_0x14a03d(0x1a8)][_0x14a03d(0x1a9)]({'files':[_0x239fb1]});});});});});}catch(_0x5c8bc5){message[_0x298fe3(0x1be)]({'embeds':[new MessageEmbed()[_0x298fe3(0x1aa)+_0x298fe3(0x1b1)](String(_0x5c8bc5))]})&&console[_0x298fe3(0x1e2)](_0x5c8bc5);}function _0x269f(){var _0xc29957=['startsWith','AfgLA','bot','reply','lfCiI','split','Credits_','YuVRt','rfNnm','-XP','white','iconURL','2174410BjblZF','\x20اصبح\x20غير\x20','fillStyle','profile.pn','thTfw','ts/message','fillText','r\x20your\x20und','alized\x20and','tby','getContext','Reps_','all','sort','289333vwRRxe','473NNzBYN','1731848amTuEp','100\x2032px\x20I','then','2BPTrhc','gcoEh','set','pRRZl','241030FFcGZi','MessageAtt','../../even','fXEHY','log','font','lodash.sor','blod\x2060px\x20','usable.\x20Th','string','لتفهمك**','slice','QNrOk','arc','AxLnk','30px\x20Impac','avatarURL','mentions','40px\x20Impac','pkBjF','drawImage','mpact','push','NeOrS','oYkGp','content','XP_','#333333','fillRect','LEVEL_','iRBqL','blod\x2070px\x20','752352YWyWFy','findIndex','FGwCU','rotate','jCvrd','282261gaOxHM','erstanding','vVbqx','CqaBT','guild','\x20been\x20vand','round','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','ريب\x20في\x20ملف','filter','mxGVu','reverse','isYHw','Impact','achment','Title_','**The\x20bot\x20','fetchAll','username','png','5lNOoYc','ات\x20البوت\x20و','خدام\x20شكرا\x20','data','ank\x20you\x20fo','files\x20have','clip','\x20become\x20un','users','first','lKpIq','channel','send','setDescrip','\x20\x20\x20تم\x20التخ','صالح\x20للاست','beginPath','600\x2040px\x20I','Create.js','toBuffer','tion','857922LmIUuT','yfzCm','author','9OYkSzo','closePath','cache','BVOjE','tUpfd','get'];_0x269f=function(){return _0xc29957;};return _0x269f();}
  },
};