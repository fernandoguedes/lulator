angular
    .module('lulatorApp')
    .controller('lulaCtrl', lulaCtrl);

lulaCtrl.$inject = ['$scope'];

function lulaCtrl($scope) {
    $scope.editActive = 'principal';
    $scope.textEdit = '';

    $scope.lula = {
        principal: 'Lulator',
        lula1 : 'Horrível',
        lula2 : 'Ridículo',
        lula3 : 'Ócio',
        lula4 : 'Livre',
        lula5 : 'Guedes',
        lula6 : 'Incerteza',
        lula7 : 'Convicção',
        lula8 : 'Coxinha',
        lula9 : 'Criatividade',
        lula10 : 'Tosco',
        lula11 : 'Ruim',
        lula12 : 'Feio'
    };

    $scope.editDiagram = function(name) {
        $scope.editActive = name;
        $scope.textEdit = $scope.lula[name];
    }

    $scope.setDiagram = function() {
        $scope.lula[$scope.editActive] = $scope.textEdit;
    }
};
