app.controller("myController", function ($scope) {



    $scope.people = [];
    $scope.people.push(new person($scope.people.length + 1, "Stephanie", 22, 8, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Jodi", 31, 7, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Katie", 27, 5, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Maria", 19, 7, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Jackie", 34, 6, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Alyssa", 41, 8, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Vanessa", 23, 4, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Jill", 21, 9, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Ronda", 33, 7, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Carrie", 29, 7, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Deanna", 18, 8, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Kate", 31, 5, "f"));
    $scope.people.push(new person( $scope.people.length + 1,"Mark", 32, 6, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"John", 23, 8, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"Steve", 28, 9, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"Peyton", 26, 4, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"Tom", 35, 5, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"Merl", 22, 7, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"Alan", 27, 6, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"Theo", 29, 9, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"Vern", 32, 6, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"Sam", 38, 7, "m"));
    $scope.people.push(new person( $scope.people.length + 1,"Ralph", 31, 5, "m"));
    $scope.people.push(new person($scope.people.length + 1, "Owen", 22, 8, "m"));
    $scope.me = {};
    $scope.matches = [];
    $scope.peoplematched = [];

    $scope.addPerson = function () {
        //$scope.people.push($scope.newPerson);
        $scope.me = $scope.newPerson;
    }

    $scope.findMatches = function () {
        var id = 0;
        var likeness = 0;

        $scope.peoplematched = [];
        $scope.matches = [];
        for (i = 0; i < $scope.people.length; i++) {
            if ($scope.people[i].gender != $scope.me.gender) {
                id = $scope.people[i].id;
                likeness = Math.abs($scope.people[i].age - $scope.me.age) + Math.abs($scope.people[i].hotness - $scope.me.hotness)
                $scope.matches.push(new match(id, likeness));
            }
        }
        $scope.matches = $scope.matches.sort(function (a, b) { return (a.likeness > b.likeness) ? 1 : ((b.likeness > a.likeness) ? -1 : 0); });
        for (i = 0; i < $scope.matches.length; i++) {
            for (x = 0; x < $scope.people.length; x++) {
                if ($scope.matches[i].id === $scope.people[x].id) {
                    $scope.peoplematched.push($scope.people[x])
                }
            }
        }
    }
})

var person = function Person(id, name, age, hotness, gender) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.hotness = hotness;
    this.gender = gender;
}

var match = function Person(id, likeness) {
    this.id = id;
    this.likeness = likeness;
}



