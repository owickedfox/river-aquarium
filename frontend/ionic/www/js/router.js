'use strict';

angular.module('RiverAquarium').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // Abstract main page with Navigation-Bar and Left-Side Menu
        .state('Main', {
            url: '',
            templateUrl: 'templates/main.html',
            abstract: true,
            controller: 'MainController'
        })
        .state('Main.Home', {
            url: '/home',
            views: {
                'main': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeController'
                }
            }
        })
        .state('Main.Popular', {
            url: '/popular',
            views: {
                'main': {
                    templateUrl: 'templates/popular.html'
                }
            }
        })
        .state('Main.News', {
            url: '/whatsnew',
            views: {
                'main': {
                    templateUrl: 'templates/news.html'
                }
            }
        })
        .state('Main.SignIn', {
            url: '/account/signin',
            views: {
                'main': {
                    templateUrl: 'templates/signin.html',
                    controller: 'SignInController'
                }
            }
        })
        .state('Main.SignUp', {
            url: '/account/signup',
            views: {
                'main': {
                    templateUrl: 'templates/signup.html',
                    controller: 'SignUpController'
                }
            }
        })
        .state('Main.Categories', {
            url: '/categories',
            views: {
                'main': {
                    templateUrl: 'templates/categoryList.html',
                    controller: 'CategoryListController'
                }
            }
        })
        .state('Main.Category', {
            url: '/categories/:categoryId',
            views: {
                'main': {
                    templateUrl: 'templates/category.html',
                    controller: 'CategoryController'
                }
            }
        })
        .state('Main.CategoryProducts', {
            url: '/category-product/:categoryId',
            views: {
                'main': {
                    templateUrl: 'templates/category-products.html',
                    controller: 'ProductListController'
                }
            }
        })
        .state('Main.Products', {
            url: '/products',
            views: {
                'main': {
                    templateUrl: 'templates/product.html',
                    controller: 'ProductListController'
                }
            }
        })
        .state('Main.Product', {
            url: '/products/:categoryId/:productId',
            views: {
                'main': {
                    templateUrl: 'templates/product.html',
                    controller: 'ProductController'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
});