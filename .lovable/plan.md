

# SEO Optimization Plan for Balaji Design & Constructions

## Current State Analysis

The website already has a good foundation for SEO:
- SEOHead component with meta tags and Open Graph
- Structured data (LocalBusiness, Organization, Service, Breadcrumb, FAQ schemas)
- Sitemap.xml and robots.txt configured
- Geo-targeting meta tags for Wardha region

However, there are several improvements needed to rank better on Google.

---

## Improvement Areas

### 1. Fix Critical Meta Tag Issues

**Problem**: The OG image in SEOHead.tsx references `/og-image.jpg` but the actual file is `/og-image.png`

**Fix**:
- Update SEOHead.tsx to use correct `/og-image.png` extension
- Update index.html og:image and twitter:image to use absolute URLs

---

### 2. Enhanced Keyword Optimization

**Current keywords are basic**. Add more targeted local SEO keywords:

**Target Keywords to Add**:
- "construction company in Wardha"
- "home builders Wardha Maharashtra"  
- "residential construction Wardha"
- "commercial builders near me"
- "house construction cost Wardha"
- "civil contractors Wardha"
- "best builders in Wardha district"
- "turnkey construction Wardha"
- "building contractors Maharashtra"

**Implementation**:
- Add expanded keywords meta tag in index.html
- Update page descriptions with keyword variations

---

### 3. Add FAQ Schema to Key Pages

**Add FAQ sections** to Services and Contact pages with common customer questions:

**Services Page FAQs**:
- "What types of construction services do you offer?"
- "How much does home construction cost in Wardha?"
- "Do you provide turnkey construction services?"
- "What is your construction timeline?"

**Contact Page FAQs**:
- "How can I get a free construction quote?"
- "What areas do you serve in Maharashtra?"
- "What are your working hours?"

---

### 4. Add Review/Rating Schema

**Enhance the Reviews page** with proper Review schema markup:
- Add individual Review schemas for each customer review
- This helps display star ratings in Google search results

---

### 5. Image SEO Optimization

**Add descriptive alt text** to all images:
- Hero images: "Balaji Design Constructions - Home builders in Wardha Maharashtra"
- Project images: Include project name, location, and type
- Service images: Include service type and location

---

### 6. Add Internal Linking Structure

**Improve internal linking** for better crawlability:
- Add "Related Projects" section on project detail pages
- Add "Popular Services" links in footer
- Link service pages to relevant projects

---

### 7. Performance & Core Web Vitals

**Optimize for page speed**:
- Add lazy loading to images below the fold
- Preload critical assets (fonts, hero image)
- Add font-display: swap for Google Fonts

---

### 8. Add Missing Location Pages (Optional Future Enhancement)

Create location-specific pages for nearby areas:
- `/services/wardha`
- `/services/nagpur`
- These help capture "near me" searches

---

## Technical Implementation Details

### Files to Modify

| File | Changes |
|------|---------|
| `index.html` | Add expanded keywords, preload hints, update OG image URL |
| `src/components/SEOHead.tsx` | Fix image extension, add keywords prop |
| `src/pages/Services.tsx` | Add FAQ section with FAQSchema |
| `src/pages/Contact.tsx` | Add FAQ section with FAQSchema |
| `src/pages/Reviews.tsx` | Add ReviewSchema for individual reviews |
| `src/components/StructuredData.tsx` | Add ReviewSchema component |
| `src/pages/Index.tsx` | Add homepage-specific keywords |
| `src/pages/Projects.tsx` | Improve image alt texts |
| `src/pages/ProjectDetail.tsx` | Add related projects, improve image alt |

### New Structured Data Components

```text
+---------------------------+
|   StructuredData.tsx      |
+---------------------------+
|  + ReviewSchema           |  (Individual review markup)
|  + WebsiteSchema          |  (Site-wide search box eligibility)
|  + ProfessionalService    |  (Professional service markup)
+---------------------------+
```

### SEO Content Additions

**FAQ Section for Services Page**:
- 4-5 common construction questions
- Answers with relevant keywords naturally integrated

**FAQ Section for Contact Page**:
- 3-4 questions about contacting/quotes
- Include service area information

---

## Expected Outcomes

1. **Rich Snippets**: Star ratings, FAQs, and business info in search results
2. **Local Pack**: Better visibility in Google Maps and local searches
3. **Keyword Rankings**: Target "construction company Wardha" and related terms
4. **Click-Through Rate**: Rich results increase CTR by 20-30%

---

## Implementation Order

1. Fix critical meta tag issues (OG image)
2. Add expanded keywords to index.html
3. Create ReviewSchema component
4. Add FAQ sections to Services and Contact pages
5. Update image alt texts across all pages
6. Add preload hints for performance

