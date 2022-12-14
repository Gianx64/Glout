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

const writeUserData = async () => {
  const userRef = ref(database, "user/"+auth.currentUser?.uid);
  const userData = {
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
    console.log(data);
    return data;
  });
  return {
    likes: ['error'],
    dislikes: ['error'],
    saved: ['error']
  }
};

const writeUserLiked = async (store:string) => {
  const userRef = ref(database, "user/"+auth.currentUser?.uid);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data.likes[0] !== "error")
      data.likes.push(store)
      return update(userRef, data);
  });
};

const writeUserDisiked = async (store:string) => {
  const userRef = ref(database, "user/"+auth.currentUser?.uid);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data.dislikes[0] !== "error")
      data.dislikes.push(store)
      return update(userRef, data);
  });
};

const writeUserSaved = async (store:string) => {
  const userRef = ref(database, "user/"+auth.currentUser?.uid);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data.saved[0] !== "error")
      data.saved.push(store)
      return update(userRef, data);
  });
};

export { readDataBase, writeStoreData, readStoresData, writeUserData, readUserData, writeUserLiked, writeUserDisiked, writeUserSaved };