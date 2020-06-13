import * as React from 'react';
import 'firebase/auth';
interface iFirebaseAuthProvider {
    languageCode?: string;
}
interface iFirebaseAuthContext {
    firebaseUser: firebase.User | null;
    signIned: boolean;
    createUserWithEmailAndPassword?: (email: string, password: string) => Promise<firebase.User | null>;
    signInWithEmailAndPassword?: (email: string, password: string) => Promise<firebase.User | null>;
    sendPasswordResetEmail?: (email: string, url?: string) => Promise<void>;
    sendEmailVerification?: (url?: string) => Promise<void>;
    delete?: () => Promise<void>;
    signOut?: () => void;
}
export declare const FirebaseAuthContext: React.Context<iFirebaseAuthContext>;
export declare const FirebaseAuthProvider: React.FC<iFirebaseAuthProvider>;
export {};
//# sourceMappingURL=FirebaseAuthProvider.d.ts.map