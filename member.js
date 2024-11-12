function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'SkillsMemberController',
        controllerAs: 'um',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}