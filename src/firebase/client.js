import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB6eVfzBuV9_x3PVDYif7PlXLlcKRIU73E",
    authDomain: "los15deyose.firebaseapp.com",
    projectId: "los15deyose",
    storageBucket: "los15deyose.appspot.com",
    messagingSenderId: "647621713235",
    appId: "1:647621713235:web:ba17a44a35f10279ac95a6",
    storageBucket: "gs://los15deyose.appspot.com"
  };

  !firebase.apps.length && firebase.initializeApp(firebaseConfig)

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  // Create a storage reference from our storage service
var storageRef = storage.ref();

export default storage


