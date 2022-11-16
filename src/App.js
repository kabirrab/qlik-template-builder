import Header from './components/Header'


function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const parameterObject = Object.fromEntries(urlSearchParams.entries());
  let queryOptions = []
  for (var key in parameterObject) {
    if (!parameterObject.hasOwnProperty(key)) continue;
    let parameterKey = key;
    let parameterValue = parameterObject[key];
    let newParameterObject = {
      name: parameterKey,
      value: parameterValue
    };
    queryOptions.push(newParameterObject);    
  };
  return (       
    <div className = "container" >
      <Header />
      <div>
        <ul>
          {queryOptions.map(function(queryOptions, index){
            return <li key={ index }>{queryOptions.name} : {queryOptions.value} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;