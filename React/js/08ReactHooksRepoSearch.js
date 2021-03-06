const SearchRepos = () => {
  const [query, setQuery] = React.useState('react');
  const [listItems, setListItems] = React.useState([]);

  const fetchData = React.useCallback(async () => {
    const response = await fetch('https://api.github.com/search/repositories?q=' + query);
    const responseData = await response.json();
    (response.ok) ? setListItems(responseData.items) : console.error(`UPS! error fetching`)
    })

  const handleChange = () => {
    (!event.target.value) ? setQuery('react') : setQuery(event.target.value);
    return console.log(`query: `+ query);
  }
  
  const itemRows = listItems.map((repo) => 
      <tr key={repo.id}>
        <td className="avatar"><img src={repo.owner.avatar_url}/></td>
        <td>{repo.full_name}</td>
        <td><a href={repo.owner.html_url}>{repo.owner.html_url}</a></td>
      </tr>
  )

  React.useEffect(() => {
    fetchData();
  }, [query])

    return (
      <div className="container">
        <nav>
          <svg className="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          <form>
            <input className="search" type="text" placeholder="Type to search repository..." onChange={() => handleChange()}/>
          </form>
        </nav>
        <h1 className="title">Repositories</h1>
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Repository Name</th>
              <th scope="col">URL</th>
            </tr>
          </thead>
          <tbody>
            {itemRows}
          </tbody>
        </table>
      </div>
    );
}

ReactDOM.render(<SearchRepos />, document.getElementById('root'));