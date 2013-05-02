'use strict';

/* Controllers */

angular.module('parapheur.preference.controllers', []).
  controller('PreferenceCtrl', function($scope,Preference) {
        $scope.greetingMessage = 'Preferences Module'
        $scope.preferences = Preference.query();
  });