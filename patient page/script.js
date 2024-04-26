const profilePhoto=document.querySelector(".profile__photo");
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById("nav__menu");

profilePhoto.addEventListener('click', ()=>{
    navMenu.classList.toggle("hide");
})


document.getElementById('add-table').addEventListener('click', function() {
    var textarea = document.getElementById('note-content');
    var cursorPosition = textarea.selectionStart;
    var table = '| Column 1 | Column 2 |\n|----------|----------|\n|          |          |';
    textarea.value = textarea.value.substring(0, cursorPosition) + table + textarea.value.substring(cursorPosition);
});

document.getElementById('add-date').addEventListener('click', function() {
    var textarea = document.getElementById('note-content');
    var cursorPosition = textarea.selectionStart;
    var date = new Date().toLocaleString();
    textarea.value = textarea.value.substring(0, cursorPosition) + date + textarea.value.substring(cursorPosition);
});

document.getElementById('save-file').addEventListener('click', function() {
    var noteContent = document.getElementById('note-content').value;
    var blob = new Blob([noteContent], { type: 'text/plain' });
    var anchor = document.createElement('a');
    anchor.download = 'note.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
});