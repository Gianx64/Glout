import { auth, database } from "./firebaseConfig";
import { ref, set, onValue } from "firebase/database";

const storesRef = ref(database, "stores/"+auth.currentUser?.email);

const writeStoreData = (data: any) => {
  return set(storesRef, data);
};

const readDataBase = () => {
  onValue(storesRef, (snapshot) => {
    const data = snapshot.val();
    console.log('====================')
    console.log('DATA en RDB')
    console.log(data);
  });
};

export { writeStoreData, readDataBase };