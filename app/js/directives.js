'use strict';

/* Directives */


angular.module('parapheur.preference.directives', [])
    .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
    .directive('pcpPreference',function(Preference){
        return {
            restrict:'E',
            template:'<li ng-repeat="preference in Preference.query()">' +
                '<p>{{element.elementLabel}}</p>' +
                '<p>{{element.elementUIComponentType}}</p>' +
                '</li>',
            link:function(scope,elm,attrs){

            }
        }
    });
