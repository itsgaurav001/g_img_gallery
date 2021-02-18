"use strict";

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

window.debounce = debounce;

function addListenerMulti(el, s, fn) {
    s.split(' ').forEach(e => el.addEventListener(e, fn, false));
}
window.addListenerMulti = addListenerMulti;

class gFlexGalleryCustom {
    constructor(id) {
        this.id = id;
        this.initiateGallery = function() {
            let $el = document.getElementById(id);
            var elements = $el.querySelectorAll('.customGalleryItem');
            $el.classList.add('inititatedGallery');
            elements.forEach(function(elem) {
                var $this = elem;
                $this.classList.add('inititatedGalleryItem');
                let poll = setInterval(function() {
                    let imgEle = $this.querySelector('img[data-targetimg]');
                    if (!!imgEle && imgEle.complete) {
                        let minHeight = document.body.getAttribute('data-mhnew');
                        let w = imgEle.naturalWidth;
                        let h = imgEle.naturalHeight;
                        if (w) {
                            clearInterval(poll);
                            $this.style.width = `minHeight * ${(w / h)}`;
                            $this.style.webkitFlex = `${(w / h)} 1 auto`;
                            $this.style.msFlex = `${(w / h)} 1 auto`;
                            $this.style.flex = `${(w / h)} 1 auto`;
                            $this.style.opacity = "1";
                            $this.style.visibility = "visible";
                        }
                    }
                }, 10);
            });
        }()
    }
}

export default gFlexGalleryCustom;