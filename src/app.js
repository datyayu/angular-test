import angular from "angular";
import testComponent from "./test-component";

const app = angular.module("app", []);

app.controller("appController", function($scope) {
  $scope.inputValue = 0;
});

// Register component
app.component("testComponent", testComponent);
