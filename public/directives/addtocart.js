angular.module("storeApp")
.directive("addToCart", function(){
  return {
    templateUrl: './../templates/addtocart.html',
    restrict: 'AE',
    controller: 'addToCartCtrl'
  };
});
