const RestList = () => {
  const [listItems, setListItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(response => response.json()) 
    .then(responseData => { 
      setListItems(responseData.data)
    })
    .catch(err => console.error(err))
  }, [])
  
  const itemRows = listItems.map((person) => 
      <tr key={person.id}>
        <td className="avatar"><img src={person.avatar}/></td>
        <td>{person.first_name}</td>
        <td>{person.last_name}</td>
        <td>{person.email}</td>
      </tr>
   )
     
    return (
      <div>
        <h2>Persons</h2>
        <table>
          <thead>
            <tr><th scope="col"></th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th></tr>
          </thead>
          <tbody>
            {itemRows}
          </tbody>
        </table>
      </div>
    );
}

ReactDOM.render(<RestList />, document.getElementById('root'));