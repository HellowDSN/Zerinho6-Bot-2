const Discord = require("discord.js")

exports.run = ({ ArgsManager, message, fastfastEmbed, Send}) => {
  const { Fichas } = require('../../cache/index.js')
  let name = ArgsManager.Argument.join(' ').toLowerCase()

  if (!Keys.includes(name)) {
    message.channel.send("Essa pessoa não existe.")
    return;
  }
  name = Keys[Keys.indexOf(name)]
  const Persona = infos[name]
  fastEmbed.setColor(Persona.cor)
  fastEmbed.setTitle("Ficha de Personagem")
  fastEmbed.setThumbnail("https://i.imgur.com/RASvVvm.png")
  fastEmbed.setImage(Persona.foto)
  fastEmbed.setTimestamp()
  fastEmbed.addField("Nome", Persona.nome, true)

  const Called = Persona.vilao === "sim" ? "Vilão" : "Heroi"
  fastEmbed.addField(`Nome de ${Called}`, Persona.nheroi, true)
  fastEmbed.addField("Individualidade", Persona.indiv)
  fastEmbed.addField("Afiliação", Persona.posic)
  fastEmbed.addField("Idade", Persona.idade, true)
  fastEmbed.addField("Aniversário", Persona.niver, true)
  fastEmbed.addField("Altura", Persona.altura)
  fastEmbed.addField("Peso", Persona.peso, true);
  fastEmbed.addField("Sangue", Persona.sangue)
  fastEmbed.addField("Gosta de", Persona.gosta, true)
  fastEmbed.addField("Medo", Persona.medo, true)

  if (Persona.vilao === "sim") {
    fastEmbed.addField("Rank", Persona.rank, true);
  }

  const SentMessage = await Send(fastEmbed, true);
  if (Persona.foto2) {
    await SentMessage.react("🦺");
    await SentMessage.react("👕");
    const Filter = (reaction, user) => {
      return (
        ["👕", "🦺"].includes(reaction.emoji.name) &&
        user.id === message.author.id
      );
    };
    const Collector = SentMessage.createReactionCollector(Filter, {
      time: 500000,
      errors: ["time"]
    });

    Collector.on("collect", reaction => {
      try {
        if (reaction.emoji.name === "🦺") {
          fastEmbed.setImage(Persona.foto2)
          SentMessage.edit(fastEmbed)
        } else {
          fastEmbed.setImage(Persona.foto)
          SentMessage.edit(fastEmbed)
        }
      } catch {}
    })
  }
}

exports.helpEmbed = ({ message, helpEmbed, i18n }) => {
  const Options = {
    argumentsLength: 1,
    argumentsNeeded: true,
    argumentsFormat: ['Nome algum personagem'],
    imageExample: 'https://cdn.discordapp.com/attachments/408076884807778307/708343990218522724/unknown.png'
  }

  return helpEmbed(message, i18n, Options)
}