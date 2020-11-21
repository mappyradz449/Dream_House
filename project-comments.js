var firebaseConfig = {
    apiKey: "AIzaSyCQWwdWg6HhJnOTlzkPKji6k6K3CWc6p4g",
    authDomain: "comments-2aa82.firebaseapp.com",
    databaseURL: "https://comments-2aa82.firebaseio.com",
    projectId: "comments-2aa82",
    storageBucket: "comments-2aa82.appspot.com",
    messagingSenderId: "21169029479",
    appId: "1:21169029479:web:7366a99d0e7b1d452cefc2",
    measurementId: "G-FPQWBJ1ZYZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
///rootRef is the whole database
const rootRef = firebase.database().ref();
///comments ref is the page count node
const commentsRef = rootRef.child('comments');
document.getElementById("btnsubmit").addEventListener("click", function () {
    var newcomment = document.getElementById('txComment').value;
    var newPostRef = commentsRef.push();
    newPostRef.set({
        name: document.getElementById('tbName').value.trim(),
        email: document.getElementById('tbEmail').value.trim(),
        comment: newcomment.trim(),
        frompage: location.pathname,
        when: firebase.database.ServerValue.TIMESTAMP
    });
    
});

function showpastcomments() {
    var showat = document.getElementById('pastcomments');
    var commentsRef = firebase.database().ref('comments/');
    commentsRef.once('value', function (snapshot) {
        snapshot.forEach(function (itemSnapshot) {
            var itemData = itemSnapshot.val();
            var comment = itemData.comment;
            var name = itemData.name;
            var when = new Date(itemData.when).toLocaleDateString("en-us");
            showat.innerHTML += "<li>" + comment + "<span>--" + name + "(" + when + ")</span></li>";
        })
    })

}
showpastcomments()
