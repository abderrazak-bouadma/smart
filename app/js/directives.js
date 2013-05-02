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
            template:'<li ng-repeat="preference in preferences">' +
                    '<h3 style="color: #0077b3">{{preference.title}}&nbsp;»</h3>' +
                    '<p style="color: #c4e3f3">{{preference.hint}}</p>' +
                    '<ul class="nav nav-tabs nav-stacked">'+
                        '<pcp-element ng-model="preference"/>'+
                    '</ul>'+
                '</li>',
            link:function(scope,elm,attrs) {
                scope.preferences = Preference.query();
            }
        }
    })
    .directive('pcpElement',function(){
        return {
            restrict:'E',
            template:'<li ng-repeat="element in preference.elements">' +
                    '<p>{{element.elementLabel}}</p>' +
                    '<p>{{element.elementUIComponentType}}</p>' +
                '</li>'
        }
    });
