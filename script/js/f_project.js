import { GetTypeOptions } from './comm.js';

$(function () {
    let url = new URL(location.href);
    let params = url.searchParams;
    let cid = params.get('cid');
    if (cid == undefined || cid == '') {
        location.href = '../index.html';
    }
    GetTypeRender(cid);
    // GetSubject(cid);
    // RenderSubject();
});


//網頁渲染
function GetTypeRender(params) {
    let html;
    let optHtml = GetTypeOptions(params);
    switch (params) {
        case '2':
        case '6':
        case '8':
        case '9':
            html =
                `<select class="form-control" id="select_type">
                    ${optHtml}
                </select>`;
            break;
        default:
            html =
                `<select class="form-control" id="select_type" disabled>
                    ${optHtml}
                </select>`;
            break;
    }
    $('#type_container select').remove();
    $('#type_container').append(html);

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