import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "~/config/firebase";

export const addUser = async (name, email, phone, password) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
    console.log("User added : ", docRef.id);
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getUserLogin = async () => {
  try {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    console.log("current user api: ", auth.currentUser);
    return docSnap.data;
  } catch (error) {
    return error;
  }
};
