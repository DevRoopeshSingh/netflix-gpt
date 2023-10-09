export const checkValidData = (email, password, name) => {
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[A-Za-z\s]+$/.test(name);

  if (!isNameValid) {
    return "Name is not Valid";
  }

  if (!isEmailValid) {
    return "Email Id is not Valid";
  }
  if (!isPasswordValid) {
    return "Password is not Valid";
  }

  return null;
};
