const texts1 = [
    "每天要吃掉與自己體重相同重量的砂糖，糖分不夠就會鬧脾氣。",
    "蓬鬆的體毛聞起來就像棉花糖一樣甜甜的。會放出黏答答的絲纏住敵人。"
];

const texts2 = [
    "能從人們身上的氣味裡嗅出他們的身心狀態。在醫療領域的實際應用備受矚目。",
    "因為體毛裡富含空氣，所以摸起來十分柔軟，重量也比看起來要輕。"
];

function changeText(index, element) {
    // 取得所有按鈕並移除 active 類別
    document.querySelectorAll('.icon-button').forEach(button => button.classList.remove('active'));
    
    // 將被點擊的按鈕設置為紅色
    element.classList.add('active');

    // 切換文本內容
    const textContainer = document.getElementById("text-container");
    textContainer.style.opacity = 0; // 淡出效果
    setTimeout(() => {
        textContainer.innerHTML = texts1[index];
        textContainer.style.opacity = 1; // 淡入效果
    }, 300);
}

function changeText2(index, element) {
    // 取得所有按鈕並移除 active 類別
    document.querySelectorAll('.button-container .icon-button').forEach(button => button.classList.remove('active'));

    // 將被點擊的按鈕設置為紅色
    element.classList.add('active');

    // 切換文本內容
    const textContainer = document.getElementById("text-container2");
    textContainer.style.opacity = 0; // 淡出效果
    setTimeout(() => {
        textContainer.innerHTML = texts2[index];
        textContainer.style.opacity = 1; // 淡入效果
    }, 300);
}
