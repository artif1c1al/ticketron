const config = {
  apiKey: "AIzaSyCfqiTmV7qx_yRaf56lsQGXxN8jasE9P10",
  authDomain: "lotery-8e772.firebaseapp.com",
  databaseURL: "https://lotery-8e772.firebaseio.com",
  projectId: "lotery-8e772",
  storageBucket: "lotery-8e772.appspot.com",
  messagingSenderId: "1061118758325",
  appId: "1:1061118758325:web:c17236b457a29c4e419dfc",
  measurementId: "G-DLE749X55J"
};
// Initialize Firebase
firebase.initializeApp(config);
var firestore = firebase.firestore();


const docRef = firestore.doc("samples/certificates"); 
const openCaseBtn = document.querySelector("#openCaseBtn");

let fruits = ["Сочи", "Москву", "Париж", "Сибирь", "Гандурас, на фестиваль рыжих котов"];

openCaseBtn.addEventListener("click", function(){
  let index = Math.floor(Math.random() * fruits.length);

  alert( "Вы выиграли билеты " + fruits[index]);

  const textToSave = fruits[index];
  console.log("I am going to save " + textToSave + " to Firestore");
  docRef.set({
    certificate: textToSave
  }).then(function() {
    console.log("Status saved!");
  }).catch(function(error) {
    console.log("Got an error: ", error);
  });
});
