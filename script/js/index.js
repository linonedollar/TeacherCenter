$(function () {
    GetLoginData();


    //獲取最新教案 以時間排序獲取最新的教案 (4筆)

    // let data = {}; 

    // $.ajax({
    //     type: 'POST',
    //     url: '',
    //     data: JSON.stringify(data),
    //     contentType: 'application/json; charset=utf-8',
    //     dataType: 'json',
    //     success: function (data) {
    //         if (data.Messenger === 'SUCCESS') {
    //             RenderSubject(data.data);
    //         }
    //         else {
    //             alert(data.Messenger);
    //         }
    //     },
    //     error: function (XMLHttpRequest, textStatus, errorThrown) {
    //         console.log(XMLHttpRequest);
    //     }
    // });

    //下面測試用，上面正式拿資料 
    //------
    let data = [];

    for (let i = 0; i <= 2; i++) {
        data.push({
            idSubject: i,
            Su_Category: i,
            Su_SubName: `專案名稱${i}`,
            Su_AppStartTime: '2019-01-01',
            Su_AppEndTime: '2019-01-01',
            Su_PublishTime: '2018-07-01',
            Su_Su_StartSemester: '108-1',
        });
    }
    RenderSubject(data);
    //----以上可註解
});

//網頁渲染
function RenderSubject(data) {
    let html = '';
    $('#project_link').empty();
    for (let i = 0; i < data.length; i++) {
        html += `<li><a href="/pages/f_project.html?cid=${data[i].Su_Category}&sid=${data[i].idSubject}" 
        class="box"><h3>${data[i].Su_AppStartTime}</h3><p>【${data[i].Su_Su_StartSemester}】${data[i].Su_SubName}</p></a></li>`;
    };
    $('#project_link').append(html);
}

function GetLoginData(){
    let cycu_admin = sessionStorage.cycu_admin;
    if(cycu_admin == undefined){
        $('#BarBg').load('/pages/user_login_bar.html');
    }
    else{
        $('#BarBg').load('/pages/user_logined.html');
    }
}