
$('#login-btn').click(function (e) {
    
    let cycu_admin = $('#cycu-admin').val();
    let cycu_pws = $('#cycu-pws').val();

    //傳送的帳密
    // let data = {
    //     cycu_admin: cycu_admin,
    //     cycu_pws: cycu_pws,
    // }

    // $.ajax({
    //     type: 'POST',
    //     url: '',
    //     data: JSON.stringify(data),
    //     contentType: 'application/json; charset=utf-8',
    //     dataType: 'json',
    //     success: function (data) {
    //         if (data.Messenger === 'SUCCESS') {
    //             SaveLogin(data.data, cycu_admin);
    //         }
    //         else {
    //             alert(data.Messenger);
    //         }
    //     },
    //     error: function (XMLHttpRequest, textStatus, errorThrown) {
    //         console.log(XMLHttpRequest);
    //     }
    // });

    //資料範例
    //------
    let data = {
        TeacherName: '陳測試',
        PersonnelCode: 'TestCode',
        ArrivalDate: '1999-01-01',
        ArrivalPeriod: '29年0月',
        Department: 'OO系',
        School: 'XX學院',
    }
    SaveLogin(data);
    //-------
    
});

function SaveLogin(data,cycu_admin){
    sessionStorage.cycu_admin = cycu_admin;
    sessionStorage.TeacherName = data.TeacherName;
    sessionStorage.PersonnelCode = data.PersonnelCode;
    sessionStorage.ArrivalDate = data.ArrivalDate;
    sessionStorage.ArrivalPeriod = data.ArrivalPeriod;
    sessionStorage.Department = data.Department;
    sessionStorage.School = data.School;
    alert('登入成功!...重新導向');
    location.reload(); 
}
