　　function inputCheck() {
    /*input textに入力された文字をinputValueに格納。*/
    /*document.getElementById("filter").value;の部分は他とは違って文字ではなく値(value)を入れるためvalueになってる。*/
    let inputValue = document.getElementById("filter").value;
    let tag1 = document.getElementById('tag1').textContent;
    let tag2 = document.getElementById("tag2").textContent;
    let tag3 = document.getElementById("tag3").textContent;
    let tag4 = document.getElementById("tag4").textContent;
      
    /*ここで一つずつ画像に仕掛けている。*/
    let block1 = document.getElementById("img1");
    let block2 = document.getElementById("img2");
    let block3 = document.getElementById("img3");
    let block4 = document.getElementById("img4");
    
      if ( inputValue =="") {
      /*inputValueが空欄なら入力なしを表示*/
      /*id名checkを入力してねと表示する。でも何もしないと「入力前」と表示されたままだが、一度入力してから文字を全部消すと「入力してね」の文字が表示される。*/
      document.getElementById('check').innerHTML = '入力中してね';
      /*次の４つは入力がない時は全部表示するようにする。*/
      /*注意マークが出てるけど普通に動く。*/
      img1.classList.remove("hide");
      img2.classList.remove("hide");      
      img3.classList.remove("hide");
      img4.classList.remove("hide");
      
    } else {
      /*inputValueに何かが入っていれば入力中とその入力内容を表示。犬と打った時に「入力中：犬」と枠の下の所に表示される。*/
      document.getElementById("check").innerHTML = '入力中：' + inputValue
      
        /*index0fで部分一致を判定する*/
        /*-1は固定。−1で返した時にはimgを表示させる。*/
        if(tag1.indexOf(inputValue) != -1) {
          img1.classList.remove("hide");
        }
        /*それ以外はcssで設定したhideを追加する。これがないとimg1はずっと表示されてしまう。cssでnoneに設定してるから当てはまらないときは消えるようになる。*/
        else{
          img1.classList.add("hide");
        }
        
        if(tag2.indexOf(inputValue) != -1) {
          img2.classList.remove("hide");
        }else{
          img2.classList.add("hide");
        }        
        
        if(tag3.indexOf(inputValue) != -1) {
          img3.classList.remove("hide");
        }else{
          img3.classList.add("hide");
        }        
        
        if(tag4.indexOf(inputValue) != -1) {
          img4.classList.remove("hide");
        }else{
          img4.classList.add("hide");
        }
    }
    
  }