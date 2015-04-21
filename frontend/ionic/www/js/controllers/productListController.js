'use strict';

angular.module('RiverAquarium.Controllers').controller('ProductListController', function ($scope, $stateParams, $ProductService) {
    
    $scope.navBarHeader = 'Products';

    $scope.products = $ProductService.getByCategoryId($stateParams.categoryId);
});