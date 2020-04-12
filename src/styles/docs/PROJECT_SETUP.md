[↖︎ Getting Started](../README.md)

# AINT CSS

###### Last Updated: 03/09/2018 - James Bosworth

## Using AINT in a project

>Before diving straight into a project, make sure you have thoroughly read and undersand the documentation.
>
>+ [Getting Started](../README.md)
>+ [File structure](FILE_STRUCTURE.md)
>+ [Coding conventions](CODING_CONVENTIONS.md)
>+ [Components and utilities](COMPONENTS_AND_UTILITIES.md)
>
>If you have a hard time understanding anything do not fret, we're here for you! Get in touch with one of the front end specialists in the web team (web@alphero.com) and they will be more than happy to help.


## Overview

The AINT framework is designed to be framework agnostic because Alphero believe in using frameworks that are fit-for-purpose. This means each development project will have it's own set of build tools and requirements, always refer to the project's documentation and speak to a project lead about how they would like to approach integrating AINT.

To begin using AINT, first pull the latest code from `MASTER`. Copy the contents of `src/` into the project's style directory, keeping in mind this will change per-framework.

**Example setup using Ember JS:**

```text
app/
 ...
 └── styles/ <- AINT files go here
      ├── app.scss
      ├── print.scss
      ├── base/
      ├── components/
      ├── layout/
      └── utilities/
```

## Requirements & Build Tools

Although AINT is framework agnostic, there are still some dependencies to get it working in each framework:

1. Sass Compiler: 
2. Autoprefixer: 

### Static website dependencies:

When simply building templates, no JS framework is required but you'll still need to compile and autoprefix your CSS.
+ [postcss-cli](https://github.com/postcss/postcss-cli#readme): _Compile SCSS files into CSS._
+ [autoprefixer](https://github.com/postcss/autoprefixer#readme): _Parse CSS and add vendor prefixes._
+ [chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli): _Ultra-fast cross-platform command line utility to watch file system changes._
+ [node-sass-chokidar](https://github.com/michaelwayman/node-sass-chokidar#readme) : _A thin wrapper around node-sass to replicate `--watch --recursive` using chokidar._

---

### Ember JS dependencies:
+ [ember-cli-sass](https://www.npmjs.com/package/ember-cli-sass): _ember-cli-sass uses libsass to preprocess your ember-cli app's files and provides support for source maps and include paths._
+ [ember-cli-autoprefixer](https://www.npmjs.com/package/ember-cli-autoprefixer): _This addon runs the styles of your Ember CLI-project through Autoprefixer._

---

### React dependencies (using [create-react-app](https://github.com/facebook/create-react-app)):
+ TODO

---

### React dependencies (using [webpack](https://github.com/webpack/webpack)):
+ TODO

---

## Where to begin with a fresh project
Once you have successfully integrated AINT into your project and have it compling corectly there are some common setup steps that you will need to follow for every new project, most of which is defined by the design team.

The designer on your project should have completed a handover checklist that covers:
1. **Layout Type:** _Defualt? Persistent header and footer? Sticky footer?_
2. **Global Spacing Units:** _Vertical and horizontal spacing units._
3. **Grid Behaviour:** _Fluid or fixed container? What is the column spacing? Do we need print styles?_
4. **Fonts:** _What font families and styles are we using and where? Do we have a license?_
5. **Typography**: _What are all our typographic element font sizes?_
6. **Colours:** _What are all the colours the design uses?_



## Development tools

### General tools
+ [CSS Dig Chrome extension](https://chrome.google.com/webstore/detail/css-dig/lpnhmlhomomelfkcjnkcacofhmggjmco):  _Analyze your CSS in a new way. Consolidate, refactor, and gawk at the 37 shades of blue your site somehow ended up with._
+ [HTML Code Sniffer Bookmarklet](http://squizlabs.github.io/HTML_CodeSniffer/): _A client-side script that checks HTML source code and detects violations of a defined coding standard._

### VS Code Extensions
+ [SCSS IntelliSense](https://github.com/mrmlnc/vscode-scss): _IntelliSense for Variables, Mixins and Functions in all SCSS files._
+ [Colour Highlight](https://github.com/sergiirocks/vscode-ext-color-highlight): _Extension adds colored border around css/web colors in the editor._
+ [Bracket Pair Colouriser](https://github.com/CoenraadS/BracketPair): _allows matching brackets to be identified with colours._