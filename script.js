setInterval(setClock,1000)
hourHand=document.querySelector('[data-hour-hand]')
minuteHand=document.querySelector('[data-minute-hand]')
secondHand=document.querySelector('[data-second-hand]')
function setClock(){
    const currentDate=new Date;
    const secondRatio=currentDate.getSeconds()/60;
    const minuteRatio=(secondRatio+currentDate.getMinutes())/60;
    const hourRatio=(minuteRatio+currentDate.getHours())/12;
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360)

}