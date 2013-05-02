'use strict';


// Declare app level module which depends on filters, and services
angular.module('parapheur.preference', ['parapheur.preference.filters', 'parapheur.preference.services', 'parapheur.preference.directives', 'parapheur.preference.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/preference', {templateUrl: 'partials/preferences/show.html', controller: 'PreferenceCtrl'});
    $routeProvider.otherwise({redirectTo: '/preference'});
  }]);
