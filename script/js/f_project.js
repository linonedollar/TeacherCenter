import { GetTypeOptions } from './comm.js';
import { checkUserLogin } from './funtion.js';
$(function () {
    let url = new URL(location.href);
    let params = url.searchParams;
    let cid = params.get('cid');
    if (cid == undefined || cid == '') {
        location.href = '../index.html';
    }
    let sid = params.get('sid');
    if (sid == undefined || sid == '') {
        location.href = '../index.html';
    }
    checkUserLogin();
    fillUserData();
    GetTypeRender(cid);
    GetSubject(sid);
    // RenderSubject();
});


$('#projectForm').submit(function (e) {

    e.preventDefault();
    let url = new URL(location.href);
    let params = url.searchParams;
    let cid = params.get('cid');

    let TeacherName = $('#input_TeacherName').val();
    let PersonnelCode = $('#input_TeacherCode').val();
    let School = $('#input_School').val();
    let Department = $('#input_Department').val();
    let ArrivalDate = $('#input_ArrivalDate').val();
    let ArrivalPeriod = $('#input_ArrivalPeriod').val();

    let ProjectCategroy = params.get('sid');
    let ProjectName = $('#input_ProjectName').val();
    let Email = $('#input_Email').val();
    let Tel = $('#input_Tel').val();
    let HadProjectBefore = $('#input_HadProjectBefore').val();
    let Amount_Before = $('#input_Amount_Before').val();
    let Other_Project = $('#select_Other_Project').val();
    if (Other_Project == 'other')
        Other_Project = $('#input_Other_Project').val();

    let Amount_Other = $('#input_Amount_Other').val();
    let CourseName = $('#input_CourseName').val();
    let CourseCode = $('#input_CourseCode').val();
    let Publisher = $('#input_Publisher').val();
    let StartofSemester = $('#select_start_term option:selected').text();
    let EndofSemester = $('#select_end_term option:selected').text();

    let Type = '';
    let WorkshopName = '';

    let selectType = $('#select_type').val();

    if (selectType != 'null') {
        Type = $('#select_type option:selected').text();
        if (selectType === 'input_name' || selectType === 'input_other') {
            WorkshopName = $('#type_text').val();
        }
    }

    let ApplicationFormData = {
        TeacherName: TeacherName,
        PersonnelCode: PersonnelCode,
        School: School,
        Department: Department,
        ArrivalDate: ArrivalDate,
        ArrivalPeriod: ArrivalPeriod,
        ProjectCategroy: ProjectCategroy,
        ProjectName: ProjectName,
        Email: Email,
        Tel: Tel,
        HadProjectBefore: HadProjectBefore,
        Amount_Before: Amount_Before,
        Amount_Other: Amount_Other,
        CourseName: CourseName,
        CourseCode: CourseCode,
        Publisher: Publisher,
        StartofSemester: StartofSemester,
        EndofSemester: EndofSemester,
        Type: Type,
        WorkshopName: WorkshopName
    }

    console.log(ApplicationFormData);

    // $.ajax({
    //     type: "POST",
    //     url: "/controller/SQL.ashx",
    //     data: JSON.stringify(Subject),
    //     contentType: "application/json; charset=utf-8",
    //     dataType: "json",
    //     success: function (data) {
    //         if(data.Messenger === 'SUCCESS'){
    //              uploadfile(data.data.id);
    //         }
    //         else{
    //             alert(data.Messenger);
    //         }
    //     },
    //     error: function (XMLHttpRequest, textStatus, errorThrown) {
    //         console.log(XMLHttpRequest);
    //     }
    // });
    // return false;
});

$('.custom-file input').change(function (e) {
    let name = $(this).val().replace(/.*[\/\\]/, '');
    let object = $(this).next();
    object.html(name);
});

