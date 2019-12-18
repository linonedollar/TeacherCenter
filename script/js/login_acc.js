$(function () {
    let url = new URL(location.href);
    let params = url.searchParams;
    let sessionId = params.get('sessionId');
    let seq = params.get('seq');
    let User_id = params.get('User_id');
    if (sessionId == undefined || sessionId == '' || seq == undefined || seq == '' || User_id == undefined || User_id == '') {
        location.href = '../index.html';
    }
    else {
        let data = {
            sessionId: sessionId,
            seq: seq,
            User_id: User_id,
        }
        
        //傳送並抓取登入資料
        // $.ajax({
        //     type: "POST",
        //     url: "/controller/login.ashx",
        //     data: JSON.stringify(data),
        //     contentType: "application/json; charset=utf-8",
        //     dataType: "json",
        //     success: function (data) {
        //         SaveLogin(data, User_id)
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         console.log(XMLHttpRequest);
        //     }
        // });
    }
});

function SaveLogin(data, cycu_admin) {
    sessionStorage.cycu_admin = cycu_admin;
    sessionStorage.TeacherName = data.TeacherName;
    sessionStorage.PersonnelCode = data.PersonnelCode; //這欄位應該=id
    //sessionStorage.ArrivalDate = data.ArrivalDate; 沒有資料 欄位取消
    //sessionStorage.ArrivalPeriod = data.ArrivalPeriod; 沒有資料 欄位取消
    sessionStorage.Department = data.Department; 
    //sessionStorage.School = data.School; 沒有資料 欄位取消
    alert('登入成功!...重新導向');
    location.href = '../index.html';
}
