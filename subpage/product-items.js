
//直接購買按鈕和表單
function openForm() {
    document.getElementById("formPopup").style.display = "block";
}

function closeForm() {
    document.getElementById("formPopup").style.display = "none";
}

function confirmPurchase() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;
    var address = document.getElementById("address").value;

    if (name.trim() === '' || phone.trim() === '' || quantity.trim() === '' || address.trim() === '') {
    alert("請完成填寫！");
    return;
    }

    if (parseInt(quantity) < 0) {
    alert("商品數量不能是負的！");
    return;
    }

    alert("謝謝您的惠顧！商品送到後將以簡訊通知領取貨物！");

    closeForm();
}
