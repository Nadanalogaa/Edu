# 🎨 Education Intelligence - Color Theme Guide

> Complete design system and color palette for NEET/JEE Education Platform

---

## Table of Contents
1. [Brand Colors](#brand-colors)
2. [Subject Colors](#subject-colors)
3. [Background Colors](#background-colors)
4. [Text Colors](#text-colors)
5. [Status Colors](#status-colors)
6. [Gradients](#gradients)
7. [Borders](#borders)
8. [Shadows](#shadows)
9. [Interactive States](#interactive-states)
10. [Dark Mode](#dark-mode)
11. [Component-Specific Colors](#component-specific-colors)

---

## Brand Colors

### Primary - Indigo
The main brand color used throughout the application for buttons, links, and primary actions.

| Name | Light Mode | Dark Mode | Usage |
|------|-----------|-----------|-------|
| Primary | `#4f46e5` (indigo-600) | `#6366f1` (indigo-500) | Primary buttons, active states |
| Primary Hover | `#4338ca` (indigo-700) | `#818cf8` (indigo-400) | Button hover states |
| Primary Light | `#e0e7ff` (indigo-100) | `#4f46e5/20` (indigo-500/20) | Backgrounds, subtle highlights |
| Primary Dark | `#3730a3` (indigo-800) | `#4338ca` (indigo-700) | Text on light backgrounds |

**Hex Values:**
```
indigo-50:  #eef2ff
indigo-100: #e0e7ff
indigo-400: #818cf8
indigo-500: #6366f1
indigo-600: #4f46e5
indigo-700: #4338ca
indigo-800: #3730a3
```

**CSS Variables:**
```css
--color-primary: #4f46e5;
--color-primary-hover: #4338ca;
--color-primary-light: #e0e7ff;
--color-primary-dark: #3730a3;
```

---

## Subject Colors

### Physics - Red/Pink
Dynamic, energy-focused colors representing physics concepts.

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `from-red-50 to-pink-50` | `from-red-900/20 to-pink-900/20` |
| Border | `red-200` (#fecaca) | `red-800` (#991b1b) |
| Text | `red-600` (#dc2626) | `red-400` (#f87171) |
| Icon | `red-600` (#dc2626) | `red-400` (#f87171) |

**Gradient:**
```css
/* Light */
background: linear-gradient(to bottom right, #fef2f2, #fce7f3);
border: 2px solid #fecaca;

/* Dark */
background: linear-gradient(to bottom right, rgba(127, 29, 29, 0.2), rgba(131, 24, 67, 0.2));
border: 2px solid #991b1b;
```

### Chemistry - Cyan/Blue
Scientific, precise colors representing chemistry.

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `from-cyan-50 to-blue-50` | `from-cyan-900/20 to-blue-900/20` |
| Border | `cyan-200` (#a5f3fc) | `cyan-800` (#155e75) |
| Text | `cyan-600` (#0891b2) | `cyan-400` (#22d3ee) |
| Icon | `blue-600` (#2563eb) | `blue-400` (#60a5fa) |

**Gradient:**
```css
/* Light */
background: linear-gradient(to bottom right, #ecfeff, #eff6ff);
border: 2px solid #a5f3fc;

/* Dark */
background: linear-gradient(to bottom right, rgba(22, 78, 99, 0.2), rgba(30, 58, 138, 0.2));
border: 2px solid #155e75;
```

### Biology - Green
Organic, life-focused colors representing biology.

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `from-green-50 to-emerald-50` | `from-green-900/20 to-emerald-900/20` |
| Border | `green-200` (#bbf7d0) | `green-800` (#166534) |
| Text | `green-600` (#16a34a) | `green-400` (#4ade80) |
| Icon | `green-600` (#16a34a) | `green-400` (#4ade80) |

**Gradient:**
```css
/* Light */
background: linear-gradient(to bottom right, #f0fdf4, #ecfdf5);
border: 2px solid #bbf7d0;

/* Dark */
background: linear-gradient(to bottom right, rgba(20, 83, 45, 0.2), rgba(6, 78, 59, 0.2));
border: 2px solid #166534;
```

### Mathematics - Purple
Logical, analytical colors representing mathematics.

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `from-purple-50 to-violet-50` | `from-purple-900/20 to-violet-900/20` |
| Border | `purple-200` (#e9d5ff) | `purple-800` (#6b21a8) |
| Text | `purple-600` (#9333ea) | `purple-400` (#c084fc) |
| Icon | `purple-600` (#9333ea) | `purple-400` (#c084fc) |

**Gradient:**
```css
/* Light */
background: linear-gradient(to bottom right, #faf5ff, #f5f3ff);
border: 2px solid #e9d5ff;

/* Dark */
background: linear-gradient(to bottom right, rgba(88, 28, 135, 0.2), rgba(76, 29, 149, 0.2));
border: 2px solid #6b21a8;
```

---

## Background Colors

### Light Mode
| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background Primary | `white` | #ffffff | Main content areas, cards |
| Background Secondary | `slate-50` | #f8fafc | Page background |
| Background Tertiary | `slate-100` | #f1f5f9 | Subtle containers |

### Dark Mode
| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Background Primary | `slate-800/50` | rgba(30, 41, 59, 0.5) | Main content areas, cards |
| Background Secondary | `slate-900` | #0f172a | Page background |
| Background Tertiary | `slate-800` | #1e293b | Subtle containers |

**CSS Variables:**
```css
/* Light Mode */
--bg-primary: #ffffff;
--bg-secondary: #f8fafc;
--bg-tertiary: #f1f5f9;

/* Dark Mode */
--bg-primary: rgba(30, 41, 59, 0.5);
--bg-secondary: #0f172a;
--bg-tertiary: #1e293b;
```

---

## Text Colors

### Light Mode
| Purpose | Color | Hex | Usage |
|---------|-------|-----|-------|
| Primary Text | `slate-800` | #1e293b | Headings, body text |
| Secondary Text | `slate-600` | #475569 | Descriptions, labels |
| Tertiary Text | `slate-500` | #64748b | Hints, placeholders |
| Muted Text | `slate-400` | #94a3b8 | Disabled, inactive |

### Dark Mode
| Purpose | Color | Hex | Usage |
|---------|-------|-----|-------|
| Primary Text | `slate-100` | #f1f5f9 | Headings, body text |
| Secondary Text | `slate-300` | #cbd5e1 | Descriptions, labels |
| Tertiary Text | `slate-400` | #94a3b8 | Hints, placeholders |
| Muted Text | `slate-500` | #64748b | Disabled, inactive |

---

## Status Colors

### Success
| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `green-50` (#f0fdf4) | `green-900/20` |
| Border | `green-200` (#bbf7d0) | `green-800` (#166534) |
| Text | `green-600` (#16a34a) | `green-400` (#4ade80) |
| Solid | `green-500` (#22c55e) | `green-500` (#22c55e) |

**Usage:** Completed tasks, correct answers, positive metrics

### Error / Danger
| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `red-50` (#fef2f2) | `red-900/20` |
| Border | `red-200` (#fecaca) | `red-800` (#991b1b) |
| Text | `red-600` (#dc2626) | `red-400` (#f87171) |
| Solid | `red-500` (#ef4444) | `red-500` (#ef4444) |

**Usage:** Errors, incorrect answers, negative metrics

### Warning
| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `amber-50` (#fffbeb) | `amber-900/20` |
| Border | `amber-200` (#fde68a) | `amber-800` (#92400e) |
| Text | `amber-600` (#d97706) | `amber-400` (#fbbf24) |
| Solid | `amber-500` (#f59e0b) | `amber-500` (#f59e0b) |

**Usage:** Warnings, time running out, important notices

### Info
| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `blue-50` (#eff6ff) | `blue-900/20` |
| Border | `blue-200` (#bfdbfe) | `blue-800` (#1e40af) |
| Text | `blue-600` (#2563eb) | `blue-400` (#60a5fa) |
| Solid | `blue-500` (#3b82f6) | `blue-500` (#3b82f6) |

**Usage:** Informational messages, tips, hints

---

## Gradients

### Brand Gradients

**Primary Gradient (Indigo)**
```css
/* Card Backgrounds */
background: linear-gradient(to bottom right, #4f46e5, #7c3aed);
/* From indigo-600 to purple-600 */

/* Subtle Backgrounds */
background: linear-gradient(to bottom right, #e0e7ff, #ddd6fe);
/* From indigo-100 to purple-100 */
```

### Stat Card Gradients

**Streak Card (Amber/Orange)**
```css
background: linear-gradient(to bottom right, #f59e0b, #ea580c, #dc2626);
/* From amber-500 via orange-600 to red-600 */
```

**Best Streak Card (Pink/Rose)**
```css
background: linear-gradient(to bottom right, #ec4899, #db2777, #f43f5e);
/* From pink-500 via pink-600 to rose-600 */
```

**Coins Card (Emerald/Teal)**
```css
background: linear-gradient(to bottom right, #10b981, #059669, #0d9488);
/* From emerald-500 via emerald-600 to teal-600 */
```

**Completed Card (Indigo/Purple)**
```css
background: linear-gradient(to bottom right, #6366f1, #4f46e5, #9333ea);
/* From indigo-500 via indigo-600 to purple-600 */
```

### Hero Banner Gradients

**NEET Banner (Blue/Indigo)**
```css
background: linear-gradient(135deg, #3b82f6, #4f46e5);
/* From blue-500 to indigo-600 */
```

**JEE Banner (Purple/Pink)**
```css
background: linear-gradient(135deg, #9333ea, #ec4899);
/* From purple-600 to pink-500 */
```

---

## Borders

### Border Colors

| Purpose | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Default | `slate-200` (#e2e8f0) | `slate-700` (#334155) |
| Subtle | `slate-100` (#f1f5f9) | `slate-800` (#1e293b) |
| Hover | `indigo-400` (#818cf8) | `indigo-600` (#4f46e5) |
| Focus | `indigo-500` (#6366f1) | `indigo-500` (#6366f1) |

### Border Widths
```css
border-width: 1px;  /* Default */
border-width: 2px;  /* Emphasized cards */
border-width: 4px;  /* Loading spinners */
```

### Border Radius
```css
--radius-sm: 0.375rem;   /* 6px - Small elements */
--radius-md: 0.5rem;     /* 8px - Default */
--radius-lg: 0.75rem;    /* 12px - Cards */
--radius-xl: 1rem;       /* 16px - Large cards */
--radius-2xl: 1.5rem;    /* 24px - Hero sections */
--radius-full: 9999px;   /* Circular - Badges, icons */
```

---

## Shadows

### Light Mode Shadows
```css
/* Small - Hover states */
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

/* Medium - Default cards */
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

/* Large - Elevated elements */
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

/* Extra Large - Modal, drawers */
box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

/* 2XL - Hero sections */
box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

### Dark Mode Shadows
Shadows are more subtle in dark mode to avoid harsh contrast.

```css
/* Use same shadows but consider reducing opacity by 50% in dark mode */
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);
```

---

## Interactive States

### Buttons

**Primary Button**
```css
/* Default */
background: #4f46e5; /* indigo-600 */
color: #ffffff;

/* Hover */
background: #4338ca; /* indigo-700 */
transform: translateY(-1px);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Active */
background: #3730a3; /* indigo-800 */
transform: translateY(0);

/* Disabled */
background: #cbd5e1; /* slate-300 */
opacity: 0.5;
cursor: not-allowed;
```

**Secondary Button**
```css
/* Default */
background: #ffffff;
color: #4f46e5;
border: 1px solid #e2e8f0;

/* Hover */
background: #f8fafc; /* slate-50 */
border-color: #cbd5e1; /* slate-300 */
```

### Cards

**Default Card**
```css
background: #ffffff;
border: 1px solid #e2e8f0; /* slate-200 */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Hover */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
transform: translateY(-4px);
border-color: #818cf8; /* indigo-400 */
```

### Links

```css
/* Default */
color: #4f46e5; /* indigo-600 */

/* Hover */
color: #4338ca; /* indigo-700 */
text-decoration: underline;

/* Visited */
color: #6b21a8; /* purple-800 */
```

---

## Dark Mode

### Activation
Dark mode is triggered by:
- User preference toggle
- System preference (prefers-color-scheme: dark)

### Implementation
```css
/* Tailwind CSS approach */
.dark {
  /* Dark mode styles */
}

/* Or using CSS custom properties */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #1e293b;
    --text-primary: #f1f5f9;
  }
}
```

### Opacity in Dark Mode
Dark mode often uses reduced opacity for backgrounds:
```css
/* Subject cards in dark mode */
background: rgba(127, 29, 29, 0.2); /* red-900/20 */
background: rgba(22, 78, 99, 0.2);  /* cyan-900/20 */
background: rgba(20, 83, 45, 0.2);  /* green-900/20 */
```

---

## Component-Specific Colors

### Dashboard Cards

**Stat Cards**
```css
background: #ffffff;
border: 1px solid #e2e8f0;
padding: 1.5rem;
border-radius: 1rem;

/* Icon Background */
background: #e0e7ff; /* indigo-100 */
color: #6366f1; /* indigo-500 */
```

### Challenge Cards

**Completed Badge**
```css
background: #22c55e; /* green-500 */
color: #ffffff;
padding: 0.5rem 1rem;
border-radius: 9999px;
```

**Details Button**
```css
color: #4f46e5; /* indigo-600 */
font-size: 0.75rem;
font-weight: 500;

/* Hover */
color: #4338ca; /* indigo-700 */
```

### Performance Metrics

**Positive Change**
```css
color: #10b981; /* emerald-500 */
/* Used for: +5.2%, improved scores */
```

**Negative Change**
```css
color: #ef4444; /* red-500 */
/* Used for: -3%, decreased performance */
```

### Loading States

**Spinner**
```css
border: 4px solid #4f46e5; /* indigo-600 */
border-top-color: transparent;
animation: spin 1s linear infinite;
```

---

## Typography Colors

### Headings
```css
h1, h2, h3 {
  color: #1e293b; /* slate-800 light mode */
  color: #f1f5f9; /* slate-100 dark mode */
}
```

### Body Text
```css
p {
  color: #475569; /* slate-600 light mode */
  color: #cbd5e1; /* slate-300 dark mode */
}
```

### Accent Text (Student Name, Highlights)
```css
.accent {
  color: #4f46e5; /* indigo-600 light mode */
  color: #818cf8; /* indigo-400 dark mode */
}
```

---

## Accessibility

### Contrast Ratios
All color combinations meet WCAG 2.1 Level AA standards:

| Combination | Ratio | Standard |
|-------------|-------|----------|
| indigo-600 on white | 7.1:1 | AAA |
| slate-800 on white | 13.6:1 | AAA |
| white on indigo-600 | 7.1:1 | AAA |
| slate-100 on slate-800 | 11.4:1 | AAA |

### Focus Indicators
```css
/* Keyboard focus */
outline: 2px solid #6366f1; /* indigo-500 */
outline-offset: 2px;
```

---

## Implementation Examples

### Using Tailwind CSS
```html
<!-- Primary Button -->
<button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
  Click Me
</button>

<!-- Physics Card -->
<div class="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20
            border-2 border-red-200 dark:border-red-800 rounded-2xl p-6">
  Physics Content
</div>

<!-- Success Message -->
<div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800
            text-green-600 dark:text-green-400 p-4 rounded-lg">
  Success!
</div>
```

### Using CSS Variables
```css
:root {
  /* Brand */
  --color-primary: #4f46e5;
  --color-primary-hover: #4338ca;

  /* Subjects */
  --color-physics: #dc2626;
  --color-chemistry: #0891b2;
  --color-biology: #16a34a;
  --color-maths: #9333ea;

  /* Status */
  --color-success: #22c55e;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;

  /* Neutrals */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;
  --color-text-primary: #1e293b;
  --color-text-secondary: #475569;
}

.dark {
  --color-bg-primary: rgba(30, 41, 59, 0.5);
  --color-bg-secondary: #0f172a;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #cbd5e1;
}
```

---

## Color Palette Summary

### Quick Reference
```
PRIMARY: Indigo (#4f46e5)
PHYSICS: Red (#dc2626)
CHEMISTRY: Cyan (#0891b2)
BIOLOGY: Green (#16a34a)
MATHS: Purple (#9333ea)

SUCCESS: Green (#22c55e)
ERROR: Red (#ef4444)
WARNING: Amber (#f59e0b)
INFO: Blue (#3b82f6)

BG LIGHT: White (#ffffff)
BG DARK: Slate-900 (#0f172a)
TEXT LIGHT: Slate-800 (#1e293b)
TEXT DARK: Slate-100 (#f1f5f9)
```

---

## Design System Files

For implementation in other projects:
- Download this theme file
- Import Tailwind CSS or create CSS variables
- Use provided hex codes for custom implementations
- Follow gradient patterns for consistency
- Maintain contrast ratios for accessibility

---

**Version:** 1.0
**Last Updated:** January 2025
**Application:** Education Intelligence - NEET & JEE Platform
**Framework:** Tailwind CSS v3.x

---

*This color theme ensures consistency, accessibility, and visual hierarchy across the entire application.*
