if('serviceWorker' in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Y"))
    .catch(() => console.log("N"));
}
