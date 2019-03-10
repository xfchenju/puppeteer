const rp = require('request-promise-native');

async function fetchMovie (item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`;

    const res = await rp(url);

    return res;
}

;(async () => {
    let movies = [
        { doubanId: 21937445,
        title: '辩护人',
        rate: 9.2,
        poster:
         'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2158166535.jpg' },
        { doubanId: 21937452,
        title: '素媛',
        rate: 9.2,
        poster:
         'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2118532944.jpg' }
    ];

    movies.map(async movie => {
        let movieData = await fetchMovie(movie);

        try {
            movieData = JSON.parse(movieData);

            console.log(movieData.summary);
        } catch(err) {
            console.log(err)
        }
    })
})();