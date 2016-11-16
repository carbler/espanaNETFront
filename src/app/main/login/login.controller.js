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
    function LoginController(LoginService,$state,DialogFactory, AlquilerService)
    {
        var vm = this;
        vm.credenciales = {};
        vm.Login = function () {
            var p = LoginService.login(vm.credenciales);
            p.then(
                function (datos) {

                    var p = LoginService.login(vm.credenciales);
                    user._setToken(datos.access_token);
                    user._setUsername(vm.credenciales.username);
                    GetUser();
                    DialogFactory.ShowSimpleToast("Conectado...");
                    $state.go('app.alquiler', {});
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        };

        function GetUser() {
            var promiseGet = AlquilerService.GetUser();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    user._setNombreCompleto(respuesta.fullName);
                    user._setIdUsuario(respuesta.id);
                    console.log(respuesta);
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        };


    }
})();