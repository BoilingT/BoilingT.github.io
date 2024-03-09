function playHyperCubeVideo() {
    let hyperCubeVideo = document.getElementById("hyperCubeVideo");
    try {
        hyperCubeVideo.play();
    } catch (error) {
        return;
    }
}

function stopHyperCubeVideo() {
    let hyperCubeVideo = document.getElementById("hyperCubeVideo");
    try {
        hyperCubeVideo.pause();
    } catch (error) {
        return;
    }
}