import { galleryItems } from "./gallery-items.js"
// Change code below this line

const qs = (selector) => document.querySelector(selector)
const qsa = (selector) => document.querySelectorAll(selector)

const gallery = qs(".gallery")

const createLightBox = (e) => { }

function lightBox() {
  let galleryLinks = qsa(".gallery__link")

  galleryLinks.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault()

      let bigPhoto = ele.href
      let smallPhoto = ele.firstElementChild.src
      ele.firstElementChild.src = bigPhoto

      basicLightbox
        .create(`<img width="1400" height="900" src="${bigPhoto}">`, {
          onClose: () => {
            ele.firstElementChild.src = smallPhoto
            return true
          },
        })
        .show()
    })
  })
}

const createGalery = () => {
  return galleryItems.map((ele) => {
    const { preview, original, description } = ele
    let galleryItem = `  
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>`
    return galleryItem
  })
}

function defaultGalery() {
  gallery.innerHTML = createGalery().join("")
  lightBox()
}

defaultGalery()

// działą to w jedną stronę
