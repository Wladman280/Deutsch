(function () {
    "use strict";

    function validate_email(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    }

    $(document).ready(function (e) {
        $('#contact-submit').click(function (e) {
            e.preventDefault();
            contact_submit();
        });

        $('input:text, textarea').keyup(function (e) {
            $(this).removeClass('error');
        });

        $('#contact-error').hide();
        $('#contact-loading').hide();
        $('#contact-success').hide();
        $('#contact-failed').hide();
        $('#rsvp-error').hide();
        $('#rsvp-loading').hide();
        $('#rsvp-success').hide();
        $('#rsvp-failed').hide();
    });

    function contact_submit() {
        $('#contact-error').hide();
        var submit_flag = 'yes';
        var contact_name = $('#contact-name').val();
        if (contact_name === '') {
            if (submit_flag === 'yes') {
                $('#contact-name').focus();
            }
            $('#contact-name').addClass('error');
            submit_flag = 'no';
        }
        var contact_email = $('#contact-email').val();
        if (contact_email === '') {
            if (submit_flag === 'yes') {
                $('#contact-email').focus();
            }
            $('#contact-email').addClass('error');
            submit_flag = 'no';
        }
        if (!validate_email(contact_email)) {
            if (submit_flag === 'yes') {
                $('#contact-email').focus();
            }
            $('#contact-email').addClass('error');
            submit_flag = 'no';
        }
        var contact_phone = $('#contact-phone').val();
        if (contact_phone === '') {
            if (submit_flag === 'yes') {
                $('#contact-phone').focus();
            }
            $('#contact-phone').addClass('error');
            submit_flag = 'no';
        }
        var contact_msg = $('#contact-msg').val();
        if (contact_msg === '' || contact_msg === 'Your Message *') {
            if (submit_flag === 'yes') {
                $('#contact-msg').focus();
            }
            $('#contact-msg').addClass('error');
            submit_flag = 'no';
        }

        if (submit_flag !== 'yes') {
            $('#contact-error').show().html('Пожалуйста, проверьте правильность заполнения полей.');
        } else {
            $('#contact-error').hide();
            $('#contact-success').hide();
            $('#contact-failed').hide();
            $('#contact-form').hide();
            $('#contact-loading').show();

            $.ajax({
                url: 'contact.php', //  Убедитесь, что этот                    success: function (data) {
                    data = jQuery.trim(data);
                    if (data === 'ok') {
                        $('#contact-error').hide();
                        $('#contact-failed').hide();
                        $('#contact-form').hide();
                        $('#contact-loading').hide();
                        $('#contact-success').show();
                        $('#contact-name').val('');
                        $('#contact-email').val('');
                        $('#contact-phone').val('');
                        $('#contact-msg').val('');

                        setTimeout(function () {
                            $('#contact-success').hide();
                            $('#contact-form').show();
                        }, 5000);
                    } else {
                        $('#contact-error').hide();
                        $('#contact-success').hide();
                        $('#contact-form').hide();
                        $('#contact-loading').hide();
                        $('#contact-failed').show();

                        setTimeout(function () {
                            $('#contact-failed').hide();
                            $('#contact-form').show();
                        }, 5000);
                    }
                },
                error: function () {
                    // Обработка ошибки AJAX запроса
                    $('#contact-error').hide();
                    $('#contact-success').hide();
                    $('#contact-form').hide();
                    $('#contact-loading').hide();
                    $('#contact-failed').show();

                    setTimeout(function () {
                        $('#contact-failed').hide();
                        $('#contact-form').show();
                    }, 5000);
                }
            });
        }
    }
})(jQuery);
