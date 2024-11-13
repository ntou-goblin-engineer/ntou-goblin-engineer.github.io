let box=document.getElementById("box");
box.style.position='absolute';
box.style.height="100px";
box.style.width="100px";

let x=0;
let y=0;
let h=box.offsetHeight;
let w=box.offsetWidth;
let dx=2;
let dy=3;
setInterval(() => {
	box.style.top=`${x}px`;
	box.style.left=`${y}px`;
	x+=dx;
	if (x<=0) {
		dx*=-1;
		x=0;
	} else if (x>window.innerHeight-h) {
		dx*=-1;
		x=window.innerHeight-h;
	}
	y+=dy;
	if (y<=0) {
		dy*=-1;
		y=0;
	} else if (y>window.innerWidth-w) {
		dy*=-1;
		y=window.innerWidth-w;
	}
});
