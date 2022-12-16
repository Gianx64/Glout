import { createUserWithEmailAndPassword, 
signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const signUp = async (email: string, password: string) => {
	return createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		console.log('Usuario registrado: '+email);
		return true;
	})
	.catch((error) => {
		//console.error(error);
		return error;
	});
};

const signIn = async (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		console.log("UID de usuario obtenido: "+userCredential.user.uid);
		return true;
	})
	.catch((error) => {
		//console.error(error);
		return error;
	});
};

const signOut = async () => {
	return auth.signOut()
	.then(() => {
		console.log('Sesión cerrada exitosamente.');
		return true;
	}).catch((error) => {
		//console.error(error);
		return error;
	});
}

export { signUp, signIn, signOut };