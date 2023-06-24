
module.exports = function AutoResetGhillie(mod) {
	let enabled = true;
	
	mod.game.initialize("party");

	mod.command.add("argl", () => {
		enabled = !enabled;
		mod.command.message(`Module ${ enabled ? "enabled" : "disabled"}`);
	});

	mod.game.me.on("change_zone", zone => {
		if (zone === 9714 ) {
			if(!mod.game.party.inParty() && enabled) {
				mod.send('C_RESET_ALL_DUNGEON',1);
			}
		}
	});
};