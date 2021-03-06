/* eslint-env jquery */

window.onload = function () {
    function genWrap(generator) {
        var gen = generator();

        function handle(yielded) {
            if (!yielded.done) {
                yielded.value.then(function (data) {
                    return handle(gen.next(data));
                });
            }
        }
        return handle(gen.next());
    }

    genWrap(function* () {
        var tweets = yield $.get('data/tweets.json');
        console.log(tweets);
        var friends = yield $.get('data/friends.json');
        console.log(friends);
        var videos = yield $.get('data/videos.json');
        console.log(videos);
    });

    // function* gen() {
    //     var x = yield 10;
    //     console.log(x);
    // }

    // var myGen = gen();
    // console.log(myGen.next());
    // console.log(myGen.next(50));

    // $.get('data/tweets.json')
    //     .then(function (tweets) {
    //         console.log(tweets);
    //         return $.get('data/friends.json');
    //     })
    //     .then(function (friends) {
    //         console.log(friends);
    //         return $.get('data/videos.json');
    //     })
    //     .then(function (videos) {
    //         console.log(videos);
    //     });
    // function get(url) {
    //     return new Promise(function (resolve, reject) {
    //         var xhttp = new XMLHttpRequest();
    //         xhttp.open('GET', url, true);
    //         xhttp.onload = function () {
    //             if (xhttp.status === 200) {
    //                 resolve(JSON.parse(xhttp.response));
    //             } else {
    //                 reject(xhttp.statusText);
    //             }
    //         };
    //         xhttp.onerror = function () {
    //             reject(xhttp.statusText);
    //         };
    //         xhttp.send();
    //     });
    // }
    // var promise = get('data/tweets.json');
    // promise
    //     .then(function (tweets) {
    //         console.log(tweets);
    //         return get('data/friends.json');
    //     })
    //     .then(function (friends) {
    //         console.log(friends);
    //         return get('data/videos.json');
    //     })
    //     .then(function (videos) {
    //         console.log(videos);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // function handleError(jqXHR, textStatus, error) {
    //     console.log(error);
    // }
    // $.ajax({
    //     type: 'GET',
    //     url: 'data/tweets.json',
    //     success: cbTweets,
    //     error: handleError,
    // });
    // function cbTweets(data) {
    //     console.log(data);
    //     $.ajax({
    //         type: 'GET',
    //         url: 'data/friends.json',
    //         success: cbFriends,
    //         error: handleError,
    //     });
    // }
    // function cbFriends(data) {
    //     console.log(data);
    //     $.ajax({
    //         type: 'GET',
    //         url: 'data/videos.json',
    //         success: function (data) {
    //             console.log(data);
    //         },
    //         error: handleError,
    //     });
    // }
};
