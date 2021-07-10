import { HackerNewsAPI } from "./hackernews";
import { NewYorkNewsAPI } from "./newyorktimes";

export default {
    hackernews: new HackerNewsAPI(),
    newyorktimes: new NewYorkNewsAPI()
}