(function($) {
    $.fn.seasons = function(){
        var $self = $.fn.seasons;
        var $this = this;
        
        if ($(".season")) {
            var date;
            // 記事の日付を取得
            date = new Date($(".season").prev("time").attr("datetime"));
            $(".season").text(get_season(date));
        }
    
        function get_season(date) {
            if (0 == date.getMonth()) {
                if (date.getDate() < 5) {
                    return '雪下出麦';
                } else if (date.getDate() < 10) {
                    return '芹乃栄';
                } else if (date.getDate() < 15) {
                    return '水泉動';
                } else if (date.getDate() < 20) {
                    return '雉始雊';
                } else if (date.getDate() < 25) {
                    return '款冬華';
                } else if (date.getDate() < 30) {
                    return '水沢腹堅';
                } else {
                    return '鶏始乳';
                }
            } else if (1 == date.getMonth()) {
                if (date.getDate() < 4) {
                    return '鶏始乳';
                } else if (date.getDate() < 9) {
                    return '東風解凍';
                } else if (date.getDate() < 14) {
                    return '黄鶯睍睆';
                } else if (date.getDate() < 19) {
                    return '魚上氷';
                } else if (date.getDate() < 24) {
                    return '土脉潤起';
                } else {
                    return '霞始靆';
                }
            } else if (2 == date.getMonth()) {
                if (date.getDate() < 6) {
                    return '草木萠動';
                } else if (date.getDate() < 11) {
                    return '蟄虫啓戸';
                } else if (date.getDate() < 16) {
                    return '桃始笑';
                } else if (date.getDate() < 21) {
                    return '菜虫化蝶';
                } else if (date.getDate() < 26) {
                    return '雀始巣';
                } else if (date.getDate() < 31) {
                    return '桜始開';
                } else {
                    return '雷乃発声';
                }
            } else if (3 == date.getMonth()) {
                if (date.getDate() < 5) {
                    return '雷乃発声';
                } else if (date.getDate() < 10) {
                    return '玄鳥至';
                } else if (date.getDate() < 15) {
                    return '鴻雁北';
                } else if (date.getDate() < 20) {
                    return '虹始見';
                } else if (date.getDate() < 25) {
                    return '葭始生';
                } else if (date.getDate() < 30) {
                    return '霜止出苗';
                } else {
                    return '牡丹華';
                }
            } else if (4 == date.getMonth()) {
                if (date.getDate() < 5) {
                    return '牡丹華';
                } else if (date.getDate() < 10) {
                    return '蛙始鳴';
                } else if (date.getDate() < 15) {
                    return '蚯蚓出';
                } else if (date.getDate() < 21) {
                    return '竹笋生';
                } else if (date.getDate() < 26) {
                    return '蚕起食桑';
                } else if (date.getDate() < 31) {
                    return '紅花栄';
                } else {
                    return '麦秋至';
                }
            } else if (5 == date.getMonth()) {
                if (date.getDate() < 6) {
                    return '麦秋至';
                } else if (date.getDate() < 11) {
                    return '螳螂生';
                } else if (date.getDate() < 16) {
                    return '腐草為蛍';
                } else if (date.getDate() < 21) {
                    return '梅子黄';
                } else if (date.getDate() < 27) {
                    return '乃東枯';
                } else {
                    return '菖蒲華';
                }
            } else if (6 == date.getMonth()) {
                if (date.getDate() < 2) {
                    return '菖蒲華';
                } else if (date.getDate() < 7) {
                    return '半夏生';
                } else if (date.getDate() < 12) {
                    return '温風至';
                } else if (date.getDate() < 17) {
                    return '蓮始開';
                } else if (date.getDate() < 23) {
                    return '鷹乃学習';
                } else if (date.getDate() < 29) {
                    return '桐始結花';
                } else {
                    return '土潤溽暑';
                }
            } else if (7 == date.getMonth()) {
                if (date.getDate() < 3) {
                    return '土潤溽暑';
                } else if (date.getDate() < 7) {
                    return '大雨時行';
                } else if (date.getDate() < 13) {
                    return '涼風至';
                } else if (date.getDate() < 18) {
                    return '寒蝉鳴';
                } else if (date.getDate() < 23) {
                    return '蒙霧升降';
                } else if (date.getDate() < 28) {
                    return '綿柎開';
                } else {
                    return '天地始粛';
                }
            } else if (8 == date.getMonth()) {
                if (date.getDate() < 2) {
                    return '天地始粛';
                } else if (date.getDate() < 8) {
                    return '禾乃登';
                } else if (date.getDate() < 13) {
                    return '草露白';
                } else if (date.getDate() < 18) {
                    return '鶺鴒鳴';
                } else if (date.getDate() < 23) {
                    return '玄鳥去';
                } else if (date.getDate() < 28) {
                    return '雷乃収声';
                } else {
                    return '蟄虫坏戸';
                }
            } else if (9 == date.getMonth()) {
                if (date.getDate() < 3) {
                    return '蟄虫坏戸';
                } else if (date.getDate() < 8) {
                    return '水始涸';
                } else if (date.getDate() < 13) {
                    return '鴻雁来';
                } else if (date.getDate() < 18) {
                    return '菊花開';
                } else if (date.getDate() < 23) {
                    return '蟋蟀在戸';
                } else if (date.getDate() < 28) {
                    return '霜始降';
                } else {
                    return '霎時施';
                }
            } else if (10 == date.getMonth()) {
                if (date.getDate() < 2) {
                    return '霎時施';
                } else if (date.getDate() < 7) {
                    return '楓蔦黄';
                } else if (date.getDate() < 12) {
                    return '山茶始開';
                } else if (date.getDate() < 17) {
                    return '地始凍';
                } else if (date.getDate() < 22) {
                    return '金盞香';
                } else if (date.getDate() < 27) {
                    return '虹蔵不見';
                } else {
                    return '朔風払葉';
                }
            } else if (11 == date.getMonth()) {
                if (date.getDate() < 2) {
                    return '朔風払葉';
                } else if (date.getDate() < 7) {
                    return '橘始黄';
                } else if (date.getDate() < 12) {
                    return '閉塞成冬';
                } else if (date.getDate() < 16) {
                    return '熊蟄穴';
                } else if (date.getDate() < 22) {
                    return '鮭魚群';
                } else if (date.getDate() < 27) {
                    return '乃東生';
                } else {
                    return '麋角解';
                }
            }
        }
    }
})(jQuery);