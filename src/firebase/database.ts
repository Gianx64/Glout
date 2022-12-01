import { database } from "./firebaseConfig";
import { ref, set, onValue } from "firebase/database";

//TODO: reemplazar "stores" por "stores/{user.email}"
const storesRef = ref(database, "stores");

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