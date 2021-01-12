const object = {
    title: "To Kill a Mockingbird",
    subtitle: "Drama in the Recent South",
    options: ['One', 'Two']
}

const user = {
    name: 'Mickey Mouse',
    age: 92,
    location: "Orlando, Florida"
}

const getLocation = location => {
    return location && <p>Location: {location}</p>
}

const getOptions = options => {
    return (
        <div>
            <p>Here are your options</p>
            <ol>
            {options.map(option => <li>option</li>)}
            </ol>
        </div>
    )
}

const template = (
    <div>
        <h1>{object.title}</h1>
        {object.subtitle && <p>{object.subtitle}</p>}
        {(object.options && object.options.length > 0) && getOptions(object.options)}
    </div>
)

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);