var Reactor = (function (undefined) {

    var Player = function (scoreboard)
    {
        var _scoreboard = scoreboard;
        var _score = 0;

        var update_scoreboard = function (score) {
            _scoreboard.html(score);
        };

        this.score = function (amount) {
            _score += amount;
            update_scoreboard(_score);
        };

        this.deduce = function (amount) {
            _score -= amount;
            update_scoreboard(_score);
        };
    };

    return {
        Player: Player
    };
}());
