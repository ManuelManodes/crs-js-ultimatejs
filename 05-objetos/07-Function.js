function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...');}
}

const Point = new Function('x', 'y')