/**
 * Created by EspañaNet on 29/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteEquipos')
        .controller('ReporteEquiposController', ReporteEquiposController);

    /** @ngInject */
    function ReporteEquiposController($scope, DialogFactory, $timeout, $state, $mdDialog, reporteEquiposGlobalFactory, EquiposService ) {
        var vm = this;
        vm.credenciales = {};


        vm.seleccionar = function (data) {
            vm.select = data;
        };

        vm.Equipos =[];
        vm.Reporte = {};

        vm.dtOptions = {
            dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth : false,
            responsive: true,
            language: {
                "sSearch": "Buscar",
                "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ registros",
                "sLengthMenu": "Mostrar _MENU_ registros",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast": "Último",
                    "sNext": "Siguiente",
                    "sPrevious": "Anterior"
                }
            }
        };

        __init();

        function __init() {
            getEquipo();
            editEquipo();
        }

        function getEquipo(){
            var promiseGet = EquiposService.getEquipo();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(respuesta.error.length == 0){
                        vm.Equipos = respuesta.data;
                        console.log(vm.Equipos);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        }

        function editEquipo() {


        }



        /*AUTO_COMPLETE*/
        $scope.selectedItem  = null;
        $scope.searchText    = null;
        $scope.querySearch   = querySearch;
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states;
            var deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = $scope.motos;
            return allStates.map( function (state) {
                return {
                    value: state.nombreMoto.toLowerCase(),
                    display: state.nombreMoto,
                    modelo: state.modelo,
                    moto: state.nombreMoto + " (" + state.modelo + ")",
                    idMoto: state.idMoto
                };
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }
})();
