[↖︎ Getting Started](../README.md)

# AINT CSS

###### Last Updated: 23/08/2018 - James Bosworth

## Components and Utilities

AINT CSS is designed for component-based approaches to UI development with a collection of CSS packages and build tools available as modules.

All pre-built AINT components have very minor styling. The idea is that you evolve, build upon and add new components as required and as a project progresses.

Utilities make many classes available to do small little one-off things. Like classes to adjust margin or padding. Classes to set colors. Classes to set specific layout properties. Classes for sizing.

>Before continuing, make sure you have already read and fully understand the AINT coding conventions, naming and file structure: 
>
> + [FILE_STRUCTURE.md](FILE_STRUCTURE.md)
> + [CODING_CONVENTIONS.md](CODING_CONVENTIONS.md)

## Components

**Syntax:** `.<ComponentName>[-elementName][--modifierName][is-state]`

A component encapsulates a standalone entity that is meaningful on its own. This could be anything from a `.Button` to a `.Modal`, CSS components are usually based on 'design components' that the design team supply - but keep in mind this isn't _always_ the case.

Components are all stored in the `components/` directory and imported into `components/_index.scss` in alphabetical order. See: [FILE_STRUCTURE.md](FILE_STRUCTURE.md)


#### Example Component File:

```scss
// ========================
// COMPONENT NAME
// ========================
// @note: goes here
// ========================
.ComponentName {}

// ========================
// ELEMENTS
// ========================
.ComponentName-part {}
.ComponentName-anotherPart {}

// ========================
// MODIFIERS
// ========================
.ComponentName--modifier {}

// ========================
// UI STATES
// ========================
.ComponentName.is-active {}
```

#### Component Tips
+ Always stick to BEM naming conventions as outlined in [CODING_CONVENTIONS.md](CODING_CONVENTIONS.md)
+ As you can see from the above, BEM lends itself to flat CSS. It helps us to avoid unnecessarily lengthy selectors
+ Ain't nobody got time for an [echelon of seagulls](https://us.123rf.com/450wm/infoguides/infoguides1510/infoguides151000011/46957349-flock-of-many-black-cormorant-birds-flying-left-to-right-in-echelon-formation-on-cloudy-sky-.jpg?ver=6):

```scss
            ...
          }
        }
      }
    }
  }
}
```

## Utilities

**Syntax:** `.u-[sm-|md-|lg-]<utilityName>[-suffix]`

Utilities make many classes available to do small little one-off things. Like classes to adjust margin or padding. Classes to set colors. Classes to set specific layout properties. Classes for sizing.

Utilities are all stored in the `utilities/` directory and imported into `utilities/_index.scss` in alphabetical order. See: [FILE_STRUCTURE.md](FILE_STRUCTURE.md)

We build "mobile first" responsivity into all of our utilities, i.e. the below defaults to `u-mT-0` and then `sm-`, `md-` and `lg-` prefixes are declared inside media queries at the bottom.

#### Example Utility File:

```scss
@mixin margin($namespace: "") {
  // Margin top ============
  .u-#{$namespace}mT-0 { margin-top: 0 !important; }
  .u-#{$namespace}mT-sm { margin-top: $v/2 !important; }
  .u-#{$namespace}mT-md { margin-top: $v !important; }
  .u-#{$namespace}mT-lg { margin-top: $v*2 !important; }
  // Margin bottom ============
  .u-#{$namespace}mB-0 { margin-bottom: 0 !important; }
  .u-#{$namespace}mB-sm { margin-bottom: $v/2 !important; }
  .u-#{$namespace}mB-md { margin-bottom: $v !important; }
  .u-#{$namespace}mB-lg { margin-bottom: $v*2 !important; }
  // Margin left ============
  .u-#{$namespace}mL-0 { margin-left: 0 !important; }
  .u-#{$namespace}mL-sm { margin-left: $h/2 !important; }
  .u-#{$namespace}mL-md { margin-left: $h !important; }
  .u-#{$namespace}mL-lg { margin-left: $h*2 !important; }
  // Margin right ============
  .u-#{$namespace}mR-0 { margin-right: 0 !important; }
  .u-#{$namespace}mR-sm { margin-right: $h/2 !important; }
  .u-#{$namespace}mR-md { margin-right: $h !important; }
  .u-#{$namespace}mR-lg { margin-right: $h*2 !important; }
}

@include margin();
@media #{$mobile-only} { @include margin("sm-"); }
@media #{$tablet} { @include margin("md-"); }
@media #{$laptop} { @include margin("lg-"); }
// Note: turn off any breakpoints that aren't being used.
// @media #{$desktop} { @include margin("xl-"); }
// @media #{$widescreen} { @include margin("xx-"); }
```

#### Example Utility Usage:
The following is an example of a `div` with no `margin-top` on mobile, but small `margin-top` is added at the laptop breakpoint:

```html
<div class="u-mT-0 u-lg-mT-sm">...</div>
```

##### Further reading:
+ [File structure](FILE_STRUCTURE.md)
+ [Coding conventions](CODING_CONVENTIONS.md)
+ [Using AINT in a project](PROJECT_SETUP.md)