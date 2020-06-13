import * as React from 'react';
import 'firebase/auth';
import { FirebaseContext } from './FirebaseProvider';
const dotenv = require('dotenv');
dotenv.config({ debug: true });
export const FirebaseAuthContext = React.createContext({
    firebaseUser: null,
    createUserWithEmailAndPassword: undefined,
    signInWithEmailAndPassword: undefined
});
export const FirebaseAuthProvider = props => {
    const firebaseApp = React.useContext(FirebaseContext);
    const [firebaseAuth, setFirebaseAuth] = React.useState(undefined);
    const [firebaseUser, setFirebaseUser] = React.useState(null);
    React.useEffect(() => {
        if (firebaseApp) {
            const firebaseAuth = firebaseApp.auth();
            firebaseAuth.onAuthStateChanged((firebaseUser) => {
                setFirebaseUser(firebaseUser);
            });
            setFirebaseAuth(firebaseAuth);
        }
    }, [firebaseApp]);
    /* createUserWithEmailAndPassword */
    const createUserWithEmailAndPassword = React.useCallback((email, password) => {
        if (firebaseAuth) {
            firebaseAuth.signOut();
            firebaseAuth.createUserWithEmailAndPassword(email, password)
                .then((credential) => {
                console.log(`user created`);
            })
                .catch((error) => {
                console.log(error.code, error.message);
                // auth/operation-not-allowed
                // The given sign-in provider is disabled for this Fi…under the sign-in method tab of the Auth section.
                // auth/email-already-in-use
                // The email address is already in use by another account.
                // auth/invalid-email
                // The email address is badly formatted.
                // auth/weak-password
                // The password must be 6 characters long or more.
            });
        }
    }, [firebaseAuth]);
    const signInWithEmailAndPassword = (email, password) => {
        if (firebaseAuth) {
            firebaseAuth.signOut();
            firebaseAuth.signInWithEmailAndPassword(email, password)
                .then((credential) => {
                console.log(`logined`);
            })
                .catch((error) => {
                console.log(error.code, error.message);
                // auth/quota-exceeded
                // Exceeded quota for verifying passwords.
            });
        }
    };
    return (React.createElement(FirebaseAuthContext.Provider, { value: {
            firebaseUser,
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword
        } }, props.children));
};
//# sourceMappingURL=FirebaseAuthProvider.js.map