$('#select_Other_Project').change(function (e) {
    let val = $('#select_Other_Project').val();
    if (val == 'other')
        $('#input_Other_Project').prop("disabled", false);
    else
        $('#input_Other_Project').prop("disabled", true);
})


//網頁渲染
function GetTypeRender(params) {
    let optHtml = GetTypeOptions(params);
    switch (params) {
        case '2':
        case '6':
        case '8':
        case '9':
            $('#select_type').prop('disabled', false);
            break;
        default:
            $('#select_type').prop('disabled', true);
            break;
    }
    $('#select_type').empty();
    $('#select_type').append(optHtml);

    $('#select_type').change(function (e) {
        $('#type_text').remove();
        let type = $('#select_type').val();
        let placeholder;

        if (type === 'input_name') {
            placeholder = '名稱';
        }
        else if (type === 'input_other') {
            placeholder = '其他';
        }
        if (placeholder !== undefined) {
            let html =
                `<input id="type_text" type="text" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg" placeholder=${placeholder} required></input>`;

            $('#type_container').append(html);
        }

    });
}

//取得選擇的subject 並填入下拉式選單
function GetSubject(sid) {
    // let data = {
    //     idSubject: sid,
    // }
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
    let data = {
        Su_SubName: '我是名稱',
        Su_StartSemester: '108-1',
        Su_EndSemester: '108-2'
    }
    RenderSubject(data);
}

function RenderSubject(data) {
    $('#subName').html(data.Su_SubName);
    let object = $('#select_start_term');
    object.empty();
    object.append(`<option value="0">${data.Su_StartSemester}</option>`);
    object.append(`<option value="1">${data.Su_EndSemester}</option>`);

    let object_2 = $('#select_end_term');
    object_2.empty();
    object_2.append(`<option value="0">${data.Su_StartSemester}</option>`);
    object_2.append(`<option value="1">${data.Su_EndSemester}</option>`);

    $('#select_start_term').change(function (e) {
        let object_2 = $('#select_end_term');
        if (object.val() == '1') {
            object_2.empty();
            object_2.append(`<option value="1">${data.Su_EndSemester}</option>`);
        }
        else {
            object_2.empty();
            object_2.append(`<option value="0">${data.Su_StartSemester}</option>`);
            object_2.append(`<option value="1">${data.Su_EndSemester}</option>`);
        }

    });
}

function fillUserData() {
    let TeacherName = '計畫主持人/老師姓名：' + sessionStorage.TeacherName;
    let PersonnelCode = '人事碼：' + sessionStorage.PersonnelCode;
    let ArrivalDate = '到校日：' + sessionStorage.ArrivalDate;
    let ArrivalPeriod = '到校期間：' + sessionStorage.ArrivalPeriod;
    let Department = '聘任系所：' + sessionStorage.Department;
    let School = '所屬學院：' + sessionStorage.School;

    $('#input_TeacherName').val(TeacherName);
    $('#input_TeacherCode').val(PersonnelCode);
    $('#input_School').val(School);
    $('#input_Department').val(Department);
    $('#input_ArrivalDate').val(ArrivalDate);
    $('#input_ArrivalPeriod').val(ArrivalPeriod);
}


function fileUpload(id) {

    let fileData = new FormData();

    fileData = appendFile('inputGroupFile01', fileData);
    fileData = appendFile('inputGroupFile02', fileData);
    fileData = appendFile('inputGroupFile03', fileData);
    fileData = appendFile('inputGroupFile04', fileData);

    fileData.append('id', id);
    //之後送ashx做處理
    $.ajax({
        url: "/controller/uploadfile.ashx",
        type: "post",
        data: fileData,
        contentType: false,
        processData: false,
        async: false,
        success: function (data) {
            alert(data.Messenger);
        }
    });

}

function appendFile(id, fileData) {
    if ($(`#${id}`).val()) {
        let files = $(`#${id}`)[0].files;
        fileData.append(files[0].name, files[0]);
    }
    return fileData;
}