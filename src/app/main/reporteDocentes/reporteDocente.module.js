/**
 * Created by EspañaNet on 27/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteDocentes', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporteDocentes', {
                url    : '/reporteDocentes',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporteDocentes/reporteDocentes.html',
                        controller : 'ReporteDocentesController'
                    }
                },
                data: {
                    permissions: {
                        only: ['Admin', 'SuperAdmin']
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/reporteDocentes');

        // Navigation
        msNavigationServiceProvider.saveItem('reporteDocentes', {
            title    : 'Reporte de Docentes',
            icon     : 'icon-file-find',
            state    : 'app.reporteDocentes',
            weight   : 1
        });
    }
})();
