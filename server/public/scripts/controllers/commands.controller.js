myApp.controller('CommandsController', function(CommandsService) {
    console.log('CommandsController created');
    var vm = this;
    

    vm.getCommands = function (){
      CommandsService.getCommands();
      console.log('get commands working');
    }

    vm.commands = CommandsService.commands;
    vm.getCommands();
  });
