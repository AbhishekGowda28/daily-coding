window.addEventListener("DOMContentLoaded", () => {
    async function getAssets() {
        return await fetch("./scripts/assets.json").then((result) => {
            return result.json();
        }).then(res => res);
    }

    getAssets().then((assets) => {
        const appContainer = document.getElementById("app-container");
        assets.forEach(asset => {
            const assetContainer = document.createElement("div");
            assetContainer.className = "asset";
            const image = document.createElement("img");
            image.src = asset.src;
            const span = document.createElement("span");
            span.innerText= `@${asset.author}`;
            assetContainer.appendChild(image);
            assetContainer.appendChild(span)
            appContainer.append(assetContainer);
        });
    });
});
