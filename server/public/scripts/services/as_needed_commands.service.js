myApp.service('AsNeededCommandsService', ['$http', function ($http) {
    console.log('AsNeededCommandsService Loaded');
   
    var self = this;
    self.as_needed_commands = {list: []};


        self.getAsNeededCommands=function () {
            $http.get('/as_needed_commands').then(function (response) {
                console.log('got item', response);
                self.as_needed_commands.list = response.data;
            })
        }

 
        self.getAsNeededCommands();
}]);