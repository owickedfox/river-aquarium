'use strict';

angular.module('RiverAquarium.Services').factory('$CategoryService', function () {

    var categoryList = [
        {
            id: 0,
            name: 'Cats',
            description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.'
        },
        {
            id: 1,
            name: 'Dogs',
            description: 'Lovable. Loyal almost to a fault. Smarter than they let on.'
        },
        {
            id: 2,
            name: 'Turtles',
            description: 'Everyone likes turtles.'
        },
        {
            id: 3,
            name: 'Sharks',
            description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.'
        }
  ];

    return {

        all: function () {

            return categoryList;
        },
        get: function (categoryId) {

            return categoryList[categoryId];
        }
    };
});