$(function () {
    let url = new URL(location.href);
    let params = url.searchParams;
    let id = params.get('id');
    if(id == undefined || id == ''){
        location.href = '../index.html';
    }
    let data = {
        data:[
            {}
        ]
    }
});


function GetSubject(){

    $.ajax({
        type: 'POST',
        url: '',
        data: null,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            if (data.Messenger === 'SUCCESS') {
                FillSelect(data.idCategory, data.Ca_MainCategory, 'select_category');
            }
            else {
                alert(data.Messenger);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
        }
    });

}