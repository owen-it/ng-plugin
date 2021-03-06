;(function(angular){
    var ng = angular.module;

    function __module__() 
    {
        var hijacked = ng.apply(this, arguments);

        if(hijacked.use) return hijacked;

        function use () {
            var plugin = arguments[0]

            if (plugin.installed) {
                return hijacked
            }

            var args = [].slice.call(arguments, 1)

            args.unshift(hijacked)

            if (typeof plugin.install === 'function') {
                plugin.install.apply(plugin, args)
            } else if (typeof plugin === 'function') {
                plugin.apply(null, args)
            }

            plugin.installed  = true

            return hijacked
            
        }

        hijacked.use = use;

        return hijacked;
    }

    angular.module = __module__;
    
})(angular)

