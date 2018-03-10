(function () {
    'use strict';

    angular
        .module('app')
        .controller('controller', controller);

    controller.$inject = ['$scope', 'factory','$q'];

    function controller($scope, factory, $q) {
        $scope.title = 'controller'; 
        var deferred = $q.defer();
        $q.all([factory.getCookies()])
            .then(function (response) {
                $scope.cookies = response[0];
            })
       
        activate();

        function activate() { }
    }
})();
