const Person = ({name, age, hobbies=[]}) => (
    <p>
        Learn some information about this person. 
        Name: {name}, Age: {age}
        <h3>{age>18? `please go vote ${name}!` : `You can't vote ${name}!`}</h3>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </p>
)