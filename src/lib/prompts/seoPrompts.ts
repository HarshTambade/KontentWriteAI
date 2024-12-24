// Collection of prompts for SEO-related content generation
export const seoPrompts = {
  metaDescription: (title: string, keywords: string) => `
Create SEO-optimized meta title and description for: "${title}"
Target keywords: ${keywords}
Include:
1. Meta title (max 60 chars)
2. Meta description (max 155 chars)
3. Click-through-rate optimization tips`,

  topicMap: (keyword: string, intent: string) => `
Create a comprehensive topic map for: "${keyword}"
Search intent: ${intent}
Include:
1. Main topic clusters
2. Subtopics and related terms
3. Content hierarchy
4. Internal linking suggestions`,

  longTailKeywords: (mainKeyword: string, niche: string) => `
Generate long-tail keyword variations for: "${mainKeyword}"
Niche: ${niche}
Include:
1. Question-based keywords
2. Intent-based variations
3. Search volume estimates
4. Competition level indicators`,

  keywordClustering: (keywords: string) => `
Create semantic keyword clusters for:
${keywords}
Include:
1. Primary topic groups
2. Related terms
3. Search intent mapping
4. Content suggestions`
};