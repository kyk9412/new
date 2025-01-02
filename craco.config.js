const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@common": path.resolve(__dirname, "src/common"),
			"@styles": path.resolve(__dirname, "src/styles"),
		},
	},
};
