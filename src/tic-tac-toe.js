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
            };
        };
    }

    isFinished() {
        if (this.winner) {
             return true;
        };
        for (var i = 0; i < this.fieldArr.length; i++) {
            for (var j = 0; j < this.fieldArr.length[0]; j++) {
                if ((!this.fieldArr[i][j]) ) {
                    return false;
                };
            };
        };
    };

    getWinner() {
        if ((this.fieldArr[0][0] == this.fieldArr[1][1]) && (this.fieldArr[1][1] == this.fieldArr[2][2])) {
            this.winner = this.fieldArr[0][0];
            return;
        }
        else if ((this.fieldArr[2][0] == this.fieldArr[1][1]) && (this.fieldArr[1][1] == this.fieldArr[0][2])) {
            this.winner = this.fieldArr[2][0];
            return;
        }
        ;
        for (var i = 0; i < this.fieldArr.length; i++) {
            for (var j = 0; j < this.fieldArr.length[0]; j++) {

                if ((this.fieldArr[i][0] == this.fieldArr[i][1]) && (this.fieldArr[i][1] == this.fieldArr[i][2])) {
                    this.winner = this.fieldArr[i][0];
                    return;

                }
                ;
                if ((this.fieldArr[0][j] == this.fieldArr[1][j]) && (this.fieldArr[1][j] == this.fieldArr[2][j])) {
                    this.winner = this.fieldArr[0][j];
                    return;
                }
            }
            ;
        }
        ;
    };

    noMoreTurns() {
            for (var i = 0; i < this.fieldArr.length; i++) {
                for (var j = 0; j < this.fieldArr.length[0]; j++) {
                    if ((!this.fieldArr[i][j]) ) {
                        return false;
                    };
                };
            };
            return true;
    }

    isDraw() {
        var responce;
        for (var i = 0; i < this.fieldArr.length; i++) {
            for (var j = 0; j < this.fieldArr.length[0]; j++) {
                if ((!this.fieldArr[i][j]) ) {
                    return false;
                }
            }
        };
        for (var i = 0; i < this.fieldArr.length; i++) {

        }
    }

    getFieldValue(rowIndex, colIndex) {
        return  this.fieldArr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
