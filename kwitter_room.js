var firebaseConfig = {
    apiKey: "AIzaSyBHduHnN7ZmSkKRNMuF75kRajlLG1mXFOc",
    authDomain: "eeeee-d6a08.firebaseapp.com",
    databaseURL: "https://eeeee-d6a08-default-rtdb.firebaseio.com",
    projectId: "eeeee-d6a08",
    storageBucket: "eeeee-d6a08.appspot.com",
    messagingSenderId: "486756527416",
    appId: "1:486756527416:web:c650947543d3d36c68a5cd",
    measurementId: "G-DFPVP1MWH1"
  }
  firebase.initializeApp(firebaseConfig);


function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_room.html";
}
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML
    Room_names=childKey;
  console.log("Room Name -"+Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
});}
getData();
  function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location="kwitter_page.html";
  }