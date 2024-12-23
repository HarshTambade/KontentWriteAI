// Collection of prompts for blog tool features
export const toolPrompts = {
  titleGenerator: (topic: string, keywords: string) => `
Generate 10 engaging blog titles for the topic: "${topic}"
Requirements:
- Include target keywords: ${keywords}
- Mix of how-to, listicle, and question formats
- Optimize for CTR and SEO
- Include power words for engagement
Format the output in markdown with each title on a new line.`,

  contentCalendar: (niche: string, duration: string) => `
Create a ${duration} content calendar for the ${niche} niche.
Include for each entry:
1. Publication date
2. Content type
3. Topic/title
4. Key points to cover
5. Target keywords
Format in markdown as a structured calendar.`,

  rewrite: (content: string, keywords: string, tone: string) => `
Rewrite the following content:
"${content}"
Requirements:
- Incorporate these keywords: ${keywords}
- Use a ${tone} tone
- Maintain the core message
- Improve readability and engagement
Format the output in markdown.`
};