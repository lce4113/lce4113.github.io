import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();
auth.onAuthStateChanged(user => {
  const email = localStorage.email;
  if (user && !email) signOut(auth);
  if ((!user || email !== user.email) && email) {
    const password = prompt("Password?");
    signInWithEmailAndPassword(auth, email, password)
      .catch(e => {
        console.log(e.message);
        if (e.message === "Firebase: Error (auth/wrong-password).") alert("Wrong Password");
      });
  }
});