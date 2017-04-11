;(function(angular){
    var ng = angular.module;

    function __module__() 
    {
    var hijacked = ng.apply(this, arguments);

    function use () {
        var plugin = arguments[0]

        if (plugin.installed) {
        return
        }

        var args = [].slice.call(arguments, 1)

        if (typeof plugin.install === 'function') {
            plugin.install.apply(plugin, args)
        } else if (typeof plugin === 'function') {
            plugin.apply(null, args)
        }

        plugin.install  = true

        return this
        
    }

    hijacked.use = use;

    return hijacked;
    }

    angular.module = __module__;
})(angular)

