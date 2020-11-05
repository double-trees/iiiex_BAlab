const { GoogleSpreadsheet } = require('google-spreadsheet');
// 認証情報jsonファイルを読み込む
const CREDIT = require('./iiiex-betalab-comment-8ba654a0c725.json')
// スプレッドシートキー
const SPREADSHEET_KEY = '1UzNOuMNDWI8pfvQzT3N1zJI7I00oEh35gEgz7TRhhi0'

const setHeaderToSpreadsheet = async (spreasheetKey, sheetIndex, headerValues) => {
    
    const doc = new GoogleSpreadsheet(spreasheetKey);
    
    await doc.useServiceAccountAuth({
        client_email: CREDIT.client_email,
        private_key: CREDIT.private_key,
    });

    // スプレッドシートの情報を読み込みを行い, タイトルを取得
    await doc.loadInfo(); 
    const sheet = doc.sheetsByIndex[sheetIndex]
    alert(sheet)

    // ヘッダー行を作成する
    await sheet.setHeaderRow(headerValues)
}

setHeaderToSpreadsheet(SPREADSHEET_KEY, 0, ['time','comment'])