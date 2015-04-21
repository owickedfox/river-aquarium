'use strict';

angular.module('RiverAquarium.Controllers')
    .controller('ProductController', function ($scope, $stateParams, $ProductService) {
    $scope.navBarHeader = 'River Aquarium';
    
    $scope.product = $ProductService.get($stateParams.categoryId, $stateParams.productId);
});