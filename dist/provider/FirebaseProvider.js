import * as React from 'react';
import * as firebase from "firebase/app";
// import 'firebase/database'
const dotenv = require('dotenv');
dotenv.config({ debug: true });
export const FirebaseContext = React.createContext(undefined);
export const FirebaseProvider = props => {
    const firebaseApp = React.useMemo(() => {
        const config = {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STRAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        };
        // console.log(config)
        return firebase.initializeApp(config);
    }, []);
    return (React.createElement(FirebaseContext.Provider, { value: firebaseApp }, props.children));
};
//# sourceMappingURL=FirebaseProvider.js.map