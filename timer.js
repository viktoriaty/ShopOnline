timeend= new Date(2023, 7, 2, 12, 00);
// IE и FF по разному отрабатывают getYear()

// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
    today = new Date(2023,6, 2, 19, 10);
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    timestr=today +" дней "+ thour+" часов "+tmin+" минут ";
    document.getElementById('t').innerHTML=timestr;
    window.setTimeout("time()",1000);
}
