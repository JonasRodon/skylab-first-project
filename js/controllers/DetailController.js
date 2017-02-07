angular.module('myCocktailApp')

.controller('DetailController', function($scope, DetailFactory, $routeParams) {

    $scope.getDetail = function(e) {
        e.preventDefault()
        DetailFactory.getDetail($routeParams.id)
            .then(function(response) {
                $scope.cocktail = response.data.drinks
                console.log($routeParams.id)
                console.log(response.data.drinks)
            })
    }

})