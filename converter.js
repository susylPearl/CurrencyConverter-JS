
    $(document).ready(function(){
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url:'https://gist.githubusercontent.com/Fluidbyte/2973986/raw/8bb35718d0c90fdacb388961c98b8d56abc392c9/Common-Currency.json',
            success: function(data) {
                var optionEle;
                $.each(data, function(index, obj){
                    optionEle += "<option value="+ obj.code +">"+ obj.name +"</option>"
                });

                $('.fromCurr').append(optionEle);
                $('.toCurr').append(optionEle);
            },
        });
    });


    function convertCurrency() {
        var access_key = '1b26aa90a323c248fbe4';//Free api key => https://www.currencyconverterapi.com/
        var from_currency = $('.fromCurr').find(':selected').val();
        var to_currency = $('.toCurr').find(':selected').val();
        var amount = $('.amt').val();
        var query = from_currency + '_' + to_currency;
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            // url: 'https://free.currconv.com/api/v7/convert?q=' + query + '&compact=ultra&apiKey=' + access_key,
            url: "https://finance.google.com/bctzjpnsun/converter?a=" + amount + "&from=" + from_currency + "&to=" + to_currency,
            success: function(data) {
                var rate = data[query];
                $('#convertedValue').html(amount*rate);
            },
            error: function(error) {
                console.log('cannot retrieve converted currency value');
            }
        })
    }