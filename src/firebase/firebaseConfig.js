import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDyxmOFd8z6MbS9_NC4siwwHXUQYylTNEg",
	authDomain: "glout-a9a5d.firebaseapp.com",
	databaseURL: "https://glout-a9a5d-default-rtdb.firebaseio.com",
	projectId: "glout-a9a5d",
	storageBucket: "glout-a9a5d.appspot.com",
	messagingSenderId: "827345849570",
	appId: "1:827345849570:web:4393a4ac9a6cc59fb562bb",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase