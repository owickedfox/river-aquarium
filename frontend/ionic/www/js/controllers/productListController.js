'use strict';

angular.module('RiverAquarium.Controllers').controller('ProductListController', function ($scope, $state, $stateParams, $timeout, $ProductService) {

    $scope.navBarHeader = 'Products';

    $scope.products = $ProductService.getByCategoryId($stateParams.categoryId);

    $scope.doRefresh = function () {
        
        $timeout(function () {
            
            $scope.products.push({
                
                id: Math.floor(Math.random() * 1000) + 4,
                name: 'New Item ' + Math.floor(Math.random() * 1000) + 4,
                categoryId: 4,
                originalPrice: 9.95,
                price: 9.95
            });
            
            $scope.$broadcast('scroll.refreshComplete');
        }, 1000);
    };

    $scope.goToProduct = function (categoryId, productId) {
        
        $state.go('Main.Product', {
            categoryId: categoryId,
            productId: productId
        });
    };
});