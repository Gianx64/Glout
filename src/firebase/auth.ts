import { createUserWithEmailAndPassword, 
signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const signUp = async (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log('Usuario registrado: '+email);
			return userCredential.user;
		})
		.catch((error) => {
			console.error(error);
			return undefined;
		});
};

const signIn = async (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log("UID de usuario obtenido: "+userCredential.user.uid);
			return true;
		})
		.catch((error) => {
			console.error(error);
			return false;
		});
};

const signOut = async () => {
	auth.signOut().then(() => {
		console.log('Sesión cerrada.');
		return true;
	}).catch((error) => {
		console.error(error);
		return false;
	});
	return false;
}

export { signUp, signIn, signOut };