/**
 * Created by EspañaNet on 26/11/2016.
 */

(function ()
{
    'use strict';

    angular
        .module('app.index')
        .controller('indexController', indexController);

    /** @ngInject */
    function indexController()
    {
        var vm = this;
        vm.credenciales = {};


    }
})();