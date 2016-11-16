/**
 * Created by Erley on 08/11/2016.
 */
(function () {
    'use strict';

    angular.module('app.login')
        .factory('LoginService', LoginService);

        function LoginService($http, $q){
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

            /*
            var GetUser = function (getData) {
               var req = $http.get(url + 'api/accounts/user/' +  getData.userName + '?token=' + getData.token);
                //   var req = $http.get(url + 'api/accounts/user/' +  getData.userName);
                return req;
            };
            */
            authServiceFactory.login = _login;
            authServiceFactory.GetUser = GetUser;

            return authServiceFactory;

        }
})();

