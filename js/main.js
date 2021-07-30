

$(document).ready(function() {
    $("#nav-price").click(function() {
        n()
        d()
        setTimeout(function() {
            $("#indicator").css("left", "35%");
            setTimeout(function() {
                $("#indicator").css("top", "-15%");
                $("#nav-price").css("color", "#e97a29");
                setTimeout(function() {
                    window.location = "./price.html";
                }, 1500);
            }, 1500);
        }, 1500);
    })
    $("#nav-Gallery").click(function() {
        n()
        d()
        setTimeout(function() {
            $("#indicator").css("left", "69%");
            setTimeout(function() {
                $("#indicator").css("top", "-13%");
                $("#nav-Gallery").css("color", "#e97a29");
                setTimeout(function() {
                    window.location = "./gallery.html";
                }, 1500);
            }, 1500);
        }, 1500);
    })
    $("#nav-home").click(function() {
        n()
        d()
        setTimeout(function() {
            $("#indicator").css("left", "5%");
            setTimeout(function() {
                $("#indicator").css("top", "-13%");
                $("#nav-home").css("color", "#e97a29");
                setTimeout(function() {
                    window.location = "./index.html";
                }, 1500);
            }, 1500);
        }, 1500);
        
    })
    $("#nav-Appointment").click(function() {
        n()
        d()
        setTimeout(function() {
            $("#indicator").css("left", "4%");
            setTimeout(function() {
                $("#indicator").css("top", "80%");
                $("#nav-Appointment").css("color", "#e97a29");
                setTimeout(function() {
                    window.location = "./appointment.html";
                }, 1500);
            }, 1500);
        }, 1500);
    })
    $("#nav-Contact").click(function() {
        n()
        d()
        setTimeout(function() {
            $("#indicator").css("left", "35%");
            setTimeout(function() {
                $("#indicator").css("top", "80%");
                $("#nav-Contact").css("color", "#e97a29");
                setTimeout(function() {
                    window.location = "./contact.html";
                }, 1500);
            }, 1500);
        }, 1500);
    })
    $("#nav-FAQ").click(function() {
        n()
        d()
        setTimeout(function() {
            $("#indicator").css("left", "69%");
            setTimeout(function() {
                $("#indicator").css("top", "80%");
                $("#nav-FAQ").css("color", "#e97a29");
                setTimeout(function() {
                    window.location = "./faq.html";
                }, 1500);
            }, 1500);
        }, 1500);
    })
    var n = function(item) {
        $("#indicator").css("top", "32%");
        
    }
    var d = function(item) {
        $("#nav-price").css("color", "#d2d0ce");
        $("#nav-Gallery").css("color", "#d2d0ce");
        $("#nav-home").css("color", "#d2d0ce");
        $("#nav-Appointment").css("color", "#d2d0ce");
        $("#nav-Contact").css("color", "#d2d0ce");
        $("#nav-FAQ").css("color", "#d2d0ce");
    }


    // #########################   dropdown menu  #################################

    $("#burger_menu").click(function() {
        $("#drop").toggle("slow");
    })
    
})
