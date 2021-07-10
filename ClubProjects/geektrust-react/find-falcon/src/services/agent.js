function get(url){
  fetch(url)
        .then(function (response, reject) {             
            if (response.ok)
                return response.json();
        }).then(function (data) {
           return data;
        })
        .catch(function (error) {
            console.error("Error in get", error);
        });
}

function post(url, bodyParams){
   fetch(url,method: "post",body: bodyParams )
        .then(function (response, reject) {             
            if (response.ok)
                return response.json();
        }).then(function (data) {
           return data;
        })
        .catch(function (error) {
            console.error("Error in get", error);
        });
}


export { get, post }
