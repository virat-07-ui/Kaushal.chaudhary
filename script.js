console.log("JS Loaded");
// PAGE NAVIGATION
function goToPage(pageId){
console.log("Going to:", pageId);

document.querySelectorAll('.page')
.forEach(page=>{
page.classList.remove('active');
});

document.getElementById(pageId)
.classList.add('active');
}
// FLOATING HEARTS

function createHeart(){

const heart =
document.createElement('div');

heart.innerHTML='❤️';

heart.style.position='fixed';

heart.style.left=
Math.random()*100+'vw';

heart.style.bottom='-50px';

heart.style.fontSize=
(Math.random()*20+15)+'px';

heart.style.pointerEvents='none';

heart.style.zIndex='999';

heart.style.opacity='.8';

heart.style.transition='all 6s linear';

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
`translateY(-120vh)
rotate(${Math.random()*360}deg)`;

heart.style.opacity='0';

},100);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,700);

// PREMIUM PARTICLES

function createParticle(){

const particle =
document.createElement('div');

particle.style.position='fixed';

particle.style.width='4px';
particle.style.height='4px';

particle.style.borderRadius='50%';

particle.style.background='white';

particle.style.opacity='.5';

particle.style.left=
Math.random()*100+'vw';

particle.style.top=
Math.random()*100+'vh';

particle.style.pointerEvents='none';

particle.style.zIndex='-1';

document.body.appendChild(particle);

particle.animate([

{
transform:'translateY(0px)',
opacity:.5
},

{
transform:'translateY(-50px)',
opacity:0
}

],{

duration:3000

});

setTimeout(()=>{

particle.remove();

},3000);

}

setInterval(createParticle,250);

// TYPEWRITER EFFECT

const typeWriterElement =
document.querySelector('.typewriter');

if(typeWriterElement){

const text =
typeWriterElement.innerText;

typeWriterElement.innerText='';

let i=0;

function typeText(){

if(i<text.length){

typeWriterElement.innerHTML +=
text.charAt(i);

i++;

setTimeout(typeText,50);

}

}

typeText();

}

// TITLE ANIMATION

const title =
document.querySelector('.main-title');

if(title){

setInterval(()=>{

title.animate([

{
transform:'scale(1)'
},

{
transform:'scale(1.03)'
},

{
transform:'scale(1)'
}

],{

duration:2000

});

},2000);

}

// MUSIC CONTROL

function toggleMusic(){

const music =
document.getElementById("bgMusic");

const btn =
document.getElementById("musicBtn");

if(music.paused){

music.play();

btn.innerHTML =
"⏸ Pause";

}else{

music.pause();

btn.innerHTML =
"🎵 Music";

}

}

    
function createPetal(){

const petal = document.createElement("div");

petal.innerHTML = "🌹";

petal.style.position = "fixed";
petal.style.left = Math.random()*100 + "vw";
petal.style.top = "-50px";
petal.style.fontSize = (Math.random()*15+20)+"px";
petal.style.pointerEvents = "none";
petal.style.zIndex = "999";

document.body.appendChild(petal);

petal.animate([
{transform:"translateY(0px) rotate(0deg)"},
{transform:"translateY(110vh) rotate(360deg)"}
],{
duration:7000,
iterations:1
});

setTimeout(()=>{
petal.remove();
},7000);

}

setInterval(createPetal,1200);
const photos = [
"image1.jpg",
"image2.jpg",
"image3.jpg",
"image6.jpg",
"image7.jpg",
"image8.jpg"
];

let current = 0;

setInterval(()=>{

const img =
document.getElementById("slideImage");

if(img){

current++;

if(current >= photos.length){
current = 0;
}

img.src = photos[current];

}

},3000);