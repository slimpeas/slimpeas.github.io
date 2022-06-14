const animation1 = document.getElementById('scroll1');
const animation2 = document.getElementById('scroll2');
const animation3 = document.getElementById('scroll3');
const animation4 = document.getElementById('scroll4');
const animation5 = document.getElementById('scroll5');

//----------------------------------------------Déclanchement skill avec scroll-------------------------------------------------------

window.addEventListener('scroll',() => {
    if(window.scrollY > 450) {
        animation1.classList.add('animation', 'learning');
        animation2.classList.add('animation', 'basic');
        animation3.classList.add('animation', 'test');
        animation4.classList.add('animation', 'advanced');
        animation5.classList.add('animation', 'advance');
    }else{
        animation1.classList.remove('animation', 'learning');
        animation2.classList.remove('animation', 'basic');
        animation3.classList.remove('animation', 'test');
        animation4.classList.remove('animation', 'advanced');
        animation5.classList.remove('animation', 'advance');
    }
})

//----------------------------------------------Retour en haut de page-------------------------------------------------------

jQuery(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) { 
                $('#scrollUp').css('right','10px');
            } else { 
                $('#scrollUp').removeAttr( 'style' );
            }
        });
    });
});

//----------------------------------------------texte dynamic page d'accueil-------------------------------------------------------
const txtAnim = document.getElementById('textdynamic');
console.log(txtAnim);

new Typewriter(txtAnim, {
    deleteSpeed: 40
})
.changeDelay(100)
.typeString('Développeur ')
.pauseFor(400)
.typeString('<span style="color: #ed7d2d;"><strong>HTML</strong></span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #06a3f8;"><strong>CSS</strong></span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #f2d603;"><strong>Javascript</strong></span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #9f38c2;"><strong>PhP</strong></span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<strong>Front-End</strong> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<strong>Back-End</strong> !')
.pauseFor(1000)
.deleteChars(10)
.typeString('<strong>Full-Stack!</strong>')
.start()