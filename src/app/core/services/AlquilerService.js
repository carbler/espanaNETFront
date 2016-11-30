/**
 * Created by Erley on 16/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.alquiler')
        .factory('AlquilerService', AlquilerService);

    function AlquilerService($http, $q){
        var url = "http://localhost:51466/";
        var equiposServiceFactory = {};

        var createAlquiler = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquiler/create',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        var createAlquilerInstitucion = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquilerInstitucion/create',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        equiposServiceFactory.createAlquiler = createAlquiler;
        equiposServiceFactory.createAlquilerInstitucion = createAlquilerInstitucion;

        return equiposServiceFactory;

    }

})();
