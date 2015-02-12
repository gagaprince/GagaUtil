/*自动埋点工具*/
(function(){
    function tongji(url){
        url = "http://test.prince.com/img/tj.jpg?"+url+"&t="+new Date().getTime();
        var img = new Image();
        img.src=url;
    }
    document.addEventListener("DOMContentLoaded",function(){
        var body = document.getElementsByTagName("body")[0];
        body.addEventListener("click",function(event){
//            alert(event.target)
            var tarDom = event.target;
            var arg = tarDom.getAttribute("arg")||"";
            if(arg!=""){
                var id = tarDom.getAttribute("id")||"";
                tongji("id="+id+"&arg="+arg);
            }
        },false);
    },false);
})()