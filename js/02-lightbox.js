import { galleryItems } from "./gallery-items.js"
import { createGalery } from "./gallery-create.js"

const qs = (selector) => document.querySelector(selector)
const gallery = qs(".gallery")

const query = ({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
}

function defaultGalery() {
  gallery.innerHTML = createGalery(galleryItems, query)
  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  })
}

defaultGalery()


// const createGalery = (galleryItems) => {
//   const galleryArray = galleryItems.map((ele) => {
//     const { preview, original, description } = ele
//     return query({ preview, original, description })
//   })
//   return galleryArray.join("")
// }

// createGalery(galleryItems, query)
