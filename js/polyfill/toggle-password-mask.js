YUI.add('toggle-password-mask', function(Y) {
  var showPassword = Y.one('#show-password'),
    password = Y.one('#password'),
    showPasswordIcon = Y.one('#show-password-icon'),
    showPasswordLabel = Y.one('#show-password-label'),
    togglePasswordMask;

  togglePasswordMask = function(e) {
    e.halt();
    if(password.get('type') === 'password') {
      password.set('type', 'text');
      showPasswordIcon.addClass('checked');
      showPasswordIcon.removeClass('unchecked');
      showPasswordLabel.setAttribute('aria-checked', 'true');
    } else {
      password.set('type', 'password');
      showPasswordIcon.addClass('unchecked');
      showPasswordIcon.removeClass('checked');
      showPasswordLabel.setAttribute('aria-checked', 'false');
    }
  };

  if(showPassword){
    showPassword.setStyle('display', 'block');
  }

  Y.on('mousedown', togglePasswordMask, '#show-password');
});