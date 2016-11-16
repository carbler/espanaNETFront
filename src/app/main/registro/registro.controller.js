/**
 * Created by EspañaNet on 15/11/2016.
 */

(function ()
{
    'use strict';

    angular
        .module('app.registro')
        .controller('RegistroController', RegistroController);

    /** @ngInject */
    function RegistroController()
    {
        var vm = this;
        vm.credenciales = {};
    }
})();
