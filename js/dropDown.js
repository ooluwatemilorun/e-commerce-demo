function navDisplay(){
    let dropDownBox = document.getElementsByClassName("dropNav");
    for(i in dropDownBox){
        console.log(dropDownBox[i].children)
    
        let hide = document.getElementsByClassName("hidden");
    
        function onMouseOver(i){
            dropDownBox[i].addEventListener('mouseover', function(){
                hide[i].style = "display: block";
            }, true);
        }
        function onMouseOut(i){
            dropDownBox[i].addEventListener('mouseout', function(){
                hide[i].style = "display: none";
            }, true);
        }
    onMouseOver(i);
    onMouseOut(i);
    };
};
navDisplay();