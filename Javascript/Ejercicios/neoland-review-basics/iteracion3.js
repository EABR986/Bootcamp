
// Iteración #3: Mix Fors
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let allUsersFavoriteSounds = []

for (let user of users) {
    allUsersFavoriteSounds.push(Object.keys(user.favoritesSounds))
}

allUsersFavoriteSounds = allUsersFavoriteSounds.flat()
let usersFavoriteSoundsCounter = {}

for (let sounds of allUsersFavoriteSounds) {
    usersFavoriteSoundsCounter[sounds] = 0
}

for (let i in allUsersFavoriteSounds) {
    if(allUsersFavoriteSounds[i] in usersFavoriteSoundsCounter) {
        usersFavoriteSoundsCounter[allUsersFavoriteSounds[i]] += 1
    }
}

console.log(usersFavoriteSoundsCounter)