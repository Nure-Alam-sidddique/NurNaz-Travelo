import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const InitilizeAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default InitilizeAuthentication;