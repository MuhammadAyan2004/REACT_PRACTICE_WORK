function CurrentTime () {
    let date = new Date()
    let currentDate = date.toLocaleDateString()
    let currentTime = date.toLocaleTimeString()

    return <p>
        This is the current Time: {currentDate} - {currentTime}
    </p>
}

export default CurrentTime;