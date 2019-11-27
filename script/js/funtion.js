export function FillSelect(data,field_value , field_text, id) {
    let object = $(`#${id}`);
    object.empty();
    for (let i = 0; i < data.length; i++) {
        let _val = data[i][field_value];
        let _text = data[i][field_text];

        object.append(`<option value="${_val}">${_text}</option>`);
    }

}

export function SingleFileUpload(url, id) {
    let data = new FormData();
    let files = $(`#${id}`).get(0).files;
    if (files.length > 0) {
        data.append("uploadfile", files[0]);
    }

    $.ajax({
        url: url,
        type: "post",
        data: data,
        contentType: false,
        processData: false,
        async: false,
        success: function () {
            //跳訊息提示
            alert('上傳成功!');
        }

    });

}
export function checkUserLogin(){
    let cycu_admin = sessionStorage.cycu_admin;
    if(cycu_admin == undefined){
        location.href = '../index.html';
    }
}