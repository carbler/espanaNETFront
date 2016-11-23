/**
 * Created by Erley on 10/11/2016.
 */
/**
 * Created by Erley on 08/11/2016.
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

                    DialogFactory.ShowSimpleToast("Conectado...");
                    $state.go('app.alquiler', {});

                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };
        vm.Equipos = [
            {"idEquipo": 1, "nombreEquipo": "Video Beasm"},
            {"idEquipo": 2, "nombreEquipo": "Luces"}
        ]

    }
})();