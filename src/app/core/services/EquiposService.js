/**
 * Created by EspañaNet on 21/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.equipos')
        .factory('EquiposService', EquiposService);

    function EquiposService($http, $q){
        var url = "http://localhost:51466/";
        var equiposServiceFactory = {};

        var createEquipo = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/equipos/create',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        equiposServiceFactory.createEquipo = createEquipo;

        return equiposServiceFactory;

    }
})();

