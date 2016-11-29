/**
 * Created by EspañaNet on 26/11/2016.
 */


(function ()
{
    'use strict';

    angular
        .module('app.index', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.index', {
            url      : '/index',
            views    : {

                'content@app': {
                    templateUrl: 'app/main/index/index.html',
                    controller : 'indexController as vm'
                }
            },
            data: {
                permissions: {
                    only: ['SuperAdmin','Institucion','Invitado']

                }
            },
            bodyClass: 'index'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/index');

        // Navigation
        msNavigationServiceProvider.saveItem('index', {
            title : 'Principal',
            icon  : 'icon-apps',
            state : 'app.index',
            weight: 1
        });

    }

})();

