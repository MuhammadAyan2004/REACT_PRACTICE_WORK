export function Greetings(){

    let myName = 'Ayan'
    let fullName = ()=>{
        return 'Muhammad Ayan'
    }

    return <h3>
        hello there it's me {fullName()} learning React.
    </h3>
}