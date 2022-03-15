import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)タグ生成
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    // 完了リストに追加する要素
    const addTarget = compButton.parentNode;

    // button(戻す)タグ生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      document
        .getElementById("complate-list")
        .removeChild(returnButton.parentNode);
    });

    //divタグの子要素に各要素を設定
    // addTarget.removeChild(addTarget.lastChild());
    addTarget.appendChild(returnButton);

    //押された完了ボタンの親タグを完了リストへ移動
    const moveTarget = delButton.parentNode;
    document.getElementById("complate-list").appendChild(moveTarget);
    // document.getElementById("incomplate-list").removeChild(moveTarget);
  });

  // button(削除)タグ生成
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncomplateList(delButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(compButton);
  div.appendChild(delButton);

  //未完了リストに追加
  document.getElementById("incomplate-list").appendChild(div);

  console.log(compButton);

  // alert(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncomplateList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

//追加ボタン動作
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
