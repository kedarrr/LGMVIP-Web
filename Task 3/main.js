function fun() {
    let l = [];
    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let photo =$("#photo").val();
    let gender = $('input[name="gender"]:checked').val();;

    let selected = new Array();
    $("input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
    });
    let add = '<div class=s1>'+'<table><tr><td><p class="p"><strong>Name </strong>:'+`${name}`+'</p><p class="p"><strong>Email </strong>: '+`${email}`+'</p><p class="p"><strong>Phone </strong>:'+`${phone}`+'</p><p class="p"><strong>Gender</strong> : '+`${gender}`+'</p><p class="p"><strong>Skills</strong> : '+`${selected}`+'<td><img src="'+`${photo}`+'"></td></tr></table></div>';
    $('#c').append(add);
    $("#form").trigger("reset");
}
