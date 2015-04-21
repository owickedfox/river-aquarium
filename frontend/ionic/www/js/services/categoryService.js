'use strict';

angular.module('RiverAquarium.Services').factory('$CategoryService', function () {

    var categoryList = [
        {
            id: 0,
            name: 'Fish & Shrimp',
            description: 'Fish Supplies'
        },
        {
            id: 1,
            name: 'Spare Parts',
            description: 'Fish Supplies'
        },
        {
            id: 2,
            name: 'Fish Tanks',
            description: 'Everyone likes turtles.'
        },
        {
            id: 3,
            name: 'Lights & Tubes',
            description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.'
        },
        {
            id: 4,
            name: 'Food',
            description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.'
        },
        {
            id: 5,
            name: 'Plants',
            description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.'
        },
        {
            id: 6,
            name: 'Cleaning & Maintanance',
            description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.'
        },
        {
            id: 7,
            name: 'Filters',
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