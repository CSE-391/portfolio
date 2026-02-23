// typing text
const text="AI and Data Science Enthusiast";
let i=0;
function typing(){
if(i<text.length){
document.querySelector(".typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,70);
}
}
typing();


// reveal animation
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(sec=>{
let top=sec.getBoundingClientRect().top;
if(top<window.innerHeight-100){
sec.classList.add("active");
}
});
});


// particles background
const canvas=document.createElement("canvas");
const particleContainer=document.getElementById("particles");

particleContainer.appendChild(canvas);
const ctx=canvas.getContext("2d");

// keep canvas background fixed
canvas.style.position="fixed";
canvas.style.top="0";
canvas.style.left="0";
canvas.style.zIndex="-1";

// responsive resize
function resizeCanvas(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize",resizeCanvas);


// particles
let particles=[];
for(let i=0;i<70;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
dx:Math.random()-0.5,
dy:Math.random()-0.5
});
}


// animation
function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="white";

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;
});

requestAnimationFrame(animate);
}
animate();


// =============================
// SKILL DROPDOWN TOGGLE
// =============================
document.querySelectorAll(".skill-btn").forEach(btn=>{
btn.addEventListener("click",()=>{

document.querySelectorAll(".skill-content").forEach(c=>{
if(c!==btn.nextElementSibling){
c.classList.remove("show");
}
});

btn.nextElementSibling.classList.toggle("show");
});
});