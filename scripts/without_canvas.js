var container = document.querySelector(".container");
var width = container.offsetWidth - 20;
var height = container.offsetHeight - 20;
var count = 0;
var dots = [];

var Dot = function(x, y){
	this.x = x;
	this.y = y;
	this.speedX = 1.2;
	this.speedY = 0.5;
	this.span = null;
	this.getSpan = function(){
		var s = document.createElement('span');
		s.classList.add('dot');
		s.style.left = this.x + "px";
		s.style.top = this.y + "px";
		this.span = s;
		return s;
	}

	this.update = function(){
		if (this.x < 0 || this.x > width) {
			this.speedX *= -1;
		}
		if (this.y < 0 || this.y > height) {
			this.speedY *= -1;
		}

		this.x += this.speedX;
		this.y += this.speedY;

		this.span.style.left = this.x + 'px';
		this.span.style.top = this.y + 'px';
	}
}

while(count != 10){
	count++;
	var rX = Math.random() * width;
	var rY = Math.random() * height;
	var single = new Dot(rX, rY);
	dots.push(single);
	container.appendChild(single.getSpan());
}

var id = setInterval(frame, 10);
function frame(){
	for(var i = 0; i < dots.length; i++){
		dots[i].update();
	}
}