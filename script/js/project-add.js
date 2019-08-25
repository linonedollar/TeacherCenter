import { FillSelect, SingleFileUpload } from './funtion.js';

$(function () {
    GetCategory();
});

$('#subjectForm').submit(function (e) {
    e.preventDefault();
    let Su_Category = $('#select_category').val();
    let Su_SubName = $('#input_subjectName').val();
    let Su_AppStartTime = $('#input_appTime').data('daterangepicker').startDate;
    let Su_AppEndTime = $('#input_appTime').data('daterangepicker').startDate;
    let Su_AppReviewStartTime = $('#input_appReviewTime').data('daterangepicker').startDate;
    let Su_AppReviewEndTime = $('#input_appReviewTime').data('daterangepicker').startDate;
    let Su_CloseReviewStartTime = $('#input_closeReviewTime').data('daterangepicker').startDate;
    let Su_CloseReviewEndTime = $('#input_closeReviewTime').data('daterangepicker').startDate;

    let Subject = {
        Su_Category: Su_Category,
        Su_SubName: Su_SubName,
        Su_AppStartTime: Su_AppStartTime,
        Su_AppEndTime: Su_AppEndTime,
        Su_AppReviewStartTime: Su_AppReviewStartTime,
        Su_AppReviewEndTime: Su_AppReviewEndTime,
        Su_CloseReviewStartTime: Su_CloseReviewStartTime,
        Su_CloseReviewEndTime: Su_CloseReviewEndTime
    }
    

    $.ajax({
        type: "POST",
        url: "/controller/SQL.ashx",
        data: JSON.stringify(Subject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if(data.Messenger === 'SUCCESS'){
                alert('新增成功');
            }
            else{
                alert(data.Messenger);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest);
        }
    });

    // moment(Su_AppStartTime).format('MM-DD-YYYY')
    
});


function GetCategory() {
    $.ajax({
        type: 'POST',
        url: '',
        data: null,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            if (data.Messenger === 'SUCCESS') {
                FillSelect(data.data, 'idCategory', 'Ca_MainCategory', 'select_category');
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
