[↖︎ Getting Started](./README.md)

# AINT CSS

###### Last Updated: 2/08/2019 — Tony Watson

## Quick start guide

This guide is intended to get you up and going using the AINT framework as fast as possible. It is intended to outline a reasonable flow of tailoring the fundamental building blocks of AINT to your project.

### First steps

Navigate to the following directory in AINT:
 `src/base/settings`

There are 5 files here that will your main playground:
+ `colours.scss`
+ `typography.scss`
+ `buttons.scss`
+ `layout.scss`
+ `variables.scss`

First, we will focus on the `colours.scss` file

#### `colours.scss` — colours
This is where you will set up the Brand colours for your project. The designer of your project should have provided a colour palette for the project — put these named colours with their hex values in under the `// Brand` heading as variables, replacing the defaults.

Next, define the `$primary` and `$secondary` colors under the `// Name-spacing` heading. These should be colour variables you have already defined under the `// Brand` heading.

After this, skip the `// Tones` for now (can be revisited later) and replace the default color variables under `// Text` and `// Messages`
With that done, let's leave this file for now and head over to `typography.scss`

#### `typography.scss` — fonts and text elements
This scary-looking file is where we define our global fonts and the sizes of major typographic elements (h1-h6, p, lead, and small).

This file breaks down into three sections:
+ Including the right fonts
+ Setting the base font styles
+ Setting the individual element styles

##### Including the right fonts
This is where we will pull in the fonts from our project into our scss. Firstly, obtain the correct fonts as defined by design from whatever service you are using (Typekit, Google Fonts, etc.) in a WOFF file format. This will ensure maximum compatibility and consistency in rendering. Sometimes using a service such as Fontsquirrel may be necessary to convert to the WOFF format. Include each font-weight used as its own font file (i.e. don't use italic or bold CSS styles to render if at all possible).

Anyway, place these fonts in the `/assets/fonts/FONT_FAMILY_NAME` directory, substituting the `FONT_FAMILY_NAME` for your awesome font.

Look for the following code and uncomment it:
```
// @font-face {
// font-family: "Gilroy Extra Bold";
// font-weight: normal;
// font-style: normal;
// src: local("Gilroy ExtraBold"),
// local("Gilroy-ExtraBold"),
// url("/assets/fonts/gilroy/Gilroy-ExtraBold.woff") format("woff");
//}
```
For `font-family` replace the default "Gilroy Extra Bold" with your cool font's name.
In `src`, swap out the references to "Gilroy ExtraBold" to be relevant to your cool font, and update the `url` to point to your font file.

Find this line: `$gilroy-extra-bold: "Gilroy Extra Bold", system-ui, sans-serif;` and replace the default "Gilroy Extra Bold" with your cool font's name as well. Rename the variable `$gilroy-extra-bold` to something relevant.

Repeat this for however many fonts you have and then you can move to the next step.

##### Setting the base font styles
Skip over the `$base-font-size`, `$base-line-height`, etc. — these are unlikely to require changing.

Search for `$base-font-styles: (`. As a default, you'll have three font weights set up — light, medium, and bold. Here, all you need to do is swap out the default `$gilroy-*` variables for the font name variables you set up in the previous step. These can be changed but for now, leave these labels as default. These labels are referenced in the next section in each element's font-family declaration.

##### Setting the individual element styles
Now let's set the main typographic element's styles up.
Under `$base-font-dimensions` you have h1-h6, p, lead, small, and fineprint. For now, unless explicitly told by a designer to use "fluid typography", go ahead and comment out all the following lines that look like this:
```
 min-breakpoint: $min-breakpoint,
 max-breakpoint: $max-breakpoint,
```
These are for fluid typography, where we are setting the breakpoint sizes that each element's font size will "grow between". It's cool but ignore for the moment.

The design should have these type sizes, font-weights, line-heights so it's a matter of updating each element's settings.
`min-size` refers to the smallest size that element can be in the design — usually, there will be something like "mobile" or similar, and `max-size` is for font size at the desktop breakpoint and above. When there's just one font size in the design, you can remove `min-size` and `max-size` and replace it with `font-size`.

The `font-family` takes the label you've set up previously under `$base-font-styles` — unless you've changed it, these are `light`, `medium`, and `bold`. This is how you get different fonts and font-weights to go on to the elements.

Feel free to add or delete lines such as `letter-spacing` if required — documentation at the top of this section tells you what parameters you can apply.

Phew! That's the big one out of the way. Let's head over to the calm fields of `buttons.scss`

#### `buttons.scss` — button and CTA styles
Your design should have buttons defined and will be used throughout your project.

##### Button variables
Update `$button-height`, `$button-border-width`, and `$button-border-radius` — leave the rest as default unless it's clear in the design you need to change them.

##### Button states
Generally, there will be three button styles — primary, secondary, and tertiary, with five different states (such as `focus`, and `active`). Each state has 3 spaces to set color (in order):
1. Button text colour
2. Button background-colour
3. Button border-colour

Update these as per design, using `null` if there is no color required.

#### `layout.scss` — general settings
This file is for your reference — it's unlikely you'll have a need to touch this file but can be useful to see what our breakpoints are defined as and playing around with grid settings.

#### `variables.scss` — globally useful settings
This file is used to store css variables that are used throughout the project – you'll add to this later but can be skipped for setup.

#### Next steps
From this point on, it's suggested that if there are forms included in your design, this is a good time to tackle them. The relevant style sheets are under `src/components/forms`

Otherwise, you've set up AINT and are ready to start creating components int the `src/components` folder.

### Components & Utilities
For more of an in-depth view on how to use components and utilities please see: [COMPONENTS_AND_UTILITIES.md](COMPONENTS_AND_UTILITIES.md)

##### Further reading:
+ [File structure](FILE_STRUCTURE.md)
+ [Components and utilities](COMPONENTS_AND_UTILITIES.md)
+ [Using AINT in a project](PROJECT_SETUP.md)