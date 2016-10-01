/**
 * Created by Administrator on 2016/8/23.
 // */
$(function () {
// footer start
$(".jiahao").click(function () {
    if($(this).attr('key') == 'true'||!$(this).attr('key')){
        $(this).css({transform:"rotate(45deg)"})
        var aa=$(this).index(".jiahao");
        $(".fnavs ul").eq(aa).attr("id","dqul");
        var h=$("#dqul li").length*30
        $(".fnavs ul").eq(aa).removeAttr("id");
        $(".fnavs ul").eq(aa).animate({height:h+"px"},1000);
        $(this).attr("key","false");
    }else if($(this).attr('key') == 'false'){
        $(this).css({transform:"rotate(0deg)"})
        var aa=$(this).index(".jiahao");
        $(".fnavs ul").eq(aa).attr("id","dqul");
        $(".fnavs ul").eq(aa).removeAttr("id");
        $(".fnavs ul").eq(aa).animate({height:0},500);
        $(this).attr("key","true");

    }

})
// footer end
    
//banner start
    var clientW=$(window).width();
    var clientH=$(window).height();
    $(".bannera").not($(".bannera").eq(0)).css("left","1349px");
    var now=0;
    var next=0;
    var flag=true;
    function aa() {
        next++;
        if(next>3){
            next=0
        }
        $(".bannera").eq(now).animate({left:"-1349px"},1000);
        $(".btn").eq(now).css("backgroundImage"," url(./images/btn1.png)")
        $(".btn").eq(next).css("backgroundImage"," url(./images/btn2.png)")
        $(".bannera").eq(next).css("left","1349px");
        $(".bannera").eq(next).animate({left:"0px"},1000,function () {
            flag=true;
        });
        now=next;

    }
    function bb() {
        next--;
        if(next<0){
            next=3
        }
        $(".bannera").eq(now).animate({left:"1349px"},1000);
        $(".btn").eq(now).css("backgroundImage"," url(./images/btn1.png)")
        $(".btn").eq(next).css("backgroundImage"," url(./images/btn2.png)")
        $(".bannera").eq(next).css("left","-1349px");
        $(".bannera").eq(next).animate({left:"0px"},1000,function () {
            flag=true;
        });
        now=next;
    }
    var t=setInterval(aa,2000);
// $(".bannerimg").hover(function () {
//     clearInterval(t)
// },function () {
//     t=setInterval(aa,2000)
// })
$(".bleft").click(function () {
    if (flag==true){
        flag=false;
    clearInterval(t);
    bb();
    }
})
$(".bright").click(function () {

    if (flag==true){
        flag=false;
        clearInterval(t);
        aa();
    }
})

//banner end
    var aaaaa=1
$(".navli9").click(function () {
    if(aaaaa==1){
        $(".navli9d1box").css("display","block");
        aaaaa=2;
    }else{
        $(".navli9d1box").css("display","none");
        aaaaa=1;
    }

})

//
    var bbbbb=1;
    if(clientH<400){
        clientH=400;
    }
    $(".navli10").click(function () {
        if(bbbbb==1){
            $(".span1").css("transform","rotate(25deg)")
            $(".span2").css("transform","rotate(-25deg)")
            $(".bannerbox").css("display","none");
            $(".xqbox").css("display","none");
            $(".footerbox").css("display","none");
            $(".navbox").css({"width":clientW+"px","height":clientH+"px"});
            bbbbb=2;
        }else if(bbbbb==2||clientW>720){
            $(".span1").css("transform","rotate(0deg)")
            $(".span2").css("transform","rotate(0deg)")
            $(".bannerbox").css("display","block");
            $(".xqbox").css("display","block");
            $(".footerbox").css("display","block");
            $(".navbox").css({"width":"100%","height":"44px"});
            bbbbb=1;
        }
    })

    //
})