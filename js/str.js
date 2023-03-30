let langData = {
    'en': {
        'toggle': 'switch | English',
        "about_header": '關於我',
        "experience_header": '經歷',
        "education_header": '學歷',
        "skills_header": '技能',
        "work_header": '作品集',
        "interests_header": '興趣',
        "experience_title": '經歷',
        "education_title": '學歷',
        "skills_title": '技能',
        "work_title": '作品集',
        "interests_title": '興趣',
        "name": '楊偉至',
        "addr": '新北市泰山區明志路三段204巷12號3樓322室',
        "character": '熱愛新技術和解決問題，也熱愛生活、大自然。',
        "tai": '泰山職訓局',
        "ski": 'PHP 網頁設計',
        "iot": '物聯網',
        "iot_1": '現場與前端',
        "iot_content": '統整現場設備數位資訊，建立SCADA，決定監控點位，分析設備異常，提高維修能量。在公司內網查看設備狀況',
        "auto": '自動化',
        "auto_1": 'PLC 與 配線',
        "auto_content": '設備自動化工程，測試、安裝、維護',
        "tai_time": '2022年9月 - 2023年3月',
        "iot_time": '2018年9月 - 2022年6月',
        "auto_time": '2012年2月 - 2018年2月',
        "uni": '明新科技大學',
        "department": '機械工程系',
        "score": '機械工程系平均成績 84',
        "uni_time": '2005年9月 - 2007年6月',
        "front": '前端',
        "back": '後端',
        "design": '影像',
        "calendar": '萬 年 曆',
        "vote": '投 票 系 統',
        "guitar": '吉 他 簡 介',
        "student": '學 生 管 理',
        "gui": '吉他',
        "gui_content": '高興的時候，難過的時候，一個人的時候，手癢的時候，彈奏喜歡的曲子，心情可以沉澱下來。',
        "swim": '游泳',
        "swim_content": '躺在水裡，很舒服 ； 但疫情開始後，就沒去了。',
    },
    'zh': {
        'toggle': '切換 | 中文',
        "about_header": 'ABOUT ME',
        "experience_header": 'EXPERIENCE',
        "education_header": 'EDUCATION',
        "skills_header": 'SKILLS',
        "work_header": 'COLLECTION',
        "interests_header": 'INTEREST',
        "experience_title": 'Experience',
        "education_title": 'Education',
        "skills_title": 'Skills',
        "work_title": 'Collection',
        "interests_title": 'Interest',
        "name": 'Moksha Yang',
        "addr": 'No. 12-3, Ln. 204, Sec. 3, Mingzhi Rd., Taishan Dist., New Taipei City,Taiwan (R.O.C.)',
        "character": 'Love new technology and problem solving, but also love life.',
        "tai": 'Taishan Vocational Training Site',
        "ski": 'PHP Web Design',
        "iot": 'IOT',
        "iot_1": 'On-site and Front-end Web Design',
        "iot_content": "Integrate digital information of on-site equipment, establish SCADA, determine monitoring points, analyze equipment anomalies, and improve maintenance efficiency. View equipment status on the company's internal network.",
        "auto": 'Automation',
        "auto_1": 'Programmable Logic Controller and Wiring',
        "auto_content": 'Equipment Automation Engineering, Testing, Installation, and Maintenance.',
        "tai_time": 'September 2022 - March 2023',
        "iot_time": 'September 2018 - June 2022',
        "auto_time": 'February 2012 - February 2018',
        "uni": 'Ming Hsin University of Science and Technology',
        "department": 'Mechanical Engineering',
        "score": 'average score 84',
        "uni_time": 'September 2005 - June 2007',
        "front": 'Front-end',
        "back": 'Back-end',
        "design": 'Graphic design',
        "calendar": 'Calendar',
        "vote": 'Voting system',
        "guitar": 'Guitar Introduction',
        "student": 'SM',
        "gui": 'Guitar',
        "gui_content": 'When I am happy or sad, alone, or feeling restless, playing my favorite tunes on the guitar helps me settle my mood.',
        "swim": 'Swim',
        "swim_content": "Lying in the water is very comfortable, but I haven't gone since the outbreak of the pandemic.",
    }
};
let textList = [
    "我是一個熱愛新技術和解決問題的人，也熱愛生活、大自然。",
    "學習、或是實作，都享受在其中。",
    "一個無限可能和探索的世界。",
];
let index = 0;

// 設置默認
let defaultLang = 'en';

// 頁面載入時
Object.keys(langData[defaultLang]).forEach(function (key) {
    let selector = '#' + key;
    let text = langData[defaultLang][key];
    $(selector).text(text);

});
$('#toggleLang').text(langData[defaultLang]['toggle']);

// 切換
$('#toggleLang').on('click', function () {
    let currentLang = $(this).text();
    let newLang = (currentLang === langData['en']['toggle']) ? 'zh' : 'en'; // 切換語言
    Object.keys(langData[newLang]).forEach(function (key) {
        let selector = '#' + key;
        let text = langData[newLang][key];
        $(selector).text(text);

    });
    $('#toggleLang').text(langData[newLang]['toggle']);
 
        if (textList[index] === "我是一個熱愛新技術和解決問題的人，也熱愛生活、大自然。") {
            textList = [
                "Love new technology and problem solving, but also love life.",
                "I enjoy learning, coding, and problem-solving",                             // 我喜歡學習、編碼和解決問題。
                "Coding is my gateway to a world of endless possibilities and exploration.",//程式是我通往無限可能和探索世界的門戶。
            ];
        } else {
            textList = [
                "我是一個熱愛新技術和解決問題的人，也熱愛生活、大自然。",
                "學習、或是實作，都享受在其中。",
                "一個無限可能和探索的世界。",
            ];
        }
       

});




// 定義要顯示的文字內容

// textList = [
//     "Love new technology and problem solving, but also love life.",
//     "I love to code and explore new technologies.",
//     "Programming is more than just a job or career for me, it's a true passion.",
// ];

// 定義光標顯示/隱藏的函數
function blinkCursor(show) {
    let container = $("#text-container");
    if (show) {
        container.addClass("show-cursor");
    } else {
        container.removeClass("show-cursor");
    }
}

// 定義寫字的函數
function writeText(text, callback) {
    let container = $("#text-container");
    let index = 0;
    let timer = setInterval(function () {
        container.append(text.charAt(index));
        index++;
        if (index === text.length) {
            clearInterval(timer);
            setTimeout(function () {
                blinkCursor(false);
                callback();
            }, 1000);
        }
    }, 100);
    blinkCursor(true);
}

// 定義刪除文字的函數
function deleteText(callback) {
    let container = $("#text-container");
    let textLength = container.text().length;
    let timer = setInterval(function () {
        container.text(container.text().substring(0, container.text().length - 1));
        textLength--;
        if (textLength === 0) {
            clearInterval(timer);
            setTimeout(function () {
                blinkCursor(false);
                callback();
            }, 1000);
        }
    }, 100);
    blinkCursor(true);
}

// 遞歸調用寫字和刪除文字的函數
function loopText(index) {
    let nextIndex = (index + 1) % textList.length;
    writeText(textList[index], function () {
        deleteText(function () {
            setTimeout(function () {
                loopText(nextIndex);
            }, 1000);
        });
    });
}

// 開始循環顯示文字
loopText(0);
