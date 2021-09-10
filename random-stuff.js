const axios = require('axios').default;

class RandomStuff {
    static instance () {
        if (!RandomStuff._instance)
            RandomStuff._instance = new RandomStuff()

        return RandomStuff._instance
    }

   async getJoke () {
		try {
			const type = this._randomType('joke')
			const response = await axios.get('https://api.pgamerx.com/v5/joke', {
				headers: { Authorization: process.env.RANDOM_STUFF_APIKEY },
				params: { type }
			})
			if (response.data.type == 'twopart')
				return `${response.data.setup}\n${response.data.delivery}`;

		  return response.data.joke;
		} catch (error) {
			throw new Error(error);
		}
  }

	_randomType(a) {
		let type = null;
		switch (a) {
			case 'joke':
				const jokeArray = ["any", "dark", "pun", "spooky", "programming", "misc"];
				type = jokeArray[Math.floor(Math.random()*6)];
				break;
			case 'image':
				const imageArray = ["aww", "duck", "dog", "cat", "memes", "dankmemes", "holup", "art", "facepalm"];
				type = imageArray[Math.floor(Math.random()*9)];
				break;
		}

		return type;
	}
}

module.exports.RandomStuff = RandomStuff;