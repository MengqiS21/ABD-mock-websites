# ABD Mock Websites Prompt Record

## 🛒 E-commerce Website Prompt

Please create a new subfolder called **ecommerce (claude code)** inside the current working directory. Inside this subfolder, build a multi-level mockup website with deeper page hierarchy and consistent styling throughout.

### 📁 Folder Structure to Create
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

### 💻 Technology
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



### 🎨 Design Reference

Create a modern e-commerce homepage UI inspired by large marketplace platforms.

#### 1. Global Header (Sticky, Dark Theme)
- Left: Logo + delivery location
- Center: Large search bar + category dropdown + search button
- Right: Language selector, Account menu, Orders, Cart with item count
- Dark navy/gray background, white text

#### 2. Secondary Navigation Bar
- Horizontal category menu
- One highlighted button (e.g., Prime membership)
- Slightly lighter than header

#### 3. Hero Section
- Left: Headline + subtext + yellow CTA
- Right: Product image placeholder
- Carousel arrows
- Blue gradient background

#### 4. Main Content Grid
Responsive layout:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

Card types:
- Continue Shopping Card
- Deals / Devices Card
- Gift Card Promotion
- Deals + Sponsored Product

#### 5. Design System
- 8px spacing system
- Rounded corners (8–16px)
- Soft shadows
- Clean sans-serif font
- High contrast CTAs

#### 6. Accessibility (Mandatory)
- Full keyboard navigation
- Visible focus states
- WCAG AA contrast
- Semantic HTML + ARIA labels

#### 7. Inter-page Navigation
All pages must include:
- Shared Header
- NavBar
- Footer
- Fully working internal links
- Fully navigable via Tab key



## 🏛 Government Website Prompt

Create a new subfolder called **government (Claude code)**.

### 📁 Folder Structure
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

### 💻 Technology
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

### 🎨 Design Goals
Modern public service portal inspired by national/city sites.

#### Key Sections
- Trust Banner
- Sticky Main Header
- Primary Service Navigation (mega menu)
- Hero Section (image or solid background)
- Quick Task Action Grid
- Service Info Modules
- Footer

#### Design System
- Neutral / blue palette
- Large readable typography
- Minimal shadows
- Generous whitespace

#### Accessibility (Mandatory)
- Full keyboard navigation
- WCAG AA contrast
- Screen reader friendly
- Visible focus states



## 📱 Social Media Website Prompt

Create a subfolder called **social-media (claude code)**.

### 📁 Folder Structure
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


### 💻 Technology
- React + Tailwind CSS
- Components:
  - SidebarNav
  - TopHeader
  - FeedComposer
  - PostCard
  - TrendingCard
  - SuggestionCard



### 🎨 Layout

3-column layout:
- Left Sidebar
- Main Feed
- Right Sidebar

Responsive:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column + bottom nav

#### Features
- Post composer
- Feed tabs
- Interaction row (Like, Comment, Share)
- Trending module
- Suggested accounts
- Sponsored blocks

#### Accessibility
- Full keyboard navigation
- Visible focus indicators
- WCAG AA compliance
- ARIA labels


## 📰 Mass Media Website Prompt

Create a subfolder called **mass-media (Claude code)**.

### 📁 Folder Structure
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
```

### 💻 Technology
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



### 🎨 Editorial Design
Inspired by CNN + NYT + BuzzFeed + Vice + Verge.

#### Major Systems
- Utility bar
- Sticky brand header
- Category navigation
- Breaking news ribbon
- Hero editorial zone
- Secondary story grid
- Sidebar modules
- Subscription blocks
- Ad placements

#### Typography
- Serif headlines (legacy mode)
- Bold sans-serif (digital mode)

#### Accessibility
- Full keyboard navigation
- Caption-ready videos
- Screen reader semantic structure
- Visible focus states


## 🎓 Education Platform Prompt — edu-portal

Please create a new subfolder called `edu-portal` inside the current working directory. Inside this subfolder, build a multi-level mockup website with deeper page hierarchy and consistent styling throughout.


### 📁 Folder Structure to Create

```bash
edu-portal/
├── index.html (homepage)
├── courses/
│   ├── courses.html (course marketplace)
│   └── detail.html (single course detail page)
├── subjects/
│   └── subjects.html
├── curriculum/
│   └── curriculum.html (Khan Academy style content page)
├── study/
│   ├── study.html
│   ├── flashcards/
│   │   └── flashcards.html
│   └── test/
│       └── test.html
├── plans/
│   └── plans.html (product/plan comparison page)
├── enterprise/
│   └── enterprise.html (PowerSchool style SaaS landing)
├── dashboard/
│   └── dashboard.html (student/teacher dashboard)
├── account/
│   └── account.html
├── components/ (shared HTML snippets or JS partials)
└── styles/
    └── main.css (shared across all pages)
