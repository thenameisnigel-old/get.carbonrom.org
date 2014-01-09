var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
	var Incremental = sequelize.define('Incremental', {
			timestamp: {
				type: Sequelize.DATE,
				notNull: true,
			},
			filename: {
				type: Sequelize.STRING(255),
				notEmpty: true,
			},
			md5sum: {
				type: Sequelize.STRING(32),
				notEmpty: true,
			},
			subdirectory: {
				type: Sequelize.STRING(255),
				notEmpty: false,
			},
	}, {
		validate: {
			romIdsValid : function() {
				if (!this.sourceRomId || this.sourceRomId < 0) {
					throw new Error('sourceRomId is a mandatory field!');
				}

				if (!this.targetRomId || this.targetRomId < 0) {
					throw new Error('targetRomId is a mandatory field!');
				}

				if (this.getSourceRom().getDevice().id != this.getTargetRom().getDevice().id) {
					throw new Error('source and target rom have to be for the same device!');
				}
			},
		}
	});

	return Incremental;
}