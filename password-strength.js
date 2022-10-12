//  // password validation
//  check('password').trim().notEmpty().withMessage('Password required')
//  .isLength({ min: 6 }).withMessage('Password must have minimum length of 6')
//  .isLength({ max: 12 }).withMessage('Password must have maximum length of 12')
//  .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
//  .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
//  .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
//  .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character')
//  .not().matches(/^$|\s+/).withMessage('White space not allowed'),
//  // confirm password validation
//  check('confirmPassword').custom((value, { req }) => {
//       if (value !== req.body.password) {
//             throw new Error('Password Confirmation does not match password');
//        }
//        return true;
//   })

// const passwordStrength = validPassword => {

//   const regExpWeak = /[a-z]/; 
//   const regExpSemiWeak = /[A-Z]/;
//   const regExpMedium = /[0-9]/;
//   const regExpStrong = /.[$,@,#,&,!,%,^,*,?,_,~,-,(,)]/;
//   const minPasswordLenght = 6;
//   const maxPasswordLenght = 12;

//   let input_weak = validPassword.match(regExpWeak);
//   let input_semi_weak = validPassword.match(regExpSemiWeak);
//   let input_medium = validPassword.match(regExpMedium);
//   let input_strong = validPassword.match(regExpStrong);

//   if (validPassword) {
//     if ((validPassword.length) < minPasswordLenght) throw new Error ("Minimum password length is 6");
    
//     if ((validPassword.length) > maxPasswordLenght) throw new Error ("Maximum password length is 12");

//     if (validPassword.length >= minPasswordLenght && (input_weak || input_semi_weak || input_medium || input_strong)) {
//       throw new Error ("Your password strenght is 25%")
//     }
//     if (validPassword.length >= minPasswordLenght && ((input_weak && input_semi_weak) || (input_weak && input_medium) || (input_weak && input_strong))) {
//       throw new Error ("Your password strenght is 50%")
//     }
//     if (validPassword.length >= minPasswordLenght && ((input_weak && input_semi_weak && input_strong) || (input_medium && input_strong) || (input_week && input_strong))) {
//       throw new Error ("Your password strenght is 75%")
//     }
//     if (validPassword.length >= minPasswordLenght && (input_weak && input_semi_weak && input_medium && input_strong)) {
//       return "Your password is strength is 100%";
//     }
//   }
// }

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
