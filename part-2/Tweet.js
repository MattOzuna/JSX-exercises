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

{/* <Card
className="my-2"
color="primary"
outline
style={{
  width: '18rem'
}}
>
<CardHeader>
  Tweet
</CardHeader>
<CardBody>
  <CardTitle tag="h5">
    Username:{username}, Name:{name}, Date:{date}
  </CardTitle>
  <CardText>
    {message}
  </CardText>
</CardBody>
</Card> */}