window.onload = function () {

	let scr = $(".scroll");
	let switc = document.querySelector('.tgSwitch');
	let slider = document.querySelector('.slider');
	let scroll = document.querySelector('.scroll');
	let previous = document.querySelectorAll('.previous')[0];
	let previous1 = document.querySelectorAll('.previous')[1];
	let next = document.querySelectorAll('.next')[0];
	let next1 = document.querySelectorAll('.next')[1];
	let manga = document.querySelector('.manga');
	let chapter = document.querySelector('.main h1');
	let main = document.querySelector('.main');

	if (localStorage.getItem('light') === null) {
		localStorage.setItem('light', true);
	} else if (localStorage.getItem('light') === 'true') {
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
		if (localStorage.getItem('light') == 'true') {
			localStorage.setItem('light', false)
		} else {
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
	function checkChapter(ch) {
		if (ch == 1) {
			previous.style.visibility = 'hidden';
		} else {
			ch = '0'.repeat(4 - (ch + '').length) + ch;
			let img = document.createElement('img');
			img.src = `./img/${ch}-003.png`

			previous.style.visibility = 'visible';
			manga.insertAdjacentHTML('beforeend', `<img src="./img/${ch}-${promVal}.png" alt="" class="tocheck" onerror="">`);

		}
	}
	let obj = {
		oen: 'two'
	}

	function updateChapter(ch) {
		manga.innerHTML = '';
		localStorage.setItem('ch', ch);
		chapter.innerHTML = `One piece chapter ${localStorage.getItem('ch')}`
		ch = '0'.repeat(4 - (ch + '').length) + ch;
		for (let i = 1; i < 50; i++) {
			promVal = '0'.repeat(3 - (i + '').length) + i;
			console.log(promVal)
			manga.insertAdjacentHTML('beforeend', `<img src="./img/${ch}-${promVal}.png" alt="" class="imag" onerror="this.style.display='none';">`);
		}
	}
	let ch;


	if (localStorage.getItem('ch') == null) {
		ch = 1;
		localStorage.setItem('ch', 1);
	} else {
		ch = +localStorage.getItem('ch');
	}


	chapter.innerHTML = `One piece chapter ${localStorage.getItem('ch')}`;
	next.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
	next1.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
	previous.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`
	previous1.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`

	checkChapter(ch)

	next.addEventListener('click', function (e) {
		document.location.href = '#top';
		ch = +localStorage.getItem('ch') + 1;
		next.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
		next1.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
		previous.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`
		previous1.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`
		checkChapter(ch)
		updateChapter(ch);
	})
	next1.addEventListener('click', function (e) {
		document.location.href = '#top';
		ch = +localStorage.getItem('ch') + 1;
		next.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
		next1.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
		previous.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`
		previous1.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`
		checkChapter(ch)
		updateChapter(ch);
	})
	previous.addEventListener('click', function (e) {
		document.location.href = '#top';
		
		if (ch > 1) {
			ch = +localStorage.getItem('ch') - 1;
			next.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
			next1.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
			previous.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`
			previous1.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`
			checkChapter(ch)

			updateChapter(ch);
		}

	})
	previous1.addEventListener('click', function (e) {
		document.location.href = '#top';

		if (ch > 1) {
			ch = +localStorage.getItem('ch') - 1;
			next.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
			next1.innerHTML = `${ch+1}   chapter <i class="fa fa-arrow-right" aria-hidden="true"></i>`
			previous.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`
			previous1.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> ${ch - 1} chapter`
			checkChapter(ch)

			updateChapter(ch);
		}

	})
	updateChapter(ch)
	// export default ch;
}