//var vm = new Vue({
//    el: '#wrapper',
//    data: {
//        productList:[]
//    },
//    //過濾
//    filters: {
//    },
//    mounted :function(){
//        this.$nextTick(function(){//$nextTick用來指定vm
//            vm.cartView();
//        })
//    },
//    methods: {
//        //json
//        cartView : function(){
//            var _this=this;
//            this.$http.get('data/headImag.json',{'id':123}).then(function(res){
//                _this.productList = res.body.result.list;
//                _this.headImage();
//            });
//        },
//        headImage:function(){
//            console.log(212);
//            $('.single-item').slick({
//                //dots: true,
//                infinite: true,
//                speed: 300,
//                slidesToShow: 1,
//                adaptiveHeight: true,
//                autoplay: true,
//                autoplaySpeed: 2000
//            });
//        }
//
//    }
//})
(function Read(){

    $.get('data/headImag.json', {}, function(Json) {
        if ( Json.status == true ) {
            var $Data = Json.result.list;
            var $html = '';
            var $Replace = '';
            var $Template = $('#headimg');
            var $Content = $('#headimg').html();
            $.each( $Data, function(k, v){
                $Replace = $Content.replace(/\{Image\}/i, "<img src=" + v.headImage + " class='img-responsive' />");
                $html += $Replace;
            });
            $Template.html($html);
        }
    }, 'json').done(function(){
        $('#headimg').slick({
            //dots: true,
            //lazyLoad: 'ondemand',
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000
        });
        $('.slick-list').height(440)
    });

    $.get('data/headNew.json', {}, function(Json) {
        if ( Json.status == true ) {
            var $Data = Json.result.list;
            var $html = '';
            var $Replace = '';
            var $Template = $('#headNew');
            var $Content = $('#headNew').html();
            $.each( $Data, function(k, v){
                $Replace = $Content.replace(/\{Image\}/i, "<img src=" + v.headNewImage + " class='img-responsive' />").replace(/\{title\}/i, v.headNewtitle).replace(/\{text\}/i, v.headNewtext);
                $html += $Replace;
            });
            $Template.html($html);
        }
    });

    $.get('data/headProduct.json', {}, function(Json) {
        if ( Json.status == true ) {
            var $Data = Json.result.list;
            var $html = '';
            var $Replace = '';
            var $headprice='';
            var $Template = $('#headProduct');
            var $Content = $('#headProduct').html();
            $.each( $Data, function(k, v){
                if(v.headprice){
                    $headprice='$'+v.headprice;
                }
                $Replace = $Content.replace(/\{Image\}/i, "<img src=" + v.headImage + " class='img-responsive' />").replace(/\{title\}/i, v.headtitle).replace(/\{text\}/i, v.headtext).replace(/\{price\}/i, $headprice);
                $html += $Replace;
            });
            $Template.html($html);
        }
    });

    $.get('data/headvideo.json', {}, function(Json) {
        if ( Json.status == true ) {
            var $Data = Json.result.list;
            var $html = '';
            var $Replace = '';
            var $Template = $('#headvideo');
            var $Content = $('#headvideo').html();
            $.each( $Data, function(k, v){
                $Replace = $Content.replace(/\{text\}/i, v.text).replace(/\{video\}/i, "<video src=" + v.video + ">");
                $html += $Replace;
            });
            $Template.html($html);
        }
    }).done(function(){
        var $play = $('#headvideo i');
        $play.on('click',function(){
            var _this=$(this)
            _this.hide().next().find('video').get(0).play();
            _this.next().find('video').get(0).onended=function(){
                _this.show();
                this.currentTime = 0;
            };
        })
    });

})();

