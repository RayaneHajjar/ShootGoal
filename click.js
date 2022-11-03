$(document).ready(function () {
    var key = '3eafd27e81e4268edc4a8a4444de9b2c';
    var season = '2022';
    //La Liga
    if ($('#search_laliga').hasClass('active')) {
        var cards = '';
        var settings = {
            url:
                'https://v3.football.api-sports.io/teams?league=140&season=' +
                season,
            method: 'GET',
            timeout: 0,
            headers: {
                'x-rapidapi-key': key,
                'x-rapidapi-host': 'v3.football.api-sports.io',
            },
        };
        $.ajax(settings).done(function (obj) {
            $.each(obj.response, function (key, value) {
                var team = [];
                $.each(value.team, function (k1, v1) {
                    team.push(v1);
                });
                $.each(value.venue, function (k2, v2) {
                    team.push(v2);
                });
                console.log(
                    team[1] +
                        ' ' +
                        team[4] +
                        ' ' +
                        team[6] +
                        ' ' +
                        team[8] +
                        ' ' +
                        team[11]
                );
                cards += `<div class="card text-center" style="width: 18rem; height: 25rem;">
                            <div class="card-body">
                                <img class="mb-3" src="${team[6]}">
                                <h4 class="card-title">${team[1]}</h4>
                                <p class="card-text">Founded: ${team[4]}</p>
                                <p class="card-text">Venue: ${team[8]}</p>
                                <p class="card-text">Capacity: ${team[11]}</p>
                            </div>
                        </div>`;
            });
            $('#laliga').html(cards);
        });
    }
    //Premier League
    $('#search_premierleague').click(function () {
        var cards = '';
        var settings = {
            url:
                'https://v3.football.api-sports.io/teams?league=39&season=' +
                season,
            method: 'GET',
            timeout: 0,
            headers: {
                'x-rapidapi-key': key,
                'x-rapidapi-host': 'v3.football.api-sports.io',
            },
        };
        $.ajax(settings).done(function (obj) {
            $.each(obj.response, function (key, value) {
                var team = [];
                $.each(value.team, function (k1, v1) {
                    team.push(v1);
                });
                $.each(value.venue, function (k2, v2) {
                    team.push(v2);
                });
                console.log(
                    team[1] +
                        ' ' +
                        team[4] +
                        ' ' +
                        team[6] +
                        ' ' +
                        team[8] +
                        ' ' +
                        team[11]
                );
                cards += `<div class="card text-center" style="width: 18rem; height: 25rem;">
                            <div class="card-body">
                                <img class="mb-3" src="${team[6]}">
                                <h4 class="card-title">${team[1]}</h4>
                                <p class="card-text">Founded: ${team[4]}</p>
                                <p class="card-text">Venue: ${team[8]}</p>
                                <p class="card-text">Capacity: ${team[11]}</p>
                            </div>
                        </div>`;
                $('#premierleague').html(cards);
            });
        });
    });
    //Serie A
    $('#search_seriea').click(function () {
        var cards = '';
        var settings = {
            url:
                'https://v3.football.api-sports.io/teams?league=135&season=' +
                season,
            method: 'GET',
            timeout: 0,
            headers: {
                'x-rapidapi-key': key,
                'x-rapidapi-host': 'v3.football.api-sports.io',
            },
        };
        $.ajax(settings).done(function (obj) {
            $.each(obj.response, function (key, value) {
                var team = [];
                $.each(value.team, function (k1, v1) {
                    team.push(v1);
                });
                $.each(value.venue, function (k2, v2) {
                    team.push(v2);
                });
                console.log(
                    team[1] +
                        ' ' +
                        team[4] +
                        ' ' +
                        team[6] +
                        ' ' +
                        team[8] +
                        ' ' +
                        team[11]
                );
                cards += `<div class="card text-center" style="width: 18rem; height: 25rem;">
                            <div class="card-body">
                                <img class="mb-3" src="${team[6]}">
                                <h4 class="card-title">${team[1]}</h4>
                                <p class="card-text">Founded: ${team[4]}</p>
                                <p class="card-text">Venue: ${team[8]}</p>
                                <p class="card-text">Capacity: ${team[11]}</p>
                            </div>
                        </div>`;
                $('#seriea').html(cards);
            });
        });
    });
    //Ligue 1
    $('#search_ligue1').click(function () {
        var cards = '';
        var settings = {
            url:
                'https://v3.football.api-sports.io/teams?league=61&season=' +
                season,
            method: 'GET',
            timeout: 0,
            headers: {
                'x-rapidapi-key': key,
                'x-rapidapi-host': 'v3.football.api-sports.io',
            },
        };
        $.ajax(settings).done(function (obj) {
            $.each(obj.response, function (key, value) {
                var team = [];
                $.each(value.team, function (k1, v1) {
                    team.push(v1);
                });
                $.each(value.venue, function (k2, v2) {
                    team.push(v2);
                });
                console.log(
                    team[1] +
                        ' ' +
                        team[4] +
                        ' ' +
                        team[6] +
                        ' ' +
                        team[8] +
                        ' ' +
                        team[11]
                );
                cards += `<div class="card text-center" style="width: 18rem; height: 25rem;">
                            <div class="card-body">
                                <img class="mb-3" src="${team[6]}">
                                <h4 class="card-title">${team[1]}</h4>
                                <p class="card-text">Founded: ${team[4]}</p>
                                <p class="card-text">Venue: ${team[8]}</p>
                                <p class="card-text">Capacity: ${team[11]}</p>
                            </div>
                        </div>`;
                $('#ligue1').html(cards);
            });
        });
    });
    //Bundesliga
    $('#search_bundesliga').click(function () {
        var cards = '';
        var settings = {
            url:
                'https://v3.football.api-sports.io/teams?league=78&season=' +
                season,
            method: 'GET',
            timeout: 0,
            headers: {
                'x-rapidapi-key': key,
                'x-rapidapi-host': 'v3.football.api-sports.io',
            },
        };
        $.ajax(settings).done(function (obj) {
            $.each(obj.response, function (key, value) {
                var team = [];
                $.each(value.team, function (k1, v1) {
                    team.push(v1);
                });
                $.each(value.venue, function (k2, v2) {
                    team.push(v2);
                });
                console.log(
                    team[1] +
                        ' ' +
                        team[4] +
                        ' ' +
                        team[6] +
                        ' ' +
                        team[8] +
                        ' ' +
                        team[11]
                );
                cards += `<div class="card text-center" style="width: 18rem; height: 25rem;">
                            <div class="card-body">
                                <img class="mb-3" src="${team[6]}">
                                <h4 class="card-title">${team[1]}</h4>
                                <p class="card-text">Founded: ${team[4]}</p>
                                <p class="card-text">Venue: ${team[8]}</p>
                                <p class="card-text">Capacity: ${team[11]}</p>
                            </div>
                        </div>`;
                $('#bundesliga').html(cards);
            });
        });
    });
});
