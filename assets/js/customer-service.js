//意見回饋功能
function submitFeedback(event) {
    event.preventDefault(); // 阻止表單的默認提交行為
    
    // 獲取表單數據
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    
    // 將數據發送到指定信箱
    var subject = "食品雜貨店意見回饋";
    var body = "姓名：" + name + "\n意見內容：" + message;
    var mailtoLink = "mailto:eugene891031@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
    
    // 顯示提示框給使用者
    alert("我們已收到您的回饋，請等候回信，謝謝您！");
}
