var city = $('#city').val();

    $.getJSON(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=fefcb07c01516af278fab70347d82a40",
        function (data) {
            window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
              window.myWidgetParam.push({
                  id: 5,
                  cityid: data.id,
                  appid: 'f73204efa1bc0b38d1a351f19d7e9d12',
                  units: 'metric',
                  containerid: 'openweathermap-widget-5',
                  });  
                  (function() {
                      var script = document.createElement('script');
                      script.async = true;script.charset = "utf-8";
                      script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
                      var s = document.getElementsByTagName('script')[0];
                      s.parentNode.insertBefore(script, s);
                    })();
        }

    );