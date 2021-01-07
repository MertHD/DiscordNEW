const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("MertHD BOT v1 sürümüyle yeniden sizlerle.")
.setTitle("MertHD Eğlence Komutları")
 .setTimestamp()
.setDescription("**-tersyazı** = Bir Yazıyı Bot Ters Yazar.\n **-mcskin** =Yazdığınız İsmin Minecraft Skinini Atar.\n **-fbi** = Bot FBi Gif Atar. \n **-token** = Tokenimi Öğrenmek İstemezmisin? \n **-düello** = Düello Atarsın. \n  **-wasted** = Polis tarafından yakalanırsın. \n **-atatürk** = Dene ve gör... (1881 ~ 1938)")
.setImage("https://cdn.discordapp.com/attachments/795768596361773117/796435016296824842/artworks-000395518635-lpefnl-t500x500.jpg")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}