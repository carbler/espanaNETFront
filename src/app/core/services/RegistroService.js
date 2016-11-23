/**
 * Created by Erley on 23/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.registro')
        .factory('RegistroService', RegistroService);

    function RegistroService($http, $q){
        var url = "http://localhost:51466/";
        var registerServiceFactory = {};

        var createUser = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/accounts/create',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        registerServiceFactory.createUser = createUser;

        return registerServiceFactory;

    }
})();
