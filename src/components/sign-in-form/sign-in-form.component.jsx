import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./sign-in-form.styles.scss";


import FormInput from "../form-input/form-input.coponent";
import Button from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignInForm = () => { 
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const {setCurrentUser} = useContext(UserContext);

  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(email, password);
      //console.log(user);
      // setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrent password or email");
          break;
        case "auth/user-not-found":
          alert("email does not exists");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // setCurrentUser(user);
    // console.log(response);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>sign in with yout email and password</span>

      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handelChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handelChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
