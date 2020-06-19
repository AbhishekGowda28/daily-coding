class Song{
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
