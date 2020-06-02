// Class
function Song(songData = {}) {
    this.name = songData.name || "";
    this.artist = songData.artist || "";

    this.getArtistName = function () {
        return this.artist;
    }
    this.setArtistName = function (name) {
        this.artist = name;
    }

    this.addNewAttribute = function (attributeName, attributeValue) {
        this[attributeName] = attributeValue
    }

    this.deleteAttribute = function (attributeName) {
        delete this[attributeName];
    }
}

// Instance creation

const song1 = new Song({ name: "rap", artist: "rapper" });

console.log(song1);

// Object.freeze(song1);

console.log(song1.getArtistName());

song1.setArtistName("new-rapper-name");

console.log(song1);
song1.addNewAttribute("year", 2020);
song1.addNewAttribute("gener", "rap");
console.log(song1);
song1.deleteAttribute("year");
console.log(song1);
console.log(song1.year);
