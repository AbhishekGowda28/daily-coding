const Song = function (data = {}) {
    this.name = data.name || "";
}

const newSong = new Song({name: "Blaha"});
console.log("newSOng", newSong);

const newSong23 = new Song();
console.log(newSong23);