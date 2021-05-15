/* 
Script that uses Ajax to replace a part of home.html with
the count.html template.

This is helpful because it prevents the page to reload when posting a value to
the server (backend), and we can also get a value back to the page from the server.

In this case we are updating the "count" amount and also changing the format of the
submit button.
*/

/* Here we are using Jquery in conjuction with Ajax */

$("button").click(function () {
    var identificacion = $(this).attr("id");
    var count_id = "#" + "c" + identificacion;
    //alert(count_id);
    $.ajax(
        {
            url: "/update_decimal",
            type: "POST",
            dataType: "json",
            data: { id: identificacion },
            success: function (data) {
                $(count_id).replaceWith(data);
            }
        });
});
