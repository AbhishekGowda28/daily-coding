window.addEventListener("DOMContentLoaded", () => {
    async function a() {
        const data = await fetch("./scripts/assets.json").then((result) => {
            return result.json();
        }).then(res => res);
        return data;
    };
    const data = a();
    console.log(data);
})