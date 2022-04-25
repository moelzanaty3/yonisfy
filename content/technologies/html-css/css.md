---
title: "CSS"
showMetadata: true
editable: true
showToc: true
order: 0
tocDepth: 3
---

## What is CSS?

As [Wikipedia](https://en.wikipedia.org/wiki/CSS) mentioned, it's a style sheet language used for describing the presentation of a document written
in a markup language such as HTML.

## CSS Basics

### Linking a CSS Stylesheet

When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.

Three Ways to Insert CSS style sheet:

1. **External CSS**

the style will be in an external file other than HTML with a `.css` extension but Each HTML page must include
a reference to the external style sheet file inside the `<link>` element, inside the head section.

```html
...
<head>
  <link rel="stylesheet" href="style.css" />
</head>
...
```

2. **Internal CSS**

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the `<style>` element, inside the head section.

```html
...
<head>
  <style>
    body {
      background-color: pink;
    }
  </style>
</head>
...
```

3. **Inline CSS**

An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

```html
...
<body>
  <h1 style="color:blue;text-align:center;">This is a heading</h1>
  <p style="color:red;">This is a paragraph.</p>
</body>
...
```

**What style will be used when there is more than one style specified for an HTML element?**

All the styles in a page will "cascade" into a new "virtual"
style sheet by the following rules, where number one has the highest priority:

- Inline style
- Internal style
- External style

So, an `inline` style has the highest priority, and
will override `external` and `internal` styles and browser defaults.

### Normalizing CSS

[Normalize.css](https://necolas.github.io/normalize.css/) is a [CSS reset](https://ageek.dev/css-resets) library, makes browsers render all elements more consistently and in line with modern standards, and precisely targets only the styles that need normalizing.

Older browsers need a lot of normalization help. Newer browsers don’t need as many CSS normalization styles, yet styles added to ensure that styles are the same across browsers. When custom styles are added, they will quickly override normalized styles.

This reset library preserves useful defaults and tries to normalize styles across browsers, instead of removing styles. If a browser does not adhere to the standard styles, it aims to modify them to make styles consistent.

`Normalize.css` is very popular and used by many popular tech companies. It has following key features:

- Preserves useful defaults, unlike many CSS resets.
- Normalizes styles for a wide range of elements.
- Corrects bugs and common browser inconsistencies.
- Improves usability with subtle modifications.
- Explains what code does using detailed comments.

Read more @ [aggeek.dev](https://ageek.dev/normalize-css) ©️

`CSS resets` aim to remove all built-in browser styling. Standard elements like H1-6, p, strong, em, et cetera end up looking exactly alike, having no decoration at all. You're then supposed to add all decoration yourself.

`Normalize CSS` aims to make built-in browser styling consistent across browsers. Elements like H1-6 will appear bold, larger et cetera in a consistent way across browsers. You're then supposed to add only the difference in decoration your design needs.

### Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

<!--
### Relational Selectors

### Pseudo-class Selectors

### Pseudo-element Selectors

### Attribute Selectors

### Selectors Specificity

### Inheritance

### Colors

### Gradients

### Borders

### Shadows


## Layout

### The Box Model
### Sizing Elements
### Overflowing
### Measurement Units
### Positioning
### Floating Elements
### FlexBox
### Grid
### Hiding Elements
### Media Queries

## Typography

### Styling Fonts
### Embedding Web Fonts
### Flash of Unstyled Text
### Font Services
### System Font Stack
### Sizing Fonts
### Vertical Spacing
### Horizontal Spacing
### Formatting Text

## Images

### Image Types and Formats
### Content Images
### Background Images
### CSS Sprites
### Data URLs
### Clipping
### Filters
### Supporting High-density Screens
###  Resolution Switching
###  Using Modern Image Formats
###  Art Direction
###  Scalable Vector Graphics
###  Font Icons

## Forms

### Creating a Basic Form
### Styling Forms
### CSS Frameworks
### Text Fields
### Data Lists
### Drop-down Lists
### Check Boxes
### Radio Buttons
### Sliders
### File Inputs
### Grouping Related Fields
### Hidden Fields
### Data Validation
### Submitting the Form

## Transformations, Transitions, and Animations

### Transformations
### 3D Transformations
### Transitions
### Animations
### Reusable Animations

## Writing Clean, Maintainable CSS

### CSS Best Practices
### Variables
### Object-oriented CSS
### BEM  -->
