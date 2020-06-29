(Function(){
 var actualizarhora = function(){
     var fecha = new Date(),
         horas = fecha.getHours(),
         ampm,
         minutos = fecha.getMinutes(),
         segundos = fecha.getSeconds(),
         diasemana = fecha.getDay(),
         dia = fecha.getDate(),
         mes = fecha.getMonth(),
         year = fecha.getFullYear(); 

      var phoras = document.getElementById ('horas'),
          pampm = document.getElementById ('ampm'),
          pminutos = document.getElementById ('minutos'),
          psegundos = document.getElementById ('segundos'),
          pdiasemana = document.getElementById ('diasemana'),
          pdia = document.getElementById ('dia'),
          pmes = document.getElementById ('mes'),
          pyear = document.getElementById ('year');
         
       var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'jueves', 'Viernes', 'Sabado'];
       pdiasemana.textContent = semana[diasemana];
       pdia.textContent = dia;
       var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
    pmes.textContent = meses[mes];
    pyear.textContent = year;
    
    if (horas >= 12) {
        horas = horas -12;
        ampm = 'pm';
    } else {
        ampm = 'am';
    }
    if (horas == 0){
        horas = 12;

    };
    phoras.textContent = horas;
    pampm.textContent = ampm;

    if (minutos < 10){ minutos = "0" + minutos};
    if (segundos < 10){ segundos = "0" + segundos};
    pminutos.textContent = minutos;
    psegundos.textContent = segundos;




 };
     
    actualizarhora();
     var intervalo = setInterval(actualizarhora, 1000);
}