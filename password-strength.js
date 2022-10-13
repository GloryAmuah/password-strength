const passwordStrength = validPassword => {

  const minPasswordLenght = 6;
  const maxPasswordLenght = 12;
  
  if ((validPassword.length) < minPasswordLenght) throw new Error ("Minimum password length is 6");
      
  if ((validPassword.length) > maxPasswordLenght) throw new Error ("Maximum password length is 12");

  const extraStrongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
  const strongRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]))|((?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])))")
  const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))");
  const weakRegex = new RegExp("^((?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9])|(?=.*[!@#\$%\^&\*]))");

  if (validPassword.match(extraStrongRegex))
  return ('Your password strenght is 100%')

  if (validPassword.match(strongRegex))
  return ('Your password strenght is 75%')

  if (validPassword.match(mediumRegex))
  return ('Your password strenght is 50%')

  if (validPassword.match(weakRegex))
  return ('Your password strenght is 25%')
}

module.exports = passwordStrength;
