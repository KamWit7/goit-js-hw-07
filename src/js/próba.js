document.querySelector('button.image').onclick = () => {

	basicLightbox.create(`
		<img width="1400" height="900" src=" https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">
	`).show()

}