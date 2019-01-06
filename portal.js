$(function () {
    var clicks = 0;
    var s = 0;
    $("#logoWrapper").on('click', function () {
        if(clicks == 0){
            $(".lightmodeImage").attr("src","logo/weblogoH1.svg");
            $(".darkmodeImage").attr("src","logo/weblogoDarkmodeH1.svg");
            clicks = 1;
        } else if(clicks == 1){
            $(".lightmodeImage").attr("src","logo/weblogoH2.svg");
            $(".darkmodeImage").attr("src","logo/weblogoDarkmodeH2.svg");
            clicks = 2;
        } else if(clicks == 2){
            $(".lightmodeImage").attr("src","logo/weblogoH3.svg");
            $(".darkmodeImage").attr("src","logo/weblogoDarkmodeH3.svg");
            clicks = 3;
        }
        else {
            if (JSON.parse(localStorage.getItem("darkMode")) == true) {
                if(s == 0){
                    $(".darkmodeImage").attr("src","logo/weblogoDarkmodeS1.svg");
                    s = 1;
                } else if(s == 1){
                    $(".darkmodeImage").attr("src","logo/weblogoDarkmodeS2.svg");
                    s = 2;
                } else if(s==2){
                    $(".darkmodeImage").attr("src","logo/weblogoDarkmodeS3.svg");
                    s = 3;
                } else {
                    $(".lightmodeImage").attr("src","logo/weblogo.svg");
                    $(".darkmodeImage").attr("src","logo/weblogoDarkmode.svg");
                    s = 0;
                    clicks = 0;
                }
            }else{
                $(".lightmodeImage").attr("src","logo/weblogo.svg");
                $(".darkmodeImage").attr("src","logo/weblogoDarkmode.svg");
                clicks = 0;
                s = 0;
            }
        }
    });
});