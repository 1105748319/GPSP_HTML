var home;
home = new Vue({

    el: '#home',
    //初始化数据类型
    data: {
        //商品类型
        hmtop:[],
        goodsType: [],
        leftNavigation: [],
        activity: [],
        mixture:[],



    },
    //提交时间方法
    methods: {},
    //页面加载后初始化方法
    created: function () {
        var _this = this;
        //初始化横向菜单列表
        var goodsTypeList = [{name:"协议供货"},
            {name:"定点服务"},
            {name:"在线询价"},
            {name:"在线"},
        ];
        _this.goodsType = goodsTypeList;

        //侧边导航
        var leftNavigationList = [
            {name: "办公用品", url: "#", val: [
                {name: "薄本册", url: "#", val: [
                    {name: "便签本/便条纸/N次贴", url: "#"},
                    {name: "胶装本", url: "#"},
                    {name: "螺旋本", url: "#"},
                    {name: "拍纸本", url: "#"},
                    {name: "通讯录/电话本", url: "#"},
                    {name: "同学录/纪念册", url: "#"},
                    {name: "万用手册", url: "#"},
                    {name: "硬面笔记本及其他", url: "#"}
                ]
                },
                {name: "财务行政用品", url: "#", val: [
                    {name: "报表", url: "#"},
                    {name: "财务印章", url: "#"},
                    {name: "单据/凭证", url: "#"},
                    {name: "其它财会用品", url: "#"},
                    {name: "手提金库/印章箱", url: "#"},
                    {name: "印台/印泥/印油", url: "#"},
                    {name: "账册/账本/封面", url: "#"},
                    {name: "文件管理", url: "#"}
                ]
                },
                {name: "刀剪/粘胶/测绘", url: "#", val: [
                    {name: "裁纸/切纸/拆信刀", url: "#"},
                    {name: "剪刀/美工刀/刀片", url: "#"},
                    {name: "胶棒/固体胶/胶水", url: "#"},
                    {name: "胶带/胶纸/封箱带/胶布", url: "#"},
                    {name: "胶带座/封箱器", url: "#"},
                    {name: "其它", url: "#"},
                    {name: "三角板/各类尺/圆规/算盘", url: "#"},
                    {name: "显微镜/放大镜", url: "#"}
                ]
                },
                {name: "计算器具", url: "#", val: [
                    {name: "程序员型计算器", url: "#"},
                    {name: "电子计算器", url: "#"},
                    {name: "科学型计算器", url: "#"},
                    {name: "算术型计算器", url: "#"},
                    {name: "专用计算器", url: "#"}
                ]
                },
                {name: "书写/绘画用具", url: "#", val: [
                    {name: "书写用笔类用具", url: "#"},
                    {name: "其它功能笔", url: "#"},
                    {name: "书法绘画用具", url: "#"},
                ]
                },
                {name: "其它办公用品", url: "#", val: [
                    {name: "箱袋类", url: "#"},
                    {name: "铭牌", url: "#"},
                    {name: "信封", url: "#"},
                    {name: "塑封机配件及塑封膜", url: "#"}
                ]
                },
                {name: "收纳/陈列用品", url: "#", val: [
                    {name: "展架/板夹/书立/笔筒及配件类", url: "#"},
                    {name: "包/袋/盒等收纳用品", url: "#"},
                    {name: "文件柜/箱体类", url: "#"}
                ]
                },
                {name: "修正、涂、液用具", url: "#", val: [
                    {name: "墨水/补充液/墨囊", url: "#"},
                    {name: "其它涂改用具", url: "#"},
                    {name: "橡皮", url: "#"},
                    {name: "修正液/修正带/修正贴", url: "#"}
                ]
                }
            ]
            },
            {
                name: "办公设备", url: "#", val: [
                {name: "条码扫描/采集器材", url: "#", val: [
                    {name: "IC卡/磁卡/射频卡", url: "#"},
                    {name: "标签机/条码机", url: "#"},
                    {name: "读卡器", url: "#"},
                    {name: "数据采集器", url: "#"},
                    {name: "条码扫描枪", url: "#"},
                    {name: "条码扫描枪配件", url: "#"}
                ]
                },
                {name: "打印/复印", url: "#", val: [
                    {name: "打印机", url: "#"},
                    {name: "打印机配件", url: "#"},
                    {name: "喷墨打印机", url: "#"},
                    {name: "针式打印机", url: "#"},
                    {name: "复印机", url: "#"},
                    {name: "复印机配件", url: "#"}
                ]
                },
                {name: "传真/通信", url: "#", val: [
                    {name: "传真机及配件", url: "#"},
                    {name: "电话类", url: "#"},
                    {name: "其它通信设备及配件", url: "#"},
                    {name: "呼叫设备", url: "#"}
                ]
                },
                {name: "多功能一体机及配件", url: "#", val: [
                    {name: "多功能一体机", url: "#"},
                    {name: "多功能一体机配件", url: "#"}
                ]
                },
                {name: "门禁考勤设备", url: "#", val: [
                    {name: "考勤门禁", url: "#"},
                    {name: "考勤机配件", url: "#"},
                    {name: "监控安防", url: "#"}
                ]
                },
                {name: "点/验钞/收款机", url: "#", val: [
                    {name: "点钞机", url: "#"},
                    {name: "验钞笔/机", url: "#"},
                    {name: "点钞机配件", url: "#"},
                    {name: "收款机", url: "#"},
                    {name: "收款机配件", url: "#"}
                ]
                },
                {name: "扫描/投影", url: "#", val: [
                    {name: "扫描仪", url: "#"},
                    {name: "扫描仪配件", url: "#"},
                    {name: "投影机", url: "#"},
                    {name: "电子白板/幕布/投影胶片", url: "#"},
                    {name: "翻页激光笔", url: "#"},
                    {name: "投影机配件", url: "#"}
                ]
                },
                {name: "办公设备耗材", url: "#", val: [
                    {name: "带芯", url: "#"},
                    {name: "喷头", url: "#"},
                    {name: "其它办公设备耗材", url: "#"},
                    {name: "色带框", url: "#"},
                    {name: "油墨", url: "#"},
                    {name: "硒鼓", url: "#"},
                    {name: "粉盒", url: "#"},
                    {name: "墨粉/碳粉", url: "#"},
                    {name: "墨盒", url: "#"},
                    {name: "色带/碳带", url: "#"}
                ]
                },
                {name: "办公用纸", url: "#", val: [
                    {name: "其他功能用纸", url: "#"},
                    {name: "标签打印纸/条码纸", url: "#"},
                    {name: "彩色复印纸", url: "#"},
                    {name: "传真纸", url: "#"},
                    {name: "复写纸", url: "#"},
                    {name: "喷墨/相片纸/卡纸", url: "#"}
                ]
                }
            ]
            },
            {name: "家具用具", url: "#", val: [
                {name: "桌椅类", url: "#", val: [
                    {name: "办公椅", url: "#"},
                    {name: "办公桌", url: "#"},
                    {name: "会客椅", url: "#"},
                    {name: "会议桌", url: "#"},
                    {name: "接待台", url: "#"},
                    {name: "餐桌/供桌/折叠桌/其它桌及配件", url: "#"},
                    {name: "琴/棋/书/电脑桌", url: "#"}
                ]
                },
                {name: "保险箱/柜类", url: "#", val: [
                    {name: "保险箱/柜", url: "#"},
                    {name: "书柜/架", url: "#"},
                    {name: "储物柜/小型柜类", url: "#"},
                    {name: "衣帽柜/文件柜", url: "#"},
                    {name: "电视柜/飘窗柜/其他柜类及配件", url: "#"}
                ]
                },
                {name: "屏风隔断", url: "#", val: [
                    {name: "隔断", url: "#"},
                    {name: "屏风", url: "#"},
                    {name: "屏风隔断墙", url: "#"},
                    {name: "挂屏", url: "#"},
                    {name: "折屏", url: "#"},
                    {name: "座屏/插屏", url: "#"}
                ]
                },
                {name: "其它办公家具", url: "#", val: [
                    {name: "桌柜床类", url: "#"},
                    {name: "迎宾服务类", url: "#"},
                    {name: "垃圾桶", url: "#"},
                    {name: "雨伞架/桶/袋", url: "#"},
                    {name: "坐便椅", url: "#"},
                    {name: "主席台", url: "#"}
                ]
                },
                {name: "沙发/茶几", url: "#", val: [
                    {name: "茶几", url: "#"},
                    {name: "布艺/充气/皮艺/实木/滕竹/铁艺沙发", url: "#"},
                    {name: "懒人沙发/贵妃椅", url: "#"},
                    {name: "沙发床/凳/踏及沙发配件辅料", url: "#"}
                ]
                },
                {name: "校园家具", url: "#", val: [
                    {name: "课桌椅", url: "#"},
                    {name: "谱曲架", url: "#"},
                    {name: "其它校园家具", url: "#"},
                    {name: "实验柜/台", url: "#"},
                    {name: "宿舍用具", url: "#"},
                    {name: "演讲台", url: "#"}
                ]
                },
                {name: "床类及配件", url: "#", val: [
                    {name: "板木床类", url: "#"},
                    {name: "布艺/充气/皮艺/藤艺/铁艺床", url: "#"},
                    {name: "床垫", url: "#"},
                    {name: "床类配件", url: "#"},
                    {name: "其他床类", url: "#"}
                ]
                },
                {
                    name: "户外/庭院家具", url: "#", val: [
                    {name: "木屋凉亭/遮阳伞及配件", url: "#"},
                    {name: "沙滩床/吊床/沙滩桌子/折叠简易桌", url: "#"},
                    {name: "庭院凳/椅/摇椅/秋千/折叠床及其它", url: "#"}
                ]
                },
                {name: "几类家具", url: "#", val: [
                    {name: "茶几", url: "#"},
                    {name: "角几/边几", url: "#"},
                    {name: "炕几", url: "#"},
                    {name: "其它几类", url: "#"}
                ]
                },
                {name: "椅/凳/塌", url: "#", val: [
                    {name: "各类凳子及配件", url: "#"},
                    {name: "儿童餐椅/椅/凳", url: "#"},
                    {name: "各类椅子及配件", url: "#"},
                    {name: "其他坐具配件", url: "#"}
                ]
                }
            ]
            },
            {
                name: "日用百货", url: "#", val: [
                {name: "厨房/餐饮用品", url: "#", val: [
                    {name: "锅/碗/碟/筷", url: "#"},
                    {name: "壶、杯、罐", url: "#"},
                    {name: "厨房器皿", url: "#"},
                    {name: "清洁用具", url: "#"},
                    {name: "一次性用品", url: "#"},
                    {name: "其他用品", url: "#"}
                ]
                },
                {name: "芳香/驱虫用品", url: "#", val: [
                    {name: "除虫杀蚊", url: "#"},
                    {name: "净化除味", url: "#"},
                    {name: "空气净化", url: "#"}
                ]
                },
                {name: "个人洗护/口腔护理", url: "#", val: [
                    {name: "面部护肤", url: "#"},
                    {name: "洗发护发", url: "#"},
                    {name: "身体护肤", url: "#"},
                    {name: "口腔护理", url: "#"},
                    {name: "香水彩妆", url: "#"}
                ]
                },
                {name: "家纺用品", url: "#", val: [
                    {name: "被子/被单/毛毯", url: "#"},
                    {name: "床垫/床褥", url: "#"},
                    {name: "沐浴用品", url: "#"},
                    {name: "其他家纺用品", url: "#"}
                ]
                },
                {name: "居家日用", url: "#", val: [
                    {name: "收纳用品", url: "#"},
                    {name: "雨伞雨具", url: "#"},
                    {name: "日用箱包", url: "#"},
                    {name: "清洁工具", url: "#"},
                    {name: "晾衣晒衣", url: "#"}
                ]
                },
                {name: "清洁日化", url: "#", val: [
                    {name: "玻璃/地板/家具清洁", url: "#"},
                    {name: "多用途清洁剂", url: "#"},
                    {name: "厨房清洗类", url: "#"},
                    {name: "家居消毒/卫生间清洁", url: "#"},
                    {name: "衣物清洗类", url: "#"},
                    {name: "清洗设备", url: "#"}
                ]
                },
                {name: "生活用纸", url: "#", val: [
                    {name: "厨房纸巾", url: "#"},
                    {name: "盒装抽取式面纸", url: "#"},
                    {name: "平板卫生纸", url: "#"},
                    {name: "软包抽取式面纸", url: "#"},
                    {name: "湿巾/手帕纸", url: "#"},
                    {name: "卫生间专用擦手纸", url: "#"},
                    {name: "卷类卫生纸", url: "#"}
                ]
                },
            ]
            },
            {
                name: "生活电器", url: "#", val: [
                {name: "大家电", url: "#", val: [
                    {name: "电视/音响/家庭影院", url: "#"},
                    {name: "空调/冰箱/冰柜", url: "#"},
                    {name: "洗衣机/烘干机/热水器", url: "#"},
                    {name: "消毒柜/洗碗机/油烟厨具及家电配件", url: "#"},
                ]
                },
                {name: "小家电", url: "#", val: [
                    {name: "衣物清洁类家电", url: "#"},
                    {name: "厨房类电器", url: "#"},
                    {name: "日常生活类电器", url: "#"},
                ]
                },
            ]
            },
            {
                name: "数码设备", url: "#", val: [
                {name: "存储设备及配件", url: "#", val: [
                    {name: "存储卡", url: "#"},
                    {name: "其它存储设备", url: "#"},
                    {name: "读卡产品", url: "#"}
                ]
                },
                {name: "其它数码设备", url: "#", val: [
                    {name: "GPS导航", url: "#"},
                    {name: "车载GPS设备", url: "#"},
                    {name: "学生平板", url: "#"},
                    {name: "早教机", url: "#"},
                    {name: "智能手环", url: "#"}
                ]
                },
            ]
            },
            {
                name: "计算机设备", url: "#", val: [
                {name: "电脑配件", url: "#", val: [
                    {name: "主机配件类", url: "#"},
                    {name: "鼠标/键盘/屏幕/数据线类", url: "#"}
                ]
                },
                {name: "电脑整机设备", url: "#", val: [
                    {name: "笔记本", url: "#"},
                    {name: "台式机", url: "#"},
                    {name: "主机", url: "#"}
                ]
                },
            ]
            },
            {
                name: "体育用品", url: "#", val: [
                {name: "篮球及配套", url: "#", val: [
                    {name: "篮球", url: "#"},
                    {name: "其它篮球用品", url: "#"}
                ]
                },
                {name: "排球及配套", url: "#", val: [
                    {name: "排球", url: "#"},
                    {name: "其它排球用品", url: "#"}
                ]
                },
            ]
            },
            {
                name: "劳动保护用品", url: "#", val: [
                {name: "高空安防用品", url: "#", val: [
                    {name: "安全带", url: "#"},
                    {name: "帆布工具包", url: "#"},
                    {name: "钳套", url: "#"}
                ]
                },
            ]
            },
            {
                name: "灯具商品", url: "#", val: [
                {name: "材质灯具", url: "#", val: [
                    {name: "节能灯", url: "#"},
                    {name: "白炽灯", url: "#"},
                    {name: "功能类灯", url: "#"},
                    {name: "灯泡/灯管类", url: "#"},
                    {name: "荧光灯", url: "#"}
                ]
                },

            ]
            },

        ];


        _this.leftNavigation = leftNavigationList;

        //活动
        var activityList = [
            {
                name: "活动", explain: "每期活动 优惠享不停", val: [
                {name: "秒杀", explain: "春节送礼优选", url: "../images/activity1.jpg "},
                {name: "特惠", explain: "春节送礼优选", url: "../images/activity2.jpg "},
                {name: "团购", explain: "春节送礼优选", url: "../images/activity3.jpg "},
                {name: "超值", explain: "春节送礼优选", url: "../images/activity1.jpg "},
            ]
            },
        ];
        _this.activity = activityList;
        //甜品/坚果
        var mixtureList = [

            {name:"甜品",explain:"每一道甜品都有一个故事",url:"../images/act1.png",val:[
                {name:"雪之恋和风大福", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/2.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/5.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"}



            ]},
            {name:"甜品",explain:"每一道甜品都有一个故事",url:"../images/act1.png",val:[
                {name:"雪之恋和风大福", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/2.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/5.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"}



            ]},
            {name:"甜品",explain:"每一道甜品都有一个故事",url:"../images/act1.png",val:[
                {name:"雪之恋和风大福", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/2.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/5.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"}



            ]},
            {name:"甜品",explain:"每一道甜品都有一个故事",url:"../images/act1.png",val:[
                {name:"雪之恋和风大福", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/2.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/5.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"}



            ]},
            {name:"甜品",explain:"每一道甜品都有一个故事",url:"../images/act1.png",val:[
                {name:"雪之恋和风大福", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/1.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/2.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/5.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/3.jpg"},
                {name:"小优布丁", dollar:"￥13.8",src:"../images/4.jpg"}



            ]},


        ];
        _this.mixture = mixtureList;


    }

});