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

 }

/*
const SpreadSheetService = require('./spreadSheetService')
// 認証情報jsonファイルを読み込む
const CREDIT = require('./iiiex-betalab-comment-8ba654a0c725.json')
// スプレッドシートキー
const SPREADSHEET_KEY = '1UzNOuMNDWI8pfvQzT3N1zJI7I00oEh35gEgz7TRhhi0'

// データを4件追加
const post = async (input_message) => {
    await spreadSheetService.insert({time:1, comment:input_message})
}*/