'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('parapheur.preference.services', ['ngResource'])
    .value('version', '1.0.0-SNAPSHOT')
    .value('serviceHostUrl','https://localhost/parapheur-ws/rest/v1')
    .factory('Preference',function($resource,serviceHostUrl){
        return $resource(serviceHostUrl + '/preferences',{},{
            query:{method:'GET',params:{},isArray:true}
        })
    });
