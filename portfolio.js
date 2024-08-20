function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    const barButton = document.querySelector('.bar_button')
    barButton.style.display = 'none'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
     const barButton = document.querySelector('.bar_button')
    barButton.style.display = 'block'
}
let btn = document.getElementById('btn');
btn.addEventListener("click", function() {
  btn.setAttribute('class', 'submit process');
  btn.innerHTML = 'Processing';
  setTimeout(()=>{
     btn.setAttribute('class', 'submit submitted');
     btn.innerHTML = `
     <span class="tick">&#10004;</span>
     Submitted
     `;
  },5000);
});
