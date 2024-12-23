// Collection of prompts for advanced blog features
export const advancedPrompts = {
  advanced: (topic: string, keywords: string, tone: string, targetAudience: string) => `
Create a comprehensive blog post about "${topic}"
Requirements:
- Target keywords: ${keywords}
- Writing tone: ${tone}
- Target audience: ${targetAudience}
- Length: 3000-5000 words
- Include statistics and research
- Add expert quotes and citations
Format in markdown with proper headings and sections.`,

  seo: (topic: string, keywords: string, intent: string) => `
Create an SEO-optimized blog post about "${topic}"
Requirements:
- Primary keyword: ${keywords}
- Search intent: ${intent}
- Include meta description
- Optimize headings and subheadings
- Add internal/external linking suggestions
- Length: 2500-3000 words
Format in markdown with SEO elements clearly marked.`,

  human: (topic: string, style: string, perspective: string) => `
Write a human-like blog post about "${topic}"
Requirements:
- Writing style: ${style}
- Personal perspective: ${perspective}
- Include anecdotes and examples
- Conversational tone
- Length: 2000-3000 words
Format in markdown with natural flow and transitions.`
};