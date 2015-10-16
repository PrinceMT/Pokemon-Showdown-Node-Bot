exports.translations = {
	commands: {
		game: {
			'games': 'List of available games',
			'already1': 'There is already a game of',
			'already2': 'in this room',
			'args1': 'Some arguments for',
			'args2': 'game are not valid. Valid ones are',
			'err': 'Unknown error. Could not start the game.'
		},
		endgame: {
			'nogame': 'There are no games in this room',
			'del1': 'The game of',
			'del2': 'was terminated'
		}
	},

	games: {
		pokehangman: {
			'help': 'Use __$TOKENg [word/char]__ to play',
			'grats1': 'Congratulations to',
			'grats2': 'for winning the Poke-Hangman game! The word was',
			'lose1': '**Game over!** Max number of failures was exceeded and',
			'lose2': 'was hanged! The word was',
			'end': 'The Poke-Hangman game was terminated. The word was'
		},
		pokeanagrams: {
			'and': 'and',
			'start': 'A new **Poke-Anagrams** game was created!',
			'maxgames1': 'It will be a max of',
			'maxgames2': 'games',
			'maxpoints1': 'If someone gets',
			'maxpoints2': 'points, he/she wins',
			'timer1': 'You have',
			'timer2': 'seconds to guess each word',
			'help': 'Use __$TOKENg [word]__ to guess the words',
			'point2': 'for guessing the word',
			'point3': 'Current score',
			'timeout': '**Time is up!** The word was',
			'lose': '**The Poke-Anagrams game ended!** But no one got any points so there are no winners',
			'end': 'The Poke-Anagrams game ended!',
			'grats1': 'Congratulations to',
			'grats2': 'for winning the game with',
			'points': 'points',
			'tie1': 'The result is a draw at',
			'tie2': 'between',
			'forceend1': 'The Poke-Anagrams game was terminated!',
			'forceend2': 'The word was'
		},
		blackjack: {
			'and': 'and',
			'total': 'Total',
			'init': '**A new game of Black Jack was created!** Use **$in** to participate and **$start** to start the game',
			'start': 'The game of Black Jack has started!',
			'topcard': 'Dealer\'s Top Card',
			'turn1': '',
			'turn2': '\'s turn!',
			'helpturn1': 'Use **$hit** to obtain new cards and **$stand** to terminate your turn (you have a max of',
			'helpturn2': 'seconds)',
			'hand1': '',
			'hand2': '\'s Hand',
			'stand': 'stands',
			'hit': 'got a new card! Hand',
			'bj': 'has a Black Jack',
			'bust': 'has busted with',
			'timeout1': 'Time is up for',
			'timeout2': '\'s turn!',
			'dealer': 'The Dealer',
			'dhand': 'Dealer\'s Hand',
			'dbj': 'The Dealer has a Black Jack! Better luck next time',
			'dbust1': 'The Dealer has busted with',
			'dbust2': 'This is your lucky day!',
			'end': 'The game of Black Jack ended!',
			'grats1': 'Congratulations to',
			'grats2': 'for winning the game',
			'natural': 'for getting a natural BlackJack',
			'lose': 'Sorry, there are no winners this time',
			'forceend': 'The game of Black Jack was terminated',
			'yourhand': 'Your hand',
			'noplayers': 'There are no players participating in this game',
			'players': 'Players'
		}
	}
};
