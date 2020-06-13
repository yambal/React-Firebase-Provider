import * as React from 'react';
import 'firebase/auth';
interface iFirebaseAuthProvider {
}
interface iFirebaseAuthContext {
    firebaseUser: firebase.User | null;
    createUserWithEmailAndPassword?: (email: string, password: string) => void;
    signInWithEmailAndPassword?: (email: string, password: string) => void;
}
export declare const FirebaseAuthContext: React.Context<iFirebaseAuthContext>;
export declare const FirebaseAuthProvider: React.FC<iFirebaseAuthProvider>;
export {};
//# sourceMappingURL=FirebaseAuthProvider.d.ts.map