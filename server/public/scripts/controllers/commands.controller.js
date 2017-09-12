myApp.controller('CommandsController', function(UserService) {
    console.log('CommandsController created');
    var vm = this;
    vm.userService = UserService;
  });