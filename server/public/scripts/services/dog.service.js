myApp.service('DogService', ['$http', function ($http) {
    console.log('DogService Loaded');
   
    var self = this;
    //var filestackAPIKey = AaN98nhRTamCfV3Suca0Zz;
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

        // self.getFilestackImage = function() {
        //     // example request:
        //     // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
        //     var baseUrl = 'https://www.filestackapi.com/api/file/DCL5K46FS3OIxb5iuKby';
        //     baseUrl += 'api_key=' + giphyAPIKey;    // api key
        //     baseUrl += '&limit=5';  // limit
        //     baseUrl += '&rating=g'; // rating
    
        //     console.log('baseUrl: ', baseUrl);
            
        //     $http.get(baseUrl).then(function(response) {
        //         console.log('filestack image ', response.data);
                
        //     });
        // };
    
        // self.getFilestackImage();




        // self.deleteitem=function (itemid) {
        //     console.log('delete button clicked');
        //     $http.delete('/shelf/shelf/' + itemid).then(function (response) {
        //         console.log('delete item', response);
        //         // self.shelfItems.list = response.data;
        //         self.getitem();
        //     })
        // }
        
}]);




