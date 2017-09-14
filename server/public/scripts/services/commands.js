myApp.service('CommandsService', ['$http', function ($http) {
    console.log('CommandsService Loaded');
   
    var self = this;
    self.commands = {list: []};


        self.getCommands=function () {
            $http.get('/commands').then(function (response) {
                console.log('got item', response);
                self.commands.list = response.data;
            })
        }

        // self.addDog=function (newDog) {
        //     console.log('button clicked');
        //     console.log(newDog);
        //     $http.post('/dog', newDog).then(function (response) {
        //         console.log('post item', response);
        //         self.getDog();
        //     })
        // }

 
        self.getCommands();
}]);




