'use strict'

function debounce(func, wait, immediate) {
  var timeout
  return function () {
    var context = this,
      args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

window.debounce = debounce

function addListenerMulti(el, s, fn) {
  s.split(' ').forEach((e) => el.addEventListener(e, fn, false))
}
window.addListenerMulti = addListenerMulti

class GFlexGalleryCustom {
  constructor(id) {
    this.id = id
    //this.ratio = ratio;
    document
      .querySelector('body')
      .setAttribute('data-mhnew', 0.25 * window.innerHeight)
    this.initiateGallery = (function () {
      let $el = document.getElementById(id)
      let elements = $el.querySelectorAll('.customGalleryItem')
      $el.classList.add('inititatedGallery')
      elements.forEach(function (elem) {
        let $this = elem
        $this.classList.add('inititatedGalleryItem')
        let poll = setInterval(function () {
          let imgEle = $this.querySelector('img[data-targetimg]')
          if (!!imgEle && imgEle.complete) {
            let minHeight = document
              .querySelector('body')
              .getAttribute('data-mhnew')
            let w = imgEle.naturalWidth
            let h = imgEle.naturalHeight
            let computedWidth = minHeight * (w / h)
            if (w) {
              clearInterval(poll)
              $this.setAttribute(
                'style',
                `width: ${computedWidth} px; -webkit-flex: ${
                  w / h
                } 1 auto; flex: ${w / h} 1 auto; -ms-flex: ${
                  w / h
                } 1 auto; opacity: 1; visibility: visible;`
              )
            }
          }
        }, 10)
      })
    })()
  }
}

export default GFlexGalleryCustom
