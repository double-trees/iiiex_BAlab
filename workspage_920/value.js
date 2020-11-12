
var movie_ID="ZFJxkhOVMBQ" //ここを編集

var movie_pre="https://www.youtube.com/embed/"
var movie_rear="?rel=0&autoplay=1&vq=highres"

var chat_pre="https://www.youtube.com/live_chat?v="
var chat_rear="&embed_domain=iiiexhibition.com"

    var movie = document.getElementById("youtube_live");
    var chat_1 = document.getElementById("youtube_chat_1");
    var chat_2 = document.getElementById("youtube_chat_2");

    movie.src = movie_pre+movie_ID+movie_rear;
    chat_1.src= chat_pre+movie_ID+chat_rear;
    chat_2.src= chat_pre+movie_ID+chat_rear;

