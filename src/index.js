function myMenuFunction(){
	let menuBtn = document.getElementById("myNavMenu");
	
	if (menuBtn.className ==="nav-menu"){
		menuBtn.className += " responsive"
	}
	
	else{
		menuBtn.className = "nav-menu";
	}
}

window.onscroll = function() {headerShadow()};

function headerShadow() {
	const navHeader = document.getElementById("header");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
		navHeader.style.height = "70px";
		navHeader.style.lineHeight = "70px";
	}
	
	else {
		navHeader.style.boxShadow = "none";
		navHeader.style.height = "90px";
		navHeader.style.lineHeight = "90px";
	}
}

const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2000,
	reset: true
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name', {delay: 100})
sr.reveal('.featured-text-info', {delay: 200})
sr.reveal('.featured-text-btn', {delay: 200})
sr.reveal('.social-icons', {delay: 200})
sr.reveal('.featured-image', {delay: 300})

sr.reveal('.project-box',{interval: 200})

sr.reveal('top-header',{})

const srLeft = ScrollReveal({
	origin: 'left',
	distance: '80px',
	duration: 2000,
	reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
	origin: 'right',
	distance: '80px',
	duration: 2000,
	reset: true
})

srRight.reveal('.skills-box', {delay: 100})
srRight.reveal('.form-control', {delay: 100})

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
	const scrollY = window.scrollY;
	
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
		sectionTop = current.offsetTop - 50,
		sectionId = current.getAttribute('id')
		
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
		}
		
		else {
			document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActive)

function Ticker( elem ) {
	elem.lettering();
	this.done = false;
	this.cycleCount = 5;
	this.cycleCurrent = 0;
	this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;\':"<>?,./`~'.split('');
	this.charsCount = this.chars.length;
	this.letters = elem.find( 'span' );
	this.letterCount = this.letters.length;
	this.letterCurrent = 0;

	this.letters.each( function() {
		var $this = $( this );
		$this.attr( 'data-orig', $this.text() );
		$this.text( '-' );
	});
}

Ticker.prototype.getChar = function() {
	return this.chars[ Math.floor( Math.random() * this.charsCount ) ];
};

Ticker.prototype.reset = function() {
	this.done = false;
	this.cycleCurrent = 0;
	this.letterCurrent = 0;
	this.letters.each( function() {
		var $this = $( this );
		$this.text( $this.attr( 'data-orig' ) );
		$this.removeClass( 'done' );
	});
	this.loop();
};

Ticker.prototype.loop = function() {
	var self = this;

	this.letters.each( function( index, elem ) {
		var $elem = $( elem );
		if( index >= self.letterCurrent ) {
			if( $elem.text() !== ' ' ) {
				$elem.text( self.getChar() );
				$elem.css( 'opacity', Math.random() );
			}
		}
	});

	if( this.cycleCurrent < this.cycleCount ) {
		this.cycleCurrent++;
	} else if( this.letterCurrent < this.letterCount ) {
		var currLetter = this.letters.eq( this.letterCurrent );
		this.cycleCurrent = 0;
		currLetter.text( currLetter.attr( 'data-orig' ) ).css( 'opacity', 1 ).addClass( 'done' );
		this.letterCurrent++;
	} else {
		this.done = true;
	}

	if( !this.done ) {
		requestAnimationFrame( function() {
			self.loop();
		});
	} else {
		setTimeout( function() {
			self.reset();
		}, 750 );
	}
};

$words = $( '.word' );

$words.each( function() {
	var $this = $( this ),
		ticker = new Ticker( $this ).reset();
	$this.data( 'ticker', ticker  );
});