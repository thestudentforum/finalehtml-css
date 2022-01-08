
function openNewerMessage () {
    document.getElementById("newerMessage").style.display = "block";
    document.getElementById("olderMessage").style.display = "none";
    document.getElementById("sentMessage").style.display = "none";
}
function openOlderMessage () {
    document.getElementById("newerMessage").style.display = "none";
    document.getElementById("olderMessage").style.display = "block";
    document.getElementById("sentMessage").style.display = "none";
}
function openSentMessage () {
    document.getElementById("newerMessage").style.display = "none";
    document.getElementById("olderMessage").style.display = "none";
    document.getElementById("sentMessage").style.display = "block";
}

function openPannel () {
    document.getElementById("messagePannel").style.display = "block";
}