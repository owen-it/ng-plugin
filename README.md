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
    // chat.plugin.js
    export function install (module, options) {
    
      module.filter('color', function () {...} )
      
      module.component('messages', {...})
      
      module.value('Placeholder', options.placeholder)
    }
```

## Using a plugin

Use plugins by calling the angular.module('some-module').use() global method:

```js
    // app.js
    import * as angular from 'angular'
    import chat from 'chat.plugin.js'
    import 'ng-plugin'
    
    angular.module('app', []).use( chat )
```

## License

[MIT License](LICENSE)
