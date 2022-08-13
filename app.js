// get open modal button
const modalBtn = document.getElementById('modalBtn');
//get modal element
const modal = document.getElementById('modal');
//get close button
const closeBtn = document.getElementById('closeBtn');

//Listen for open click
modalBtn.addEventListener("click", () => {
   modal.style.display = "block";
});

//Listen for close click
closeBtn.addEventListener("click", () => {
   modal.style.display = "none";
});


//Listen for outside click
window.addEventListener("click", (e) => {
   if(e.target == modal) {
      modal.style.display = "none";
   }
});