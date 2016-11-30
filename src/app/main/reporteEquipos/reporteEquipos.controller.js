/**
 * Created by EspañaNet on 29/11/2016.
 */

(function ()
{
    'use strict';

    angular
        .module('app.reporteEquipos')

        .controller('ReporteEquiposController', ReporteEquiposController);

    /** @ngInject */
    function ReporteEquiposController($scope, $mdDialog, $document, EquiposService, DialogFactory, $state) {
        var vm = this;

        vm.equipos = [];

        vm.openContactDialog = openContactDialog;
        vm.showConfirm = showConfirm;


        __init();


        function __init() {
           getEquipos();
        }

        function getEquipos(){
            var promiseGet = EquiposService.getEquipo();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(respuesta.error.length == 0){
                        EquiposInhabilitados(respuesta.data);
                        console.log(vm.equipos);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }

        function EquiposInhabilitados(equipos) {
            for(var i in equipos){
                if(equipos[i].deleted_at == null){
                    equipos[i].estado = true;
                }
                else{
                    equipos[i].estado = false;
                }
            }
            vm.equipos = equipos;
        }

        function showConfirm(ev,equipo) {
            var titulo;
            var mensaje;
            var bandera;
            var button;
            if(equipo.estado == true){
                titulo = '¿Desea Inhabilitar al Equipo?';
                mensaje = 'El equipo no estara disponible una vez se este Inhabilitado.';
                bandera = true;
                button = 'Inhabilitar';
            }
            else{
                titulo = '¿Desea Habilitar al Equipo?';
                mensaje = 'El equipo tendrá estara disponible una vez se este Habilitado.';
                bandera = false;
                button = 'Habilitar';
            }
            var confirm = $mdDialog.confirm()
                .title(titulo)
                .textContent(mensaje)
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .clickOutsideToClose(true)
                .parent(angular.element(document.body))
                .ok(button)
                .cancel('Cancelar');
            $mdDialog.show(confirm).then(function() {
                if(bandera){
                    InhabilitarEquipo(equipo);
                }
                else{
                    HabilitarEquipo(equipo);
                }
            }, function() {
                if(equipo.estado == true){
                    equipo.estado = false;
                }
                else{
                    equipo.estado = true;
                }
            });
        };

        function openContactDialog(ev, equipo) {
            $mdDialog.show({
                controller         : 'reporteEquiposDialogController',
                templateUrl        : 'app/main/reporteEquipos/dialogs/reporteEquiposDialog.html',
                parent             : angular.element($document.find('#content-container')),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    Equipo : equipo,
                    Equipos: vm.equipos
                }
            });
        }

        function InhabilitarEquipo(equipo) {
            var promiseGet = EquiposService.InhabilitarEquipo(equipo.equiposId);
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        equipo.estado = false;
                    }
                    DialogFactory.ShowSimpleToast(respuesta.mensaje);
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }

        function HabilitarEquipo(equipo) {
            var promiseGet = EquiposService.HabilitarEquipo(equipo.equiposId);
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        equipo.estado = true;
                    }
                    DialogFactory.ShowSimpleToast(respuesta.mensaje);
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }
    }

})();