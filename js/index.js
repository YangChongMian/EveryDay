
/*****************ͼƬ�ֲ�***************************/
$(function () {
    /*ͼƬλ������*/
    var datas = [
        {'z-index': 6, opacity: 1, width: 760, height: 330, top: 40, left: 0},
        {'z-index': 4, opacity: 0.6, width: 560, height: 243, top:80, left: -225},
        {'z-index': 3, opacity: 0.4, width: 480, height: 203, top: -10, left: -170},
        {'z-index': 2, opacity: 0.2, width: 620, height: 269, top: -60, left: 110},
        {'z-index': 3, opacity: 0.4, width: 480, height: 203,  top: -10, left: 430},
        {'z-index': 4, opacity: 0.6, width: 560, height: 243, top: 80, left: 420}
    ];
    move();

    function move() {
        /*ͼƬ�ֲ�*/
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            $('#slide ul li').eq(i).css('z-index',data['z-index']);
            $('#slide ul li').eq(i).stop().animate(data, 1200);
        }
    }

    /*���ͷ�¼�*/
    $('.prev').on('click', function () {
        var last = datas.pop();
        datas.unshift(last);

        move();
    });

    /*�Ҽ�ͷ�¼�������*/
    function nextYewu(){
        var first = datas.shift();
        datas.push(first);
        move();
    }
    /*�Ҽ�ͷ�¼�*/
    $('.next').on('click', nextYewu);

    /*�Զ�����*/
    var timer = setInterval(function(){
        nextYewu();
    },5000);
    /*������slide��ʾ��ͷ,����Զ�����*/
    $('#slide').on({
        mouseenter: function () {
            $('.arrow').css('display', 'block');
            clearInterval(timer);
        }, mouseleave: function () {
            $('.arrow').css('display', 'none');
            /*����뿪ʱ�Զ�����*/
            clearInterval(timer);
            timer = setInterval(function(){
                nextYewu();
            },5000)
        }
    })
});