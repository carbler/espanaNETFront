/**
 * Created by EspañaNet on 29/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteEquipos')
        .controller('EditReporteEquiposController', EditReporteEquiposController);

    /** @ngInject */
    function EditReporteEquiposController(EquiposService, PiezaGlobalFactory, $scope, DialogFactory, $controller) {
        $controller('DialogOptionsController',{vm : vm});
        vm.Reporte = angular.copy(PiezaGlobalFactory._getReporte());
        vm.Equipos = PiezaGlobalFactory._getEquipos();

        $scope.EditarPieza = function () {
            var reporte = vm.reporte.marca;
            vm.reporte.marca = reporte.toUpperCase();
            var promisePost = EquiposService.EditEquipos(vm.Reporte);
            promisePost.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        UpdatePiezas(respuesta.data);
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }
                    else{
                        DialogFactory.AlertDialog('Error!', respuesta.mensaje);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            );
        };

        function UpdatePiezas(equipo) {
            for(var i in vm.Equipos){
                if(equipo.equiposId == vm.Equipos[i].equiposId){
                    vm.Equipos[i] = equipo;
                    PiezaGlobalFactory._setEquipos(vm.Equipos);
                    vm.cancel();
                }
            }
        }
    }
})();