"use strict";

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '2/28/2016',
            time: '12:43 AM',
            location: {
                address: 'Zeb\'s Apartment',
                city: 'New York',
                province: "NY"
            },
            imageUrl: 'img/angularjs-logo.png'
        }

    }
);