$(document).ready(function () {
    $("p.cop").hover(function () {
            // over
            $("p.effect").css({
                'transition':'width 0.8s',
                'width':'310'
            });
            
        }, function () {
            // out
            $("p.effect").css({
                'transition':'width 0.8s',
                'width':'0'
            });
        }
    );
});
