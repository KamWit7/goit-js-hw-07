import { galleryItems } from "./gallery-items.js"
// Change code below this line

const createGalery = () => {
  const galleryArray = galleryItems.map((ele) => {
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
  return galleryArray.join("")
}

function defaultGalery() {
  gallery.innerHTML = createGalery()
  //   eveDelegationLightBox()
  // lightBox()
}
console.log(galleryItems)
