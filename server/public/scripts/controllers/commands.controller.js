myApp.controller('CommandsController', function(CommandsService) {
    console.log('CommandsController created');
    var vm = this;

    // vm.getCommands = function (){
    //   DogService.addDog(newDog);
    //   console.log(newDog);
    // }
    vm.commands = CommandsService.commands;

  });