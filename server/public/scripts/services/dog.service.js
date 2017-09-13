myApp.service('DogService', ['$http', function ($http) {
    console.log('DogService Loaded');
   
    var self = this;
    self.dogs = {list: []};


        self.getDog=function () {
            $http.get('/dog').then(function (response) { //just naming dog
                console.log('got item', response);
                self.dogs.list = response.data;
            })
        }

        self.addDog=function (newDog) {
            console.log('button clicked');
            console.log(newDog);
            $http.post('/dog', newDog).then(function (response) {
                console.log('post item', response);
                self.getDog();
            })
        }

        // self.deleteitem=function (itemid) {
        //     console.log('delete button clicked');
        //     $http.delete('/shelf/shelf/' + itemid).then(function (response) {
        //         console.log('delete item', response);
        //         // self.shelfItems.list = response.data;
        //         self.getitem();
        //     })
        // }
   
}]);




