module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],

  rules: {
    /* CSS rules */
    "at-rule-no-unknown": null,
    "at-rule-empty-line-before": null,
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-newline-after": ["always-multi-line", {
      "ignoreAtRules": ["if", "else"]
    }],
    "block-opening-brace-space-before": "always",
    "block-opening-brace-space-after": "always-single-line",
    "color-hex-case": null,
    "color-hex-length": null,
    "declaration-empty-line-before": null,
    "declaration-block-single-line-max-declarations": 2,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "function-parentheses-space-inside": "never-single-line",
    "function-max-empty-lines": 1,
    "length-zero-no-unit": null,
    "max-empty-lines": [2, {
      "ignore": ["comments"]
    }],
    "no-duplicate-selectors": null,
    "rule-empty-line-before": ["always-multi-line", {
      "except": ["after-single-line-comment", "first-nested"],
      "ignore": ["after-comment", "first-nested"]
    }],
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-pseudo-element-colon-notation": "double",
    "value-list-max-empty-lines": 1,
    

    /* SCSS rules */
    "scss/at-rule-no-unknown": true,
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-if-parentheses-space-before": "always",
    "scss/no-duplicate-dollar-variables": [true, {
      "ignoreInsideAtRules": ["if", "else", "mixin", "function", "while"]
    }],
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/dollar-variable-colon-space-after": "at-least-one-space",
    "scss/dollar-variable-colon-newline-after": "always-multi-line",
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/declaration-nested-properties-no-divided-groups": true,
    "scss/operator-no-unspaced": true,
    "scss/selector-no-redundant-nesting-selector": true,
  }
};
