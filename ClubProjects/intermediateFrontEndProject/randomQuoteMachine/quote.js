var quotes = [
	"Each life is made up of mistakes and learning, waiting and growing, practicing patience and being persistent.",
	"Tell me and I forget.\n Teach me and I remember.\n Involve me and I learn.",
	"Being strong isn't just about having power or move, it about one's spirit \t--- Zoro",
	"You need to accept the fact that you're not the best and have all the will to strive to be better than anyone you face. \t--- Zoro",
	"Bring on the hardship. It's preferred in a path of carnage. \t--- Zoro",
	"I don't care what the society says. I've never done anything I've regretted. I will survive and do what I want to. \t--- Zoro",
	"You sure can talk the talk, but you're not quite ready to walk the walk. Time's up, it's my turn.",
	"If you don't take risks, you can't create a future.\t--- Monkey D. Luffy",
	"We shouldn't worry about being able to achieve out dreams, as long as we have the desire to do it. \t----- Coby",
	"Even if armed with hundreds of weapons… there are times when you just can’t beat a man with a spear of conviction in his gut. \t---(One Piece)",
	"I’ve set myself to become the King of the Pirates…and if I die trying…then at least I tried! \t---Monkey D. Luffy (One Piece)",
	"We have to live a life of no regreats. -- Ace",
	"The weak don't get to decide anything, not even how they die. --- Law",
	"By experiencing both, victory and defeat, running away and shedding tears, a man will become a man. -- Shanks",
	"When I decided to follow my dream, I had already discarded my life. -- Zoro",
	"I can't allow myself to be ordinary.",
	"Have you ever met a wild beast who promised wouldn't bite? Because I haven't"
];
var storeQuote = "Nothing is imposible, the word itself says \"I'm possible\"!";
$(document).ready(function () {
	var twitterURL = "https://twitter.com/intent/tweet?text="
	$("#change").on("click", function () {
		var newQuote = quotes[Math.floor(Math.random() * quotes.length)];
		storeQuote = newQuote;
		$(".quote-Container").text(newQuote);
	});
	$(".tweet").on("click", function () {
		twitterURL += storeQuote;
		var getReadyForTweet = $(this);
		getReadyForTweet.prop("href", twitterURL);
		getReadyForTweet.prop("target", "_blank");
	});
});