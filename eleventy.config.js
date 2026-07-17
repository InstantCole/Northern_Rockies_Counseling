export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/assets/images');
	eleventyConfig.addPassthroughCopy('src/assets/logos');
	// Forces Eleventy to physically copy files during --serve
	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	//eleventyConfig.addWatchTarget("src/assets/css/");
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};