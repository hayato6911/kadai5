 //シングルクォーテーションとダブルクォーテーションはどっちでもいい
   
  //入力の値を格納
  //let string = document.getElementById("filter");
  /*
  let tag1 = document.getElementById('tag1').value;
  let tag2 = document.getElementById("tag2");
  let tag3 = document.getElementById("tag3");
  let tag4 = document.getElementById("tag4");
  */

  
  function inputCheck() {
    /*inputに入力された文字をinputValueに格納*/
    let inputValue = document.getElementById("filter").value;
    let tag1 = document.getElementById('tag1').textContent;
    let tag2 = document.getElementById("tag2").textContent;
    let tag3 = document.getElementById("tag3").textContent;
    let tag4 = document.getElementById("tag4").textContent;
      
    //.idをつけると、block1だけ抽出されるけど、それだとだめ。
    //これで値を格納するとdiv#block1で値が格納される。それで下の処理ができるようになる。
    let block1 = document.getElementById("img1");
    let block2 = document.getElementById("img2");
    let block3 = document.getElementById("img3");
    let block4 = document.getElementById("img4");
    
      if ( inputValue =="") {
      //inputValueが空欄なら入力なしを表示
      document.getElementById('check').innerHTML = '入力前';
      //入力がない時は全部表示する
      block1.classList.remove("hide");
      block2.classList.remove("hide");      
      block3.classList.remove("hide");
      block4.classList.remove("hide");
      
      //alert("入力無しテスト");
    } else {
      //inputValueに何かが入っていれば入力中とその入力内容を表示
      document.getElementById("check").innerHTML = '入力中：' + inputValue
      
        //部分一致を判定する
        
        if(tag1.indexOf(inputValue) != -1) {
          //alert("部分一致あります");
          //document.getElementById('check').innerHTML = 'test';
          block1.classList.remove("hide");
          //block1.classList.remove("test");
        }else{
          //部分一致がなかったときの処理
          //alert("部分一致ないです");
          block1.classList.add("hide");
          //このtest classの追加と消去はできてるから、クラスの追加と消去はできてる。
          //block1.classList.add("test");
          
        }
        
        //この繰り返し処理を配列か何かでやりたい。tags=[]で格納するか？
        //変数の宣言とかもそうしたい。
        if(tag2.indexOf(inputValue) != -1) {
          block2.classList.remove("hide");
        }else{
          block2.classList.add("hide");
        }        
        
        if(tag3.indexOf(inputValue) != -1) {
          block3.classList.remove("hide");
        }else{
          block3.classList.add("hide");
        }        
        
        if(tag4.indexOf(inputValue) != -1) {
          block4.classList.remove("hide");
        }else{
          block4.classList.add("hide");
        }
        
        //各タグに関して部分一致を判定する
        /*
        for(let i=1; i<5; i++){
          
          if(tag1.indexOf(inputValue) != -1) {
            block1.classList.remove("hide");
          }else{
            block1.classList.add("hide");
          }
        }
        */
      
      
      
    }
    
  }