import { auth, database } from "./firebaseConfig";
import { ref, set, get, onValue, update } from "firebase/database";

type store = {
  name_sucursal: string,
  address: string,
  contact: string,
  coords: {latitude: number, longitude: number}
  | {latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number},
  delivery: string,
  description: string,
  submitter: string,
  webpage: string,
  schedule: string,
  social: string,
  likes: number,
  dislikes: number
}

const writeStoreData = (store:store) => {
  const storesRef = ref(database, "stores");
  get(storesRef).then((snapshot) => {
    const data = snapshot.val();
    data.push(store)
    return update(storesRef, data);
  });
};

const readStoresData = () => {
  const storesRef = ref(database, "stores");
  onValue(storesRef, (snapshot) => {
    const data = snapshot.val();
    //console.log(data);
    return data;
  });
};

const writeUserData = (name: string, surname: string) => {
  const userRef = ref(database, "user/"+auth.currentUser?.uid);
  const userData = {
    name: name,
    surname: surname,
    likes: ['default'],
    dislikes: ['default'],
    saved: ['default']
  }
  return set(userRef, userData);
};

const readUserData = async () => {
  const userRef = ref(database, "user/"+auth.currentUser?.uid);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    //console.log(data);
    return data;
  });
};

const writeUserLiked = async (store:string) => {
  const userRef = ref(database, "user/"+auth.currentUser?.uid+'/likes');
  get(userRef).then((snapshot) => {
    const data = snapshot.val();
    if (data[0] !== "error")
      data.push(store)
      return update(userRef, data);
  });
};

const writeUserDisiked = async (store:string) => {
  const userRef = ref(database, "user/"+auth.currentUser?.uid+'/dislikes');
  get(userRef).then((snapshot) => {
    const data = snapshot.val();
    data.push(store)
    return update(userRef, data);
  });
};

const writeUserSaved = async (store:string) => {
  const userRef = ref(database, "user/"+auth.currentUser?.uid+'/saved');
  get(userRef).then((snapshot) => {
    const data = snapshot.val();
    if (data[0] !== "error")
      data.push(store)
      return update(userRef, data);
  });
};

export { writeStoreData, readStoresData, writeUserData, readUserData, writeUserLiked, writeUserDisiked, writeUserSaved };