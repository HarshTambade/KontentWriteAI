// Collection of prompts for blog-related AI generation
export const blogPrompts = {
  outline: (topic: string, keywords: string) => `
Create a detailed blog post outline for the topic: "${topic}"
Include the following:
1. A compelling headline
2. 5-7 main sections with subheadings
3. Key points to cover under each section
4. Suggested keywords to incorporate: ${keywords}
Format the output in markdown.`,

  content: (outline: string) => `
Generate a comprehensive blog post based on this outline:
${outline}
Requirements:
- 3000-5000 words
- SEO-optimized content
- Engaging and informative tone
- Include relevant examples and statistics
Format the output in markdown.`,

  imageBrief: (topic: string, style: string) => `
Create an image generation brief for a blog post about: "${topic}"
Style preference: ${style}
Include:
1. Main image description
2. Suggested style elements
3. Color palette
4. Mood/atmosphere
Format the output in markdown.`
};