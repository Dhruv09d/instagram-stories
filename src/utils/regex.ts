const regex = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  gerryEmail: /^[A-Za-z0-9._%+-]+@mygerry\.com$/,
  pccId: /^[A-Z]{3}[0-9]{3}/,
  contactNumber: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,

  password: {
    isUpper: /[A-Z]/,
    isLower: /[a-z]/,
    isNum: /\d/,
    hasSpecialCharacter: /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  },

  pwd: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,

  passwordCriteria: {
    eightChar: /^.{8,}$/,
    lower: /(?=.*[a-z])/,
    upper: /(?=.*[A-Z])/,
    digit: /(?=.*\d)/,
    specialChar: /(?=.*[!@#$%^&*])/,
  },

  postalCode: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3}\s[A-Za-z\d]{3}$/,
};

export default regex;
