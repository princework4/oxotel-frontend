const emailRegexPattern = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);
const passwordRegexPattern = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
const alphaCharRegex = /^[a-zA-Z ]*$/;
const phoneNo = /^\d{10}$/;

export function validateFullName(fullname) {
  let fullNameError = "";
  if (fullname === "" || !fullname.trim()) {
    fullNameError = "*This field is required";
  } else if (!fullname.match(alphaCharRegex)) {
    fullNameError = "*Please enter alphabet characters only";
  } else if (fullname.length <= 3) {
    fullNameError = "*Full name is too short";
  } else {
    fullNameError = "";
  }
  return fullNameError;
}

export function validateEmail(email) {
  let emailError = "";
  if (email === "" || !email.trim()) {
    emailError = "*This field is required";
  } else if (!emailRegexPattern.test(email)) {
    emailError = "*Please enter valid email-Id";
  } else {
    emailError = "";
  }
  return emailError;
}

export function validateUserType(userType) {
  let userTypeError = "";
  if (userType === "") {
    userTypeError = "*This field is required";
  } else {
    userTypeError = "";
  }
  return userTypeError;
}

export function validateDropdown(selectedData) {
  let selectedDataError = "";
  if (selectedData === "") {
    selectedDataError = "*This field is required";
  } else {
    selectedDataError = "";
  }
  return selectedDataError;
}

export function validateLocality(locality) {
  let localityError = "";
  if (locality === "") {
    localityError = "*This field is required";
  } else {
    localityError = "";
  }
  return localityError;
}

export function validateDuration(duration) {
  let durationError = "";
  if (duration === "") {
    durationError = "*This field is required";
  } else {
    durationError = "";
  }
  return durationError;
}

export function validateMobileNumber(mobileNumber) {
  let mobileNumberError = "";
  if (mobileNumber === "") {
    mobileNumberError = "*This field is required";
  } else if (!mobileNumber.match(phoneNo)) {
    mobileNumberError = "*Please enter valid mobile number";
  } else {
    mobileNumberError = "";
  }
  return mobileNumberError;
}

export function validateOccupancy(occupancy) {
  let occupancyError = "";
  if (occupancy === "" || occupancy === "Occupancy") {
    occupancyError = "*This field is required";
  } else {
    occupancyError = "";
  }
  return occupancyError;
}

export function validateGender(gender) {
  let genderError = "";
  if (gender === "") {
    genderError = "*This field is required";
  } else {
    genderError = "";
  }
  return genderError;
}

export function validateDate(date) {
  let dateError = "";
  if (date === "") {
    dateError = "*This field is required";
  } else {
    dateError = "";
  }
  return dateError;
}

export function validateDateTime(dateTime) {
  let dateTimeError = "";
  if (dateTime === "") {
    dateTimeError = "*This field is required";
  } else {
    dateTimeError = "";
  }
  return dateTimeError;
}

export function validateUsername(username) {
  let usernameError = "";
  if (username === "" || !username.trim()) {
    usernameError = "*This field is required";
  } else if (username.length < 3 || username.length > 25) {
    usernameError = "*Username must be between 3 and 25 characters";
  } else {
    usernameError = "";
  }
  return usernameError;
}

export function validatePassword(password) {
  let passwordError = "";
  if (password === "" || !password.trim()) {
    passwordError = "*This field is required";
  } else if (!passwordRegexPattern.test(password)) {
    passwordError =
      "*Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)";
  } else {
    passwordError = "";
  }
  return passwordError;
}

export function validateConfirmPassword(password, confirmPassword) {
  let confirmPasswordError = "";
  if (confirmPassword === "" || !confirmPassword?.trim()) {
    confirmPasswordError = "*This field is required";
  } else if (password !== confirmPassword) {
    confirmPasswordError = "*Password does not match";
  } else {
    confirmPasswordError = "";
  }
  return confirmPasswordError;
}
