///Database
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA8-WSJrGUukhB6OJ_MyAVqkfAoO46DTuQ",
    authDomain: "contactform-4da30.firebaseapp.com",
    databaseURL: "https://contactform-4da30.firebaseio.com",
    projectId: "contactform-4da30",
    storageBucket: "contactform-4da30.appspot.com",
    messagingSenderId: "404163875189",
    appId: "1:404163875189:web:c101f64ad6fd3abb04433c",
    measurementId: "G-MNZ3W1YB7E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var messagesRef = firebase.database().ref('messages');
document.getElementById('contactform').addEventListener('submit',
    submitForm);


function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);

    saveMessage(name, email, subject, message);

    document.querySelector('.alert1').style.display = 'block';

    setTimeout(function () {
        document.querySelector('.alert1').style.display = 'none';
    }, 3000);

    // Clearing form
    document.getElementById('contactform').reset();

    //redirecting to home page

    setTimeout(function () {
        document.location.href = "./contact.html";
    }, 3050);
}

function saveMessage(name, email, subject, message) {
    //create a new reference in "push" mode for writitng to DB
    var newMessageRef = messagesRef.push();
    //use the set function to write values to firebase DB
    newMessageRef.set({
        //notice the brackets 
        //and the data format "field name (in firebase): variable name"
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}
