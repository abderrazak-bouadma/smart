'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('parapheur.preference.services', ['ngResource'])
    .value('version', '1.0.0-SNAPSHOT')
    .factory('Preference',function($resource){
        return $resource('https://localhost/parapheur-ws/rest/v1/preferences',{},{
            query:{method:'GET',params:{},isArray:true}
        })
    });
