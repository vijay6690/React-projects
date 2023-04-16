import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTVuJLIIpEoHoKpBDOyKIg9jDet9Pg4RA",
  authDomain: "auth-app-38c9c.firebaseapp.com",
  projectId: "auth-app-38c9c",
  storageBucket: "auth-app-38c9c.appspot.com",
  messagingSenderId: "223390915705",
  appId: "1:223390915705:web:efa6bfbbddc005919f88a8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export default app;
