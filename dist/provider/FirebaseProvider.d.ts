import * as React from 'react';
import * as firebase from "firebase/app";
interface FirebaseProvider {
}
declare type tFirebaseContext = firebase.app.App | undefined;
export declare const FirebaseContext: React.Context<tFirebaseContext>;
export declare const FirebaseProvider: React.FC<FirebaseProvider>;
export {};
//# sourceMappingURL=FirebaseProvider.d.ts.map