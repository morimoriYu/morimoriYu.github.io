document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // 通常のジャンプを止める

      // 対象要素を取得
      const target = document.querySelector(this.getAttribute('href'));

      // スムーズにスクロール
      target.scrollIntoView({ behavior: 'smooth' });

      // URLのハッシュを残さない → 更新しても勝手に飛ばない
      history.replaceState(null, null, location.pathname + location.search);
    });
  });
});

const toggler = document.querySelector(".toggle");

window.addEventListener("click", event => {
  if(event.target.className == "toggle" || event.target.className == "toggle") {
    document.body.classList.toggle("show-nav");
    document.getElementById("deleteconpo").classList.toggle("deleteclass")
  } else if (event.target.className == "overlay") {
    document.body.classList.remove("show-nav");
document.getElementById("deleteconpo").classList.toggle("deleteclass")
  }

});


//ドロワーのメニューをクリックしたら非表示
const hrefLink = document.querySelectorAll('.linkList li a');
for (i = 0; i < hrefLink.length; i++) {
hrefLink[i].addEventListener("click", () => {
document.body.classList.remove("show-nav");
document.getElementById("deleteconpo").classList.toggle("deleteclass")
});
}