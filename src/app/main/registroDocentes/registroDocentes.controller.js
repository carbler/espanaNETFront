/**
 * Created by EspañaNet on 21/11/2016.
 **/

(function ()
{
    'use strict';

    angular
        .module('app.registroDocentes')
        .controller('RegistroDocentesController', RegistroDocentesController);

    /** @ngInject **/
    function RegistroDocentesController()
    {
        var vm = this;
        vm.credenciales = {};
    }
})();


