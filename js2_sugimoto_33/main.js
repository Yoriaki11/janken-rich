alert("ジャンケンしましょう！")

    
function R_Click() {
   
}

function R_Click(p_janken_r) {

    let janken = ['グー','チョキ','パー'];
    let janken_r = Math.floor( Math.random() * 3);

    let p_janken = ['グー','チョキ','パー'];//"プレイヤーのjanken"のリストを作成します。
        //勝ち負けの判定機プログラムです
        if (janken_r === p_janken_r) {
            Result_end = "【あいこ】です";
        }else if(p_janken_r === 0 && janken_r === 1) {
            Result_end = "あなたの【勝ち】です";
        }else if(p_janken_r === 1 && janken_r === 2) {
            Result_end = "あなたの【勝ち】です";
        }else if(p_janken_r === 2 && janken_r === 0) {
            Result_end = "あなたの【勝ち】です";
        }else {
            Result_end = "あなたの【負け】です";
        }

        document.getElementById('btn_audio').currentTime = 0;
        document.getElementById('btn_audio').play(); 

        document.getElementById("jankenpon").src="jan" + janken_r + ".png";
        document.getElementById("Rejan1").innerHTML = p_janken[p_janken_r] +"を選択しました。ジャンケンの結果は・・・？";
        document.getElementById("Rejan2").innerHTML = "相手は" + janken[janken_r] + Result_end;
        document.getElementById("jankenpon2").src="jan" + p_janken_r + ".png";
    }

let counter, btnAdd;
let n;
    
function addCount(){
        n++;
        counter.innerHTML = n;
}
    
window.addEventListener("load", ()=>{
        counter = document.getElementById("counter");
        btnAdd = document.getElementById("btnAdd");
        n = 0;
    
        btnAdd.addEventListener("click", addCount);
});
