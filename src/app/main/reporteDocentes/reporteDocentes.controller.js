/**
 * Created by EspañaNet on 27/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.reporteDocentes')
        .controller('ReporteDocentesController', ReporteDocentesController);

    /** @ngInject */
    function ReporteDocentesController($scope, DialogFactory, $timeout, $state) {
        var vm = this;
        vm.credenciales = {};

        vm.Docentes = [
            {"idDocente": 1, "nombreDocente": "Goku"},
            {"idDocente": 2, "nombreDocente": "Vegeta"}
        ]
        /**$scope.piezas = [];
        $scope.datos = {};
        $scope.RepuestoSeleccionado = {};


        $scope.Consultar = function () {
            $scope.datos.idMoto = angular.copy($scope.selectedItem.idMoto);
            if($scope.datos.idPieza == null || $scope.datos.idPieza == undefined || $scope.datos.idMoto == null || $scope.datos.idMoto == undefined){
                DialogFactory.showDialog('Error', 'Verifique que los datos no estén vacíos');
            }
            else{
                GetConsultaRepuesto($scope.datos);
            }
        };
        __init();

        function __init() {
            if(ferre._getToken() != undefined || ferre._getToken() != null){
                GetPiezas();
                GetMotos();
            }
            else{
                $state.go('app.login', {});
            }
        }

        function GetConsultaRepuesto(datos){
            var promiseGet = ApiRepuestos.GetConsultaRepuesto(datos);
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        $scope.RepuestoSeleccionado = respuesta.datos;
                    }
                    else{
                        DialogFactory.AlertDialog('Error', respuesta.mensaje);
                    }
                },
                function (err) {
                    JSON.stringify(err);
                }
            )
        }

        function GetPiezas() {
            var promiseGet = ApiPieza.GetPiezas();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        $scope.piezas = respuesta.datos;
                    }
                    else{
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err))
                }
            )
        };

        function GetMotos() {
            var promiseGet = ApiMotocicleta.GetMotos();
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    if(!respuesta.error){
                        $scope.motos = respuesta.datos;
                        $scope.states = loadAll();
                    }
                    else{
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }
                },
                function (err) {
                    console.log(JSON.stringify(err))
                }
            )
        };**/


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
