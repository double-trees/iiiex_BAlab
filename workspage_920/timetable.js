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
    // 表のデータ

var data = [["日","時間", "内容"],
            ["ここに", "時間割を", "載せます"],
            ["まだ決まってないので","時刻(UTC)を", "載せときます"],
            [now.getUTCMonth()+1,"月", "あ"],
            [now.getUTCDate(),"日" , "い"],
            [now.getUTCHours(),"時" , "う"],
            [now.getUTCMinutes(),"分" , "え"],
            [now.getUTCSeconds(),"秒" , "お"]];

// 表の動的作成
makeTable(data,"table");
};