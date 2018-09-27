# AngularGridster2Example

## Install 

### npm

```term
npm install angular-gridster2
```

### Add to app.module.ts

```typescript
import { GridsterModule } from 'angular-gridster2';

@NgModule({
    imports: [ GridsterModule ]
})
```

### Add to dashboard component

```typescript
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
```

## Overview

This project is a working example of using the `angular-gridster2` library which is located here https://tiberiuzuld.github.io

When trying to implement this library for the first time, I ran into the following issues:

- How is a widget populated with a specific component?
    - This solution uses `*ngSwitchCase` to specify the component selector that will be used based on the `componentName` property that this solution adds to the `GridsterItem` object.
- What ties a component to a specific widget?
    - This solution does by convention. By defining an additional property of `componentName` on the `GridsterItem` object, both the widget and component share a common link.
- How can the dashboard layout be persisted whenever a layout change occurs?

## Storage mechanism.

Grid layout is persisted to `localStorage` when the `itemChange` event occurs.

More information on `localStorage` can be found here:

https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

The `GridsterStorageService` which is part of this example and not part of the `angular-gridster2` package could be made to persist data back to an API with a database backend.

## `itemChange` event notes

Because the `angular-gridster2` API relies on a callback function for the `itemChange` event, care must be taken to pass in the context of the parent component when defining the callback. This is acheived by using the `.bind(this);` function when declaring the callback. 

A discussion of accessing a javascript parent context in a callback method can be found here:

https://stackoverflow.com/questions/5106284/js-accessing-scope-of-parent-class



## Source

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
