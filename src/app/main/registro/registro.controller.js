/**
 * Created by EspañaNet on 15/11/2016.
 */

(function ()
{
    'use strict';

    angular
        .module('app.registro')
        .controller('RegistroController', RegistroController);

    /** @ngInject */
    function RegistroController($state,DialogFactory, RegistroService)
    {
        var vm = this;
        vm.credenciales = {};

        vm.createUser = function () {
            var p = RegistroService.createUser(vm.credenciales);
            p.then(
                function (datos) {

                    DialogFactory.ShowSimpleToast("Usuario Registrado Exitosamente");
                    $state.go('app.alquiler', {});
                //    $state.go('app.registro', {});
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };
    }
})();
