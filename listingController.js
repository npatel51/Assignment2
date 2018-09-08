angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings; //listing are stored 
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
     $scope.addListing = function() {
        let newListing = {
          code:$scope.buildingCode,
          name:$scope.buildingName,
          coordinates: {
            latitude:$scope.buildingLatitude,
            longitude:$scope.buildingLongitude
          },
          address:$scope.buildingAddress
        };  
        console.log(newListing);
        $scope.listings.push(newListing);
    };
    
    //remove the entry from the list 
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1); 
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);