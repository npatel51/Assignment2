angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings; 
    $scope.detailedInfo = undefined;
    $scope.showDetail = false;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      //create a new listing object
        let newListing = {
          code: $scope.buildingCode.toUpperCase(),
          name:$scope.capitalize($scope.buildingName),
          coordinates: {
            latitude:$scope.buildingLatitude,
            longitude:$scope.buildingLongitude
          },
          address:$scope.capitalize($scope.buildingAddress)
        };  
        //add the listing object to the listings
        $scope.listings.push(newListing);
    };

    //capitalize string assumes a word is separated by single space
    $scope.capitalize = function(string){
      let strs = string.toLowerCase().split(' ');
      for (let i = 0; i < strs.length; i++) {
        strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].substring(1);     
      }
      return strs.join(' '); 
    }
    
    //removes the listing object from the listings 
    $scope.deleteListing = function(listing) {
        let index = $scope.indexOfListing(listing); 
        $scope.listings.splice(index, 1); 
    };
    //shows detailed information about the object passed
    $scope.showDetails = function(listing) {
         $scope.showDetail = true;
         let index = $scope.indexOfListing(listing);
         $scope.detailedInfo = $scope.listings[index];
    };

    $scope.indexOfListing = function(listing){
        for(let i=0;i<$scope.listings.length;++i){
          if( $scope.listings[i] === listing ){
            return i;
          }
        }
        return -1;
      }
  }
]);

