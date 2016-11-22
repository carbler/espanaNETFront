/**
 * Created by EspañaNet on 15/11/2016.
 */

/**
 * Created by EspañaNet on 15/11/2016.
 */

(function ()
{
    'use strict';

    angular
        .module('app.registro', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.registro', {
            url      : '/registro',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.registro': {
                    templateUrl: 'app/main/registro/registro.html',
                    controller : 'RegistroController as vm'
                }
            },
            bodyClass: 'registro'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/registro');

        // Navigation
        msNavigationServiceProvider.saveItem('registro', {
            title : 'Registro',
            icon : 'icon-person-plus',
            state : 'app.registro',
            weight: 3
        });
    }

})();

