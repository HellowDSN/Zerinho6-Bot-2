const REGEX = /(.*?)\s\|\s(.*)/;

function reachedLimit(name, value) {
	return name > 256 || value > 1024;
}
exports.run = ({ message, zSend, zEmbed }) => {
	const FULL_ARGUMENT = message.content.split(" ").slice(1).join(" ");
	const MATCHED_REGEX = FULL_ARGUMENT.match(REGEX);

	if (MATCHED_REGEX !== null) {
		if (reachedLimit(MATCHED_REGEX[1], MATCHED_REGEX[2])) {
			zSend("enbed:fieldContainsTooMuch", true);
			return;
		}
		zEmbed.addField(MATCHED_REGEX[1],MATCHED_REGEX[2]);
	} else {
		zEmbed.setDescription(FULL_ARGUMENT);
	}

	if (message.attachments.size >= 1) {
		zEmbed.setImage(message.attachments.first().url);
	}

	zSend(zEmbed);
};
