function opToggleMenu(button) {
    const header = button.closest('.op-header');

    if (!header) return;

    const isOpen = header.classList.toggle('is-menu-open');

    button.setAttribute(
        'aria-expanded',
        isOpen ? 'true' : 'false'
    );

    button.setAttribute(
        'aria-label',
        isOpen ? 'Close menu' : 'Open menu'
    );
}


/* =========================================
   SCROLL REVEAL
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.op-service-card').forEach(card => {
        card.classList.add('op-reveal');
    });

    document.querySelectorAll('.op-project-card').forEach(card => {
        card.classList.add('op-reveal');
    });

    /* Section headings reveal */

    document.querySelectorAll(
        '.op-services__title, .op-work__label, .op-work__header'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* About Me reveal */

    document.querySelectorAll(
        '.op-about__label, .op-about__main, .op-about__photo-wrap, .op-about__traits'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* CTA reveal */

    document.querySelectorAll(
        '.op-cta__title, .op-cta__text, .op-cta__button'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Work page — project reveal */

    document.querySelectorAll(
        '.op-work-project__visual, .op-work-project__content'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Work page — Other Projects reveal */

    document.querySelectorAll(
        '.op-other-projects__label, .op-other-projects .op-other-card'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Work page — CTA reveal */

    document.querySelectorAll(
        '.op-work-cta__inner'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* About page — What I Do reveal */

    document.querySelectorAll(
        '.op-about-do .op-section-label, .op-about-do__intro, .op-about-do .op-about-card'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* About page — Skills & Tools reveal */

    document.querySelectorAll(
        '.op-about-skills .op-section-label, .op-about-skills__content'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* About page — Skills illustration reveal */

    document.querySelectorAll(
        '.op-about-skills__visual img'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* About page — Skills & Tools tags reveal */

    document.querySelectorAll(
        '.op-about-skills__tags span'
    ).forEach((tag, index) => {
        tag.classList.add('op-reveal');

        const delay = window.matchMedia('(max-width: 700px)').matches
            ? index * 0.025
            : index * 0.05;

        tag.style.transitionDelay = `${delay}s`;
    });

    /* About page — Design Principles reveal */

    document.querySelectorAll(
        '.op-about-principles .op-section-label, .op-about-principles h2, .op-about-principles .op-principle'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* About page — A Little More About Me reveal */

    document.querySelectorAll(
        '.op-about-more__icon, .op-about-more__content'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* About page — Get in touch button fade */

    document.querySelectorAll(
        '.op-about-more__button'
    ).forEach(button => {
        button.classList.add('op-fade-reveal');
    });

    /* Contact page — Get in Touch reveal */

    document.querySelectorAll(
        '.op-contact-links .op-section-label'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    document.querySelectorAll(
        '.op-contact-links .op-contact-card'
    ).forEach(card => {
        card.classList.add('op-fade-reveal');
    });

    /* Contact page — Bottom left reveal */

    document.querySelectorAll(
        '.op-contact-bottom__drawing img, .op-contact-bottom__cta p'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Contact page — Bottom button reveal */

    document.querySelectorAll(
        '.op-contact-bottom .op-contact-btn'
    ).forEach(button => {
        button.classList.add('op-fade-reveal');
    });

    /* Contact page — Bottom right reveal */

    document.querySelectorAll(
        '.op-contact-bottom__right .op-section-label, ' +
        '.op-contact-bottom__right h2, ' +
        '.op-contact-bottom__right > p, ' +
        '.op-contact-bottom__map img'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* LinkPlanner — Project Meta reveal */

    document.querySelectorAll(
        '.op-case--linkplanner .op-case-meta__item'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* LinkPlanner — Challenge & Approach visual reveal */

    document.querySelectorAll(
        '.op-case--linkplanner .op-case-story__visual'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* LinkPlanner — Challenge & Approach text reveal */

    document.querySelectorAll(
        '.op-case--linkplanner .op-case-story__item'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* LinkPlanner — Benefits cards reveal */

    document.querySelectorAll(
        '.op-case--linkplanner .op-case-benefit'
    ).forEach(card => {
        card.classList.add('op-reveal');
    });

    /* LinkPlanner — Key Screens label & featured image reveal */

    document.querySelectorAll(
        '.op-case--linkplanner .op-case-screens__label-wrap, ' +
        '.op-case--linkplanner .op-case-screen--featured'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* LinkPlanner — Key Screens small images reveal */

    document.querySelectorAll(
        '.op-case--linkplanner .op-case-screens__right .op-case-screen'
    ).forEach(screen => {
        screen.classList.add('op-reveal');
    });

    /* LinkPlanner — The Result reveal */

    document.querySelectorAll(
        '.op-case--linkplanner .op-case-result__content, ' +
        '.op-case--linkplanner .op-case-result__stat'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* =========================================
       HUISLEON — SCROLL REVEAL
       ========================================= */

    /* Intro — Project Meta */

    document.querySelectorAll(
        '.op-case--huisleon .op-case-meta__item'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Challenge & Approach — Visual */

    document.querySelectorAll(
        '.op-case--huisleon .op-case-story__visual'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Challenge & Approach — Text */

    document.querySelectorAll(
        '.op-case--huisleon .op-case-story__item'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Benefits — Cards */

    document.querySelectorAll(
        '.op-case--huisleon .op-case-benefit'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Key Screens — Label */

    document.querySelectorAll(
        '.op-case--huisleon .op-case-screens__label-wrap'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Key Screens — Featured Image */

    document.querySelectorAll(
        '.op-case--huisleon .op-case-screen--featured'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Key Screens — Small Images */

    document.querySelectorAll(
        '.op-case--huisleon .op-case-screens__right .op-case-screen'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* The Result — Content & Stat */

    document.querySelectorAll(
        '.op-case--huisleon .op-case-result__content, ' +
        '.op-case--huisleon .op-case-result__stat'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* =========================================
       TAXAGENT — SCROLL REVEAL
       ========================================= */

    /* Intro — Project Meta */

    document.querySelectorAll(
        '.op-case--taxagent .op-case-meta__item'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Challenge & Approach — Visual */

    document.querySelectorAll(
        '.op-case--taxagent .op-case-story__visual'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Challenge & Approach — Text */

    document.querySelectorAll(
        '.op-case--taxagent .op-case-story__item'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Benefits — Cards */

    document.querySelectorAll(
        '.op-case--taxagent .op-case-benefit'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Key Screens — Label & Featured Image */

    document.querySelectorAll(
        '.op-case--taxagent .op-case-screens__label-wrap, ' +
        '.op-case--taxagent .op-case-screen--featured'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* Key Screens — Small Images */

    document.querySelectorAll(
        '.op-case--taxagent .op-case-screens__right .op-case-screen'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* The Result — Content & Stat */

    document.querySelectorAll(
        '.op-case--taxagent .op-case-result__content, ' +
        '.op-case--taxagent .op-case-result__stat'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* =========================================
       AI CHAT — SCROLL REVEAL
       ========================================= */

    document.querySelectorAll(
        /* Intro — Project Meta */
        '.op-case--ai .op-case-meta__item, ' +

        /* Challenge & Approach */
        '.op-case--ai .op-case-story__visual, ' +
        '.op-case--ai .op-case-story__item, ' +

        /* Benefits */
        '.op-case--ai .op-case-benefit, ' +

        /* Key Screens */
        '.op-case--ai .op-case-screens__label-wrap, ' +
        '.op-case--ai .op-case-screen--featured, ' +
        '.op-case--ai .op-case-screens__right .op-case-screen, ' +

        /* The Result */
        '.op-case--ai .op-case-result__content, ' +
        '.op-case--ai .op-case-result__stat'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });

    /* =========================================
       TIDE — SCROLL REVEAL
       ========================================= */

    document.querySelectorAll(
        /* Intro — Project Meta */
        '.op-case--tide .op-case-meta__item, ' +

        /* Challenge & Approach */
        '.op-case--tide .op-case-story__visual, ' +
        '.op-case--tide .op-case-story__item, ' +

        /* Benefits */
        '.op-case--tide .op-case-benefit, ' +

        /* Key Screens — Label */
        '.op-case--tide .op-case-screens__label-wrap, ' +

        /* Key Screens — Four iPhone Mockups */
        '.op-case--tide .op-case-screens__grid > .op-case-screen, ' +

        /* The Result */
        '.op-case--tide .op-case-result__content, ' +
        '.op-case--tide .op-case-result__stat'
    ).forEach(element => {
        element.classList.add('op-reveal');
    });



    const revealElements = document.querySelectorAll('.op-reveal, .op-fade-reveal');

    if (!revealElements.length) return;

    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
        revealElements.forEach(element => {
            element.classList.add('is-visible');
        });
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});

/* =========================================
   PRELOADER
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.op-preloader');

    if (!preloader) return;

    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    window.setTimeout(() => {
        preloader.classList.add('is-hidden');
    }, reducedMotion ? 0 : 450);
});
