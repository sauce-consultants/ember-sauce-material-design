# Ember Sauce Material Design

This README outlines the details of collaborating on this Ember addon.

## Installation

* `ember install ember-sauce-material-design`
* Install dependencies (temporary)
  * ember install ember-material-lite
  * ember install ember-select-box
  * ember install ember-cp-validations
  * bower install sauce-material-design
* Add sass files to `ember-cli-build.js`

```
sassOptions: {
    includePaths: [
      'bower_components/material-design-lite/src',
      'bower_components/sauce-material-design/src'
    ]
  },
```
* Add js file to `ember-cli-build.js`

```
  app.import('bower_components/material-design-lite/material.min.js');
```

* Add `@import "sauce-material-design.scss";` to your `app.scss`
* Win

## Components

* smd-header
* smd-item
* smd-form-control

## Docs

Coming soon.. Clone repo and run `ember serve` to view the demo app at http://localhost:4200

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
