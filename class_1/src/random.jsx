export function Random () {

    let number = Math.random() * 100;

    return <h3>
        random number is: {Math.floor(number)}
    </h3>
}
