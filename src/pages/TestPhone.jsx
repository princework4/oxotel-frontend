import * as React from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import app from "../firebase/Firebase";

import "./TestPhone.css";

const TestPhone = () => {
  const [mobile, setMobile] = React.useState("");
  //   const [OTP, setOTP] = React.useState("");
  const [OTP, setOTP] = React.useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOTP((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const onSignInSubmit = (event) => {
    event.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + mobile;
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been send successfully");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("OTP has not been send successfully", error);
      });
  };

  const configureCaptcha = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth,
    );
  };

  const verifyOTP = (event) => {
    event.preventDefault();
    let combinedOTP =
      OTP.otp1 + OTP.otp2 + OTP.otp3 + OTP.otp4 + OTP.otp5 + OTP.otp6;
    console.log("combinedOTP", combinedOTP);
    const code = combinedOTP;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        alert("user is verified");
        console.log("user obj", user);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };

  return (
    <>
      <form onSubmit={onSignInSubmit} style={{ marginTop: "150px" }}>
        <div id='sign-in-button'></div>
        <input type='tel' onChange={(event) => setMobile(event.target.value)} />
        <button>get otp</button>
      </form>
      <form onSubmit={verifyOTP} style={{ marginTop: "50px" }}>
        {/* <input type='text' onChange={(event) => setOTP(event.target.value)} />
        <button>verify otp</button> */}
        <div className='otpContainer'>
          <input
            name='otp1'
            type='text'
            autoComplete='off'
            className='otpInput'
            value={OTP.otp1}
            onChange={handleChange}
            tabIndex='1'
            maxLength='1'
            onKeyUp={inputfocus}
          />
          <input
            name='otp2'
            type='text'
            autoComplete='off'
            className='otpInput'
            value={OTP.otp2}
            onChange={handleChange}
            tabIndex='2'
            maxLength='1'
            onKeyUp={inputfocus}
          />
          <input
            name='otp3'
            type='text'
            autoComplete='off'
            className='otpInput'
            value={OTP.otp3}
            onChange={handleChange}
            tabIndex='3'
            maxLength='1'
            onKeyUp={inputfocus}
          />
          <input
            name='otp4'
            type='text'
            autoComplete='off'
            className='otpInput'
            value={OTP.otp4}
            onChange={handleChange}
            tabIndex='4'
            maxLength='1'
            onKeyUp={inputfocus}
          />

          <input
            name='otp5'
            type='text'
            autoComplete='off'
            className='otpInput'
            value={OTP.otp5}
            onChange={handleChange}
            tabIndex='5'
            maxLength='1'
            onKeyUp={inputfocus}
          />
          <input
            name='otp6'
            type='text'
            autoComplete='off'
            className='otpInput'
            value={OTP.otp6}
            onChange={handleChange}
            tabIndex='6'
            maxLength='1'
            onKeyUp={inputfocus}
          />
        </div>
        <button>verify otp</button>
      </form>
    </>
  );
};

export default TestPhone;
