blowfish.decrypt('function Dot(x, y, ctx){
	this.x = x;
	this.y = y;
	this.radius = 1;
	this.plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	this.xSpeed = (Math.random() * 0.5 + 0.1) * this.plusOrMinus;
	this.ySpeed = (Math.random() * 0.5 + 0.1) * this.plusOrMinus;
	this.update = function(){
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if (this.x < 0 || this.x > width - this.radius * 2) {
			this.xSpeed *= -1;
		}
		if (this.y < 0 || this.y > height - this.radius) {
			this.ySpeed *= -1;
		}
	};

	this.show = function(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, 4 * 2, 0, Math.PI * 2, false);
		ctx.fillStyle = "rgba(255,255,255,0.4)";
		ctx.fill();
		ctx.closePath();
	};

	this.check = function(dot, distance){
		var d = dist(this.x, this.y, dot.x, dot.y);
		if (d < distance) {
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(dot.x, dot.y);
			ctx.strokeStyle = "rgba(255,255,255,0.2)";
			ctx.stroke();
			ctx.closePath();
		}
	};

	function dist(x1, y1, x2, y2){
		var a = Math.abs(x1 - x2);
		var b = Math.abs(y1 - y2);
		var c = Math.sqrt( a*a + b*b );
		return c;
	}
}', '', {cipherMode: 0, outputType: 0});
