function practice() {
    let array = [];
    let answer;

    for (let i = 1; ; i++) {
        answer = prompt(`Enter anything`, '');
        array.push(answer);
        console.log(array);

        if (answer === 'stop') {
            array.pop();
            console.log(array);
            break;
        }

        if (answer === "" || answer === null) {
            array.pop(); 
            console.log(array);
        }

    }
}

practice();