/**
 * Created by Erley on 08/11/2016.
 */
(function ()
{
    'use strict';

    angular
        .module('app.equipos', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.equipos', {
            url      : '/equipos',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/equipos/equipos.html',
                    controller : 'equiposController as vm'
                }
            },
            bodyClass: 'equipos'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/equipos');

        // Navigation
        msNavigationServiceProvider.saveItem('equipos', {
            title : 'Registro Equipos',
            icon  : 'icon-laptop',
            state : 'app.equipos',
            weight: 2
        });

    }

})();
