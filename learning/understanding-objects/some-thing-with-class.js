class Song {
	// Start with # sign to make the variables private
	// To see this, remove all the variables marked with # sign
	// Create new object with the class we cannot see the private variables in the log
	#name="";
	#artist="";
	constructor(props={}){
		this.#name = props.name;
		this.#artist = props.artist;
	}
	getSongTitle(){
		return this.#name;
	}
	getArtistName(){
		return this.#artist;
	}
}
const new_song = new Song({name: "all in one", artist: "some artist"});
console.log(new_song);
console.log(new_song.getSongTitle());


const stored_function = function(){console.log("anynomys function");
}
console.log(stored_function.name);

const named_function = function function_with_name(){console.log("Named function");}
console.log(named_function.name);
