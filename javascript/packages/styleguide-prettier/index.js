module.exports = {
	endOfLine: "lf",
    printWidth: 120,
	quoteProps: "as-needed",
	semi: true,
    singleQuote: false,
	tabWidth: 4,
	trailingComma: "all",
    useTabs: true,
	overrides: [
		{
			files: "*.yml",
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
