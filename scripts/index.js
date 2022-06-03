const imgArrayChange = [
	'./image/gallery-grid_pic_1.jpg',
	'./image/gallery-grid_pic_2.jpg',
	'./image/gallery-grid_pic_3.jpg',
	'./image/gallery-grid_pic_4.jpg',
	'./image/gallery-grid_pic_5.jpg',
	'./image/gallery-grid_pic_6.jpg',
	'./image/gallery-grid_pic_7.jpg',
	'./image/gallery-grid_pic_8.jpg',
	'./image/gallery-grid_pic_9.jpg',
]

const imgs = document.querySelectorAll(".gallery-grid__pic");

//Анимация картинок блока gallery

function updateOneRandomImage() {
	var notPresentedImages = [];
	var presentedImages = [];
	imgs.forEach((element) => {
		presentedImages.push(element.getAttribute("src"));
	});
	for (var i = 0; i <= imgArrayChange.length; i++) {
		if (!presentedImages.includes(imgArrayChange[i]))
			notPresentedImages.push(imgArrayChange[i]);
	}
	var imgRnd = Math.floor(Math.random() * imgs.length);
	var img = imgs[imgRnd];
	var srcRnd = Math.floor(Math.random() * (notPresentedImages.length - 1));
	img.classList.remove("visible");
	img.classList.add("hidden");
	setTimeout(() => { img.src = notPresentedImages[srcRnd]; }, 300);
	setTimeout(() => { img.classList.remove("hidden"); }, 300);
	setTimeout(() => { img.classList.add("visible"); }, 300);
};

setInterval(() => {
	updateOneRandomImage();
}, 3000);