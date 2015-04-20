'use strict';

angular.module('RiverAquarium.Controllers').controller('ProductListController', function ($scope) {
    $scope.navBarHeader = 'Products';

    $scope.products = [
        {
            id: 1,
            name: 'Product 1',
            categoryId: 1
        },
        {
            id: 2,
            name: 'Product 2',
            categoryId: 1
        },
        {
            id: 3,
            name: 'Product 3',
            categoryId: 2
        },
        {
            id: 2,
            name: 'Product 4',
            categoryId: 2
        }
    ];
});