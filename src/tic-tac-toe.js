class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.fieldArr = [[null,null,null],[null,null,null],[null,null,null]];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        if (this.symbol == 'x') {
            return 'x';
        }
        else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.fieldArr[rowIndex][columnIndex]) {
            return;
        }
        else {
            this.fieldArr[rowIndex][columnIndex] = this.symbol;
            if (this.symbol == 'x') {
                this.symbol = 'o';
            }
            else {
                this.symbol = 'x';
            }
        }
        this.getWinner();
    }

    isFinished() {
        if (this.winner) {
             return true;
        }
        return this.noMoreTurns();
    };

    getWinner() {
        if ((this.fieldArr[0][0] == this.fieldArr[1][1]) && (this.fieldArr[1][1] == this.fieldArr[2][2]) && (this.fieldArr[0][0])) {
            this.winner = this.fieldArr[0][0];
            return this.winner;
        }

        if ((this.fieldArr[2][0] == this.fieldArr[1][1]) && (this.fieldArr[1][1] == this.fieldArr[0][2]) && (this.fieldArr[2][0])) {
            this.winner = this.fieldArr[2][0];
            return this.winner;
        }

        for (var i = 0; i < this.fieldArr.length; i++) {
            for (var j = 0; j < this.fieldArr[i].length; j++) {
                if ((this.fieldArr[i][0] == this.fieldArr[i][1]) && (this.fieldArr[i][1] == this.fieldArr[i][2]) && (this.fieldArr[i][0])) {
                    this.winner = this.fieldArr[i][0];
                    return this.winner;
                }
                if ((this.fieldArr[0][j] == this.fieldArr[1][j]) && (this.fieldArr[1][j] == this.fieldArr[2][j]) && (this.fieldArr[0][j])) {
                    this.winner = this.fieldArr[0][j];
                    return this.winner;
                }
            }
        }
        return null;
    };

    noMoreTurns() {
            for (var i = 0; i < this.fieldArr.length; i++) {
                for (var j = 0; j < this.fieldArr[i].length; j++) {
                    if (!this.fieldArr[i][j]) {
                        return false;
                    }
                }
            }
            return true;
    }

    isDraw() {
        var responseNoMoreTurns = this.noMoreTurns();
        if (!this.winner && responseNoMoreTurns) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return  this.fieldArr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
