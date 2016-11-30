/**
 * Created by EspañaNet on 29/11/2016.
 */


(function () {
    'use strict';

    angular.module('app.reporteEquipos', ['xeditable'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporteEquipos', {
                url    : '/reporteEquipos',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporteEquipos/reporteEquipos.html',
                        controller : 'ReporteEquiposController as vm'
                    }
                },
                data: {
                    permissions: {
                        only: ['SuperAdmin']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteEquipos');

        // Navigation
        msNavigationServiceProvider.saveItem('reporteEquipos', {
            title    : 'Consulta de Equipos',
            icon     : 'icon-file-find',
            state    : 'app.reporteEquipos',
            weight   : 1
        });
    }
})();
