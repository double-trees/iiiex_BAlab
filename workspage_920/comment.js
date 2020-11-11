function post_message0(){

   var input_message = document.getElementsByClassName("inputs")[0].value;
   if(input_message!=""){
alert("コメントありがとうございます!!");
document.getElementsByClassName("inputs")[0].value="";

post(input_message);}
}

function post_message1(){
    var input_message = document.getElementsByClassName("inputs")[1].value;
    if(input_message!=""){
 alert("コメントありがとうございます!!");
 document.getElementsByClassName("inputs")[1].value="";
 
   post(input_message);}
 }

 function post(input_message){
  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5fa614925d3cdc44fcd7d6cc"
  );

  var now = new Date();
  var date=now.getUTCDate();
  var hour=now.getUTCHours()+9;
  
if(hour>24){
  hour=hour-24;
  date=date+1;
}

var time=[now.getUTCMonth()+1,date,hour,now.getUTCMinutes(),now.getUTCSeconds()];
var TS="";
for(let i=0;i<time.length;i++){
if(time[i]<10){
time[i]="0"+time[i].toString();
}
else{
  time[i]=time[i].toString();

}
TS=TS+time[i];
}
TS=Number(TS);
  store.append("シート1", [{timestamp:TS,	comment:input_message}],{authentication: { username: "batalabo", password: "BetA_bETa" }
  })
  .then(res => {
    console.log(res);
  });
 }

