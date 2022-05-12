"use strict";

document.addEventListener("DOMContentLoaded", function() {
    addBlocks(7)
    randomizeBlocks()
    randomize()
});


function addBlocks(length) {
    console.log("adding blocks")
    let chain = document.getElementById("blockchain");

    for (let i = 0; i < length; i++) {
        chain.innerHTML += `
        <div class="block">
            <div class="top"></div>
            <div class="mid"></div>
            <div class="bot"></div>
        </div>
        `
        if (i != length - 1) {
            chain.innerHTML += `
            <div class="pointer"><img src="assets/point.svg"/></div>
            `
        }
    }
}

function randomize() {
    setInterval(function() {
        console.log("iter")
        randomizeBlocks();
    }, 5000);
}

function randomizeBlocks() {
    console.log("editing blocks")
    let chain = document.getElementById("blockchain");
    let blocks = chain.getElementsByClassName("block");

    let items = [
        "cat",
        "dog",
        "eng105",
        "eng106",
        "pizza",
        "soda",
        "water",
        "2.75",
        "car",
        "buffalo",
        "nyc",
        "north",
        "south",
        "sus",
        "hello",
        "world",
        "moon",
        "sun"
    ]
    let verified = []

    for (let i = 0; i < blocks.length; i++) {
        let top = blocks[i].getElementsByClassName("top")[0];
        let mid = blocks[i].getElementsByClassName("mid")[0];
        let bot = blocks[i].getElementsByClassName("bot")[0];

        let select;

        do {
            select = Math.floor(Math.random()*items.length)
        } while(verified.includes(select)) {
            verified.push(select)
        }
        console.log(select)
        let value = (Math.random() * 1000000000).toFixed(0);
        var item = items[select];

        var messenger = new Messenger(mid, [item])
        var messenger = new Messenger(bot, [value]);
        if (i == 0) {
            var messenger = new Messenger(top, [(Math.random() * 1000000000).toFixed(0)]);
        }
        if (i == blocks.length - 1) {
            
        }
        else {
            top = blocks[i+1].getElementsByClassName("top")[0];
            var messenger = new Messenger(top, [value]);
            top.innerHTML = value
        }

        
    }
}