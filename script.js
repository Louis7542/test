console.log("網站載入成功");

/* 滑鼠移入動畫 */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 10px 40px rgba(56,189,248,0.4)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
        "0 8px 32px rgba(0,0,0,0.3)";
    });

});