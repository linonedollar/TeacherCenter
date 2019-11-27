$(function () {
    let TeacherName = sessionStorage.TeacherName;
    $('#hello').html(`${TeacherName}，您好！`);
});

$('#logout-btn').click(function (e) { 
    e.preventDefault();
    sessionStorage.clear();
    alert('登出成功!...重新導向')
    location.reload();
});