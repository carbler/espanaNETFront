/**
 * Created by Erley on 08/11/2016.
 */
/**
 * Created by Erley on 08/11/2016.
 */
(function ()
{
    'use strict';

    angular
        .module('app.alquiler', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.alquiler', {
            url      : '/alquiler',
            views    : {
                'main@'                       : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.alquiler': {
                    templateUrl: 'app/main/alquiler/alquiler.html',
                    controller : 'AlquilerController as vm'
                }
            },
            bodyClass: 'alquiler'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/alquiler');


    }

})();