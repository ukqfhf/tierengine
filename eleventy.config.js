import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/tier-lists/**/images/**/*");
}

export const config = {
  dir: {
    input: "src",
  },
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
