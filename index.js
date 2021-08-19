
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function closeModal() {
    modal.style.display = "none";
}
  
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
function showModal(from){
    console.log(from);
    modal.style.display = "block";
}
