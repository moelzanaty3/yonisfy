---
title: "CSS Style Guide"
showMetadata: true
editable: true
showToc: true
order: 1
---

## General Formatting Rules

### Capitalization

Use only lowercase.

All code has to be lowercase. This applies to CSS selectors, properties and property values (with the exception of strings).

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
color: #e5e5e5;
```

<h4 style="color:#438344">Recommended</h4>

```css
color: #e5e5e5;
```

### Trailing Whitespace

Remove trailing white spaces.

Trailing white spaces are unnecessary and can complicate diffs.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
border: 0;__
```

<h4 style="color:#438344">Recommended</h4>

```css
border: 0;
```

If using Sublime Text, this can be done automatically each time you save a file by adding the following to your User Settings JSON file (you should be able to find this within Sublime Text's menu):

    "trim_trailing_white_space_on_save": true

### Indentation

Indentation should be consistent throughout the entire file. Whether you choose to use tabs or spaces, or 2-spaces vs. 4-spaces - just be consistent!

## General Meta Rules

### Encoding

Use UTF-8 (no BOM).

Make sure your editor uses UTF-8 as character encoding, without a byte order mark. Do not specify the encoding of style sheets as these assume UTF-8.

### Comments

Explain code as needed, where possible.

Use comments to explain code: What does it cover, what purpose does it serve, and why is the respective solution used or preferred?

### Action Items

Mark todos and action items with `TODO:`.

Highlight todos by using the keyword `TODO` only, not other formats like `@@`. Append action items after a colon like this: `TODO: action item`.

<h4 style="color:#438344">Recommended</h4>

```css
/* TODO: add button elements */
```

## CSS Style Rules

### CSS Validity

Use valid CSS.

Using valid CSS is a measurable baseline quality that ensures proper CSS usage and allows you to spot CSS code that may not have any effect and can be removed.

### ID and Class Naming

Use meaningful or generic ID and class names.

Instead of presentational of cryptic names, always use ID and class names that reflect the purpose of the element in question or that are otherwise generic.

Names that are specific and reflect the purpose of the element should be preferred as these are most understandable and the least likely to change.

Generic names are simply a fallback for elements that have no particular meaning different from their siblings. They are typically needed as helpers.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
.p-998 { … }
.btn-green { … }
```

<h4 style="color:#438344">Recommended</h4>

```css
.gallery { … }
.btn-default { … }
```

### Type Selectors

Avoid qualifying ID and class names with type selectors.

Unless necessary (for example, with helper classes), do not use element names in conjunction with IDs or classes. Avoiding unnecessary ancestor selectors is useful for performance reasons.

It is also considered bad practice to use IDs in your CSS files. There are no situations where IDs provide a benefit over classes. If you need to use a unique name for an element, use a class. (The only benefit IDs provide is speed, and is only beneficial on pages with thousands of similar elements.)

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
ul#example { … }
div.error { … }
```

<h4 style="color:#438344">Recommended</h4>

```css
.example { … }
.error { … }
```

### Shorthand Properties

Shorthand should be used.

CSS offers a variety of shorthand properties (like `padding` rather than explicitly setting `padding-top`, `padding-bottom`, etc.) that should be used whenever possible, with the exception of font properties and properties intended to override properties of the same name in a framework such as Bootstrap.

Using shorthand properties is useful for code efficiency and understandability. The `font` shorthand property is recommended when setting all font related properties but is not required when making minor modifications. When using the font shorthand property, keep in mind that if font size and family are not included browsers will ignore entire font statement.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```

<h4 style="color:#438344">Recommended</h4>

```css
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

### 0 and Units

Omit unit specification after `0` values.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
margin: 0em;
padding: 0px;
```

<h4 style="color:#438344">Recommended</h4>

    margin: 0;
    padding: 0;

### Leading 0s

Include leading `0`s in decimal values for readability.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
font-size: 0.8em;
```

<h4 style="color:#438344">Recommended</h4>

```css
font-size: 0.8em;
```

### Hexadecimal Notation

Use 3-character hexadecimal notation where possible.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
color: #eebbcc;
```

<h4 style="color:#438344">Recommended</h4>

```css
color: #ebc;
```

### ID and Class Name Delimiters

Separate words in ID and class names by a hyphen (`-`).

Use hyphens to concatenate words and abbreviations in selectors in order to improve understanding and scannability.

One exception: underscores (`_`) are also acceptable separators when writing [BEM style CSS selectors](http://getbem.com/).

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
.demoimage { … }
.errorStatus { … }
```

<h4 style="color:#438344">Recommended</h4>

```css
.demo-image { … }
.error-status { … }
```

### Hacks

Avoid user agent detection as well as CSS "hacks"—try a different approach first.

It's tempting to address styling difference over user agent detection or special CSS filters, workaround and hacks. Both approaches should be considered an absolute last resort in order to achieve and maintain an efficient and manageable code base. Consider if the intended style is absolutely critical to the functionality of your application or can the "offending" user agent "live without it".

## CSS Formatting Rules

### Block Content Indentation

Indent all block content, that is rules within rules as well as declarations to reflect hierarchy and improve understanding.

<h4 style="color:#438344">Recommended</h4>

```css
@media screen, projection {
  html {
    background: #fff;
    color: #444;
  }
}
```

### Declaration Stops

Use a semicolon after every declaration for consistency and extensibility reasons.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
.test {
  display: block;
  height: 100px;
}
```

<h4 style="color:#438344">Recommended</h4>

```css
.test {
  display: block;
  height: 100px;
}
```

### Property Name Stops

Always use a space after a property name's colon, but no space between property and colon, for consistency reasons.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
font-weight: bold;
padding: 0;
margin: 0;
```

<h4 style="color:#438344">Recommended</h4>

```css
font-weight: bold;
padding: 0;
margin: 0;
```

### Declaration Block Separation

Always use a single space between the last selector and the opening brace that begins the declaration block.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
.video-block {
  margin: 0;
}

.audio-block {
  margin: 0;
}
```

<h4 style="color:#438344">Recommended</h4>

```css
.video-block {
  margin: 0;
}

.audio-block {
  margin: 0;
}
```

### Selector and Declaration Separation

Always start a new line for each selector and declaration.

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

<h4 style="color:#438344">Recommended</h4>

```css
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

### Rule Separations

Always put a blank line (two line breaks) between rules.

<h4 style="color:#438344">Recommended</h4>

```css
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

### CSS Quotation Marks

Use double quotation marks for attribute selectors or property values. Do not use quotation marks in URI values (`url()`).

<h4 style="color:#cd0e3e">Not Recommended</h4>

```css
@import url("css/links.css");

html {
  font-family: "Open Sans", arial, sans-serif;
}
```

<h4 style="color:#438344">Recommended</h4>

```css
@import url(css/links.css);

html {
  font-family: "Open Sans", arial, sans-serif;
}
```

## CSS Meta Rules

### Section Comments

If possible, group style sheet sections together by using comments. Separate sections with new lines.

<h4 style="color:#438344">Recommended</h4>

```css
/* Header */
.header {
    …
}

.header-nav {
    …
}


/* Content */
.gallery {
    …
}

.gallery-img {
    …
}


/* Footer */
.footer {
    …
}

.footer-nav {
    …
}

```

Most of the text here provided by 🎭 © [Udacity](https://www.udacity.com/) and I am only adding a little bit chooclate to  make it more tasty and powerfull
