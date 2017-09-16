module.exports = function() {

    return {
        require: 'ngModel',
        link: function(scope, element, attributes, ctrl) {
            // console.log(scope);
            // console.log(element);
            // console.log(attributes);

            element.bind('keyup', function() {
                // console.log(scope.formClient.telClient.$viewValue);
                // console.log(ctrl.$viewValue);

                var formatTel = function (value) {

                    if(value != undefined) {
                        value = value.replace(/[^0-9]/g, '');
                        value = value.substring(0, 9);

                        if(value.length > 4 && value.length <= 8) {
                            value = value.substring(0, 4) + '-' + value.substring(4, 8);
                        } else if(value.length > 4 && value.length <= 9) {
                            value = value.substring(0, 5) + '-' + value.substring(5, 9);
                        }

                    }



                    return value;

                };

                ctrl.$setViewValue(formatTel(ctrl.$viewValue));
                ctrl.$render();

            });

            // ctrl.$parsers.push(function(value) {
            //     value = value.replace(/[^0-9]/g, '');
            //     return value;
            // });
        }
    };

}