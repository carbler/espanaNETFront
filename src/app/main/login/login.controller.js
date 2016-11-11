/**
 * Created by Erley on 08/11/2016.
 */
(function ()
{
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(LoginService,$state,DialogFactory)
    {
        var vm = this;
        vm.credenciales = {};

        vm.Login = function () {
            var p = LoginService.login(vm.credenciales);
            p.then(
                function (datos) {
                    alquiler._setToken(datos.access_token);
                    DialogFactory.ShowSimpleToast("Entrando..");
                    $state.go('app.alquiler', {});
                },
                function (error) {
                       console.log(error);
                }
            )
        }
    }
})();