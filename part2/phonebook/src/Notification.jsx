const Notification = ({message, type}) => {
    const allStyles = {
        fontSize: "20px",
        backgroundColor: "rgb(190,190,190)",
        padding: "20px",
        borderRadius: "10px",
        fontWeight: "bold"
    }

    const notification = {
        color: "rgb(0, 102, 0)",
        border: "3px solid rgb(0, 102, 0)"
    }

    const error = {
        color: "rgb(255, 80, 80)",
        border: "3px solid rgb(255, 80, 80)"
    }

    switch (type) {
        case '':
            return
        case 'error':
            return (
                <div style={{...allStyles, ...error}}>
                {message}
                </div>
            )
        case 'notification':
            return (
                <div style={{...allStyles, ...notification}}>
                {message}
                </div>
            )
    }
}

export default Notification