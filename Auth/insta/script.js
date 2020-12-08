const fetch = require("node-fetch");
const URL = `https://www.instagram.com/selenagomez?__a=1`
fetch(URL, { method: "get" }).
    then(response => { return response; }).
    then(result => { console.log(result); }).
    catch(e => { console.error(e) });