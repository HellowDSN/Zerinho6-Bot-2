const { COMMAND_UTILS } = require("../Utils"),
COMMAND_LIST = COMMAND_UTILS.getCommandList(),
{ guildLanguage } = require("../local_storage");

exports.run = ({ message, args, t, zSend, zEmbed }) => {
	const ArgsLower = args[0] ? args[0].toLowerCase() : "";

	function renderCommands() {
		return `${COMMAND_UTILS.getAvailableCommandsForUser(message)}`;
	}

	function renderArguments(command) {
		let argument = "";

		const keys = Object.keys(t(`help:${command}.description.argumentOptions`)),
		values = Object.values(t(`help:${command}.description.argumentOptions`));

		keys.forEach((e, index) => {
			argument += `🔹 ${t(`help:${keys[index]}`)}: **${values[index]}**\n`;
		});

		return "\n" + t(`help:argumentOptions`) + "\n" + argument;
	}
	//Oh boy, time to mess things up.
	if (!ArgsLower > 1 || t(`help:${ArgsLower}`).length === 0) {
		zEmbed.addField(t("help:commands"), renderCommands());
		zEmbed.setDescription(`**${t("please:prefixLiteral")}**: \`${process.env.PREFIX}\`\n${t("please:CPW")} ${process.env.PREFIX}avatar\n\n${t("help:wantToKnowMore")} ${process.env.PREFIX}help ${t("help:command")}\n\n${t("help:exclusiveCommandsWarning")}\n\n**${t("updates:version")}**: ${t("updates:ver")}\n\n${t("updates:changelog")}`);
	} else {
		zEmbed.setTitle(ArgsLower.charAt(0).toUpperCase() + ArgsLower.slice(1));
		zEmbed.setImage(t(`help:${ArgsLower}.image`));
		zEmbed.setDescription(`${t(`please:source`)}: ${t(`help:${ArgsLower}.description.actualDescription`)}\n${renderArguments(ArgsLower)}`);
	}
	zSend(zEmbed);
};
