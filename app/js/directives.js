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
                '<hr/></li>',
            link:function(scope,elm,attrs) {
                scope.preferences = Preference.query();
            }
        }
    })
    .directive('pcpElement',function(){
        return {
            restrict:'E',
            template:'<li ng-repeat="element in preference.elements">' +
                    '<p><label for="">{{element.elementLabel}}</label></p>' +
                    '<div ng-switch on="element.elementUIComponentType">' +
                        '<div ng-switch-when="DROPDOWN"><pcp-dropdown ng-model="element"/></div>'+
                        '<div ng-switch-when="TEXT_FIELD"><pcp-textfield ng-model="element"/></div>'+
                        '<div ng-switch-when="SWITCH"><pcp-switch ng-model="element"/></div>'+
                    '</div>' +
                '</li>'
        }
    })
    .directive('pcpDropdown',function(){
        return {
            restrict:'E',
            template:'<select ng-model="data" ng-change="update(element,data)" ng-options="d.value for d in element.data"></select>',
            controller:function($scope,$http,serviceHostUrl) {
                $scope.update = function(elm,data) {
                    elm.newValue = data
                    $http.put(serviceHostUrl + '/preferences?COMMAND='+elm.command,elm)
                }
            }
        }
    })
    .directive('pcpTextfield',function(){
        return {
            restrict:'E',
            template:'<ul><li ng-repeat="d in element.data"><input type="{{d.dataValueRestriction}}" ng-model="data" id="{{d.key}}" ng-value="d.value" ng-change="update(element,data)" /></li></ul>',
            controller:function($scope,$http,serviceHostUrl){
                $scope.update = function(elm,data) {
                    console.log('text field has value changed !')
                }
            }
        }
    })
    .directive('pcpSwitch',function(){
        return {
            restrict:'E',
            template:'<div><input ng-model="data" type="checkbox" ng-change="update(element,data)" ng-checked="data.key" ng-value="data.value" /><span class="text-info">{{element.data[0].value}}</span></div>',
            controller:function($scope,$http,serviceHostUrl) {
                $scope.update = function(elm,data) {
                    elm.newValue = data
                    $http.put(serviceHostUrl + '/preferences?COMMAND='+elm.command,elm)
                }
            }
        }
    });
