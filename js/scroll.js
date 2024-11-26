window.onscroll = function(){
    scrollFunction()
};

function scrollFunction() {
    var scrollButton = document.getElementById("top-button");
    if (document.documentElement.scrollTop > 45) {
        scrollButton.style.display = "block";
    }
    else{
        scrollButton.style.display = "none";
    }
};