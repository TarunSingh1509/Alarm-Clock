// initilize tags and variables
const selectMenu=document.querySelectorAll("select");
const displayTime=document.querySelector("h1");
content=document.querySelector(".content");
let setAlarmBtn=document.querySelector("button");
let alarmTime,isAlarmSet="",mySound = new Audio('FM9B3TC-alarm.mp3');

// loops use for input the hours list and minutes list
for(let i=12;i>0;i--)
{
    i=i<10?"0"+i:i;
    let option=`<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let i=59;i>=0;i--)
{
    i=i<10?"0"+i:i;
    let option=`<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let i=2;i>0;i--)
{
    let ampm=i==1?"AM":"PM";
    let option=`<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",option)
}
// rendering the time on display and adding the ring sound 
setInterval(() => {
    let currentTime=new Date();
    hrs=currentTime.getHours();
    min=currentTime.getMinutes();
    sec=currentTime.getSeconds();
    ampm="AM";
    if(hrs>=12)
    {
        hrs=hrs-12;
        ampm="PM"; 
    }
    hrs=hrs==0?hrs=12:hrs;
    hrs=hrs<10?"0"+hrs:hrs;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    displayTime.innerText=`${hrs}:${min}:${sec} ${ampm}`;
    if(alarmTime==`${hrs}:${min} ${ampm}`)
    {
        mySound.play();
    console.log("ring");
    }

}, 1000);

// creating the set alarm and disable alarm in same function 
function setAlarm(){
    if(isAlarmSet)
    {
        alarmTime="";
        mySound.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText="Set Alarm";
        return isAlarmSet=false;
    }
    let time=`${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if(time.includes("hours")||time.includes("minutes")||time.includes("AM/PM"))
    {
        return alert("please, select the valid time to set alarm");
    }
    isAlarmSet=true;
    alarmTime=time;
    content.classList.add("disable");
    setAlarmBtn.innerText="Clear Alarm";
}

setAlarmBtn.addEventListener("click",setAlarm);