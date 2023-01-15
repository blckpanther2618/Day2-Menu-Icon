var IsActive = false
function Call() {    
    var test = document.getElementById("m1");
    console.log(test);
    var val = test.addEventListener('click',function checkClick(){      
        if(IsActive)
        {
            console.log("change the css !!");                       
            $("#three").css({"animation":"line-three-back 0.7s ease ","transform":"translate3d(0,0,0) rotate(0deg)"});
            $("#one").css({"animation":"line-one-back 0.7s ease ","transform":"translate3d(0,0,0) rotate(0deg)"});
            $("#two").css({"animation":"appear 0.7s ease ","transform":"scale(1)"});
            IsActive=false;
        }
        else
        {
            $("#two").css({"animation":"disappear 0.7s ease","transform":"scale(0)"});
            $("#one").css({"animation":"line-one-move 0.7s ease","transform":"translate3d(0,22px,0) rotate(45deg)"});
            $("#three").css({"animation":"line-three-move 0.7s ease","transform":"translate3d(0,-22px,0) rotate(135deg)"});
            IsActive=true;
        }                 
    });
}