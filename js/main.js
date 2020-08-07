let chapterNumber = document.querySelector('.chapter-number');
let continues = document.querySelector('.continue');
if(localStorage.getItem('ch')){
	chapterNumber.textContent = `One Piece Chapter ${localStorage.getItem('ch')}`;
}else{
	continues.style.display = 'none';
}