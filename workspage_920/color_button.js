
function blue_button(){
    push_button("blue");
}
function yellow_button(){
    push_button("yellow");
}

function call_button(){
    push_button("call");
}





function push_button(content){
    gtag('event', content, {'event_category': '920', 'event_label': 'sp', 'value': '1'});

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

  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5fa614925d3cdc44fcd7d6cc"
  );

  store.append(content, [{timestamp:TS}],{authentication: { username: "batalabo", password: "BetA_bETa" }
})
.then(res => {
  console.log(res);
});
   
 }
 
 

  
 
 
 