const ErrorCityComponent = ({errorColor}) => {
    return (
        <div className="box">
            <small>Oh no, something wrong in the city</small>
            <h1 style={{color:errorColor}}>Error</h1>
        </div>
    )
}
export default ErrorCityComponent;