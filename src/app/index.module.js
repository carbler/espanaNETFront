(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick Panel
            'app.quick-panel',

            // Sample
            'app.login',
            'app.alquiler',
            'app.dialog',
            'app.equipos',
            'app.registro',
            'app.registroDocentes'
        ]);
})();