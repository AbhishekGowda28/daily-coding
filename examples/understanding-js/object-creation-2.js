const SongWithArrowFunction = () => {
    console.log("this -> SongWithArrowFunction", this);
};



const SongWithAnonymousFunction = function (data) {
    // private variables
    const UID = 123;

    this.name = data.name || "Abhi";
    this.age = data.age || 25;
    SongWithAnonymousFunction.prototype.getName = function () {
        return this.name;
    }
    this.getAge = function () {
        console.log("USDI", UID);
        console.log("this.hasOwnProperty()", SongWithAnonymousFunction.hasOwnProperty(UID))
        return this.age;
    }
    this.displayProperties = function () {
        for (property in this) {
            console.log(property);
        }
    }
    this.accessPrivateMethod = function () {
        privateMethod();
    }

    // private methods
    const privateMethod = function () {
        console.log("Not seen outside");
    }
};

const Movie = function () {
    const MovieSongs = new SongWithAnonymousFunction({ name: "Movie" });
    console.log("MovieSongs", MovieSongs.name);
}


SongWithArrowFunction()

const songObject = new SongWithAnonymousFunction({})

console.log(songObject);
console.log(songObject.getName());
console.log(songObject.getAge());
console.log(songObject.UID);
songObject.displayProperties()
songObject.accessPrivateMethod()



let movie = new Movie();

console.log("movie", movie);