class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score = 0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

   /* getPlayerScore1() {
        var score1 = database.ref('players/player1/score');
        score1.on("value", (data) => {
            score = data.val();
        })
    }

    getPlayerScore2() {
        var score2 = database.ref('players/player2/score');
        score2.on("value", (data) => {
            score = data.val();
        })  
    }*/
}
