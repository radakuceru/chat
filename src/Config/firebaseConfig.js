import firebase from '../../node_modules/firebase/app';
import '../../node_modules/firebase/firestore';
import '../../node_modules/firebase/auth';
var config = {
    apiKey: "AIzaSyBvkwuOEMoWGz96rZdA0pQbO2ylu4DbOMU",
    authDomain: "chat-460a1.firebaseapp.com",
    databaseURL: "https://chat-460a1.firebaseio.com",
    projectId: "chat-460a1",
    storageBucket: "chat-460a1.appspot.com",
    messagingSenderId: "291120358792"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true});
export default firebase;