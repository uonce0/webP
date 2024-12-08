onmessage = function (e) {
    let front = parseInt(e.data.front);
    let back = parseInt(e.data.back);
    let result = front * back;
    postMessage(result);
}