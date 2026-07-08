(function ($) {
    'use strict';

    // Respect reduced-motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    gsap.utils.toArray('.tm-gsap-animate-left').forEach((el, index) => {
        let tlcta = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        tlcta
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 1,  x: "-=80"}, {opacity: 1, x: 0, duration: 0.8, immediateRender: false})
    });
    gsap.utils.toArray('.tm-gsap-animate-right').forEach((el, index) => {
        let tlcta = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        tlcta
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 1,  x: "+=80"}, {opacity: 1, x: 0, duration: 0.8, immediateRender: false})
    });
    gsap.utils.toArray('.tm-gsap-animate-top').forEach((el, index) => {
        let tlcta = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        tlcta
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 1,  y: "+=80"}, {opacity: 1, y: 0, duration: 0.8, immediateRender: false})
    });
    gsap.utils.toArray('.tm-gsap-animate-bottom').forEach((el, index) => {
        let tlcta = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        tlcta
        .set(el, {transformOrigin: 'center center'})
        .from(el, { opacity: 1,  y: "-=80"}, {opacity: 1, y: 0, duration: 0.8, immediateRender: false})
    });

    gsap.utils.toArray('.tm-gsap-animate-circle').forEach((el, index) => {
        let arspin = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "top 0%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        arspin
        .set(el, {transformOrigin: 'center center'})
        .fromTo(el, { rotate: 0}, { rotate: 180, duration: 1.5, immediateRender: false})
    });


    gsap.utils.toArray(".tm-gsap-img-parallax").forEach(function(container) {
      let image = container.querySelector("img");

      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: container,
              scrub: .5,
          },
      });
      tl.from(image, {
          yPercent: -20,
          ease: "none",
      }).to(image, {
          yPercent: 20,
          ease: "none",
      });
    });

})(jQuery);
