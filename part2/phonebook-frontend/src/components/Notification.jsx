const Notification = ({message}) => {
    const addNotification = {
        fontSize: "18px",
        borderColor: "darkGreen",
        borderStyle: "solid",
        padding: "5px",
        backgroundColor: "lightGrey",
        color: "darkGreen",
        margin: "5px"
    }

    const errorNotification = {
        fontSize: "18px",
        borderColor: "red",
        borderStyle: "solid",
        padding: "5px",
        backgroundColor: "lightGrey",
        color: "red",
        margin: "5px"
    }

    if (message === null) {
        return null
    }

    else if (message.startsWith("Information")) {
        return (
            <div className="error-notification" style={errorNotification}>
                {message}
            </div>
        )
    }

    return (
        <div className="add-notification" style={addNotification}>
            {message}
        </div>
    )
}

export default Notification