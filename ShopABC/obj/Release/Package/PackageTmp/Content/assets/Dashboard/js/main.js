$(document).ready(function () {
    // Active Pages 
    $(".menu li a").click(function () {
        if ($(".menu li").hasClass("active")) {
            $(".menu li").removeClass("active");
        }
        $(this).parents("li").addClass("active");
    });
    $('.modal').on('shown.bs.modal', function () {
        $(this).find('[autofocus]').focus();
    });
    // Modals
    $('#Modal_DoiMatKhau #btn_DoiMK').click(function () {
        $.ajax({
            url: "/admin/doi-mat-khau",
            type: "post",
            dataType: "text",
            data: {
                mkcu: $("#Modal_DoiMatKhau #mkcu").val(),
                mkmoi: $("#Modal_DoiMatKhau #mkmoi").val(),
                nhaplaimk: $("#Modal_DoiMatKhau #nhaplaimk").val(),
                __RequestVerificationToken: $("input[name='__RequestVerificationToken']").val()
            },
            success: function (data) {
                alert(data);
                location.reload();
            },
            error: function () {
                alert("Có lỗi xảy ra. Thử lại !");
                location.reload();
            }
        });
    });
    // Check InActivity
    (function () {
        var idleDurationSecs = 2400;
        var idleTimeout;
        var resetIdleTimeout = function () {
            if (idleTimeout) clearTimeout(idleTimeout);
            idleTimeout = setTimeout(function () {
                alert("Hết thời gian chờ do không hoạt động trong thời gian dài !");
                location.href = "/Dashboard/TaiKhoan/Logout";
            }, idleDurationSecs * 1000);
        };
        resetIdleTimeout();
        ['click', 'touchstart', 'mousemove'].forEach(function (evt) {
            document.addEventListener(evt, resetIdleTimeout, false);
        });
    })();
});