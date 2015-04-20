'use strict';

angular.module('RiverAquarium.Controllers').controller('CategoryListController', function ($scope, $CategoryService) {
    
    $scope.categoryList = $CategoryService.all();
});