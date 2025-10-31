const memoInput = document.getElementById("memoInput");
const saveBtn = document.getElementById("saveBtn");

// ページ読み込み時に保存済みメモを復元
window.addEventListener("load", () => {
    const savedMemo = localStorage.getItem("memo");
    if (savedMemo) {
        memoInput.value = savedMemo;
    }
});

// 保存ボタンで localStorage に保存
saveBtn.addEventListener("click", () => {
    localStorage.setItem("memo", memoInput.value);
    alert("メモを保存しました！");
});
