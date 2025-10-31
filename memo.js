document.addEventListener("DOMContentLoaded", () => {
  const memoInput = document.getElementById("memoInput");
  const saveBtn = document.getElementById("saveBtn");
  const lastSaved = document.getElementById("lastSaved");

  // 保存済みメモと日時を復元
  const savedMemo = localStorage.getItem("memo");
  const savedTime = localStorage.getItem("memoTime");

  if (savedMemo) memoInput.value = savedMemo;
  if (savedTime) lastSaved.textContent = `最終保存: ${savedTime}`;

  // 保存ボタンを押したとき
 
    // ページ読み込み時に保存済みメモを復元
    const savedMemo = localStorage.getItem("memo");
    if (savedMemo) {
        memoInput.value = savedMemo;
    }

    // 保存ボタンで localStorage に保存
 saveBtn.addEventListener("click", () => {
    localStorage.setItem("memo", memoInput.value);

    const now = new Date();
    const timeText = now.toLocaleString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    localStorage.setItem("memoTime", timeText);
    lastSaved.textContent = `最終保存: ${timeText}`;
    alert("メモを保存しました！");
  });
});

