/**
 * Created by EspañaNet on 30/11/2016.
 */

(function ()
{
    'use strict';

    angular.module('app.reporteEquipos')

        .controller('ReporteEquiposDialogController', ReporteEquiposDialogController);

    /** @ngInject */
    function ReporteEquiposDialogController($mdDialog, Equipo, Equipos, $scope, EquiposService, DialogFactory)
    {
        var vm = this;
        __init();

        function __init() {
            vm.titulo = 'Actualizar Equipo';
            vm.equipo = angular.copy(Equipo);
            vm.Equipos = Equipos;
            vm.nuevoequipo = false;
            vm.roles = [];

            if (!vm.Equipo)
            {
                vm.titulo = 'Nuevo Equipo';
                vm.nuevoEquipo = true;
            }

            vm.CrearEquipo = CrearEquipo;
            vm.ActualizarEquipo = ActualizarEquipo;
            vm.closeDialog = closeDialog;
            GetRoles();
        };

        function closeDialog() {
            $mdDialog.hide();
        };

        function GetRoles() {
            var promiseGet = EquiposService.GetRoles();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        vm.roles = respuesta.datos;
                    }
                    else{
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            );
        };

        function CrearEquipo() {
            var promisePost = EquiposService.CrearEquipo(vm.Equipo);
            promisePost.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        respuesta.datos.estado = true;
                        vm.Equipos.push(respuesta.datos);
                        closeDialog();
                    }
                    DialogFactory.ShowSimpleToast(respuesta.mensaje);
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            );
        };

        function ActualizarEquipo() {
            var promisePost = EquiposService.ActualizarEquipo(vm.Equipo);
            promisePost.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        respuesta.datos.estado = true;
                        UpdateEquipos(respuesta.datos);
                        closeDialog();
                    }
                    DialogFactory.ShowSimpleToast(respuesta.mensaje);
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            );
        };

        function UpdateEquipos(Equipo) {
            for(var i in vm.Equipos){
                if(vm.Equipos[i].equipoId == Equipo.equipoId){
                    vm.Equipos[i] = Equipo;
                    break;
                }
            }
        }
    }
})();