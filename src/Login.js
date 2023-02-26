import {useState} from 'react'
import{
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    sendSignInLinkToEmail,
    signInAnonymously
} from 'firebase/auth'
import {auth} from './firebase'
import {ActionCodeSettings} from './firebase'
import { useNavigate } from 'react-router-dom'
//import  from '../node_modules/@firebase/auth/dist/auth.d.ts.'

const Login = () => {
const [email , setemail] = useState('');
const [password , setpassword] = useState('');
const navigate = useNavigate()

const signIn = ()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(auth=>{navigate('/home')})
    .catch(error=>console.error(error))
}

const register = async ()=>{
   //const newUserCredential =
   //await signInAnonymously(auth)
 await createUserWithEmailAndPassword(auth,email,password)
   //return newUserCredential
    //  navigate('/home') 
    //  alert("registered>>>>>")
    //  return await sendEmailVerification(newUserCredential);

     
    .then(auth=>{navigate('/home') 
     alert("registered>>>>>")})
    .catch(error=>console.error(error))
   
    sendEmailVerification(auth.currentUser)
    .then(() => {
        alert("Email verification sent!")
        // Email verification sent!
        // ...
    });

    // const user = auth.currentUser;
    // if (user !== null) {
    // // The user object has basic properties such as display name, email, etc.
    // //const displayName = user.displayName;
    // const email = user.email;
    // //const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;

    // // The user's ID, unique to the Firebase project. Do NOT use
    // // this value to authenticate with your backend server, if
    // // you have one. Use User.getToken() instead.
    // const uid = user.uid;
    // }
    
//    await sendEmailVerification(user, actionCodeSettings);

//    const actionCodeSettings = {
//     url: 'http://localhost:3001/home',
//     // iOS: {
//     //    bundleId: 'com.example.ios'
//     // },
//     // android: {
//     //   packageName: 'com.example.android',
//     //   installApp: true,
//     //   minimumVersion: '12'
//     // },
//      handleCodeInApp: true
//   };
//   await sendEmailVerification(user, actionCodeSettings);
  // Obtain code from the user.
 // await applyActionCode(auth, code);
  //await sendSignInLinkToEmail(auth,email,ActionCodeSettings)
   //alert("Email Sent>>>>>")
}
//const signup = ()=>{
	// auth.createUserWithEmailAndPassword(email , password)
	// .then((userCredential)=>{
	// 	// send verification mail.
	// 	userCredential.user.sendEmailVerification();
	// 	auth.signOut();
	// 	alert("Email sent");
	// })
	// .catch(alert);

    return ( 
        <div>
            <br/><br/>
            <input type="email" placeholder="Email"
            onChange={(e)=>{setemail(e.target.value)}}>
            </input>
            <br/><br/>
            <input type="password" placeholder="password"
            onChange={(e)=>{setpassword(e.target.value)}}>
            </input>
            <br/><br/>
            <button onClick={signIn}>Sign In</button>
            <br/><br/>
            <button onClick={register}>Create An Account</button>
        </div>
     );
 }
export default Login;