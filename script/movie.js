let mainParent = document.getElementById("empty_div");
        async function fetchMovie() {



            try {

                let search = document.getElementById("search_movie").value


                let getMovie = await fetch(`http://www.omdbapi.com/?apikey=9c3ca374&s=${search}`);
                let rate_Movie = await fetch(`http://www.omdbapi.com/?apikey=9c3ca374&t=${search}`);

                let movies = await getMovie.json();
                let rating = await rate_Movie.json();

                let createImg = document.createElement("img");
                createImg.src = "https://i.gifer.com/VAyR.gif"

                document.getElementById("parent_movie").append(createImg);


                setTimeout(function () {
                    createImg.remove();

                }, 2950)

                if (search == "") {
                    alert("please enter movie name");
                    createImg.remove();
                } else if (movies.Response === "False") {

                    setTimeout(function () {
                        mainParent.innerHTML = null;
                        let create_imag = document.createElement("img");
                        create_imag.src = "../image/not_available.gif"
                        mainParent.appendChild(create_imag)

                    }, 3000)

                } else {
                    setTimeout(function () {
                        show_movie(movies, rating.imdbRating);
                    }, 3000)
                }

            }
            catch (err) {
                console.log(err)
            }
        }

        function change_value() {
            document.getElementById("search_movie").style.borderBottom = "2px solid #7BAE19";
        }


        function show_movie(movie, rating) {


            mainParent.innerHTML = null;
            movie.Search.forEach(function (mov) {



                let create_Parent = document.createElement("div");
                create_Parent.setAttribute("id", "sub_parent")

                let div_1 = document.createElement("div");
                let image = document.createElement("img");
                image.src = mov.Poster;

                let div_2 = document.createElement("div");
                div_2.setAttribute("id", "div_2_style")
                let div_2_child_1 = document.createElement("div");
                let div_2_child_2 = document.createElement("div");

                div_2_child_1.innerText = "Title -"
                div_2_child_2.innerText = mov.Title;


                let div_3 = document.createElement("div");
                div_3.setAttribute("id", "div_3_style")
                let div_3_child_1 = document.createElement("div");
                let div_3_child_2 = document.createElement("div");

                div_3_child_1.innerText = "Release date -"
                div_3_child_2.innerText = mov.Year;

                let div_4 = document.createElement("div");
                div_4.setAttribute("id", "div_4_style")
                let div_4_child_1 = document.createElement("div");
                let div_4_child_2 = document.createElement("div");

                div_4_child_1.innerText = "Rating -"
                div_4_child_2.innerText = rating;

                div_1.appendChild(image);
                div_2.append(div_2_child_1, div_2_child_2);
                div_3.append(div_3_child_1, div_3_child_2);
                div_4.append(div_4_child_1, div_4_child_2);

                if (rating >= 8.5) {
                    let div_5 = document.createElement("div");
                    div_5.setAttribute("id", "div_5_style")
                    div_5.innerText = "Recommended"
                    create_Parent.append(div_1, div_2, div_3, div_4, div_5);
                } else {
                    create_Parent.append(div_1, div_2, div_3, div_4);
                }

                mainParent.append(create_Parent);

            })



        }