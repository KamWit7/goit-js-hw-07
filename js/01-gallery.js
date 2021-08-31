import { galleryItems } from "./gallery-items.js"
import { createGalery } from "./gallery-create.js"

const qs = (selector) => document.querySelector(selector)
const gallery = qs(".gallery")

const setPhoto = (photo, e) => (e.target.src = photo)
const keyClose = (e, instance) => {
  if ("Escape" === e.key) {
    instance.close()
  }
}

function eveDelegationLightBox() {
  const createBox = (event) => {
    event.preventDefault()

    let smallPhoto = event.target.src
    let bigPhoto = event.target.dataset.source

    basicLightbox
      .create(`<img width="1400" height="900" src="${bigPhoto}">`, {
        onClose: (instance) => {
          setPhoto(smallPhoto, event)
          gallery.removeEventListener("keydown", (e) => keyClose(e, instance))
          return true
        },
        onShow: (instance) => {
          setPhoto(bigPhoto, event)
          gallery.addEventListener("keydown", (e) => keyClose(e, instance))
          return true
        },
      })
      .show()
  }
  gallery.addEventListener("click", createBox)
}
const query = ({ preview, original, description }) => {
  return  `  
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>`
}

function defaultGalery() {
  gallery.innerHTML = createGalery(galleryItems, query)
  eveDelegationLightBox()
  // lightBox()
}

defaultGalery()

// Deomo version
// const qsa = (selector) => document.querySelectorAll(selector)
// function lightBox() {
//   let galleryLinks = qsa(".gallery__link")

//   galleryLinks.forEach((ele) => {
//     ele.addEventListener("click", (e) => {
//       e.preventDefault()

//       let bigPhoto = ele.href
//       let smallPhoto = ele.firstElementChild.src
//       ele.firstElementChild.src = bigPhoto

//       basicLightbox
//         .create(`<img width="1400" height="900" src="${bigPhoto}">`, {
//           onClose: () => {
//             ele.firstElementChild.src = smallPhoto
//             return true
//           },
//         })
//         .show()
//     })
//   })
// }
