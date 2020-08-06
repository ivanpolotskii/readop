window.onload = function () {

	let scr = $(".scroll");
	let switc = document.querySelector('.tgSwitch');
	let slider = document.querySelector('.slider');
	let scroll = document.querySelector('.scroll');
	let previous = document.querySelector('.previous');
	let next = document.querySelector('.next');
	let manga = document.querySelector('.manga');
	let chapter = document.querySelector('.main h1');
	let main = document.querySelector('.main');

	if(localStorage.getItem('light')===null){
		localStorage.setItem('light',true);
	}else if(localStorage.getItem('light')==='true'){
		switc.classList.add('active');
		slider.classList.add('active');
		document.body.classList.add('active');
		main.classList.add('active')
	}
	switc.addEventListener('click', function () {
		switc.classList.toggle('active');
		slider.classList.toggle('active');
		document.body.classList.toggle('active');
		main.classList.toggle('active')
		console.log(localStorage.getItem('light'))
		if(localStorage.getItem('light') == 'true'){
			localStorage.setItem('light', false)
		}else {
			localStorage.setItem('light', true);
		}
	})

	scr.mousedown(function () {
		var startX = this.scrollLeft + event.pageX;
		var startY = this.scrollTop + event.pageY;
		scroll.style.cursor = 'move';
		scr.mousemove(function () {
			this.scrollLeft = startX - event.pageX;
			this.scrollTop = startY - event.pageY;
			return false;
		});
	});
	$(window).mouseup(function () {
		scr.off("mousemove");
		scroll.style.cursor = 'default';
	});
	let promVal;
	// debugger
	function updateChapter(ch) {
		manga.innerHTML = '';
		localStorage.setItem('ch', ch);
		chapter.innerHTML = `One piece chapter ${localStorage.getItem('ch')}`
		ch = '0'.repeat(4 - (ch + '').length) + ch;
		for (let i = 0; i < 100; i++) {
			promVal = '0'.repeat(3 - (i + '').length) + i;
			manga.insertAdjacentHTML('beforeend', `<img src="./img/${ch}-${promVal}.png" alt="" class="imag" onerror="this.style.display = 'none'">`);
		}
	}
	let ch;


	if (localStorage.getItem('ch') == null) {
		ch = 1;
		localStorage.setItem('ch', 1);
	} else {
		ch = +localStorage.getItem('ch');
	}


	chapter.innerHTML = `One piece chapter ${localStorage.getItem('ch')}`
	next.innerHTML = `next ${+localStorage.getItem('ch') + 1} chapter`
	previous.innerHTML = `previous ${+localStorage.getItem('ch') - 1} chapter`

	next.addEventListener('click', function (e) {
		ch = +localStorage.getItem('ch') + 1;
		next.innerHTML = `next ${ch+1} chapter`
		previous.innerHTML = `previous ${ch - 1} chapter`
		updateChapter(ch);
	})
	previous.addEventListener('click', function (e) {
		if(ch>1){
			ch = +localStorage.getItem('ch') - 1;
			previous.innerHTML = `previous ${ch - 1} chapter`
			next.innerHTML = `next ${ch + 1} chapter`
			updateChapter(ch);
		}

	})
	updateChapter(ch)





}