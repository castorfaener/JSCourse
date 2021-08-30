$(document).ready(function(){


    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });

      //post

      var posts=[
          {
              title: 'Prueba de título 1',
              date:"Publicado el "+ moment().date()+ " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
              content: 'In aliquet molestie suscipit. Nam nec est elementum, tristique nisi at, malesuada orci. Vestibulum faucibus vulputate tortor, venenatis hendrerit quam cursus sit amet. Sed magna magna, dignissim eget efficitur eu, bibendum id mauris. Sed vel vulputate purus. Fusce tempus maximus risus euismod semper. Fusce a urna fringilla, accumsan dolor at, posuere nisl. Nulla sit amet tortor vitae dui euismod condimentum in non nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dui leo, eget varius erat malesuada posuere. Mauris pulvinar lobortis ex, non pulvinar libero porttitor sed. Nullam sagittis, tortor sit amet sodales fringilla, ipsum libero auctor justo, quis laoreet nibh ipsum a diam. Suspendisse lacus nunc, mattis in diam ut, semper ultricies urna. Donec euismod, metus ac efficitur pellentesque, justo neque ornare eros, vel tempor ex lorem nec tortor. Pellentesque mollis placerat sapien. Suspendisse in risus et dui ultrices posuere.'
          },
          {
                title: 'Prueba de título 2',
                date:"Publicado el "+ moment().date()+ " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'In aliquet molestie suscipit. Nam nec est elementum, tristique nisi at, malesuada orci. Vestibulum faucibus vulputate tortor, venenatis hendrerit quam cursus sit amet. Sed magna magna, dignissim eget efficitur eu, bibendum id mauris. Sed vel vulputate purus. Fusce tempus maximus risus euismod semper. Fusce a urna fringilla, accumsan dolor at, posuere nisl. Nulla sit amet tortor vitae dui euismod condimentum in non nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dui leo, eget varius erat malesuada posuere. Mauris pulvinar lobortis ex, non pulvinar libero porttitor sed. Nullam sagittis, tortor sit amet sodales fringilla, ipsum libero auctor justo, quis laoreet nibh ipsum a diam. Suspendisse lacus nunc, mattis in diam ut, semper ultricies urna. Donec euismod, metus ac efficitur pellentesque, justo neque ornare eros, vel tempor ex lorem nec tortor. Pellentesque mollis placerat sapien. Suspendisse in risus et dui ultrices posuere.'
            },
            {
                title: 'Prueba de título 3',
                date:"Publicado el "+ moment().date()+ " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'In aliquet molestie suscipit. Nam nec est elementum, tristique nisi at, malesuada orci. Vestibulum faucibus vulputate tortor, venenatis hendrerit quam cursus sit amet. Sed magna magna, dignissim eget efficitur eu, bibendum id mauris. Sed vel vulputate purus. Fusce tempus maximus risus euismod semper. Fusce a urna fringilla, accumsan dolor at, posuere nisl. Nulla sit amet tortor vitae dui euismod condimentum in non nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dui leo, eget varius erat malesuada posuere. Mauris pulvinar lobortis ex, non pulvinar libero porttitor sed. Nullam sagittis, tortor sit amet sodales fringilla, ipsum libero auctor justo, quis laoreet nibh ipsum a diam. Suspendisse lacus nunc, mattis in diam ut, semper ultricies urna. Donec euismod, metus ac efficitur pellentesque, justo neque ornare eros, vel tempor ex lorem nec tortor. Pellentesque mollis placerat sapien. Suspendisse in risus et dui ultrices posuere.'
            },
            {
                title: 'Prueba de título 4',
                date:"Publicado el "+ moment().date()+ " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'In aliquet molestie suscipit. Nam nec est elementum, tristique nisi at, malesuada orci. Vestibulum faucibus vulputate tortor, venenatis hendrerit quam cursus sit amet. Sed magna magna, dignissim eget efficitur eu, bibendum id mauris. Sed vel vulputate purus. Fusce tempus maximus risus euismod semper. Fusce a urna fringilla, accumsan dolor at, posuere nisl. Nulla sit amet tortor vitae dui euismod condimentum in non nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dui leo, eget varius erat malesuada posuere. Mauris pulvinar lobortis ex, non pulvinar libero porttitor sed. Nullam sagittis, tortor sit amet sodales fringilla, ipsum libero auctor justo, quis laoreet nibh ipsum a diam. Suspendisse lacus nunc, mattis in diam ut, semper ultricies urna. Donec euismod, metus ac efficitur pellentesque, justo neque ornare eros, vel tempor ex lorem nec tortor. Pellentesque mollis placerat sapien. Suspendisse in risus et dui ultrices posuere.'
            },{
                title: 'Prueba de título 5',
                date:"Publicado el "+ moment().date()+ " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'In aliquet molestie suscipit. Nam nec est elementum, tristique nisi at, malesuada orci. Vestibulum faucibus vulputate tortor, venenatis hendrerit quam cursus sit amet. Sed magna magna, dignissim eget efficitur eu, bibendum id mauris. Sed vel vulputate purus. Fusce tempus maximus risus euismod semper. Fusce a urna fringilla, accumsan dolor at, posuere nisl. Nulla sit amet tortor vitae dui euismod condimentum in non nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet dui leo, eget varius erat malesuada posuere. Mauris pulvinar lobortis ex, non pulvinar libero porttitor sed. Nullam sagittis, tortor sit amet sodales fringilla, ipsum libero auctor justo, quis laoreet nibh ipsum a diam. Suspendisse lacus nunc, mattis in diam ut, semper ultricies urna. Donec euismod, metus ac efficitur pellentesque, justo neque ornare eros, vel tempor ex lorem nec tortor. Pellentesque mollis placerat sapien. Suspendisse in risus et dui ultrices posuere.'
            }

        ]
        
        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button_more">Leer más</a>
                 </article>
        `;

        $("#posts").append(post);
        })

        //Selector de tema

        var theme = $("#theme");
        $("#to_green").click(function(){
            theme.attr("href", "css/green.css");
        });
        $("#to_red").click(function(){
            theme.attr("href", "css/red.css");
        });
        $("#to_blue").click(function(){
            theme.attr("href", "css/blue.css");
        });

});

