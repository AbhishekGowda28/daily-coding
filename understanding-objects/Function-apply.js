// mdn example
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);

const min = Math.min.apply(null, numbers);

console.log(min);
// -------------------

const Song = function () {
    this.name = "new-song";
    this.year = 2020;
    this.getSongProperties = function (albumb = "", artist = "") {
        return { name: this.name, releaseYear: this.year, albumb, artist };
    }
}

const song = new Song();


// WITHOUT PROVIDING ARGUMENTS
console.log("without arguments");
console.log(song.getSongProperties());
// Output: "new-song"

console.log(song.getSongProperties.apply({ name: "update", year: 2020 }));
// Output: "update"


// WHEN ARGUMENTS ARE PROVIDED
console.log("when arguments are provided");

console.log(song.getSongProperties("New-Albumb", "new-artist"));
// Output: "new-song"

console.log(song.getSongProperties.apply({ name: "update", year: 2020 }, ["New-Albumb", "arties-name"]));
// Output: "update"

// -----------