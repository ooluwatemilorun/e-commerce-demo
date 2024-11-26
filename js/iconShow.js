let iconList = document.getElementsByClassName("socialList");
let initialIcon = document.getElementsByClassName("initial");
let finalIcon = document.getElementsByClassName("final");
for (i in iconList) {
    finalIcon[i].style = "display:none";
    // console.log(faQuestion[i].children);

    function onHover(i) {
        iconList[i].addEventListener('mouseover', function () {
            finalIcon[i].style = "display:block";
            initialIcon[i].style = "display:none";

            function onMouseOut(i) {
                iconList[i].addEventListener('mouseout', function () {
                    initialIcon[i].style = "display:block";
                    finalIcon[i].style = "display:none";
        
                }, true);   
            }
            onMouseOut(i);
            
        }, true);
    }
    onHover(i);
}
