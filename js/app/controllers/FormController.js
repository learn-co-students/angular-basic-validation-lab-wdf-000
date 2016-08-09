function FormController($scope) {
  this.username = $scope.username;
  this.password = $scope.password;
  this.email = $scope.email;
}

angular
    .module('app')
    .controller('FormController', FormController);
