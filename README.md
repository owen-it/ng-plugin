# ng-plugin
Ng Plugin

## Install

`npm install ng-plugin --save`

## Usage

Install a Angular.js plugin. If the plugin is an Object, it must expose an install method. If it is a function itself, it will be treated as the install method. The install method will be called with module as the argument.

#### Example:

```js
    // chat.plugin.js
    export function install (module, placeholder) {
    
      module.filter('color', function () {...} )
      
      module.component('messages', {...})
      
      module.value('Placeholder', placeholder)
    }
```

```js
    // app.js
    import * as angular from 'angular'
    import chat from 'chat.plugin.js'
    import 'ng-plugin'
    
    angular.module('app', []).use( chat )
```

## License

[MIT License](LICENSE)
