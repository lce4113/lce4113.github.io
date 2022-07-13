import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, deleteDoc, doc, getDocs, getFirestore, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

class Database {
  constructor() {
    const app = initializeApp({
      apiKey: "AIzaSyAEIoQjWzZ7otW0kO3Wuh46cNJwGtO1yCk",
      authDomain: "lce4113-github-io-ba344.firebaseapp.com",
      projectId: "lce4113-github-io-ba344",
      storageBucket: "lce4113-github-io-ba344.appspot.com",
      messagingSenderId: "298372961177",
      appId: "1:298372961177:web:824ff8a951a40819983908",
      measurementId: "G-S12Q3YLG86"
    });
    this.db = getFirestore(app);
    getAnalytics();
  }

  async getData(section) {
    console.log("reading");
    const docSnap = await getDocs(collection(this.db, section))
    return docSnap.docs.map(x => x.data());
  }
  async setData(section, data) {
    await setDoc(doc(this.db, section, data.title), data);
  }
  async deleteData(section, title) {
    try { await deleteDoc(doc(this.db, section, title)); }
    catch (e) { console.log(e); }
  }

  async click(section, title) {
    try { await updateDoc(doc(this.db, section, title), { clicks: increment(1), lastClick: serverTimestamp() }); }
    catch (e) { console.log(e); }
  }
}

export const database = new Database();