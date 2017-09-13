myApp.service('TrainingService', ['$http', function ($http) {
    console.log('TrainingService Loaded');
   
    // var self = this;
    // self.dogs = {list: []};


    //     self.getDog=function () {
    //         $http.get('/dog').then(function (response) { //just naming dog
    //             console.log('got item', response);
    //             self.dogs.list = response.data;
    //         })
    //     }

    //     self.addDog=function (newDog) {
    //         console.log('button clicked');
    //         console.log(newDog);
    //         $http.post('/dog', newDog).then(function (response) {
    //             console.log('post item', response);
    //             self.getDog();
    //         })
    //     }


}]);




