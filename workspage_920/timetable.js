

// 表の動的作成
function makeTable(data, tableId){
    // 表の作成開始
    var rows=[];
    var table = document.createElement("table");

    // 表に2次元配列の要素を格納
    for(i = 0; i < data.length; i++){
        rows.push(table.insertRow(-1));  // 行の追加
        for(j = 0; j < data[0].length; j++){
            cell=rows[i].insertCell(-1);
            cell.appendChild(document.createTextNode(data[i][j]));
            // 背景色の設定
            if(i==0){
                cell.style.backgroundColor = "#bbb"; // ヘッダ行
            }else{
                cell.style.backgroundColor = "#f0f0f0"; // ヘッダ行以外
            }
        }
    }
    // 指定したdiv要素に表を加える
    document.getElementById(tableId).appendChild(table);
}
window.onload = function(){ 
    var now = new Date();
    var hour=now.getUTCHours()+9;
    var date=now.getUTCDate();
if(hour>24){
    hour=hour-24;
    date=date+1;
}
var today=(now.getUTCMonth()+1).toString()+"/"+date.toString()
    // 表のデータ

    const data1=[["日","開始時刻","","終了時刻", "内容","説明"],
    [today, "12:00", "〜","15:00","内容","ここで内容の説明を簡単にします．"],
    ["", "12:00", "〜","15:00","黄色vs黄色","いっぱいほげほげするから楽しみにしてね"],
    ["", "12:00", "〜","15:00","黄色vs黄色","いっぱいほげほげするから楽しみにしてね"],
    ["", "12:00", "〜","15:00","黄色vs黄色","いっぱいほげほげするから楽しみにしてね"],
    ["", "12:00", "〜","15:00","黄色vs黄色","いっぱいほげほげするから楽しみにしてね"]];


    const data2=[["日","開始","〜","終了", "内容","説明"],
    [today, "時間割を", "載せます",],
    ["","時刻(UTC)を", "載せときます",],
    [now.getUTCMonth()+1,"月", "あ",],
    [date,"日" , "い",],
    [hour,"時" , "う",],
    [now.getUTCMinutes(),"分" , "え",],
    [now.getUTCSeconds(),"秒" , "お",]];

/*var data = [["日","開始","〜","終了", "内容","説明"],
            [today, "時間割を", "載せます",],
            ["","時刻(UTC)を", "載せときます",],
            [now.getUTCMonth()+1,"月", "あ",],
            [date,"日" , "い",],
            [hour,"時" , "う",],
            [now.getUTCMinutes(),"分" , "え",],
            [now.getUTCSeconds(),"秒" , "お",]];*/
        

//var data=data1.concat(data2);
var data=data1;
data.push(data2[0]);

// 表の動的作成
makeTable(data,"table");
};