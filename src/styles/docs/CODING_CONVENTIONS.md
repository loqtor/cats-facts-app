[↖︎ Getting Started](../README.md)

# AINT CSS

###### Last Updated: 23/08/2018 - James Bosworth

## Coding Conventions

Please familiarise yourself with, and adhere to, the adopted conventions as outlined in this document.


### Naming

> There are only two hard problems in Computer Science: cache invalidation and naming things — Phil Karlton

The AINT CSS framework uses a Pascal Case variant of the [BEM](http://google.com/?search=BEM%20naming%convention) (**B**lock **E**lement **M**odifier) naming convention for improved readability. The BEM approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language. Using proper naming will prepare you for the changes in design of the website.

Please use the same upper/lower casing and hyphenation conventions as outlined here and never use underscores.


### HTML Syntax
+ Use two-space indentations.
+ Be consistent with quotation marks, either use `'` or `"` globally.
+ A blank line (return) and the end of each file.


### SCSS Syntax
+ Use two-space indentations
+ Declarations should appear on their own line
+ Don’t specify units for zero values, e.g. `margin: 0;` instead of `margin: 0px;`.
+ Include one space before opening curlies `{`
+ Include one space after colon `:` for each declaration
+ A blank line between rulesets
+ Only `@extend` SCSS `%placeholder` classes, **never** extend dot classes (`@extend .class`)
+ A blank line (return) and the end of each file.

---

#### Block (component)

Encapsulates a standalone entity that is meaningful on its own. Block names may consist of Latin letters and digits to form a CSS class but make sure you stick to the Pascal Case capitalisation format.

##### SCSS
```scss
.MyComponent {}
```

##### HTML
```html 
<div class="MyComponent">...</div>
```

---

#### Element

Parts of a block and have no standalone meaning. Any element is semantically tied to its block. Element names are separated from the block name by a single dash '-' character. Like block class names, element classes also consist of Latin letters and digits to form a CSS class but use a Camel Case capitalisation format.

##### SCSS
```scss
.MyComponent-element {}
.MyComponent-anotherElement {}
```

##### HTML
```html 
<div class="MyComponent">
  <div class="MyComponent-element">...</div>
  <div class="MyComponent-anotherElement">...</div>
</div>
```

---

#### Modifier

Flags on blocks or elements, separated by a double dash '--'. Use them to change appearance, behavior or state. 

##### SCSS
```scss
.MyComponent--modifier {}
.MyComponent-part--modifier {}
```

##### HTML
```html
<div class="MyComponent MyComponent--modifier">
  <div class="MyComponent-element MyComponent-element--modifier">...</div>
</div>
```

---

#### State

Classes used for managing an element state using present tense descriptors separated with a single dash '-' e.g. `is-active`, `has-warning`, `is-transitioning`. Always append state classnames to the associated element selector.

##### SCSS
```scss
.MyComponent.is-active {}
.MyComponent.has-error {}
```

##### HTML
```html
<div class="MyComponent is-active">...</div>

<input class="MyComponent has-error" ... />
```

---

#### Example

+ Block: `.Button`
+ Element: `.Button-icon`
+ Modifiers: `.Button--withIcon` and `.Button--small`
+ States: `.is-active` and `.is-disabled`

```html
<button class="Button">...</button>

<button class="Button is-disabled">...</button>

<button class="Button Button--small">...</button>

<button class="Button Button--withIcon">
  <span class="Button-icon"></span>
</button>
```


## Components & Utilities

For more of an in-depth view on how to use components and utilities please see: [COMPONENTS_AND_UTILITIES.md](COMPONENTS_AND_UTILITIES.md)


##### Further reading:
+ [File structure](FILE_STRUCTURE.md)
+ [Components and utilities](COMPONENTS_AND_UTILITIES.md)
+ [Using AINT in a project](PROJECT_SETUP.md)