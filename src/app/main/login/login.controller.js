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

       if(user._getNombreRol()!=undefined){
           $state.go('app.index', {});
       }

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


                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        }; // te quiero mucho come monda la ultima vez que te ayudo en este malparido proyecto, abre mi proyecto de ferremotos

        function GetUser() {
            var promiseGet = AlquilerService.GetUser();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    user._setNombreCompleto(respuesta.fullName);
                    user._setIdUsuario(respuesta.id);
                    user._setNombreRol(respuesta.roles[0]);
                    //console.log(respuesta);
                    DialogFactory.ShowSimpleToast("Conectado...");
                    console.log(user._getNombreRol());


                    if(user._getNombreRol()=="SuperAdmin"){
                        $state.go('app.equipos', {});
                    }else{
                        $state.go('app.alquiler', {});
                    }

                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        };


    }
})();