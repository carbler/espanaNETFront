/**
 * Created by Erley on 08/11/2016.
 */
(function ()
{
    'use strict';

    angular
        .module('app.alquiler')
        .controller('AlquilerController', LoginController);

    /** @ngInject */
    function LoginController(LoginService,$location)
    {
        var vm = this;
        vm.credenciales = {};
    /*
        vm.Login = function () {
            var p = LoginService.login(vm.credenciales);
            p.then(
                function (datos) {
                    $location.path("/sample");
                },
                function (error) {
                    console.log(JSON.stringify(error));
                }
            )
        }

        */
    }
})();