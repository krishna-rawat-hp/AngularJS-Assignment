(function(){
  'use strict';

  angular.module("dishChecker",[])

  .controller("dishMessage", function($scope){
    $scope.dishName="";
    $scope.message = "Please Enter Dishes First";
    $scope.dishCalculate = function(){
      if($scope.dishName.length>0){
        var a = $scope.dishName.split(",");
        if(a.length>3){
          $scope.message = "Too Much!";
        }else if (a.length>0 && a.length<4) {
          $scope.message = "Enjoy The Food!"
        }
      }else{
        $scope.message = "Please Enter Dishes First";
      }
    };
  });
})();
