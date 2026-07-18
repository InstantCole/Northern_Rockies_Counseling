export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/assets/images');
	eleventyConfig.addPassthroughCopy('src/assets/logos');
	// Forces Eleventy to physically copy files during --serve
	eleventyConfig.setServerPassthroughCopyBehavior("copy");
	//eleventyConfig.addWatchTarget("src/assets/css/");

	eleventyConfig.addShortcode("button", function(buttonText){
		return `<button class="px-6 m-2 h-10 rounded-xl bg-green-700 border-none text-slate-200 font-semibold focus:text-slate-200 hover:text-slate-200 transition delay-50 duration-150 ease-in hover:scale-105 hover:bg-green-800 ">${buttonText}</button>`;
	})
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};