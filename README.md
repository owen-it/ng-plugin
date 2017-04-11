# ng-plugin
Ng Plugin

## Install

`npm install ng-plugin --save`

## Usage

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

Mit
