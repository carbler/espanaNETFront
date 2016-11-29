/**
 * Created by Erley on 28/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.registroDocentes')
        .factory('DocentesService', DocentesService);

    function DocentesService($http, $q){
        var url = "http://localhost:51466/";
        var equiposServiceFactory = {};

        var createDocente = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/docentes/create',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        equiposServiceFactory.createDocente = createDocente;

        return equiposServiceFactory;

    }
})();
