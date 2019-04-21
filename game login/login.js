function manage(txt) {
    var bt = document.getElementById('btSubmit');
    if (txt.value != '') {
        bt.disabled = false;
    }
    else {
        bt.disabled = true;
    }
    localStorage.setItem("storageName",txt.value);
} 
