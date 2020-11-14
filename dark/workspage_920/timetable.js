

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
                cell.style.backgroundColor = "#555555"; // ヘッダ行
            }else{
                cell.style.backgroundColor = "#333333"; // ヘッダ行以外
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

    const data1=[["No.","コーナー名","内容"],
    [1, "B et A", "緑色の液体の中に青と黄色の水滴を同時にたらすと…？"],
    [2, "Blue drop", "黄色の液体の中に青色の水滴をたらすと…?"],
    [3, "Amarillo gotas", "青色の液体の中に黄色の水滴をたらすと…?"],
    [4, "Container", "容器の長さを変えてみよう"],
    [5, "Light", "照明の色や明るさ，角度を変えてみよう"],
    [6, "Stirring", "中身を器械で混ぜ続けながらやってみよう"],
    [7, "コメントコーナー", "コメントに答えていきます"],
    [8, "解説コーナー", "実験内容を中の人が科学的に解説します"],
    [9, "雑談コーナー", "実験内容やコメントに関連した話を中の人がします"],
    [0, "その他", "当日何があるかわからない!?"]];




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
//data.push(data2[0]);

// 表の動的作成
makeTable(data,"table");
};