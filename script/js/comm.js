export function GetTypeOptions(key) {
    let opt;
    switch (key) {
        case '2':
            opt = [
                { value: '', text: '輔系、雙主修課程' },
                { value: '', text: '專業倫理課程' },
                { value: '', text: '跨領域/就業學程課程' },
                { value: '', text: '全英語授課課程' },
                { value: '', text: '微型課程' },
                { value: '', text: '程式設計課程' },
                { value: '', text: 'PBL課程' }
            ]
            break;
        case '6':
            opt = [
                { value: '', text: '教材、教具專案' },
                { value: '', text: '教科書專案' }
            ]
            break;
        case '8':
            opt = [
                { value: '', text: '校級教與學工作坊' },
                { value: '', text: '課程教學工作坊' },
                { value: '', text: '教學(教法)工作坊' },
                { value: '', text: '院級特色教學工作坊' },
                { value: 'input_name', text: '校級衍伸出之院級工作坊' },
                { value: '', text: '跨領域教學工作坊' },
                { value: '', text: '英語教學工作坊' },
                { value: '', text: '遠距教學課程工作坊' },
                { value: '', text: '政策性特色課程工作坊' }
            ]
            break;
        case '9':
            opt = [
                { value: '', text: '數位科技教學法' },
                { value: '', text: '翻轉教學法' },
                { value: '', text: 'PBL教學法' },
                { value: '', text: '全英語授課課程' },
                { value: '', text: '微型課程' },
                { value: '', text: '程式設計課程' },
                { value: 'input_other', text: '其他' }
            ]
            break;
        default:
            opt = [
                { value: 'null', text: '此類別無須選擇' }
            ]
            break;
    }
    let optHtml;
    for (let i = 0; i < opt.length; i++) {
        optHtml += `<option value=${opt[i].value}>${opt[i].text}</option>`
    }
    return optHtml;
}