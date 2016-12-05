/**
 * Created by EspañaNet on 04/12/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteEquipo')
        .controller('ReporteEquipoController', ReporteEquipoController);

    /** @ngInject */
    function ReporteEquipoController($scope, DialogFactory, $timeout, $state, EquiposService ) {
        var vm = this;
        vm.credenciales = {};

        vm.Equipo =[];
        vm.Reporte = {};

        __init();

        function __init() {
            getEquipo();
        }

        function getEquipo(){
            var promiseGet = EquiposService.getEquipo();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(respuesta.error.length == 0){
                        vm.Equipo = respuesta.data;
                        console.log(vm.Equipo);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }
    }
})();
