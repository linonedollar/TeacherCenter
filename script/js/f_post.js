// import { FillSelect, SingleFileUpload } from './funtion.js';

$(function () {
    let url = new URL(location.href);
    let params = url.searchParams;
    let cid = params.get('cid');
    if (cid == undefined || cid == '') {
        location.href = '../index.html';
    }

    // GetSubject(id);
    RenderSubject(cid, null);


});

//ajax

function GetSubject(cid) {

    let data = {
        Su_Category: cid,
    }
    $.ajax({
        type: 'POST',
        url: '',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            if (data.Messenger === 'SUCCESS') {
                RenderSubject(cid, data.data);
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

//網頁渲染
function RenderSubject(cid, data_d) {
    let data = [];

    for (let i = 0; i <= 2; i++) {
        data.push({
            idSubject: i,
            Su_SubName: `專案名稱${i}`,
            Su_AppStartTime: '2019-01-01',
            Su_AppEndTime: '2019-01-01',
            Su_PublishTime: '2018-07-01'
        });
    }

    let html = [];

    for (let i = 0; i < data.length; i++) {
        html.push(
            `<div class="card">
            <div class="card-header text-center">${data[i].Su_SubName}</div>
                <div class="card-body">
                    <p>申請時間：${data[i].Su_AppStartTime} - ${data[i].Su_AppEndTime}</p>
                    <p>公告時間：${data[i].Su_PublishTime}</p>
                </div>
            <div class="card-footer">
                <button class="btn-block btn btn-success btn-toProject" data-cid=${cid} data-sid=${data[i].idSubject}>申請專案</button>
            </div>
        </div>`);
    };
    // ${cid},${data[i].idSubject}
    $('#Pagination').pagination({
        dataSource: html,
        pageSize: 3,
        prevText: '上一頁',
        nextText: '下一頁',
        ulClassName: 'pagination',

        callback: function (data, pagination) {
            $('#card-item').html('');
            $('#card-item').append(data);

            $('.btn-toProject').click(function (e) {
                let cid = $('.btn-toProject').data('cid');
                let sid = $('.btn-toProject').data('sid');
                // location.href = `f_project.html?cid=${cid}&sid=${sid}`;
                location.href = `f_project.html?cid=${cid}&sid=${sid}`;
            });

        }
    });
}

