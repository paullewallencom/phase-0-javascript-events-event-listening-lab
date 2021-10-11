function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
        alert('I was clicked again!');
    }

    input.addEventListener('click', clickAlert);
}

addingEventListener();