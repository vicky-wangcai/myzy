// Agency Theme JavaScript

(function($) {
    "use strict"; // 执行严格模式

    //滚动监听（Scrollspy）插件,菜单加亮,突出了顶部导航滚动出现
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    //关闭响应点击菜单项的菜单
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    //affix附加导航。在100px时出现
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery);
