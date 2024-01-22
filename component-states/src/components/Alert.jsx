const Alert = ({ response, message}) => {
    return (
        <>
            {
                response.status == '200' && 
                <span className={`col-12 p-3 mt-5 alert ${ response.error ? "alert-danger" : "alert-success" }`}>
                    { message }
                </span>
            }
        </>
    )
}

export default Alert;