```


### 💻 Technology Requirements

Use **React + Tailwind CSS**.

- Each page should be a standalone HTML file that loads the shared stylesheet.
- All pages must share consistent styling.
- Build the following reusable components:

#### 🔧 Required Reusable Components

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


### 🎨 Design Reference

Design a modern multi-mode education platform web UI system inspired by:

- Coursera  
- Quizlet  
- Kahoot  
- PowerSchool  
- Khan Academy  

Focus on:

- Learning discovery  
- Trust and institutional credibility  
- Structured navigation  
- Scalable content hierarchy  
- Clear learning pathways  

Images are placeholders. Emphasize layout, hierarchy, and component structure.


## 🌍 GLOBAL EXPERIENCE GOALS

Prioritize:

- Learning discovery  
- Content hierarchy clarity  
- Fast scanning  
- Institutional trust  
- Action-driven CTAs (Start learning, Sign up, Try free, Explore solutions)  
- Cross-audience support (Students, Teachers, Institutions, Enterprise buyers)


## 1️⃣ Utility Announcement Bar (Optional)

Thin top bar for:

- Terms updates  
- Security notices  
- Promotions  
- Free trial announcements  

Include a right-aligned close button.


## 2️⃣ Global Header

Layout:

- **Left:** Platform logo  
- **Center:** Primary search bar (high priority)  
- **Right:** Login, Sign up / Start free, Language selector (optional), Create button  

Support two navigation modes:

### A. Category Navigation (Marketplace / SaaS)
- Courses  
- Subjects  
- Products  
- Solutions  
- Resources  
- Company  

### B. Learning Mode Navigation (Learning Tool)
- Study  
- Flashcards  
- Test  
- Match / Practice  
- Create  

Header must be **sticky on scroll**.


## 🚀 HERO SYSTEM (MULTIPLE MODES)

### 🎯 Hero Mode A — Course Discovery (Coursera Style)

Left:
- Headline about career or skill growth  
- Supporting text  
- Primary CTA  
- Optional secondary CTA  

Right:
- Illustration or platform visual placeholder  

Below hero:
- Segment selector cards:
  - Start new career  
  - Gain job skills  
  - Earn degree  


### 🧠 Hero Mode B — Learning Tool Entry (Quizlet Style)

Centered layout:
- Large question-style headline  
- Short explanation text  
- Primary CTA (Sign up free)  
- Secondary link (Teacher mode)  

Below hero:
- Large colored learning mode cards:
  - Study  
  - Flashcards  
  - Test  
  - Match  

Support horizontal scroll.


### 💳 Hero Mode C — Product Plan Showcase (Kahoot Style)

Multi-column product cards including:

- Plan name  
- Audience tag  
- Price starting text  
- Primary CTA  
- Secondary link  
- Device preview area  

Below:
- Feature action bar with colored action tiles:
  - Discover  
  - Learn  
  - Present  
  - Create  
  - Join  


### 🏢 Hero Mode D — Enterprise Education SaaS (PowerSchool Style)

Full-width background overlay hero:

- Large mission statement headline  
- Supporting description  
- Primary CTA  

Below hero:
- Floating feature cards or solution modules  


## 🤝 TRUST + PARTNER LOGO STRIP

- Horizontal logo row of:
  - Universities  
  - Tech companies  
  - Education partners  

Use rounded logo chips.


## 🔎 FEATURE DISCOVERY MODULES

### Category Quick Links Grid (3–6 Cards)
- Career path  
- Skill learning  
- Degrees  
- Certificates  
- Teacher resources  

### Trending / Featured Content Section
Title + horizontal scroll cards for:

- Popular courses  
- Trending topics  
- Weekly picks  
- AI skills  


## 📘 LEARNING TOOL CONTENT MODULES

### Learning Mode Cards
Large colored cards including:

- Title  
- Short description  
- Preview content block  
- Carousel support  

### Optional Progress / Performance Widget
Include:

- Circular progress indicator  
- Time estimate  
- Correct vs incorrect indicators  


## 💰 PRODUCT / PLAN COMPARISON MODULE

3-column layout:

- Plan name  
- Value proposition  
- Price line  
- CTA buttons  
- Device preview or product screenshot placeholder  


## 🏫 ENTERPRISE SOLUTION MODULES

Grid of solution tiles:

- Security  
- Analytics  
- Student data  
- Performance tracking  


## 📚 CURRICULUM CONTENT PAGE STRUCTURE

### Left Sidebar
- Standards or subject navigation  
- Grade levels (expandable list)

### Main Content
- Subject title  
- Course / unit title  
- Standard description  
- Learning objective  

### Content List (Lesson Rows)
- Icon  
- Lesson title  
- Type (video / practice / article)

### Content Metadata Tools
- CSV download icon  
- Resource export tools  


## 🎨 DESIGN SYSTEM

- Primary color: Blue or Purple  
- Secondary: Accent learning colors  
- Neutral: Light gray backgrounds  
- Large friendly headlines  
- Readable body text  
- Education-friendly tone  
- Large card spacing  
- Rounded container sections  
- Soft shadow only  


## 📱 RESPONSIVE BEHAVIOR

- Desktop: Multi-column layouts, full navigation menus  
- Tablet: Condensed navigation, 2-column card layout  
- Mobile: Hamburger menu, stacked learning modules, swipeable card carousels  


## ♿ Accessibility Requirements (Mandatory)

- Full keyboard navigation support  
- Every interactive element must be reachable using Tab  
- Clearly visible focus states (outline or highlight ring)  
- High color contrast (WCAG AA minimum)  
- Screen reader-friendly structure (semantic HTML + ARIA labels)  
- Clear focus indicators  
- Large clickable areas throughout  


## 🔗 Inter-page Navigation

- Every page must include the shared **GlobalHeader** and **Footer**  
- All navigation links must correctly link to other pages within the `edu-portal/` structure  
- Consistent header, navigation bar, and footer across all pages  
- The site must be fully navigable by Tab key alone  
- No interactive element should be skipped  


## ✅ Implementation Status Check

| Platform        | Mix | Codex | Claude Code |
|---------------|-----|-------|-------------|
| E-commerce    | ✅  | ✅    | ✅          |
| Government    | ✅  | ✅    | ✅          |
| Social Media  | ✅  | ✅    |             |
| Mass Media    | ✅  | ✅    |             |
| Education     | ✅  |       |             |

