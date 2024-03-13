
MainView = class MainView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		console.log(this.board);

	}

	onInitDone()
	{
		super.onInitDone()

        // 배경 색 설정
        // this.board.getCell(0,0).style.backgroundColor = 'red';
        console.log(this.board.getCell(1, 1));
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j+=2) {
                if (i % 2) {
                    this.board.getCell(i, j).style.backgroundColor = 'black';
                    this.board.getCell(i, j+1).style.backgroundColor = 'white';
                } else {
                    this.board.getCell(i, j).style.backgroundColor = 'white';
                    this.board.getCell(i, j+1).style.backgroundColor = 'black';
                }
            }
        }

        // 체스 말 생성
        // 화이트 폰
        var wP1 = this.chessPiece('wP');
        var wP2 = this.chessPiece('wP');
        var wP3 = this.chessPiece('wP');
        var wP4 = this.chessPiece('wP');
        var wP5 = this.chessPiece('wP');
        var wP6 = this.chessPiece('wP');
        var wP7 = this.chessPiece('wP');
        var wP8 = this.chessPiece('wP');

        // 화이트 룩
        var wR1 = this.chessPiece('wR');
        var wR2 = this.chessPiece('wR');

        // 화이트 나이트
        var wKn1 = this.chessPiece('wKn');
        var wKn2 = this.chessPiece('wKn');

        // 화이트 비숍
        var wB1 =  this.chessPiece('wB');
        var wB2 =  this.chessPiece('wB');

        // 화이트 퀸
        var wQ = this.chessPiece('wQ');

        // 화이트 킹
        var wK = this.chessPiece('wK');

        // 블랙 폰
        var bP1 = this.chessPiece('bP');
        var bP2 = this.chessPiece('bP');
        var bP3 = this.chessPiece('bP');
        var bP4 = this.chessPiece('bP');
        var bP5 = this.chessPiece('bP');
        var bP6 = this.chessPiece('bP');
        var bP7 = this.chessPiece('bP');
        var bP8 = this.chessPiece('bP');

        // 블랙 룩
        var bR1 = this.chessPiece('bR');
        var bR2 = this.chessPiece('bR');

        // 블랙 나이트
        var bKn1 = this.chessPiece('bKn');
        var bKn2 = this.chessPiece('bKn');

        // 블랙 비숍
        var bB1 = this.chessPiece('bB');
        var bB2 = this.chessPiece('bB');

        // 블랙 퀸
        var bQ = this.chessPiece('bQ');

        // 블랙 킹
        var bK = this.chessPiece('bK');

        // 체스말 초기 세팅
        var black = [bR1, bKn1, bB1, bQ, bK, bB2, bKn2, bR2, bP1, bP2, bP3, bP4, bP5, bP6, bP7, bP8];
        var white = [wR1, wKn1, wB1, wQ, wK, wB2, wKn2, wR2, wP1, wP2, wP3, wP4, wP5, wP6, wP7, wP8];

        black.forEach((piece, index) => {
            if (index < 8) {
                this.board.layComponentAt(piece, 7, index, '100px', '100px');
            } else {
                this.board.layComponentAt(piece, 6, index - 8, '100px', '100px');
            }
        })

        white.forEach((piece, index) => {
            if (index < 8) {
                this.board.layComponentAt(piece, 0, index, '100px', '100px');
            } else {
                this.board.layComponentAt(piece, 1, index - 8, '100px', '100px');
            }
        })

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

    // 체스 말 생성 함수
    chessPiece(name) {
        var piece = name;
        piece =  new AView();
        piece.init();
        piece.setStyleObj({
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backgroundSize: '100% 100%',
            backgroundImage: `url(Assets/chess_img/${name}-removebg-preview.png)`,
        });

        piece.addEventListener('click', this, 'chessPieceClick');
        piece.setGroupName(name);

        return piece;
    }

    chessPieceClick(comp)
    {
        var nm = comp.getGroupName();
        console.log(comp)
    }
}