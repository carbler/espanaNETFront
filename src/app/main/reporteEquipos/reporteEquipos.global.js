/**
 * Created by EspañaNet on 29/11/2016.
 */

(function () {
    'use strict';
    angular.module('app.reporteEquipos')
        .factory('reporteEquiposGlobalFactory', reporteEquiposGlobalFactory);

    /** @ngInject */
    function reporteEquiposGlobalFactory() {
        var Equipos = [];
        var Reporte = {};

        return {
            _setReporte: function (e) {
                Reporte = e;
            },
            _getReporte: function () {
                return Reporte;
            },
            _setEquipos: function (e) {
                Equipos = e;
            },
            _getEquipos: function () {
                return Equipos;
            }
        }
    }
})();