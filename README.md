# ABD-mock-websites
# Prompt Record

---

# 🛒 E-commerce Website Prompt

Please create a new subfolder called **ecommerce (claude code)** inside the current working directory. Inside this subfolder, build a multi-level mockup website with deeper page hierarchy and consistent styling throughout.

## 📁 Folder Structure to Create
```bash
ecommerce-portal/
├── index.html (homepage)
├── about/
│ └── about.html
├── products/
│ ├── products.html (product list page)
│ └── detail.html (product detail page)
├── deals/
│ └── deals.html
├── account/
│ └── account.html
├── orders/
│ └── orders.html
├── cart/
│ └── cart.html
├── contact/
│ └── contact.html
├── components/ (shared HTML snippets or JS partials)
└── styles/
└── main.css (shared across all pages)
```

## 💻 Technology
- React + Tailwind CSS  
- Each page should be a standalone HTML file that loads the shared stylesheet  
- Reusable components:
  - Header
  - NavBar
  - HeroBanner
  - ProductCard
  - DealCard
  - SponsoredCard
  - Footer

---

## 🎨 Design Reference

Create a modern e-commerce homepage UI inspired by large marketplace platforms.

### 1. Global Header (Sticky, Dark Theme)
- Left: Logo + delivery location
- Center: Large search bar + category dropdown + search button
- Right: Language selector, Account menu, Orders, Cart with item count
- Dark navy/gray background, white text

### 2. Secondary Navigation Bar
- Horizontal category menu
- One highlighted button (e.g., Prime membership)
- Slightly lighter than header

### 3. Hero Section
- Left: Headline + subtext + yellow CTA
- Right: Product image placeholder
- Carousel arrows
- Blue gradient background

### 4. Main Content Grid
Responsive layout:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

Card types:
- Continue Shopping Card
- Deals / Devices Card
- Gift Card Promotion
- Deals + Sponsored Product

### 5. Design System
- 8px spacing system
- Rounded corners (8–16px)
- Soft shadows
- Clean sans-serif font
- High contrast CTAs

### 6. Accessibility (Mandatory)
- Full keyboard navigation
- Visible focus states
- WCAG AA contrast
- Semantic HTML + ARIA labels

### 7. Inter-page Navigation
All pages must include:
- Shared Header
- NavBar
- Footer
- Fully working internal links
- Fully navigable via Tab key

---

# 🏛 Government Website Prompt

Create a new subfolder called **government (Claude code)**.

## 📁 Folder Structure
```bash
gov-portal/
├── index.html
├── about/
│ └── about.html
├── services/
│ ├── services.html
│ ├── benefits/
│ │ └── benefits.html
│ ├── taxes/
│ │ └── taxes.html
│ └── licenses/
│ └── licenses.html
├── contact/
│ └── contact.html
├── components/
└── styles/
└── main.css
```

## 💻 Technology
- React + Tailwind CSS
- Reusable components:
  - TrustBanner
  - Header
  - ServiceNav
  - HeroTaskSection
  - QuickTaskGrid
  - ServiceCard
  - AnnouncementModule
  - Footer

---

## 🎨 Design Goals
Modern public service portal inspired by national/city sites.

### Key Sections
- Trust Banner
- Sticky Main Header
- Primary Service Navigation (mega menu)
- Hero Section (image or solid background)
- Quick Task Action Grid
- Service Info Modules
- Footer

### Design System
- Neutral / blue palette
- Large readable typography
- Minimal shadows
- Generous whitespace

### Accessibility (Mandatory)
- Full keyboard navigation
- WCAG AA contrast
- Screen reader friendly
- Visible focus states

---

# 📱 Social Media Website Prompt

Create a subfolder called **social-media (claude code)**.

## 📁 Folder Structure
```bash
social-feed/
├── index.html
├── explore/
├── notifications/
├── messages/
├── bookmarks/
├── profile/
├── settings/
├── components/
└── styles/
└── main.css
```


## 💻 Technology
- React + Tailwind CSS
- Components:
  - SidebarNav
  - TopHeader
  - FeedComposer
  - PostCard
  - TrendingCard
  - SuggestionCard

---

## 🎨 Layout

3-column layout:
- Left Sidebar
- Main Feed
- Right Sidebar

Responsive:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column + bottom nav

### Features
- Post composer
- Feed tabs
- Interaction row (Like, Comment, Share)
- Trending module
- Suggested accounts
- Sponsored blocks

### Accessibility
- Full keyboard navigation
- Visible focus indicators
- WCAG AA compliance
- ARIA labels

---

# 📰 Mass Media Website Prompt

Create a subfolder called **mass-media (Claude code)**.

## 📁 Folder Structure
```bash
news-portal/
├── index.html
├── world/
├── politics/
├── business/
├── tech/
├── culture/
├── opinion/
├── video/
├── article/
├── account/
├── subscribe/
├── components/
└── styles/
└── main.css

## 💻 Technology
- React + Tailwind CSS
- Components:
  - GlobalUtilityBar
  - BrandHeader
  - CategoryNav
  - LiveTicker
  - HeroEditorial
  - StoryCard
  - StoryGrid
  - SidebarModule
  - EditorialSection
  - FeatureBanner
  - SubscriptionModule
  - Footer
```
---

## 🎨 Editorial Design
Inspired by CNN + NYT + BuzzFeed + Vice + Verge.

### Major Systems
- Utility bar
- Sticky brand header
- Category navigation
- Breaking news ribbon
- Hero editorial zone
- Secondary story grid
- Sidebar modules
- Subscription blocks
- Ad placements

### Typography
- Serif headlines (legacy mode)
- Bold sans-serif (digital mode)

### Accessibility
- Full keyboard navigation
- Caption-ready videos
- Screen reader semantic structure
- Visible focus states

---

# 🎓 Education Platform Prompt

**MASTER PROMPT — Modern Education Platform Ecosystem UI**

Inspired by:
- Coursera
- Quizlet
- Kahoot
- PowerSchool
- Khan Academy

---

## Global Experience Goals
- Learning discovery
- Structured navigation
- Fast scanning
- Institutional trust
- Action-driven CTAs

---

## Page Types
1. Marketplace Homepage
2. Learning Tool Landing
3. Enterprise SaaS Landing
4. Curriculum Content Page

---

## Global Components
- GlobalHeader
- AnnouncementBar
- HeroCourseDiscovery
- HeroLearningTool
- HeroProductPlans
- HeroEnterpriseSaaS
- LogoTrustStrip
- CategoryQuickGrid
- LearningModeCard
- PlanComparisonCard
- EnterpriseSolutionCard
- CurriculumSidebar
- LessonListItem
- ProgressWidget
- Footer

---

## Hero Modes
- Course Discovery
- Learning Tool Entry
- Product Plan Showcase
- Enterprise SaaS Hero

---

## Curriculum Content Layout
Left Sidebar:
- Standards
- Grade levels

Main Content:
- Subject title
- Learning objectives
- Lesson list

---

## Design System
- Blue / Purple primary
- Accent learning colors
- Rounded sections
- Soft shadows
- Education-friendly typography

---

## Accessibility
- Keyboard navigation
- High contrast
- Semantic HTML
- Large clickable areas

---

# ✅ Implementation Status Check

| Platform        | Mix | Codex | Claude Code |
|---------------|-----|-------|-------------|
| E-commerce    | ✅  | ✅    | ✅          |
| Government    | ✅  | ✅    | ✅          |
| Social Media  | ✅  | ✅    |             |
| Mass Media    | ✅  | ✅    |             |
| Education     | ✅  |       |             |

---