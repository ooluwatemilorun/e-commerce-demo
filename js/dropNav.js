
let navDropdown = document.getElementsByClassName("dropNav");
let showMore = document.getElementsByClassName("more");
let showLess = document.getElementsByClassName("less");
for (i in navDropdown) {
    showLess[i].style = "display:none";
    // console.log(faQuestion[i].children);

    function mouseEnter(i) {
        navDropdown[i].addEventListener('mouseover', function () {
            showLess[i].style = "display:block";
            showMore[i].style = "display:none";

            function MouseOut(i) {
                navDropdown[i].addEventListener('mouseout', function () {
                    showMore[i].style = "display:block";
                    showLess[i].style = "display:none";
        
                }, true);   
            }
            MouseOut(i);
            
        }, true);
    }
    mouseEnter(i);
}