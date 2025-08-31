---
layout: android
title: Android Theme Demo
description: Demonstration of the Android Design-inspired theme for SystemDS documentation
---

# Android Theme Demo

This page demonstrates the new **Android Design-inspired theme** for the SystemDS documentation website.

## Design Principles

The theme follows Material Design principles while maintaining Apache branding:

- Clean typography with the Roboto font family
- Generous whitespace for improved readability  
- Material Design color palette with Apache accent colors
- Responsive layout that works on all devices
- Dark/light theme support with system preference detection

## Key Features

### Typography

The theme uses a structured typographic hierarchy:

- **Headers** use appropriate font weights and spacing
- **Body text** optimized for readability with proper line height
- **Code** elements use Roboto Mono for better distinction

### Layout Structure

The layout implements the three-column Android Developer docs pattern:

1. **Left sidebar** - Collapsible navigation (docs pages)
2. **Center content** - Main content area with optimal reading width
3. **Right sidebar** - Table of contents with scroll-spy (docs pages)

### Interactive Elements

- Responsive header with search and theme toggle
- Mobile-friendly hamburger navigation
- Smooth scrolling and transitions
- Focus indicators for accessibility

## Code Example

Here's a sample code block to demonstrate syntax highlighting:

```python
# SystemDS Python API example
from systemds.context import SystemDSContext
from systemds.matrix import Matrix

# Create context
sds = SystemDSContext()

# Create matrix
m = Matrix(sds, [[1, 2, 3], [4, 5, 6]])

# Perform operations
result = m.t() + m.mean()
print(result.compute())
```

## Lists and Content

### Ordered List
1. First item with detailed explanation
2. Second item showing proper spacing
3. Third item demonstrating consistent styling

### Unordered List
- Clean bullet points
- Proper indentation
- Good visual hierarchy
- Mobile-responsive layout

## Accessibility Features

The theme prioritizes accessibility:

- High contrast color combinations (4.5:1 minimum)
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Skip links for navigation

---

*This demonstration page showcases the foundation of the Android theme. More features like admonitions, interactive code blocks, and enhanced search will be added in subsequent milestones.*