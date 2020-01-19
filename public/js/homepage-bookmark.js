$(document).ready(function () {
    //...................................................CATEGORIES...................................................//

    $("#newscrunch").click(function () {
        $(".list-group").toggle();
    });




    //...................................................MODAL...................................................//
    function showmodal() {
        $('.newsCards').click(function () {
            var index = $(this).index('.newsCards')
            var name = $('#source-' + index).val()
            var img = $('#urlToImage-' + index).val()
            var author = $('#author-' + index).val()
            var title = $('#title-' + index).val()
            var description = $('#description-' + index).val()
            var url = $('#url-' + index).val()
            var publishedAt = $('#publishedAt-' + index).val()
            var content = $('#content-' + index).val()
            $('.modal-body').empty()
            $('.modal-body').append('<div class="row modalrow1"/>')
            $('.modalrow1').append('<div class="col-4 img text-center"></div>')
            $('.img').append('<img src="' + img + '" width="150px">')
            $('.modalrow1').append('<div class="col-8 title"></div>')
            $('.title').append('<h5>' + title + '</h5>')
            $('.title').append('<p>' + name + '</p>')
            $('.modal-body').append('<div class="row modalrow2"/>')
            $('.modalrow1').append('<div class="col-12 mt-3 content"></div>')
            $('.content').append('<p>' + description + '</p>')
            $('.content').append('<a href="' + url + '" class="btn btn-sm btn-outline-dark w-100" target="_blank">Click here to read the post</a>')


            $('#exampleModal').modal('show')


        })
    }
    showmodal();



    //...................................................WEATHER...................................................//
    if ($('#city').val()) {
        var city = $('#city').val();
    }
    else {
        var city = 'new delhi'
    }


    $.getJSON(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
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
            (function () {
                var script = document.createElement('script');
                script.async = true; script.charset = "utf-8";
                script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(script, s);
            })();
        }

    );



    //...................................................SEARCH...................................................//

    $('.submit_on_enter').keydown(function() { 
        if (event.keyCode == 13) {
            this.form.submit();
            return false;
          }        
    });
    


    //<----------------Add bookmark-------------->

    $('.bookmark').click(function () {
        $(this).removeClass('far');
        $(this).addClass('fas');
        $(this).css('color', 'green');
        var id = $(".userId").val()
        console.log(id)
        if (id) {

            var index = $('.bookmark').index(this)
            var name = $('#source-' + index).val()
            console.log(name);
            var img = $('#urlToImage-' + index).val();
            console.log(img);
            var author = $('#author-' + index).val();
            console.log(author);
            var title = $('#title-' + index).val()
            var description = $('#description-' + index).val()
            var url = $('#url-' + index).val()
            var publishedAt = $('#publishedAt-' + index).val()
            var content = $('#content-' + index).val()
            console.log(content)
            content = content.substr(0, 100)
            var bookmark = {
                index: index,
                name: name,
                img: img,
                author: author,
                title: title,
                description: description,
                url: url,
                publishedAt: publishedAt,
                content: content,
                id: id
            }
            $.ajax({
                method: "POST",
                datatype: 'JSON',
                url: "/bookmark",
                data: bookmark,
                success: function (response) {
                    console.log(response)
                }
            })
        } else {
            window.location.href = "/login"
        }

    })

    //<----------------Remove bookmark-------------->

    $('.removeBookmark').click(function () {
        if (confirm('Delete this bookmark?')) {
            var id = $(".userId").val()
            console.log(id)
            if (id) {

                var index = $('.removeBookmark').index(this)
                var title = $('#title-' + index).val()
                var bookmark = {
                    index: index,
                    title: title,
                    id: id
                }
                $.ajax({
                    method: "DELETE",
                    datatype: 'JSON',
                    url: "/removeBookmark",
                    data: bookmark,
                    success: function (response) {
                        console.log(response)
                        window.location.href = "/bookmark"

                    }
                })
            } else {
                window.location.href = "/login"
            }
        }


    })

    //..........................................ADD INTEREST.....................................//
    $('#new').click(function () {
        $('#interestcol').append('<form class="m-2" action="/addinterest" method="POST"><input class="form-control-sm border-success interest d-inline-block w-50" type="text" placeholder="Enter a interest" name="interest"><button type="submit" class=" ml-2 text-success btn add d-inline-block"><i class="fas fa-check"></i></button><button type="button" class="ml-2 text-danger btn d-inline-block dump"><i class="fas fa-times"></i></button></form>')
        $('#new').hide();
        $('#del').hide();
        $('.dump').click(function () {
            $('#interestcol').empty()
            $('#new').show();
            $('#del').show();
        })
    })


    //.....................................REMOVE INTEREST......................................//

    $('#del').click(function () {
        $('#interestmodal').modal('show')
    })



    $('.interestcheck').click(function () {
        
        var deleteitems = []
        var checkboxes = document.getElementsByClassName('interestcheck')
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                deleteitems.push(checkboxes[i])
            }
        }
        console.log(deleteitems)
        if (deleteitems.length >= 1) {
            $('#deletebutton').removeAttr('disabled');
        }
        else {
            $('#deletebutton').attr('disabled', true);
        }
    });
























});


