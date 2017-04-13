# ng-plugin
Ng Plugin

## Install

`npm install ng-plugin --save`

## Usage

Install a Angular.js plugin. If the plugin is an Object, it must expose an install method. If it is a function itself, it will be treated as the install method. The install method will be called with module as the argument.

## Writing a Plugin

Plugins usually add global-level functionality to module Angular. There is no strictly defined scope for a plugin.

A plugin should expose an install method. The method will be called with the Module Angular constructor as the first argument, along with possible options:

```js
    // filters.plugin.js
    
    import { lowerCase, lowerFirst, kebelCase } from 'lodash'

    export default function install (module) 
    {
         module.filter('lowerCase', function () {...} )
         module.filter('lowerFirst', function () {...} )
         module.filter('kebelCase', function () {...} )
    }

```

## Using a plugin

Use plugins by calling the angular.module('some-module').use() global method:

```js
    // app.js
    import 'angular'
    import 'ng-plugin'
    
    import filters from 'filters.plugin.js'
   
    angular.module('app', []).use( filters )
    
    // <p>{{ 'My first plugin' | kebelCase }}</p>
```

## License

[MIT License](LICENSE)
