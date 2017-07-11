;(function (angular) {
    //开始
    var app = angular.module('app',[]);

    app.controller('myCtrl', ['$scope', function ($scope) {
        $scope.webTitle = '每天一看';
    }]);


    app.directive('tabbar', function () {
        return {
            restrict: 'EA',
            templateUrl: '../views/tabbar_tpl.html'
        };
    });

})(angular);