// initilize tags and variables
const selectMenu=document.querySelectorAll("select");
const displayTime=document.querySelector("h1");
content=document.querySelector(".content");
content2=document.querySelector('.content2')
content3=document.querySelector('.content3')
let setAlarmBtn=document.querySelector("button");
let alarmBtn2=document.querySelector(".btn2")
let alarmBtn3=document.querySelector(".btn3")
let alarmTime,alarmTime2,alarmTime3,isAlarmSet="",mySound = new Audio('FM9B3TC-alarm.mp3');

// rendering the current time and checking the alarm time is matching or not 
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
    else if(alarmTime2==`${hrs}:${min} ${ampm}`)
    {
        mySound.play();
    console.log("ring2");
    }
    else if(alarmTime3==`${hrs}:${min} ${ampm}`)
    {
        mySound.play();
    console.log("ring3");
    }

}, 100);


// creating function for main alarm 
function mainAlarm(){
    // loops for creating the drop down list for setting time 
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
//  creating set Alarm function for setting the alarm time and check user can enter the correct time or not 
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
}

// creating the second function for the second alarm time it is same as the first 
function secondAlarm(){
    for(let i=12;i>0;i--)
{
    i=i<10?"0"+i:i;
    let option=`<option value="${i}">${i}</option>`;
    selectMenu[3].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let i=59;i>=0;i--)
{
    i=i<10?"0"+i:i;
    let option=`<option value="${i}">${i}</option>`;
    selectMenu[4].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let i=2;i>0;i--)
{
    let ampm=i==1?"AM":"PM";
    let option=`<option value="${ampm}">${ampm}</option>`;
    selectMenu[5].firstElementChild.insertAdjacentHTML("afterend",option)
}
//  creating set Alarm function for setting the alarm time and check user can enter the correct time or not 
function setAlarm(){
    if(isAlarmSet)
    {
        alarmTime2="";
        mySound.pause();
        content2.classList.remove("disable");
        alarmBtn2.innerText="Set Alarm";
        return isAlarmSet=false;
    }
    let time=`${selectMenu[3].value}:${selectMenu[4].value} ${selectMenu[5].value}`;
    if(time.includes("hours")||time.includes("minutes")||time.includes("AM/PM"))
    {
        return alert("please, select the valid time to set alarm");
    }
    isAlarmSet=true;
    alarmTime2=time;
    content2.classList.add("disable");
    alarmBtn2.innerText="Clear Alarm";
}

alarmBtn2.addEventListener("click",setAlarm);

}
// creating the third function for the third alarm it is also same the as first function but little changes because here we can change only index number of the array
function thirdAlarm(){
    for(let i=12;i>0;i--)
    {
        i=i<10?"0"+i:i;
        let option=`<option value="${i}">${i}</option>`;
        selectMenu[6].firstElementChild.insertAdjacentHTML("afterend",option)
    }
    for(let i=59;i>=0;i--)
    {
        i=i<10?"0"+i:i;
        let option=`<option value="${i}">${i}</option>`;
        selectMenu[7].firstElementChild.insertAdjacentHTML("afterend",option)
    }
    for(let i=2;i>0;i--)
    {
        let ampm=i==1?"AM":"PM";
        let option=`<option value="${ampm}">${ampm}</option>`;
        selectMenu[8].firstElementChild.insertAdjacentHTML("afterend",option)
    }
//  creating set Alarm function for setting the alarm time and check user can enter the correct time or not 
    function setAlarm(){
        if(isAlarmSet)
        {
            alarmTime3="";
            mySound.pause();
            content3.classList.remove("disable");
            alarmBtn3.innerText="Set Alarm";
            return isAlarmSet=false;
        }
        let time=`${selectMenu[6].value}:${selectMenu[7].value} ${selectMenu[8].value}`;
        if(time.includes("hours")||time.includes("minutes")||time.includes("AM/PM"))
        {
            return alert("please, select the valid time to set alarm");
        }
        isAlarmSet=true;
        alarmTime3=time;
        content3.classList.add("disable");
        alarmBtn3.innerText="Clear Alarm";
    }
    
    alarmBtn3.addEventListener("click",setAlarm);
}

mainAlarm();
secondAlarm();
thirdAlarm();