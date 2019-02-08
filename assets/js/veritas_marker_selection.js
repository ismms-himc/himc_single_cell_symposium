function setMarker() {
    var tnse_img = document.getElementById("marker-tsne-plot");

    tnse_img.src = JSON.parse(this.value)['tsne'];

    var barplot_img = document.getElementById("marker-bar-plot");

    barplot_img.src = JSON.parse(this.value)['bar'];
    return false;
}
document.getElementById("marker-list").onchange = setMarker;
