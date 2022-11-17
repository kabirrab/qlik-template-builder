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
        <h2>
          Template builder completed with { 
            queryOptions.filter(queryOptions => queryOptions.name === 'status')
            .map((queryOptions,index) => <b key={index} className={queryOptions.value == 'success' ? 'success' : 'failed'} >{queryOptions.value}</b>) 
          }
        </h2>
      </div>
      <div>
        <ol>          
          { 
            queryOptions.filter(queryOptions => queryOptions.name != 'status')
            .map((queryOptions, index) => <li key={ index }>{queryOptions.name} : {queryOptions.value} </li>) 
          }
        </ol>
      </div>
    </div>
  );
}

export default App;