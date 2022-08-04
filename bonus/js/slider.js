// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]

//generare murkup da js
const slidesWrapper = document.querySelector('.slides-wrapper')
let currentIndex = 0;
const slideActiveArray = [];


slides.forEach((element, i) => {
	const title = document.createElement('h3');
	title.append(element.title);
	title.className = 'slide__title';

	const description = document.createElement('p');
	description.append(element.description);
	description.className = 'slide__description';

	const slideContent = document.createElement('div');
	slideContent.append(title, description);
	slideContent.className = 'slide__content';

	const img = document.createElement('img');
	img.src = element.url

	const li = document.createElement('li');
	li.append(img, slideContent);
	li.classList.add('slide');
	if(i === currentIndex)
		li.classList.add('active');

	slidesWrapper.append(li);

	slideActiveArray.push(li);
});

const arrowNext = document.querySelector('.arrow-next')
arrowNext.addEventListener('click', goNext)

const arrowPrev = document.querySelector('.arrow-prev')
arrowPrev.addEventListener('click', goPrev)

// autoplay, ogni 3 secoindi cambia slide
setInterval(goNext, 3000)


//FUNCTIONS
function goNext() {
	let slideAttiva = slideActiveArray[currentIndex]
	slideAttiva.classList.remove('active');
		
	if(currentIndex < slideActiveArray.length-1){
		currentIndex++;
		let slideSuccessiva = slideActiveArray[currentIndex];
		slideSuccessiva.classList.add('active')
	} else {
		currentIndex = 0;
		slideActiveArray[currentIndex].classList.add('active')
	}
}


function goPrev() {
	let slideAttiva = slideActiveArray[currentIndex]
	slideAttiva.classList.remove('active');
		
	if(currentIndex > 0){
		currentIndex--;
		let slidePrecedente = slideActiveArray[currentIndex];
		slidePrecedente.classList.add('active')
	} else {
		currentIndex = slideActiveArray.length-1;
		slideActiveArray[currentIndex].classList.add('active')
	}
}
