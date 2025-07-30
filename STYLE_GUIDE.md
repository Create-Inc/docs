# Create Documentation Style Guide

## Overview
This style guide ensures consistency across all Create documentation. Follow these guidelines for all new content, updates, and revisions.

## File Structure & Naming

### Directory Organization
```
docs/
├── builder/           # Builder-specific features
├── integrations/      # Third-party integrations
├── publish-and-share/ # Publishing and sharing features
├── quick-tips/       # Tips and tutorials
├── images/           # All documentation images
└── STYLE_GUIDE.md    # This file
```

### File Naming
- Use kebab-case: `custom-domains.mdx`
- Be descriptive and concise
- Use lowercase letters only
- No spaces or special characters

## Content Structure

### Frontmatter
Every MDX file must include:
```yaml
---
title: "Page Title"
description: "Brief description for SEO and navigation"
---
```

### Headings
- Use `##` for main sections
- Use `###` for subsections
- **Maximum 2 header levels** on docs pages
- Keep headings short and descriptive

### Content Hierarchy
1. **Overview** - What the feature does (keep it brief)
2. **Setup** - Quick setup steps
3. **Usage** - How to use the feature
4. **Examples** - Real-world use cases
5. **Troubleshooting** - Common issues and solutions

## Writing Style

### Tone & Voice
- **Simple and direct** - Write like Stripe docs or Paul Graham
- **Concise but complete** - Cover all key information with minimal words
- **Plain language** - Avoid jargon, use everyday words
- **Action-oriented** - Use active voice and imperative mood

### Language Guidelines
- Use present tense for instructions
- Use "Create" (capitalized) when referring to the platform
- Use "builder" (lowercase) when referring to the interface
- Use "agent" (lowercase) when referring to the AI assistant
- Keep sentences short and direct
- Cut unnecessary words

### Technical Writing
- **Be specific** - Include exact button names, menu paths, etc.
- **Use numbered lists** for sequential steps
- **Use bullet points** for non-sequential items
- **Include examples** - Show real prompts and responses
- **One idea per sentence** - Keep it simple

## Components & Elements

### Frames
Use for images and videos with captions:
```mdx
<Frame caption="Descriptive caption explaining what the image shows">
  ![Alt text](/images/path/to/image.png)
</Frame>
```

### Steps
Use Mintlify's Step component for multi-step processes:
```mdx
<Steps>
  <Step title="Step Title">
    Short description (optional)
    <Frame>
      <img src="/images/path/to/image.png" />
    </Frame>
  </Step>
</Steps>
```

**Step Guidelines:**
- Each step has a title
- Short description (or no description)
- Include an image in a Frame component
- Keep steps focused and actionable

### Cards
Use for feature highlights:
```mdx
<CardGroup cols={2}>
  <Card title="Card Title" icon="icon-name">
    Card description
  </Card>
</CardGroup>
```

### Warnings & Tips
```mdx
<Warn>
  Important warning information
</Warn>

<Tip>
  Helpful tip or best practice
</Tip>

<Info>
  Additional information or context
</Info>
```

### Accordions
Use for FAQ sections:
```mdx
<AccordionGroup>
  <Accordion title="Question">
    Answer with detailed explanation
  </Accordion>
</AccordionGroup>
```

## Images & Media

### Image Guidelines
- **High quality** - Use clear, high-resolution screenshots
- **Consistent sizing** - Maintain aspect ratios
- **Descriptive captions** - Explain what the image shows
- **Alt text** - Include meaningful alt text for accessibility

### Image Naming
- Use descriptive names: `team-toggle.png`, `database-viewer.png`
- Use lowercase with hyphens
- Include context in filename

### Image Placement
- Place images close to relevant text
- Use Frames for all images with captions
- Ensure images support the content, don't replace it

### Video Embeds
For Loom videos, use this format:
```mdx
<Frame caption="Video Title">
  <iframe
    width="100%"
    height="400"
    src="https://www.loom.com/embed/VIDEO_ID"
    title="Video Title"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
    allowFullScreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
  />
</Frame>
```

## Code & Technical Content

### Code Blocks
Use appropriate language tags:
```javascript
// JavaScript examples
```

```sql
-- SQL examples
```

```bash
# Terminal commands
```

### Inline Code
Use backticks for:
- File names: `databases.mdx`
- Button names: `Publish` button
- Menu items: `Settings` menu
- API endpoints: `/api/users`

### Links
- Use descriptive link text
- Include context: "Learn more about [databases](/builder/databases)"
- Use relative paths for internal links: `/builder/databases`
- Use absolute URLs for external links: `https://create.xyz`

## Formatting Standards

### Lists
- Use numbered lists for sequential steps
- Use bullet points for non-sequential items
- Keep items parallel in structure
- Use consistent punctuation

### Emphasis
- **Bold** for important terms and button names
- *Italic* for emphasis and new terms
- `Code` for technical terms and file names

### Quotes & Examples
Use blockquotes for:
- User prompts
- Example responses
- Important notes

## SEO & Accessibility

### Page Titles
- Clear and descriptive
- Include key terms
- Under 60 characters

### Descriptions
- Summarize the page content
- Include primary keywords
- Under 160 characters

### Headings
- Use proper heading hierarchy
- Include relevant keywords
- Be descriptive and clear

### Alt Text
- Describe what the image shows
- Include context and purpose
- Be concise but informative

## Quality Standards

### Before Publishing
- [ ] Content is accurate and up-to-date
- [ ] All links work correctly
- [ ] Images are properly sized and optimized
- [ ] Code examples are tested
- [ ] Grammar and spelling are correct
- [ ] Content follows this style guide

### Review Process
1. **Self-review** - Check against style guide
2. **Technical accuracy** - Verify all instructions work
3. **User experience** - Ensure content is clear and helpful
4. **Accessibility** - Check alt text, heading structure, etc.

## Common Patterns

### Feature Documentation Template
```mdx
---
title: "Feature Name"
description: "Brief description of what this feature does"
---

## Overview
What the feature does.

## Setup
Quick setup steps.

<Steps>
  <Step title="Step Title">
    Short description
    <Frame>
      <img src="/images/path/to/image.png" />
    </Frame>
  </Step>
</Steps>

## Usage
How to use the feature.

## Examples
Real-world use cases.

## Troubleshooting
Common issues and solutions.
```

### Integration Documentation Template
```mdx
---
title: "Integration Name"
description: "Connect your app to Integration Name"
---

## Overview
What the integration does.

## Setup
Step-by-step setup instructions.

## Usage
How to use the integration.

## Examples
Example prompts and responses.

## Configuration
Advanced settings and options.
```

## Updates & Maintenance

### When to Update
- New features are released
- UI changes occur
- User feedback indicates confusion
- Errors or inaccuracies are found

### Version Control
- Use descriptive commit messages
- Reference issue numbers when applicable
- Test changes locally before pushing

This style guide should be updated as the documentation evolves and new patterns emerge. 