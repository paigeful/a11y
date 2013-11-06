YUI.add('validation-controller-use', function(Y) {

  Y.use('validation-controller', function(Y){

    var ValidationController = Y.Validator.ValidationController;
      validationController = new ValidationController({

      });
    validationController.init();
  });
});
