[↖︎ Getting Started](../README.md)

# AINT CSS

###### Last Updated: 23/08/2018 - James Bosworth

## File Structure

AINT CSS is designed for component-based approaches to UI development with a collection of CSS packages and build tools available as modules.

Out of the box, AINT has the structure shown below and all components have very minor styling. The idea is that you evolve, build upon and add new components as required, as a project progresses.

Utilities make many classes available to do small little one-off things. Like classes to adjust margin or padding. Classes to set colors. Classes to set specific layout properties. Classes for sizing.

For more information on components and utilities please see: [COMPONENTS\_AND\_UTILITIES.md](COMPONENTS_AND_UTILITIES.md)

```text
README.md
src/
 ├── app.scss
 ├── print.scss
 ├── settings/
 |    ├── _index.scss
 |    ├── buttons.scss
 |    ├── colours.scss
 |    ├── layout.scss
 |    ├── typography.scss
 |    └── variables.scss
 |
 ├── base/
 |    ├── _index.scss
 |    ├── baseline-type.scss
 |    ├── compilation/
 |    |   ├── _index.scss
 |    |   ├── compile-buttons.scss
 |    |   └── compile-typography.scss
 |    |
 |    ├── functions/
 |    |   ├── _index.scss
 |    |   ├── ease.scss
 |    |   ├── math.scss
 |    |   ├── range.scss
 |    |   ├── rem.scss
 |    |   ├── strings.scss
 |    |   └── strip-unit.scss
 |    |
 |    ├── settings/
 |    |   ├── _index.scss
 |    |   ├── buttons.scss
 |    |   ├── colours.scss
 |    |   ├── layout.scss
 |    |   ├── typography.scss
 |    |   └── variables.scss
 |    ├── mixins/
 |    |   ├── _index.scss
 |    |   ├── ease.scss
 |    |   ├── math.scss
 |    |   ├── range.scss
 |    |   ├── rem.scss
 |    |   ├── strings.scss
 |    |   └── strip-unit.scss
 |    └── vendor/
 |        ├── _index.scss
 |        ├── icomoon.scss
 |        └── naturalize.scss
 |
 ├── layout/
 |    ├── _index.scss
 |    ├── container.scss
 |    ├── grid.scss
 |    └── layout-types.scss
 |
 ├── components/
 |    ├── _index.scss
 |    ├── alert.scss
 |    ├── button.scss
 |    ├── calendar.scss
 |    ├── forms
 |    |   ├── _index.scss
 |    |   ├── checkbox.scss
 |    |   ├── input.scss
 |    |   ├── radio.scss
 |    |   ├── select.scss
 |    |   ├── textarea.scss
 |    |   └── toggle.scss
 |    |
 |    ├── hamburger.scss
 |    ├── hint.scss
 |    ├── icon-text.scss
 |    ├── link.scss
 |    ├── media.scss
 |    ├── modal.scss
 |    ├── overlay.scss
 |    ├── pagination.scss
 |    ├── spinner.scss
 |    ├── table.scss
 |    ├── tile.scss
 |    └── tooltips.scss
 |
 └── utilities/
      ├── _index.scss
      ├── debug.scss
      ├── display.scss
      ├── flex.scss
      ├── link.scss
      ├── margin.scss
      ├── offset-after.scss
      ├── offset-before.scss
      ├── padding.scss
      ├── position.scss
      ├── states.scss
      ├── text.scss
      ├── todo.scss
      └── width.scss
```


## Import Order

The ‘inverted triangle’ aspect of AINT comes from the order in which the SCSS files are loaded and consequently collated. The premise being that *styles are layered up in order of specificity* starting with the least specific.

```scss
// start with nothing and layer up our specificity
@import "base/functions/index";   // \•••••••••••••/  1. functions
@import "settings/index";         //  \•••••••••••/   2. settings and variables
@import "base/mixins/index";      //   \•••••••••/    3. mixins
@import "base/index";             //    \•••••••/     4. html elements, typography and naturalize
@import "layout/index";           //     \•••••/      5. layout and layout helpers
@import "components/index";       //      \•••/       6. designed components / chunks of ui
@import "utilities/index";        //       \•/        7. helpers and overrides
@import "print";                  //        •         8. print styles (conditionally included)
```


##### Further reading:
+ [Coding conventions](CODING_CONVENTIONS.md)
+ [Components and utilities](COMPONENTS_AND_UTILITIES.md)
+ [Using AINT in a project](PROJECT_SETUP.md)