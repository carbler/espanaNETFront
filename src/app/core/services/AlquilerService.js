/**
 * Created by Erley on 16/11/2016.
 */
(function () {
    'use strict';

    angular.module('app.alquiler')
        .service('AlquilerService', AlquilerService);

    function AlquilerService($http){
        this.GetUser = function () {
            return $http({
                method: 'GET',
                url: user._getUrl() + 'api/accounts/user/' + user._getUsername(),
                headers: {'authorization': 'bearer ' + user._getToken()}
            });
        };
    }
})();