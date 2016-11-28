/**
 * Created by EspañaNet on 28/11/2016.
 */

(function () {
    'use strict';

    angular
        .module('app.login')
        .run(run);

    /* @ngInject */
    function run($rootScope, $state, PermRoleStore, LoginService, DialogFactory) {
        var roles = ['Admin', 'Institucion', 'Invitado'];

        angular.forEach(roles, function (rol) {
            PermRoleStore.defineRole(rol, function (nombreRol, stateParams) {
                return LoginService.darPermisos(nombreRol);
            })
        });

        function accesoDenegado() {
            //alert('No puedes acceder aqui');
            DialogFactory.AlertDialog('Error', 'AccesoDenegado');
            //state a pagina 401 odio cuando no dice la linea eacta :c jajaj
        }


        var denegarF = $rootScope.$on('$stateChangePermissionDenied', accesoDenegado);

        $rootScope.$on('$destroy', function () {
            denegarF();
        });

        $rootScope.$on('$stateChangeStart', function (event, to) {
            if(to.data && to.data.permissions){
                //aca verificamos si realmente existe un usuario logeado
                //sino exite retornamos a /login
                //if(!LoginService.verificarSesion()){
                    event.preventDefault();
                    $state.go('app.login');
                //}
            }
        } )
    }
})();