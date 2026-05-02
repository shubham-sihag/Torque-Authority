# Torque Authority - Homepage

A professional, modern homepage for a car review and automotive blog website. This is a fully responsive, SEO-optimized, and feature-rich homepage built with semantic HTML5, CSS3, and vanilla JavaScript.

## 📋 Features

### Design & Layout
- **Hero Section**: Eye-catching banner with call-to-action buttons
- **Featured Review**: Spotlight card for the latest/top-rated review
- **Latest Reviews Grid**: Responsive 3-column grid layout (mobile-friendly)
- **Comparison Tool**: Interactive car comparison showcase
- **Buying Guides**: 6-card grid with expert automotive guides
- **Newsletter**: Email subscription section
- **Professional Footer**: Multi-column footer with links and contact info

### Technical Features
- ✅ **Semantic HTML5**: Proper heading hierarchy and semantic elements
- ✅ **Fully Responsive**: Mobile-first design with breakpoints at 768px and 480px
- ✅ **CSS Grid & Flexbox**: Modern layout techniques
- ✅ **Smooth Animations**: Hover effects, scroll animations, and transitions
- ✅ **SEO Optimized**: Meta tags, structured content, semantic markup
- ✅ **Accessibility**: ARIA labels, keyboard navigation, focus states
- ✅ **Performance**: Lightweight, no external dependencies
- ✅ **Interactive**: Form validation, smooth scrolling, hamburger menu

## 📁 File Structure

```
Homepage/
├── index.html        # Main HTML file (semantic structure)
├── styles.css        # Complete stylesheet with responsive design
├── script.js         # Interactive features and form handling
└── README.md        # This file
```

## 🎨 Color Scheme

- **Primary**: #1a1a1a (Dark gray)
- **Secondary/Accent**: #d32f2f (Red)
- **Light Background**: #f5f5f5
- **Text Dark**: #212121
- **Text Light**: #666666

## 📱 Responsive Breakpoints

- **Desktop**: Full-width layout with all features
- **Tablet (768px and below)**: Adjusted grid columns, modified hero layout
- **Mobile (480px and below)**: Single-column layout, simplified navigation

## 🎯 Sections Overview

### 1. Navigation Header
- Sticky header with logo and menu
- Hamburger menu for mobile devices
- Contact button with hover effects

### 2. Hero Section
- Large headline and subheading
- Two call-to-action buttons
- Animated car emoji placeholder

### 3. Featured Review
- Large featured article card
- Category badge
- Star rating system
- Link to full review

### 4. Latest Reviews
- 6-card grid of recent reviews
- Category tags
- Ratings and review links
- "View All Reviews" button

### 5. Comparison Tool
- Feature highlights
- 4-card comparison options
- Interactive CTA button

### 6. Buying Guides
- 6-card grid layout
- Topic icons
- Brief descriptions
- Guide links

### 7. Newsletter
- Email subscription form
- Success/error notifications
- Call-to-action messaging

### 8. Footer
- 4-column footer layout
- About section
- Quick links
- Contact information
- Legal links
- Copyright notice

## 🚀 Getting Started

### To View the Homepage
1. Open `index.html` in a web browser
2. All styles and scripts are included

### To Customize

#### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #d32f2f;
    /* ... other colors ... */
}
```

#### Update Content
Edit text in `index.html`:
- Update car reviews and ratings
- Change buying guides
- Modify contact information in footer

#### Add Images
Replace emoji placeholders with actual car images:
```html
<!-- Change this: -->
<span class="image-placeholder">🚗</span>

<!-- To this: -->
<img src="path/to/image.jpg" alt="Car Review">
```

## ✨ JavaScript Features

- **Hamburger Menu**: Mobile-friendly navigation toggle
- **Smooth Scrolling**: Anchor links scroll smoothly
- **Form Validation**: Email validation with notifications
- **Intersection Observer**: Scroll animations on cards
- **Keyboard Navigation**: Alt+M to skip to main content
- **Sticky Header**: Dynamic shadow on scroll

## 🔍 SEO Features

- Semantic HTML5 tags (header, nav, main, section, article, footer)
- Proper heading hierarchy (h1, h2, h3, h4)
- Meta description and keywords
- Image alt text support
- Structured content organization
- Mobile-friendly viewport settings

## ♿ Accessibility

- Semantic HTML structure
- Focus states for keyboard navigation
- Color contrast ratios meet WCAG standards
- Reduced motion support (@prefers-reduced-motion)
- Proper ARIA labels support ready
- Button and link focus indicators

## 🎯 Performance Optimizations

- No external dependencies (CSS frameworks, icon libraries)
- Minimal JavaScript (vanilla JS only)
- Optimized CSS with reusable utility classes
- Responsive images support ready
- Fast load times

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 Future Enhancements

- [ ] Add actual car images instead of placeholders
- [ ] Integrate real reviews data from API
- [ ] Add comparison tool functionality
- [ ] Implement search feature
- [ ] Add filtering/sorting for reviews
- [ ] Create individual review pages
- [ ] Add user ratings and comments
- [ ] Implement newsletter backend
- [ ] Add dark mode toggle
- [ ] Add social media integration

## 📄 License

This homepage template is ready for use in the Torque Authority website project.

## 👨‍💻 Notes for Developers

- All CSS is organized with clear sections and comments
- JavaScript is modular with separate functions for each feature
- HTML is semantic and well-structured for SEO
- No build tools or compilation needed
- Easy to extend and customize
- Mobile-first approach ensures accessibility

---

Built with ❤️ for car enthusiasts. Ready to drive engagement!
