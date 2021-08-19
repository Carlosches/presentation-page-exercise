
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var p = document.getElementById("modal-text");
var modalTitle = document.getElementById("modal-title");

span.onclick = function closeModal() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
function showModal(from){
    modal.style.display = "block";
    if(from=="english"){
      modalTitle.innerHTML="information about english skills";
      p.innerHTML = "Aenean quis varius nisl. Sed ut eros lorem. Phasellus quis placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
    }else if(from=="git"){
      modalTitle.innerHTML="information about git skills";
      p.innerHTML = "Aenean quis varius nisl. Sed ut eros lorem. Phasellus quis placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
    }else if(from=="java"){
      modalTitle.innerHTML="information about java skills";
      p.innerHTML = "Aenean quis varius nisl. Sed ut eros lorem. Phasellus quis placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
    }else if(from=="cpp"){
      modalTitle.innerHTML="information about C++ skills";
      p.innerHTML = "Aenean quis varius nisl. Sed ut eros lorem. Phasellus quis placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
    }else if(from=="html"){
      modalTitle.innerHTML="information about HTML, CSS and javascript skills";
      p.innerHTML = "Aenean quis varius nisl. Sed ut eros lorem. Phasellus quis placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
    }else {
      modalTitle.innerHTML="information about phyton skills";
      p.innerHTML = "Aenean quis varius nisl. Sed ut eros lorem. Phasellus quis placerat sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
    }
}
/* some parts was taken from https://www.w3schools.com/howto/howto_css_modals.asp"*/
