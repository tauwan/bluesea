$(function () {
    // Initialize foundation datepicker
    $('body').on('focus', '.fdatepicker', function () {
        $(this).fdatepicker({
            format: 'dd-mm-yyyy',
            disableDblClickSelection: true,
            leftArrow: '<i class="arrow-left"></i>',
            rightArrow: '<i class="arrow-right"></i>'
        });
    });

    $('body').on('focus', '.ftimepicker', function () {
        if ($('.timepicker').length == 0) {
            var timepicker = $(document.createElement('div'));
            var container = $(this).closest('.datetime');

            timepicker.addClass('timepicker').css({
                'top': container.offset().top,
                'left': container.offset().left,
                'margin-top': container.height() - 1,
                'width': container.width()
            });
            $(this).uniqueId();
            timepicker.attr('data-for', $(this).attr('id'));

            var hours = "";
            var minutes_seconds = "";

            for (var i = 0; i <= 60; i++) {
                i = (i < 10) ? '0' + i : i;

                if (i <= 24) {
                    hours += '<option value="' + i + '">' + i + '</option>';
                }

                minutes_seconds += '<option value="' + i + '">' + i + '</option>';
            }

            var content = '<div class="row collapse">\
                                <div class="large-4 medium-4 small-4 column">\
                                    <label class="timepicker__labels">Hour</label>\
                                </div>\
                                <div class="large-4 medium-4 small-4 column">\
                                    <label class="timepicker__labels">Minute</label>\
                                </div>\
                                <div class="large-4 medium-4 small-4 column">\
                                    <label class="timepicker__labels">Second</label>\
                                </div>\
                            </div>\
                            <div class="row collapse timepicker__dropdowns">\
                                <div class="large-4 medium-4 small-4 column">\
                                    <select class="custom-select" id="t_hours">' + hours + '</select>\
                                </div>\
                                <div class="large-4 medium-4 small-4 column">\
                                    <select class="custom-select" id="t_mins">' + minutes_seconds + '</select>\
                                </div>\
                                <div class="large-4 medium-4 small-4 column">\
                                    <select class="custom-select" id="t_secs">' + minutes_seconds + '</select>\
                                </div>\
                            </div>';

            timepicker.html(content);

            timepicker.appendTo('body');

            $('.custom-select').selectmenu({
                classes: {
                    'ui-selectmenu-menu': 'timepicker-selectmenu'
                }
            });
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.timepicker');
        var selectmenu = $('.timepicker-selectmenu');
        var time = "";
        var input = $('#' + container.data('for'));

        if (!container.is(e.target) && container.has(e.target).length === 0 && !input.is(e.target) && !selectmenu.is(e.target) && selectmenu.has(e.target).length === 0) {
            time = container.find('#t_hours').val() + ":" + container.find('#t_mins').val() + ":" + container.find('#t_secs').val();
            input.val(time);
            container.remove();
        }
    });

    $('body').on('keyup', '.ftimepicker', function (e) {
        var time_val = $(this).val();

        if (time_val.length > 7) {
            var reg_ex = /^(2[0-3]|1[0-9]|0[0-9]|[^0-9][0-9]):([0-5][0-9]|[0-9]):([0-5][0-9]|[0-9])$/;

            if (!reg_ex.test(time_val)) {
                time_val = '00:00:00';
            }

            var time_array = time_val.split(':');

            $('#t_hours').val(time_array[0]).selectmenu('refresh').trigger('selectmenuselect');
            $('#t_mins').val(time_array[1]).selectmenu('refresh').trigger('selectmenuselect');
            $('#t_secs').val(time_array[2]).selectmenu('refresh').trigger('selectmenuselect');
        }
    });
});
