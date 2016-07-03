angular
    .module('chatApp')
    .directive('presentation', presentation);

function presentation() {
    return {
        scope: {},
        controller: function($uibModal) {
            this.showModal = function () {
                var modalInstance = $uibModal.open({
                  animation: true,
                  templateUrl: 'login.html',
                  controller: 'ModalInstanceCtrl'
                });
            };
        },
        controllerAs: 'modal',
        template: `<script type="text/ng-template" id="login.html">
                        <div class="modal-header">
                            <h3 class="modal-title">I'm a modal!</h3>
                        </div>
                        <div class="modal-body">
                            <h1>Hola mundo</h1>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" type="button" ng-click="ok()">OK</button>
                            <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>
                        </div>
                    </script>
                    <section id="presentation" class="centered">
                        <h1>Anonymous Chat</h1><br>
                        <h4>Live in fear | <a ng-click="modal.showModal()">Chat now</a></h4>
                    </section>`
    }
}

angular
    .module('chatApp')
    .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });
