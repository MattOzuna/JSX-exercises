const App = () => (
    <div >
        <Tweet 
            username="Matt1234"
            name="Matt"
            date="03/12/2024"
            message="This is my first tweet"
            style={{
                width: '18rem'
              }}
        />
        <Tweet 
            username="Matt1234"
            name="Matt"
            date="03/12/2024"
            message="This is my second tweet"
            style={{
                width: '18rem'
              }}
        />
        <Tweet 
            username="Test1234"
            name="Test"
            date="12/24/2024"
            message="This is my third tweet"
            style={{
                width: '18rem'
              }}
        />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"));