import { createUserWithEmailAndPassword, 
signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const register = async (email: string, password: string) => {
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
			console.log("Nombre de usuario obtenido: ");
			console.log(userCredential.user);
			return true;
		})
		.catch((error) => {
			console.error(error);
			return false;
		});
};

export { register, signIn };
