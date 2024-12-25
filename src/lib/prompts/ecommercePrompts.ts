// Collection of prompts for e-commerce content generation
export const ecommercePrompts = {
  productDescription: (product: string, features: string, tone: string) => `
Create a compelling product description for: "${product}"
Key Features: ${features}
Tone: ${tone}
Include:
1. Attention-grabbing headline
2. Benefits-focused description
3. Technical specifications
4. Unique selling points
5. Call to action`,

  tagline: (product: string, target: string, style: string) => `
Generate creative taglines for: "${product}"
Target Audience: ${target}
Style: ${style}
Requirements:
- Memorable and catchy
- Highlight unique value
- Brand appropriate
- Multiple variations`,

  amazonDescription: (product: string, features: string, keywords: string) => `
Create an Amazon-optimized product description for: "${product}"
Key Features: ${features}
Target Keywords: ${keywords}
Include:
1. Bullet points of key features
2. Detailed product description
3. Technical specifications
4. Usage instructions
5. Package contents`,

  productComparison: (products: string[], criteria: string) => `
Create a detailed comparison between: ${products.join(" vs ")}
Comparison Criteria: ${criteria}
Include:
1. Key features comparison
2. Pros and cons
3. Price-value analysis
4. Best use cases
5. Final recommendation`,

  updateAnnouncement: (product: string, updates: string, impact: string) => `
Create a product update announcement for: "${product}"
Updates: ${updates}
Customer Impact: ${impact}
Include:
1. What's new
2. Benefits to users
3. How to access
4. Timeline
5. Support information`,

  buyingGuide: (product: string, considerations: string) => `
Create a comprehensive buying guide for: "${product}"
Key Considerations: ${considerations}
Include:
1. Important features to consider
2. Common pitfalls
3. Price ranges
4. Top recommendations
5. Maintenance tips`,

  onboardingEmail: (product: string, steps: string) => `
Create a user onboarding email sequence for: "${product}"
Setup Steps: ${steps}
Include:
1. Welcome message
2. Getting started steps
3. Key features
4. Support resources
5. Next steps`,

  salesCampaign: (campaign: string, products: string, duration: string) => `
Create holiday sales campaign content for: "${campaign}"
Products: ${products}
Duration: ${duration}
Include:
1. Campaign headlines
2. Product highlights
3. Promotional offers
4. Urgency elements
5. Call to actions`,

  thankYou: (context: string, style: string) => `
Create a thank you message for: "${context}"
Style: ${style}
Include:
1. Genuine appreciation
2. Personal touch
3. Next steps
4. Future engagement
5. Contact information`,

  popup: (purpose: string, offer: string) => `
Create website popup messages for: "${purpose}"
Offer: ${offer}
Include:
1. Attention-grabbing headline
2. Value proposition
3. Call to action
4. Exit intent variation
5. Mobile-friendly version`,

  testimonialRequest: (product: string, experience: string) => `
Create a testimonial request for: "${product}"
Customer Experience: ${experience}
Include:
1. Polite request
2. Specific questions
3. Response format
4. Time expectation
5. Thank you note`,

  loyaltyProgram: (brand: string, benefits: string) => `
Create loyalty program ideas for: "${brand}"
Key Benefits: ${benefits}
Include:
1. Program structure
2. Reward tiers
3. Special perks
4. Implementation steps
5. Communication strategy`,

  subscriptionRemainder: (product: string, details: string) => `
Create subscription renewal reminder for: "${product}"
Subscription Details: ${details}
Include:
1. Renewal notice
2. Benefits recap
3. Pricing details
4. Action steps
5. Support contact`,

  returnEmail: (type: string, product: string, reason: string) => `
Create a ${type} email template for: "${product}"
Reason: ${reason}
Include:
1. Acknowledgment
2. Process steps
3. Timeline
4. Required actions
5. Support contact`,

  influencerOutreach: (brand: string, campaign: string, requirements: string) => `
Create influencer outreach email for: "${brand}"
Campaign: ${campaign}
Requirements: ${requirements}
Include:
1. Brand introduction
2. Campaign details
3. Collaboration terms
4. Next steps
5. Contact information`,

  ugcScript: (product: string, style: string, duration: string) => `
Create UGC ad script for: "${product}"
Style: ${style}
Duration: ${duration}
Include:
1. Opening hook
2. Key messages
3. Visual suggestions
4. Call to action
5. Closing notes`
};