export const scrollTo = selector => {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    const targetAnchor = document.querySelector(selector);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    const headerHeight = parseInt(window.getComputedStyle(document.querySelector('header')).height);
    window.scrollBy({ top: originalTop - headerHeight, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', selector);
            clearInterval(checkIfDone);
        }
    }, 100);
};
