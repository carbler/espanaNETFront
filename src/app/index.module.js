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
            'app.index',
            'app.login',
            'app.alquiler',
            'app.dialog',
            'app.equipos',
            'app.registro',
            'app.registroDocentes',
            'app.alquilerInstitucion',
            'app.reporteDocentes',
            'app.reporteEquipo',
            'app.reporteAlquileres',
            'app.reporteAlquileresInstitucion'

        ]);
})();