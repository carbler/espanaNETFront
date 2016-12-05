/**
 * Created by EspañaNet on 04/12/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteEquipo')
        .controller('ReporteEquipoController', ReporteEquipoController);

    /** @ngInject */
    function ReporteEquipoController($scope, DialogFactory, $timeout, $state, EquiposService, $mdDialog, $document) {
        var vm = this;
        vm.credenciales = {};

        vm.Equipos =[];
        vm.Reporte = {};

        $scope.openEquipoDialog = openEquipoDialog;

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
                        vm.Equipos = respuesta.data;
                        console.log(vm.Equipos);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }

        function openEquipoDialog(ev, equipo) {
            $mdDialog.show({
                controller         : 'EquipoDialogController',
                templateUrl        : 'app/main/reporteEquipo/EditarEquipo/EditarEquipo.html',
                parent             : angular.element($document.find('#content-container')),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    equipo : equipo,
                    Equipos: $scope.Equipos
                }
            });
        }
    }
})();
