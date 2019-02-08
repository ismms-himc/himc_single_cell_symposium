function setTsneMarker() {
    var img = document.getElementById("marker-tsne-plot");

    img.src = JSON.parse(this.value)['tsne'];
    return false;
}
document.getElementById("marker-list").onchange = setTsneMarker;
