const boldBtn = document.getElementById('bold');
const italicBtn = document.getElementById('italic');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const textarea = document.getElementById('txt');

boldBtn.addEventListener('click', () => {
   document.getElementById("txt").style.fontWeight = "bold";
});

italicBtn.addEventListener('click', () => {
   document.getElementById("txt").style.fontStyle = "italic";
});
uppercase.addEventListener('click', () => {
   document.getElementById("txt").style.textTransform = "uppercase";
});
lowercase.addEventListener('click', () => {
    document.getElementById("txt").style.textTransform = "lowercase";
 });
