function generateHeader(children) {
    const header = document.createElement('h1');
    header.innerText = "Role for initiative!";
    header.append(children);

    return header;
}

function generateList() {
    const ul = document.createElement('ul')
    for (let i = 6; i > 0; i--) {
        const li = document.createElement('li');
        li.append(...generateRoller(i));
        li.id = `dice-${i}`
        ul.append(li);
   }

    return ul;
}

function generateRoller(i) {
    const display = [];

    const span = document.createElement('span');
    span.id = `disp-${i}`;
    span.innerText = 0;
    display.push(span);
    const button = document.createElement('button');
    button.id = `button-${i}`;
    button.innerText = 'Roll!'
    display.push(button);

    return display;
}

function generateElements() {
    const list = generateList();
    const header = generateHeader(list);

    document.body.appendChild(header);
}   

function run() {
    const remove = document.getElementById('remove');
    remove.remove();

    generateElements();
}

document.addEventListener('DOMContentLoaded', () => {
    run();
})