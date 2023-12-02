// imports
const { DateTime } = require('luxon');
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

module.exports = function (eleventyConfig) {
	// allows assets, CMS files and other root files to be passed into /public. styles are automatically generated by LESS/SASS
	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy('./src/admin');
	eleventyConfig.addPassthroughCopy('./src/_redirects');
	eleventyConfig.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });
	eleventyConfig.addPassthroughCopy({ './src/sitemap.xml': '/sitemap.xml' });
	eleventyConfig.addTransform('htmlmin', htmlMinTransform);
	eleventyConfig.addFilter('postDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	return {
		dir: {
			input: 'src',
			output: 'public',
			includes: '_includes',
			data: '_data',
		},
		htmlTemplateEngine: 'njk',
	};
};
