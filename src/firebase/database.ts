import { auth, database } from "./firebaseConfig";
import { ref, set, onValue, update } from "firebase/database";

type store = {
  contact: string,
  delivery: boolean,
  description: string,
  latitude: number,
  likes: number,
  longitude: number,
  name: string,
  submitter: string
}

const readDataBase = () => {
  onValue(ref(database), (snapshot) => {
    const data = snapshot.val();
    console.log('====================')
    console.log('DATA en RDB')
    console.log(data);
  });
};

const writeStoreData = (store:store) => {
  const storesRef = ref(database, "stores/"+store.name);

  return set(storesRef, store);
};

const readStoresData = () => {
  onValue(ref(database, "stores"), (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    return data;
  });
};

const writeUserData = (name: string, surname: string) => {
  const storesRef = ref(database, "user/"+auth.currentUser?.uid);
  const userData = {
    name: name,
    surname: surname,
    likes: {},
    dislikes: {},
    favorites: {}
  }
  return set(storesRef, userData);
};

const readUserData = () => {
  onValue(ref(database, "user"+auth.currentUser?.uid), (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    return data;
  });
};

/*const writeUserLiked = (store:string) => {
  const storesRef = ref(database, "user/"+auth.currentUser?.email);
  return update(storesRef, store);
};*/

export { readDataBase, writeStoreData, readStoresData, writeUserData, readUserData };