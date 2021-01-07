const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("MertHD v1 Sürümüyle Yeniden Sizlerle.")
.setTitle(" MertHD Yardım Menüsüne Hoşgeldin!")
 .setTimestamp()
.setDescription("**-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/795768596361773117/796435016296824842/artworks-000395518635-lpefnl-t500x500.jpg")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}