import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Singin = () => {
//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if(response){
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };

  return (
    <div>
      <h1> Sign in page </h1>{" "}
      <button onClick={logGoogleUser}> Sign in with google popup </button>{" "}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect{" "}
      </button>{" "} */}
      <SignUpForm/>
    </div>
  );
};

export default Singin;
