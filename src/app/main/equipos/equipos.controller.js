/**
 * Created by Erley on 10/11/2016.
 */
/**
 * Created by Erley on 08/11/2016.
 */
(function ()
{
    'use strict';

    angular
        .module('app.equipos')
        .controller('equiposController', equiposController);

    /** @ngInject */
    function equiposController($state,DialogFactory)
    {
        var vm = this;
        vm.credenciales = {};
        vm.Equipos = [
            {"idEquipo": 1, "nombreEquipo": "Video Beasm"},
            {"idEquipo": 2, "nombreEquipo": "Luces"}
        ]

    }
})();