module.exports = (sequelize, DataTypes) => {
	const Player = sequelize.define('Player', {
		playerName: {
			type: DataTypes.STRING,
			defaultValue: "PlayerUnknown",
		},
		tier: {
			type: DataTypes.STRING,
			defaultValue: "UnknownTier",
		},
		positionOne: {
			type: DataTypes.STRING,
			defaultValue: "Fill",
		},
		positionTwo: {
			type: DataTypes.STRING,
			defaultValue: "Fill",
		},
		team: {
			type: DataTypes.STRING,
			defaultValue: "not picked",
		}
	});

	return Player;
}