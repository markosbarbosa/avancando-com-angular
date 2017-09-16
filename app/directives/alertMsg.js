module.exports = function() {

    return {
        template: `
            <div class="alert alert-success">
                <p>{{ title }} <strong ng-transclude=""></strong></p>
            </div>
        `,
        restrict: 'AE',
        scope: {
            title: '@'
        },
        transclude: true
    }


};