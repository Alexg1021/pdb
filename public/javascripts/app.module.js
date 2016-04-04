(function(){
  'use strict';

  angular.module('app', ['ui.router', 'app.ui', 'ui.bootstrap'])
    .config(function($stateProvider, $urlRouterProvider){
      /**
       * Default Route.
       */
       $urlRouterProvider.otherwise('/register');

      /**
      * Define our States
      */
      $stateProvider
        .state('register', {
          url: '/register',
          templateUrl: 'partials/registration/index.html',
          controller: 'RegistrationController',
          controllerAs: 'registerControl'
        })
        .state('dashboard', {
          url:'/dashboard',
          templateUrl: 'partials/dashboard/index.html',
          controller: 'DashboardController',
          controllerAs: 'dashController'
        });
    });

})();
