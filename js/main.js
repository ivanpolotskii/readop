let chapterNumber = document.querySelector('.chapter-number');
let continues = document.querySelector('.continue > h1');
if (localStorage.getItem('ch')) {
	chapterNumber.textContent = `One Piece Chapter ${localStorage.getItem('ch')}`;
} else {
	continues.textContent = 'Start Reading';
	chapterNumber.textContent = 'Start with first chapter';
}
// Add chapters
let count = 21;
let chaptersContainer = document.querySelector('.last')
while (count-- > 1) {
	chaptersContainer.insertAdjacentHTML('beforeend', `
		<div class = "chapter-item" id = "${count}" onclick = "localStorage.setItem('ch',this.id+'');document.location.href='./onepiece.html'">
			<div class = "description"> One Piece Chapter ${count}</div>
			<div class = "buttons">
				<a href = "./onepiece.html">READ</a>
			</div>
		</div>
	`)
}