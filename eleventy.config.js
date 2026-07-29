import { HtmlBasePlugin } from "@11ty/eleventy";


export default function (eleventyConfig) {
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/assets/images');
	eleventyConfig.addPassthroughCopy('src/assets/logos');
	eleventyConfig.addPassthroughCopy('src/assets/js/main.js');
	eleventyConfig.addPassthroughCopy({
		'./node_modules/alpinejs/dist/cdn.js': './assets/js/alpine.js',
	  })
	// Forces Eleventy to physically copy files during --serve
	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	//eleventyConfig.addWatchTarget("src/assets/css/");

	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


	/* return {
		pathPrefix: "/Northern_Rockies_Counseling/"
	} */
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};