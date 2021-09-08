var pos = $("#menu").position();
        $(window).scroll(function () {
            var posScroll = $(document).scrollTop();
            if (parseInt(posScroll) > parseInt(pos.top)) {
                $("#menu").addClass("menu--pinned");
            } else {
                $("#menu").removeClass("menu--pinned");
                $("#menu-navbar").removeClass("show");
            }
        });