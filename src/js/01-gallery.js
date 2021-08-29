import { galleryItems } from './gallery-items.js';
// Change code below this line

const qs = (selector) => document.querySelector(selector);
const gallery = qs(".gallery");


function defaultGalery(){
    const arratOfFalleryItems = galleryItems.map((ele) => {
        const {preview, original, description} =  ele
        const galleryItem = `  
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
    gallery.innerHTML = arratOfFalleryItems.join('');
} 


defaultGalery()



const  galleryLink = qs(".gallery__link")
galleryLink.addEventListener("click",(e)=>{
    e.preventDefault()
    
})
console.log(galleryLink)
