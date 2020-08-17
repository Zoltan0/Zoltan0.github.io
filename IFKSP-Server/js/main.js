//Get data from server
function getServerData(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };
    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}


document.querySelector("#getDataBtn").addEventListener("click", function() {
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
});

//Fill table with server data.
function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if(!table) {
        console.error(`Table ${tableID} is not found.`);
        return;
    }
    let tBody = document.querySelector("tbody");
    for (let row of data) {
        let tr = createAnyElement("tr");
        for (let k in row) {
            let td = createAnyElement("td");
            td.innerHTML = row[k];
            tr.appendChild(td)
        }
        let btnGroup = createBtnGroup();
        tr.appendChild(btnGroup);
        tBody.appendChild(tr);
    }
};

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}; 

function createBtnGroup() {
    let group = createAnyElement("div", {class: "btn btn-group"});
    let infoBtn = createAnyElement("button", {class: "btn btn-info"});
    infoBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 18c4.667 4.667 12 1.833 12-4.042h-3l5-6 5 6h-3c-1.125 7.98-11.594 11.104-16 4.042zm14-11.984c-4.667-4.667-12-1.834-12 4.041h3l-5 6-5-6h3c1.125-7.979 11.594-11.104 16-4.041z"/></svg>'
    let delBtn = createAnyElement("button", {class: "btn btn-danger"});
    delBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 24h12l3-18h-18l3 18zm5.667-6.667h-1.645c-.186 0-.345-.129-.383-.31-.083-.395-.003-1.046.251-1.357h1.776v1.667zm3.398-.297c-.403.25-1.118.325-1.605.356v.608l-1.124-1.421 1.124-1.427v.599c.94-.002 1.933-.111 2.54-.827-.161 1.082-.377 1.766-.935 2.112zm.633-2.772c.097.158.071.361-.062.488-.292.279-.889.555-1.285.502l-.937-1.51 1.417-.877.867 1.397zm-3.468-4.264c.747 0 1.181.421 1.808 1.401l.536-.286-.699 1.671-1.774-.258.527-.285c-.458-.822-1.055-1.676-1.976-1.86.635-.238 1.147-.383 1.578-.383zm-2.007.966c.09-.162.28-.237.456-.183.386.12.915.509 1.062.882l-.866 1.55-1.456-.813.804-1.436zm-2.196 2.497l1.799-.206.642 1.674-.506-.32c-.494.8-.948 1.738-.66 2.632-.835-.707-1.302-1.251-1.302-1.908 0-.474.309-1.113.538-1.544l-.511-.328zm13.973-11.463v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/></svg>'

    group.appendChild(infoBtn);
    group.appendChild(delBtn);

    let td = createAnyElement("td");
    td.appendChild(group);

    return td;

}