const Tweet = ({username, name, date, message}) => (
    
    <div className="bg-light border">
        <ul ><b>Tweet</b>
            <li>Username: {username}</li>
            <li>Name: {name}</li>
            <li>Date: {date}</li>
            <li>Message: {message}</li>
        </ul>
    </div>
)