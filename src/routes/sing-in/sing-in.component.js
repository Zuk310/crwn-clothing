import { async } from '@firebase/util';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const Singin = ()=>{
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(response);
    }

    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
        </div>
    )
}

export default Singin;