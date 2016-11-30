/**
 * Created by Erley on 10/11/2016.
 */

(function ()
{
    'use strict';

    angular
        .module('app.equipos')
        .controller('equiposController', equiposController);

    /** @ngInject */
    function equiposController($state,DialogFactory, EquiposService)
    {
        var vm = this;
        vm.credenciales = {};
        vm.createEquipo = function () {
            var p = EquiposService.createEquipo(vm.credenciales);
            p.then(
                function (datos) {

                    DialogFactory.ShowSimpleToast("Equipo registrado...");
                    $state.go('app.index', {});

                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };
        vm.Equipos = [
            {"idEquipo": "Luces", "nombreEquipo": "Luces"},
            {"idEquipo": "Sonido", "nombreEquipo": "Sonido"},
            {"idEquipo": "Proyector", "nombreEquipo": "Proyector"}
        ]

    }
})();