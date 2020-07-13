chrome.alarms.create("alarmName", {delayInMinutes:1});
var startButton = document.getElementById("submitButton");
var resetButton =  document.getElementById("resetButton");
var setTimer = document.getElementById("displayTime");
var hour = document.getElementById("hours");
var min = document.getElementById("minutes");

resetButton.addEventListener("click", function(){
	hour.value=00;
	min.value=01;
	var  today = new Date();
	alert("Alarm Reset");
	setTimer.innerHTML = "";
},false);


function createalarm(){
	var hourValue = hour.value;
	var minValue = min.value;
	var timeValue = parseInt(hourValue*60 + minValue);
	var  today = new Date();
	setTimer.innerHTML = today.getHours()+":"+today.getMinutes();
	alert("Timer started");
	 chrome.alarms.create("My First Alarm",{delayInMinutes:timeValue,periodInMinutes:0.125 });
	 chrome.alarms.get("My First Alarm",function(alarm){
	  console.log("Scheduled Time  "+ alarm.scheduledTime);
	  console.log("Alarm Name "+alarm.name);
	 });
	 chrome.alarms.getAll(function(alarms){
	  for(i=0;i<alarms.length;i++){
	   console.log("Scheduled Time  "+alarms[0].scheduledTime);
	   console.log("Alarm Name "+alarms[0].name);
	  }
	 });
	 chrome.alarms.onAlarm.addListener(function(alarm){
	  console.log("Alarm Elapsed Name "+alarm.name);
	  console.log("This is Over");
	  chrome.alarms.clear("My First Alarm");
		today = new Date();
	  alert("Stop "+today.getHours()+":"+today.getMinutes());

	 });
	 //chrome.alarms.clear("My First Alarm");
}

startButton.onclick=createalarm;
