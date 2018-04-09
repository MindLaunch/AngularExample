var app1 = angular.module('app1', []);

app1.controller('controller1', function ($scope) {

    $scope.updateValue = function () {
        $scope.calculation = $scope.first + ' + ' + $scope.second + " = " + (+$scope.first + +$scope.second);
    }

    $scope.convertFromRomanToArabic = function () {
        $scope.arabicValue = 0;
        $scope.romanValue = $scope.romanValue.toUpperCase();

        console.log("start " + $scope.romanValue);

        for (var i = 0; i < $scope.romanValue.length; i++) {
            var currentChar = $scope.romanValue.charAt(i);
            var nextChar = $scope.romanValue.charAt(i + 1);
            var currentCharValue = characterValue(currentChar);
            var nextCharValue = characterValue(nextChar);

            console.log(currentCharValue + " " + nextCharValue);

            if (currentCharValue >= nextCharValue) {
                $scope.arabicValue = $scope.arabicValue + currentCharValue;
            } else {
                $scope.arabicValue = $scope.arabicValue - currentCharValue;
            }

            console.log($scope.arabicValue);
        }

        console.log("end");
    }

    var characterValue = function (romanCharacter) {
        switch(romanCharacter){
            case "I":
                return 1;
                break;
            case "V":
                return 5;
                break;
            case "X":
                return 10;
                break;
            case "L":
                return 50;
                break;
            case "C":
                return 100;
                break;
            case "D":
                return 500;
                break;
            case "M":
                return 1000;
                break;
            default:
                return 0;
        }
    }
});