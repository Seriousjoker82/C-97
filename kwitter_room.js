
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCcjA8MRPcPGdPcW14R8AnH9zSfLzdTbV4",
      authDomain: "kwitter-dc177.firebaseapp.com",
      databaseURL: "https://kwitter-dc177-default-rtdb.firebaseio.com",
      projectId: "kwitter-dc177",
      storageBucket: "kwitter-dc177.appspot.com",
      messagingSenderId: "485663234881",
      appId: "1:485663234881:web:623936d53de02c51b5dfc0",
      measurementId: "G-3XFSJ86F63"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    username = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

    function addRoom(){
          Room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(Room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name", Room_name);

            window.location = "kwitter_page.html"
    }



    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names + "</div><hr>"
      document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}
