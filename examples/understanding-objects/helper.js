function debugObject(object) {
    for (const key in object) {
        if (typeof object[key] !== "function") {
            console.log(key, object[key]);
        }
    }
}