var search;
search = new vue({
    el:'#search',
    //初始化数据类型
    data:{
        goodsType:[],
        //模块类型
    },
    //提交时间方法
    methods:{},
    //页面加载后初始化方法
    created:function(){
        var  _this = this;

        var goodsTypeList = [{name:"协议供货"},
            {name:"定点服务"},
            {name:"在线询价"},
            {name:"在线"},
        ];
        _this.goodsType = goodsTypeList;
    },
});