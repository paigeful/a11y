YUI.add('toggle-password-mask', function(Y) {
  var password = Y.one('#password'),
    togglePasswordMask;

  togglePasswordMask = function(e) {
    if(e.target.get('checked')) {
      password.set('type', 'text');
    } else {
      password.set('type', 'password');
    }
  };

  Y.one('#unmask-password-container').setStyle('display', 'block');

  Y.on('change', togglePasswordMask, '#unmask-password');
});