import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

let authed = false;
const auth = getAuth();
auth.onAuthStateChanged(user => {
  const email = localStorage.getItem("email");
  if ((!user || email !== user.email) && email) {
    const password = prompt("Password?");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => authed = true)
      .catch(e => {
        console.log(e.message);
        if (e.message === "Firebase: Error (auth/wrong-password).") alert("Wrong Password");
      });
  }
});

export default authed;