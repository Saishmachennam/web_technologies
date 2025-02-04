var app = angular.module('studentApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'views/home.html' })
        .when('/students', { 
            templateUrl: 'views/students.html',
            controller: 'StudentController' 
        })
        .when('/add-student', { 
            templateUrl: 'views/add-student.html',
            controller: 'StudentController' 
        })
        .otherwise({ 
            templateUrl: 'views/404.html' 
        });
});
