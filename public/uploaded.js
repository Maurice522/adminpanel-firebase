

firebase.initializeApp({ add your firebase here });

function upload(){

let ref = firebase.storage().ref('images/community');
let File = document.getElementById("getFile").files[0];
const name = new Date()+'-'+File.name ;
const metadata = {
    contentType:File.type
}
 var output = document.getElementById('txt');
let uploadTask = ref.child(name).put(File,metadata)

uploadTask.then(async(snap) =>{
    var url= await snap.ref.getDownloadURL()
    output.value = url;
    console.log(url);
    alert(url);
    document.getElementById("mySubmit").style.display="block";
})
   
// console.log("uploaded");
// alert("up");
document.getElementById("filling").animate([
    { transform: 'translateX(0)' },             // keyframes
    { transform: 'translateX(269px)',     
}
  ], {
    fill:"forwards",
    duration: 10000,         // timing options
    delay:0,
});
}
