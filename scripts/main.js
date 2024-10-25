const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox.png") {
        myImage.setAttribute("src", "images/404.png");
    } else {
        myImage.setAttribute("src", "images/firefox.png");
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt("Please enter your name.")
    // 检查用户是否输入了空名字
    if (!myName) {
        alert("请确认输入的名字不为空值");
        setUserName();
    } else {
        localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

// 添加初始化代码块
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is coll, ${storedName}`;
}

// 设置按钮的onclick事件，当用户点击时调用setUserName()函数，允许用户设置新的名字
myButton.onclick = function() {
    setUserName();
}