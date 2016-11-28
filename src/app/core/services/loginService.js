/**
 * Created by Erley on 08/11/2016.
 */
(function () {
    'use strict';

    angular.module('app.login')
        .factory('LoginService', LoginService);

        function LoginService($http, $q, PermRoleStore, jwtHelper){
            var url = "http://localhost:51466/";
            var authServiceFactory = {};

            var _authentication = {
                isAuth: false
            };

            var _login = function (loginData) {
                var data = "grant_type=password&username=" + loginData.username + "&password=" + loginData.password;

                var deferred = $q.defer();

                $http.post(url + 'oauth/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                    localStorage.setItem('token', response.access_token);
                    localStorage.setItem('userName', loginData.username);

                    _authentication.isAuth = true;

                    deferred.resolve(response);

                }).error(function (err, status) {
                    deferred.reject(err);
                });

                return deferred.promise;

            };
            var GetUser = function (getData) {
                return $http({
                    method: 'GET',
                    url: url + 'api/accounts/user/' + getData.userName,
                    headers: {'authorization': 'bearer ' + getData.token                          }
                });
            };

            var darPermisos = function (nombreRol) {
                var def = $q.defer();
                var darPermisos = false;

                //verificamos si el permiso del usuario se encientra dentro de los definidps
                if(PermRoleStore.hasRoleDefinition(user._getNombreRol())){
                    if(nombreRol === user._getNombreRol()){
                        darPermisos = true;
                    }
                }

                //si dar permisos = true resolvemos la promesa
                if(darPermisos){
                    def.resolve();
                }else {
                    def.reject();
                }
                return def.promise;
            }

            var verificarSesion = function () {
                var jwt = user._getToken();
                if(!jwt) return false; //Si no hay un token quiere decir que no hay una sesion iniciada, revolvemos false
                if(jwtHelper.isTokenExpired(jwt)) return 'Expiro el token'; //verificamos que el token no este vencido
                return true;
            }


            /*
            var GetUser = function (getData) {
               var req = $http.get(url + 'api/accounts/user/' +  getData.userName + '?token=' + getData.token);
                //   var req = $http.get(url + 'api/accounts/user/' +  getData.userName);
                return req;
            };
            */
            authServiceFactory.login = _login;
            authServiceFactory.GetUser = GetUser;
            authServiceFactory.darPermisos = darPermisos;
            authServiceFactory.verificarSesion = verificarSesion;

            return authServiceFactory;

        }
})();

