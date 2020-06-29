var month = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var dayofweek = new Array ("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
var d = new Date();
document.write(dayofweek[d.getDay()] + ", " + d.getDate() + " " + "de " + month[d.getMonth()] + " del " + d.getFullYear());  
