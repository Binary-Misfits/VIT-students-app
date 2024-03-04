const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
import bcrypt from 'bcryptjs';
 
const signup(){()=>createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    res.status(200).json({user});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
const signin(){()=>signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    res.status(200).json({user});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

module.exports(signin,signup);
