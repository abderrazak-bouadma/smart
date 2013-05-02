'use strict';

/* Directives */


angular.module('parapheur.preference.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
