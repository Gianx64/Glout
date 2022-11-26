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
	apiKey: "AIzaSyB2cPo1wDFd-CQ8HVgxOzCV7A16QFHGlMA",
	authDomain: "litbase-77e17.firebaseapp.com",
	projectId: "litbase-77e17",
	storageBucket: "litbase-77e17.appspot.com",
	messagingSenderId: "692704056568",
	appId: "1:692704056568:web:243ef0d1b775f79fae570d",
	databaseURL: "https://litbase-77e17-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase