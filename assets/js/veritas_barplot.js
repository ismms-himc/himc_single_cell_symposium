function setBarMarker() {
    var img = document.getElementById("marker-bar-plot");

    img.src = JSON.parse(this.value)['bar'];
    return false;
}
document.getElementById("marker-list").onchange = setBarMarker;