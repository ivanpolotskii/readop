let chapterNumber = document.querySelector('.chapter-number');
let continues = document.querySelector('.continue > h1');
if(localStorage.getItem('ch')){
	chapterNumber.textContent = `One Piece Chapter ${localStorage.getItem('ch')}`;
}else{
	continues.textContent = 'Start Reading';
	chapterNumber.textContent = 'Start with first chapter';
}