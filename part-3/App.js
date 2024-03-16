const App = () => (
    <div>
        <Person 
            name="Matt"
            age={17}
        />
        <Person 
            name="Tom"
            age={19}
        />
        <Person 
            name="Claire"
            age={32}
            hobbies={['Soccer', 'Hiking', 'Tennis']}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));