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

        self.getCommands();
}]);



