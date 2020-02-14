

<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js"></script>

     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-analytics.js"></script>

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkbBdnf18BalkSduxIJnpyaYlBGrvR93Q",
    authDomain: "nathie-s-page-b9970.firebaseapp.com",
    databaseURL: "https://nathie-s-page-b9970.firebaseio.com",
    projectId: "nathie-s-page-b9970",
    storageBucket: "nathie-s-page-b9970.appspot.com",
    messagingSenderId: "86915707905",
    appId: "1:86915707905:web:b8887cd450c07673d43c00",
    measurementId: "G-1WD492HM3M"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
  firebase.initializeApp(config);

  //Reference messages collection
  var messageRef= firebase.database().ref('messages');

function revealmassage(){
}
//listen for form submit
documet.getElementById('contact form').addEventListener('submin', submitform);

// submit form
function submitform(e){
    e.preventDefault();

    // Get values
    var name= getInputVal('name');
    var surname= getInputVal('surname');
    var email= getInputVal('email');
    var phone= getInputVal('phone');
    var comment= getInputVal('comment');

    //save Massage
    saveMassage( name, surname,email,phone,comment);


}

//Function to get get form values

function getInputVal(id){
    return document. getElementById(id).values;
}

// Save massage to firebase
function saveMassage(name,  surname, email, phone, comment){
 var newMassageRef = messageRef.push();
 newMassageRef.set({
     name: name,
     Surname: surname,
     email: email,
     phone: phone,
     comment: comment
 }

 )
}