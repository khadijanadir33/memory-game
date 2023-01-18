
function generateRandom() {

    var t = []
    var a, c
    while (t.length < 8) {
        a = Math.floor(Math.random() * 8)
        c = t.indexOf(a)
        if (c < 0) {
            t.push(a)
        }
    }
    return t
}
function createcards(t) {
    let num = 0
    while (num < 2) {
        for (let i = 0; i < 8; i++) {
            var d = document.getElementById('container')
            var div = document.createElement('div')
            div.setAttribute("class", "card")
            var img = document.createElement('img')
            img.setAttribute('src', `fruits/${t[i]}.jpg`)
            div.appendChild(img)
            d.appendChild(div)

        }
        num++
    }


}
createcards(generateRandom())
let div=document.getElementById('container')
div.addEventListener("click",(e)=>{
    e.target.style.opacity=1
    
})