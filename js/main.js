let chapterNumber = document.querySelector('.chapter-number');
let continues = document.querySelector('.continue > h1');
if (localStorage.getItem('ch')) {
	chapterNumber.innerHTML = `One Piece Chapter ${localStorage.getItem('ch')}<br> Page ${localStorage.getItem('page')}`;
} else {
	continues.textContent = 'Start Reading';
	chapterNumber.textContent = 'Start with first chapter';
}
// Add chapters
let count = 201;
let chaptersContainer = document.querySelector('.last__chapters')
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

// Bookmarks
let bookmarks = document.querySelector('.bookmarks');
let marks = JSON.parse(localStorage.getItem('marks'));
function removeBookmark(){

}
if(marks!=[]){
	marks.forEach((el)=>{
		bookmarks.insertAdjacentHTML('beforeend', `
		<div class = "chapter-item" id = "${el}" onclick = "localStorage.setItem('ch',this.id+'');document.location.href='./onepiece.html'">
			<div class = "description"> One Piece Chapter ${el}</div>
			<div class = "buttons">
				<a href = "./onepiece.html">READ</a>
				<a class="remove" href="" onclick="let marks=JSON.parse(localStorage.getItem('marks'));marks.splice(marks.indexOf(${el}),1);localStorage.setItem('marks',JSON.stringify(marks));">REMOVE</a>
			</div>
		</div>
	`)
	})
	
}