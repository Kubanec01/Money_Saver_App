import { useState } from "react";

export const authStates = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordWasSent, setPasswordWasSent] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  return {
    email,
    setEmail,
    password,
    setPassword,
    isSigningIn,
    setIsSigningIn,
    errorMessage,
    setErrorMessage,
    userName,
    setUserName,
    confirmPassword,
    setConfirmPassword,
    isRegistering,
    setIsRegistering,
    isInvalid,
    setIsInvalid,
    setSuccessMessage,
    successMessage,
    setPasswordWasSent,
    passwordWasSent,
    setNewPassword,
    newPassword,
  };
};
