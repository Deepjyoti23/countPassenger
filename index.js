let countEl = document.getElementById("count-el")

let count = 0;

function increment() {
    count++;
    countEl.textContent = count;
}

let saveEl = document.getElementById("save-el")
function save() {
    pContent = count + " - "
    saveEl.textContent += pContent;
    count=0
    countEl.textContent = count;
    // increment();
    // console.log(saveEl);

}
