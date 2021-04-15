var app = new Vue({
    el: '#wrapper',
    data: {
        pointColor: "blue",
        gnbList: [{
            "depthName": "메뉴01",
            "depthLink": "#"
        }, {
            "depthName": "메뉴02",
            "depthLink": "#"
        }, {
            "depthName": "메뉴03",
            "depthLink": "#"
        }, {
            "depthName": "메뉴04",
            "depthLink": "#"
        }, {
            "depthName": "메뉴05",
            "depthLink": "#"
        }],
        colorChip: [{
            "colorChipCode": "#205FB4",
            "colorChipKor": "파란색",
            "colorChipEng": "blue"
        }, {
            "colorChipCode": "#82B024",
            "colorChipKor": "초록색",
            "colorChipEng": "green"
        }, {
            "colorChipCode": "#FF7D39",
            "colorChipKor": "주황색",
            "colorChipEng": "orange"
        }, {
            "colorChipCode": "#CF1218 ",
            "colorChipKor": "빨간색",
            "colorChipEng": "red"
        }, {
            "colorChipCode": "#613DC9",
            "colorChipKor": "보라색",
            "colorChipEng": "purple"
        }]
    }
  })