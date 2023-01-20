function generateRandom() {
    var ta = []
    var t = []
    var a, c
    while (t.length < 8) {
        a = Math.floor(Math.random() * 8)
        c = t.indexOf(a)
        if (c < 0) {
            t.push(a)
        }
    }
    while (ta.length < 8) {
        a = Math.floor(Math.random() * 8)
        c = ta.indexOf(a)
        if (c < 0) {
            ta.push(a)
        }
    }
    return [t, ta]
}
function createcards(ta, t) {
    for (let i = 0; i < 8; i++) {
        var d = document.getElementById('container')
        var div = document.createElement('div')
        div.setAttribute("class", "card")
        var img = document.createElement('img')
        img.setAttribute('src', `fruits/${t[i]}.jpg`)
        img.setAttribute('class', `${t[i]}`)
        div.appendChild(img)
        d.appendChild(div)
    }
    for (let i = 0; i < 8; i++) {
        var d = document.getElementById('container')
        var div = document.createElement('div')
        div.setAttribute("class", "card")
        var img = document.createElement('img')
        img.setAttribute('src', `fruits/${ta[i]}.jpg`)
        img.setAttribute('class', `${ta[i]}`)
        div.appendChild(img)
        d.appendChild(div)
    }
}
function click() {
    let cards = document.getElementsByClassName("card")
    let images = document.getElementsByTagName('img')
    let cmpt = 0
    let table = []
    let score = 0, tries = 20
    var audio
    for (var card of cards) {
        card.addEventListener("click", (e) => {
            let op = parseInt(window.getComputedStyle(e.target).getPropertyValue("opacity"));
            if (cmpt < 2) {
                if (op === 0) {
                    e.target.style.opacity = 1
                    cmpt++
                    let img = e.target
                    let id = img.getAttribute("class")
                    table.push(id)
                    if (table.length == 2) {
                        let elements = document.getElementsByClassName(id)
                        if (table[0] == table[1]) {
                            for (let ele of elements) {
                                ele.parentNode.style.opacity = 0
                                table.length = 0
                                cmpt = 0
                            }
                            tries--
                            score++
                            document.getElementById("em").innerHTML = score
                            if (score == 8) {
                                audio = new Audio("audio/win.mp3");
                                audio.play();
                                document.getElementById("pop").style.display = "block"
                            }
                        }
                        else {
                            setTimeout(() => {
                                for (let image of images) {
                                    image.style.opacity = 0
                                    table.length = 0
                                    cmpt = 0
                                }
                            }, 500);
                            tries--
                        }
                        document.getElementById("tries").innerHTML = tries
                    }
                    if (tries == 0 && score < 8) {
                        document.getElementById("lose").style.display = "block"
                        audio = new Audio("audio/lose.wav");
                        audio.play();
                    }
                }
            }
        })
    }
}
const btn = document.getElementById('retry')
btn.addEventListener('click', () => {
    document.location.reload()
})
let tab = generateRandom()
let tab1 = tab[0]
let tab2 = tab[1]
createcards(tab1, tab2)
click()  