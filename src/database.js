import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";

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

  async getData(coll) {
    console.log("reading");
    const docSnap = await getDocs(collection(this.db, coll))
    return docSnap.docs.map(x => x.data());
  }
  async setData(coll, project) {
    await setDoc(doc(this.db, coll, project.title), project);
  }

  async getProjects() { return await this.getData("Projects"); }
  async setProject(project) { await this.setData("Projects", project); }
  async getAccomp() { return await this.getData("Accomplishments"); }
  async setAccomp(accomp) { await this.setData("Accomplishments", accomp); }
}

export const database = new Database();