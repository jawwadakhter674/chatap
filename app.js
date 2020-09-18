function startChat(){
    document.getElementById('chatPanel').removeAttribute('style');
    document.getElementById('divstart').setAttribute('style','display:none');
hideChatlist()
}

function showChatlist(){
    document.getElementById('side-1').classList.remove('d-none' , 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');
}
function hideChatlist(){
    document.getElementById('side-1').classList.add('d-none' , 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}

function onKeydown(){
    document.addEventListener('keydown', function(key){
        if(key.which===13){
          sendMessage();
        }
    })
}
function sendMessage(){
    var message = ` <div class="row justify-content-end">

    <div class="col-6 col-sm-7 col-md-7">
        <p class="sent float-right">
      ${document.getElementById('txtmessage').value}
            <span class="time ">1:33 am</span>
        </p>

    </div>
     
    <div class="col-2 col-sm-1 col-md-1">
        <img src="jawwad.jpg" class="chatprofile" alt="">
      

    </div>`;
    document.getElementById('messages').innerHTML +=message;
    document.getElementById('txtmessage').value=''
    document.getElementById('txtmessage').focus();


    document.getElementById('messages').scrollTo(0 ,document.getElementById('messages').clientHeight);
}







function signIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

  function signOut(){
    firebase.auth().signOut();
  }

  function onFirebaseStateChange(){
      firebase.auth().onAuthStateChanged(onStateChanged);
  }
  function onStateChanged(user){
if(user){
    alert(firebase.auth().currentUser.email + '/n'+firebase.auth.currentUser.displayName)
}
  }
  

  onFirebaseStateChange();










  // let  facebook_login =()=>{
//     var provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {
     
//       var token = result.credential.accessToken;
//       var user = result.user;
//       console.log("user==> ",user)
//     }).catch(function(error) {
//       console.log("error===>",error.message)
//     });
  
//   }
