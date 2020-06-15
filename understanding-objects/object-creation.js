// class
const Song = (function () {
    function Song(songAttributes = {}) {
        this.name = songAttributes.name || "";
        this.length = songAttributes.length || 0;
        this.artist = songAttributes.artist || "";
        this.albumb = songAttributes.albumb || "";

    }
    Song.prototype.duration = function () {
        return this.length;
    }
    return Song;
})();

const Song = (function (ar) {
    console.log("outside", ar);
    function Song(songAttributes = {}) {
        this.name = songAttributes.name || "";
        this.length = songAttributes.length || 0;
        this.artist = songAttributes.artist || "";
        this.albumb = songAttributes.albumb || "";
    }
    Song.prototype.duration = function () {
        return this.length;
    }
    return Song;
})("newSense");


console.log("Class", new Song());


const songAttributes = {
    name: "A bombi",
    length: 201,
    artist: "Dhurata Dora",
};


let newSong = new Song(songAttributes);
console.log(newSong.duration())



Object.freeze(Song);

Song.prototype.eee = "ff";

// object creation

const song1 = new Song();
console.log(song1);
song1.genre = "";

console.log("song1.hasOwnProperty(\"year\")", song1.hasOwnProperty("year"));
console.log("song1.hasOwnProperty(\"genre\")", song1.hasOwnProperty("genre"));

// properties
const songAttributes = {
    name: "Sample",
    length: 0,
    artist: "LLL",
    albumb: "|||",
    year: 2020
};

const song2 = new Song(songAttributes);
console.log(song2.name);

console.log("song2.hasOwnProperty(\"year\")", song2.hasOwnProperty("year"));
console.log("song2.hasOwnProperty(\"genre\")", song2.hasOwnProperty("genre"));

console.log(song2.hasProperty());