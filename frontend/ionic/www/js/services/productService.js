'use strict';

angular.module('RiverAquarium.Services').factory('$ProductService', function () {

    var fishTankProducts = [
        {
            id: 0,
            name: 'Aqua Nova RH-1208/RH-120 Cabinet',
            categoryId: 2,
            originalPrice: 258,
            price: 241
        },
        {
            id: 1,
            name: 'Aqua Nova Curved Front Glass Fish Tank Including Stand NT-1000',
            categoryId: 2,
            originalPrice: 649,
            price: 607
        },
        {
            id: 2,
            name: 'Aqua Nova Curved Front Glass Fish Tank Including Stand NT-380 Black',
            categoryId: 2,
            originalPrice: 299.95,
            price: 218.95
        },
        {
            id: 3,
            name: 'biOrb Baby Circular Aquarium Silver - Complete Kit',
            categoryId: 2,
            originalPrice: 249.95,
            price: 224.95
        },
        {
            id: 4,
            name: 'biOrb 30 Classic Circular Tropical Aquarium 30L Black - Complete Kit',
            categoryId: 2,
            originalPrice: 399.95,
            price: 349.95
        },
    ];

    var foodProducts = [
        {
            id: 0,
            name: 'Fluval Cichlid Flakes 54g',
            categoryId: 4,
            originalPrice: 14.90,
            price: 14.90
        },
        {
            id: 1,
            name: 'Fluval Colour Enhancing Fish Flakes 32g',
            categoryId: 4,
            originalPrice: 9.95,
            price: 9.95
        }
    ];


    return {
        get: function (categoryId, productId) {
            switch (categoryId) {
                case '2':
                    return fishTankProducts[productId];
                case '4':
                    return foodProducts[productId];
                default:
                    break;
            }
        },
        getByCategoryId: function (categoryId) {
            switch (categoryId) {
                case '0':

                    break;
                case '1':

                    break;
                case '2':
                    return fishTankProducts;
                case '4':
                    return foodProducts;
                default:
                    break;
            }
        }
    };
});