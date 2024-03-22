import {
  collection,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { database, auth } from "./Initialize";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
class service {
  async uploadTeam(lineups) {
    let data = await setDoc(doc(database, "lineups", "123"), {
      teams: lineups,
    });
    return "Lineup set successfull";
  }
  // vip teams
  async uploadVipTeam(teamUrl, vipTeams) {
    let data = await setDoc(doc(database, "vipteams", "123"), {
      url: teamUrl,
      teams: vipTeams,
    });
    return "VIP Team Uploaded";
  }
  // free teams
  async uploadFreeTeams(teamUrl, freeTeams) {
    let data = await setDoc(doc(database, "freeteams", "123"), {
      url: teamUrl,
      teams: freeTeams,
    });
    return "free team Uploaded";
  }

  //get free teams
  async getFreeTeams() {
    const docRef = doc(database, "freeteams", "123");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      toast.info("no such a team");
    }
  }
  // get vip teams
  async getVipTeams() {
    const docRef = doc(database, "vipteams", "123");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      toast.info("no such a team");
    }
  }

  // get doc
  async getlineupTeam() {
    const docRef = doc(database, "lineups", "123");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      toast.info("no such a team");
    }
  }

  //sign up system
  signup({ name, email, password, inviteCode }) {
    let credentail = createUserWithEmailAndPassword(auth, email, password);

    return credentail;
  }
  async users(uid, referCode, { name, email, password, inviteCode }) {
    await setDoc(doc(database, "users", uid), {
      name: name,
      email: email,
      password: password,
      myRaferCode: referCode,
      inviteCode: inviteCode,
      userId: uid,
    });
  }

  //login users data
  login({ email, password }) {
    let loginUser = signInWithEmailAndPassword(auth, email, password);
    return loginUser;
  }
  // log out
  async logout() {
    let logoutData = await signOut(auth);
    return logoutData;
  }

  //get logged in user
  getloggedIn() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.clear();
      }
    });
  }
  //get user info
  async getUserData(id) {
    try {
      const userRef = doc(database, "users", id);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        // console.log(docSnap);
        return docSnap.data();
      } else {
        return "no such an account";
      }
    } catch (error) {}
  }

  //check invite code
  async invitecodeValidation(myReferCode) {
    try {
      let myReffers = [];
      const inviteRef = collection(database, "users");
      const q = query(inviteRef, where("inviteCode", "==", myReferCode));
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        myReffers.push(doc.data().name);
      });
      return myReffers;
    } catch (error) {}
  }
}

let services = new service();

export default services;
