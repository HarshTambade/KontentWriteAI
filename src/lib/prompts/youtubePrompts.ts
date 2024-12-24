// Collection of prompts for YouTube-related content generation
export const youtubePrompts = {
  introScript: (topic: string, style: string) => `
Create an engaging video introduction script for: "${topic}"
Style: ${style}
Requirements:
- Duration: 30-45 seconds
- Hook the viewer in first 10 seconds
- Include call to action
Format in natural, conversational tone.`,

  contentPlanner: (niche: string, duration: string) => `
Create a ${duration} YouTube content plan for ${niche} niche.
Include:
1. Video topics and titles
2. Content hooks
3. Audience engagement points
4. Keywords to target
Format as a structured content calendar.`,

  titleThumbnail: (topic: string, style: string) => `
Generate YouTube title and thumbnail ideas for: "${topic}"
Style: ${style}
Include:
1. 5 clickworthy titles
2. 3 thumbnail concepts
3. Color schemes
4. Text overlay suggestions`,

  scriptCreator: (topic: string, duration: string, style: string) => `
Create a detailed YouTube script about: "${topic}"
Duration: ${duration}
Style: ${style}
Include:
1. Hook and intro
2. Main content sections
3. Transitions
4. Call to action
Format with timestamps and speaker notes.`
};