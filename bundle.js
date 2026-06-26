$(document).ready(function () {

    $("form").submit(function (e) {

        let valid = true;

        $(".error-msg").remove();
        $("input, textarea").removeClass("error-border");

        // First Name
        let firstName = $("input[type='text']").eq(0);

        if (firstName.val().trim() === "") {
            firstName.addClass("error-border");
            firstName.after("<div class='error-msg'>This field is required</div>");
            valid = false;
        }

        // Last Name
        let lastName = $("input[type='text']").eq(1);

        if (lastName.val().trim() === "") {
            lastName.addClass("error-border");
            lastName.after("<div class='error-msg'>This field is required</div>");
            valid = false;
        }

        // Email
        let email = $(".email");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.val().trim() === "") {
            email.addClass("error-border");
            email.after("<div class='error-msg'>This field is required</div>");
            valid = false;
        } else if (!emailPattern.test(email.val().trim())) {
            email.addClass("error-border");
            email.after("<div class='error-msg'>Please enter a valid email address</div>");
            valid = false;
        }

        // Query Type
        if (!$("input[type='radio']:checked").length) {
            $(".query-box:first")
                .after("<div class='error-msg'>Please select a query type</div>");
            valid = false;
        }

        // Message
        if ($("#msg").val().trim() === "") {
            $("#msg").addClass("error-border");
            $("#msg").after("<div class='error-msg'>This field is required</div>");
            valid = false;
        }

        //  Consent Checkbox (FIXED POSITION)
        if (!$("input[type='checkbox']").is(":checked")) {
            $(".ch").after(
                "<div class='error-msg'>To submit this form, please consent to being contacted</div>"
            );
            valid = false;
        }

        // Stop form submit if invalid
        if (!valid) {
            e.preventDefault();
        }
    });

    // Remove error on input
    $("input, textarea").on("input change", function () {
        $(this).removeClass("error-border");
    });

});