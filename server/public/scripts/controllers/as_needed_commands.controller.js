myApp.controller('AsNeededCommandsController', function(AsNeededCommandsService) {
    console.log('AsNeededCommandsController created');
    var vm = this;
    

    vm.getAsNeededCommands = function (){
      AsNeededCommandsService.getAsNeededCommands();
      console.log('get as needed commands working');
    }

    vm.as_needed_commands = AsNeededCommandsService.as_needed_commands;
    vm.getAsNeededCommands();
  });