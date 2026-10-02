 let movies = [
            { title: "The Shawshank Redemption", year: 1994, rating: 9.3, genre: "Drama", poster: "https://m.media-amazon.com/images/I/911USrdQtPL.jpg", desc: "A banker jailed for a crime he denies builds an unlikely friendship and quietly plans his way out." },
            { title: "The Godfather", year: 1972, rating: 9.2, genre: "Crime", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS451xWuWwt9NZ3bLHD12qLW0sZ_XFovXvMIZLOMsuatw&s=10", desc: "The aging head of a crime family hands his empire to a reluctant son." },
            { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action",poster: "https://m.media-amazon.com/images/I/81IfoBox2TL.jpg", desc: "Batman faces a chaotic criminal who wants to push Gotham to its breaking point." },
            { title: "Pulp Fiction", year: 1994, rating: 8.9, genre: "Crime",poster: "https://www.tallengestore.com/cdn/shop/products/PulpFiction-QuentinTarantino-OriginalReleaseMoviePoster_94d9e849-3904-4269-b2a9-08f2b3c2ca6b.jpg?v=1684129935", desc: "Hitmen, a boxer and a gangster's wife cross paths in several tangled Los Angeles stories." },
            { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi",poster: "https://m.media-amazon.com/images/I/71DwIcSgFcS.jpg", desc: "A thief who steals secrets from dreams is offered one last job: planting an idea." },
            { title: "Fight Club", year: 1999, rating: 8.8, genre: "Drama",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVuG4shYHD2DvS2NPLq5bRfRCrzWOGBXaIYhzddEE_Q&s=10", desc: "A bored office worker and a soap salesman start an underground club that spirals out of control." },
            { title: "Forrest Gump", year: 1994, rating: 8.8, genre: "Drama",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsNg_mbD0faTaoXQOPKAU6Fu-J7-iTgAbi57m2Qz_jA&s=10", desc: "A kind-hearted man drifts through decades of American history, changing lives along the way." },
            { title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-7XJ7HhXOiB6ISPMEQjnysxk1tDgjJYrJhJcQGL9sg&s=10", desc: "A hacker learns his world is a simulation and joins a rebellion against its machine rulers." },
            { title: "Interstellar", year: 2014, rating: 8.7, genre: "Sci-Fi",poster: "https://www.tallengestore.com/cdn/shop/products/18_b8067835-4815-4956-8fc7-2d250f4bbc0e.jpg?v=1568967564", desc: "Astronauts travel through a wormhole in search of a new home for a dying Earth." },
            { title: "Se7en", year: 1995, rating: 8.6, genre: "Thriller",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7p4CEOVffmeFtiBf7tJyJ6QYiJmIvS9a-rUenBdWvwYekHfXSfKe0uzs&s=10", desc: "Two detectives chase a killer whose crimes are based on the seven deadly sins." },
            { title: "The Silence of the Lambs", year: 1991, rating: 8.6,poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvcA1ELE3BU4aZDybCt98E7Zs7-Gx1Q2Quy96d93Klg&s=10", genre: "Thriller", desc: "A young FBI trainee seeks help from an imprisoned genius to catch another killer." },
            { title: "Spirited Away", year: 2001, rating: 8.6, genre: "Animation",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9khxF2IHqz7i2GaMovAEjEbx6ZE49ED_D15hSIcX0KA&s=10", desc: "A girl wanders into a world of spirits and must work in a bathhouse to save her parents." },
            { title: "Gladiator", year: 2000, rating: 8.5, genre: "Action",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uQ_qOrtDUJliPKfOPVx5B8WPa1c8VLN6gGuh4z27Qw&s=10", desc: "A betrayed Roman general becomes a gladiator and vows revenge on the emperor." },
            { title: "Parasite", year: 2019, rating: 8.5, genre: "Thriller",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-vd2NLRbKXtusp3vafNQZkDCYqUmcIJlbKlmK6UcLg&s=10", desc: "A poor family slowly worms its way into the lives of a wealthy household." },
            { title: "Whiplash", year: 2014, rating: 8.5, genre: "Drama",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83zOFdFj9yEWoICqPor8JqgdLyTpWZnb8vrueFuKy_A&s=10", desc: "A young drummer is pushed to the edge by an intense and feared music teacher." },
            { title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: 8.4, genre: "Animation",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZf5kY1Fi-PZmH_BjGqwt_YxwDbqecWGgo3MuC6vhww&s=10", desc: "Miles Morales meets other Spider-People from across the multiverse." },
            { title: "Raiders of the Lost Ark", year: 1981, rating: 8.4, genre: "Adventure",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgsUDuQeKBvDGdul09WEmWP3PnMlKd_AWv_il0M1mIA&s=10", desc: "Archaeologist Indiana Jones races the Nazis to find a legendary religious relic." },
            { title: "Toy Story", year: 1995, rating: 8.3, genre: "Animation",poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", desc: "A cowboy doll feels threatened when a shiny space ranger becomes the new favourite toy." },
            { title: "Jurassic Park", year: 1993, rating: 8.2, genre: "Adventure",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqPrYgEN4mksmZySUIY9YWiZSqSBYopGYRWwjBL3QEg&s=10", desc: "A theme park of living dinosaurs goes wrong when the security systems fail." },
            { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "Action",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeWY8PgT4_CSfRdtIrsVEtIGWm_lU5Iq483fy-0YFYQ&s=10", desc: "In a desert wasteland, a drifter and a rebel driver flee a tyrant in one long chase." },
            { title: "The Grand Budapest Hotel", year: 2014, rating: 8.1, genre: "Comedy",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK11JyjBYgArAa2bDZE50Too1Ux2yyfZHUsXFbjcUew&s=10", desc: "A legendary concierge and his young lobby boy get tangled in a theft and a family feud." },
            { title: "Knives Out", year: 2019, rating: 7.9, genre: "Comedy",poster: "https://play-lh.googleusercontent.com/AM5inzMp6vRqFbWfirofabTttd-30cGtvWh6o5b9Qx-LFE4ZOPBvxPubm2GEk8Xvj1dWz7wX9_prwsZAx9M", desc: "A detective investigates the death of a wealthy author surrounded by his scheming family." },
            { title: "Get Out", year: 2017, rating: 7.7, genre: "Horror",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbM6WTVc48wSlDX1ds2TbSMfXRiN7nD5tcyN7YvlIX8w&s=10", desc: "A man visiting his girlfriend's family estate begins to notice something is very wrong." },
            { title: "Superbad", year: 2007, rating: 7.6, genre: "Comedy",poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEwTjv3qtenVbMLakukuNd7y9hWQdIB25hH1f-jCeLQ&s=10", desc: "Two best friends try to get alcohol for a party on their last week of high school." }
        ];

        // poster colours by genre  [background, text]
        let colors = {
            "Drama": ["#3d5a6c", "#f3efe8"],
            "Crime": ["#5a2a2a", "#f3efe8"],
            "Action": ["#c2571f", "#fff6ec"],
            "Sci-Fi": ["#1f3a4d", "#e8f0f2"],
            "Thriller": ["#2b2b2b", "#e8e4dc"],
            "Animation": ["#e0b13b", "#2b2413"],
            "Comedy": ["#d9a28a", "#3a2118"],
            "Adventure": ["#5f7a4a", "#f1f3e8"],
            "Horror": ["#6b1f2e", "#f6e9e9"]
        };

        let grid = document.getElementById("movieGrid");
        let searchBox = document.getElementById("searchBox");
        let sortBox = document.getElementById("sortBox");
        let genreBar = document.getElementById("genreBar");
        let count = document.getElementById("count");

        let currentGenre = "All";

        let star = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21l1.5-7L2 9.3l7-.8z"/></svg>';


        function makeGenreButtons() {
            let genres = ["All"];

            for (let i = 0; i < movies.length; i++) {
                if (genres.indexOf(movies[i].genre) == -1) {
                    genres.push(movies[i].genre);
                }
            }

            genres.forEach(function (g) {
                let btn = document.createElement("button");
                btn.innerText = g;
                if (g == "All") btn.className = "active";

                btn.onclick = function () {
                    currentGenre = g;

                    let all = genreBar.querySelectorAll("button");
                    for (let i = 0; i < all.length; i++) {
                        all[i].className = "";
                    }
                    btn.className = "active";

                    showMovies();
                };

                genreBar.appendChild(btn);
            });
        }


        function makeCard(m) {
            let poster;
            let c = colors[m.genre];

            if (m.poster) {
                poster = '<div class="poster" style="padding:0"><img src="' + m.poster + '" alt="' + m.title + '"></div>';
            } else {
                poster = '<div class="poster" style="background:' + c[0] + '; color:' + c[1] + '">' +
                    '<span class="year">' + m.year + '</span>' +
                    '<span class="big">' + m.title + '</span>' +
                    '</div>';
            }

            var card = document.createElement("div");
            card.className = "card";
            card.innerHTML = poster +
                '<div class="info">' +
                '<div class="row"><h3>' + m.title + '</h3><span class="rating">' + star + m.rating.toFixed(1) + '</span></div>' +
                '<div class="genre">' + m.genre + ' / ' + m.year + '</div>' +
                '<p class="desc">' + m.desc + '</p>' +
                '</div>';

            return card;
        }


        function showMovies() {
            var text = searchBox.value.toLowerCase().trim();
            var list = [];

            for (var i = 0; i < movies.length; i++) {
                var m = movies[i];
                var titleMatch = m.title.toLowerCase().indexOf(text) != -1;
                var genreMatch = currentGenre == "All" || m.genre == currentGenre;

                if (titleMatch && genreMatch) {
                    list.push(m);
                }
            }

            if (sortBox.value == "high") {
                list.sort(function (a, b) { return b.rating - a.rating; });
            }
            if (sortBox.value == "low") {
                list.sort(function (a, b) { return a.rating - b.rating; });
            }

            grid.innerHTML = "";

            if (list.length == 0) {
                grid.innerHTML = '<p class="empty">No movies found. Try a different title or genre.</p>';
            }

            list.forEach(function (m) {
                grid.appendChild(makeCard(m));
            });

            count.innerText = "Showing " + list.length + " of " + movies.length + " movies";
        }

        searchBox.oninput = showMovies;
        sortBox.onchange = showMovies;


        // dark mode
        var themeBtn = document.getElementById("themeBtn");
        var themeIcon = document.getElementById("themeIcon");
        var themeText = document.getElementById("themeText");

        var moon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>';
        var sun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></svg>';

        function setTheme(dark) {
            if (dark) {
                document.body.classList.add("dark");
                themeIcon.innerHTML = sun;
                themeText.innerText = "Light";
            } else {
                document.body.classList.remove("dark");
                themeIcon.innerHTML = moon;
                themeText.innerText = "Dark";
            }
        }

        // remember the choice if the browser lets us
        let saved = null;
        try { saved = localStorage.getItem("theme"); } catch (e) {}
        setTheme(saved == "dark");

        themeBtn.onclick = function () {
            let goDark = !document.body.classList.contains("dark");
            setTheme(goDark);
            try { localStorage.setItem("theme", goDark ? "dark" : "light"); } catch (e) {}
        };


        makeGenreButtons();
        showMovies();