function Carousel(setting) {

	/* Scope privates methods and properties */
	let privates = {};

	/* Privates properties */
	privates.setting = setting;

	privates.sel = {
		"main": document.querySelector(privates.setting.main),
		"wrap": document.querySelector(privates.setting.wrap),
		"children": document.querySelector(privates.setting.wrap).children,
		"prev": document.querySelector(privates.setting.prev),
		"next": document.querySelector(privates.setting.next)
	};

	privates.opt = {
		"position": 0,
		"max_position": document.querySelector(privates.setting.wrap).children.length
	};

	// Control
	const prev1 = document.querySelector('#b-carousel__btn-prev-1');
	const next1 = document.querySelector('#b-carousel__btn-next-1');
	const prev2 = document.querySelector('#b-carousel__btn-prev-2');
	const next2 = document.querySelector('#b-carousel__btn-next-2');

	// prev1
	if (privates.sel.prev !== null) {
		privates.sel.prev.addEventListener('click', () => {
			if (privates.sel.prev === prev1) {
				this.prev_slide();
				prev1?.removeAttribute('enaibled');
				prev1?.setAttribute('disabled', 'disabled');
				next1?.removeAttribute('disabled');
				next1?.setAttribute('enaibled', 'enaibled');
			}
		});
	}
	// next1
	if (privates.sel.next !== null) {
		privates.sel.next.addEventListener('click', () => {
			if (privates.sel.next === next1) {
				this.next_slide();
				next1?.removeAttribute('enaibled');
				next1?.setAttribute('disabled', 'disabled');
				prev1?.removeAttribute('disabled');
				prev1?.setAttribute('enaibled', 'enaibled');
			}
		});
	}
	// prev2
	if (privates.sel.prev !== null) {
		privates.sel.prev.addEventListener('click', () => {
			if (privates.sel.prev === prev2) {
				this.prev_slide();
				prev2?.removeAttribute('enaibled');
				prev2?.setAttribute('disabled', 'disabled');
				next2?.removeAttribute('disabled');
				next2?.setAttribute('enaibled', 'enaibled');
			}
		});
	}
	// next2
	if (privates.sel.next !== null) {
		privates.sel.next.addEventListener('click', () => {
			if (privates.sel.next === next2) {
				this.next_slide();
				next2?.removeAttribute('enaibled');
				next2?.setAttribute('disabled', 'disabled');
				prev2?.removeAttribute('disabled');
				prev2?.setAttribute('enaibled', 'enaibled');
			}
		});
	}


	/* Public methods */
	// Prev slide
	this.prev_slide = () => {
		--privates.opt.position;

		if (privates.opt.position < 0) {
			privates.sel.wrap.classList.add('s-notransition');
			privates.opt.position = privates.opt.max_position - 1;
		}

		privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
	};


	// Next slide
	this.next_slide = () => {
		++privates.opt.position;

		if (privates.opt.position >= privates.opt.max_position) {
			privates.opt.position = 0;
		}

		privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
	};

}

new Carousel({
	"main": ".js-carousel-1",
	"wrap": ".js-carousel__wrap-1",
	"prev": ".js-carousel__prev-1",
	"next": ".js-carousel__next-1"
});

new Carousel({
	"main": ".js-carousel-2",
	"wrap": ".js-carousel__wrap-2",
	"prev": ".js-carousel__prev-2",
	"next": ".js-carousel__next-2"
});



