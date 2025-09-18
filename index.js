$(function(){
        const hash = decodeURI(location.hash);
        if(hash){
            $("html, body").animate({scrollTop:$(hash).offset().top});
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
        $('a[href^="#"]').click(function(){
            const href= $(this).attr("href");
            const target = $(href == "#" || href == "" ? 'html' : href);
            $("html, body").animate({scrollTop:target.offset().top});
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
            return false;
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