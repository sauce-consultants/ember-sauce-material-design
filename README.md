# Ember Sauce Material Design

This README outlines the details of collaborating on this Ember addon.

## Full Docs

https://sauce-consultants.github.io/ember-sauce-material-design/

## Installation

* `ember install ember-sauce-material-design`
* Install dependencies (temporary)
  * ember install ember-material-lite
  * ember install ember-select-box
  * ember install ember-cp-validations
  * ember install ember-pikaday
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

The following components are currently available

* smd-header
* smd-list
* smd-item
* smd-form
* smd-form-control
* smd-empty
* smd-dropdown

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Publishing Demo app

The demo app is found in `/tests/dummy/app`. To publish an update to the version of the demo to github you will have to commit a new build to the gh-pages branch and push to github. This can be done easily using the [ember-cli-github-pages addon](https://github.com/poetic/ember-cli-github-pages).

- Make changes to the dummy app in your current branch
- Commit changes
- Run the pages build command `ember github-pages:commit --message "Added new docs for foo"` (This will build the dummy app and commit it to the gh-pages branch)
- Push up the gh-pages branch `git push origin gh-pages:gh-pages`
- Drop Mic
