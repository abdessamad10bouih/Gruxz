gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {

    function animations(id, xAnimation) {
        gsap.to(id, {
            scrollTrigger: {
                trigger: id,
                start: 'top center',
                end: 'bottom center',
                scrub: true
            },
            x: xAnimation,
            ease: 'power2.inOut',
            duration: 4
        });
    }

    animations('.stream1', -1900)
    animations('.stream2', 1900)
    let headerText = document.getElementById('header-txt');
    let txt = headerText.innerHTML;
    headerText.innerHTML = '';

    txt.split('').forEach((char, index) => {
        let span = document.createElement('span');
        span.classList.add('letter');
        if (char === ' ') {
            span.innerHTML = '&nbsp;'; 
        } else {
            span.innerText = char;
        }
        headerText.appendChild(span)
    })
    gsap.to('.letter', {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.2,
        ease: 'power2.out'
    });


    let play = document.getElementById('play');
    let closing = document.querySelector('.x');
    play.addEventListener('click', () =>{
        let video = document.querySelector('.ytvideo');
        video.style.display = "block";
        video.style.transform = 'scale(1)'
    })
    closing.addEventListener('click', () =>{
        let video = document.querySelector('.ytvideo');
        video.style.display = "none";
    })

    let icons = document.querySelectorAll('#icons');

    icons.forEach((icon) => {
        gsap.to(icon, {
            scrollTrigger: {
                trigger: icon,
                start: 'top center',  
                end: 'bottom center', 
            },
            x: -0,  
            opacity: 1,
            duration: 1, 
            ease: 'power2.inOut'
        });
        function hovering(){
            icon.style.transform = "scale(1.1)"
        }    
    });

})