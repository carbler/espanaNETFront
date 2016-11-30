/**
 * Created by Erley on 30/11/2016.
 */
/**
 * Created by EspañaNet on 29/11/2016.
 */


(function () {
    'use strict';

    angular.module('app.reporteAlquileres', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporteAlquileres', {
                url    : '/reporteAlquileres',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporteAlquileres/reporteAlquileres.html',
                        controller : 'ReporteAlquileresController as vm'
                    }
                },
                data: {
                    permissions: {
                        only: ['SuperAdmin']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteAlquileres');

        // Navigation
        msNavigationServiceProvider.saveItem('reporteAlquileres', {
            title    : 'Consulta alquileres',
            icon     : 'icon-file-find',
            state    : 'app.reporteAlquileres',
            weight   : 1
        });
    }
})();
