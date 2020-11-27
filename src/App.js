import Renderlist from "./Component/renderlist";
function App() {
  const listname=[{
    fistname:"Ngo",
    lastname:"Van Hai",
    handle:"@uom"
  },
  {
    fistname:"Ngo",
    lastname:"Van Hai",
    handle:"@uom"
  },{
    fistname:"Ngo",
    lastname:"Van Hai",
    handle:"@uom"
  }]
  return (
    <div className="App">
      <table className="table-name">
        <thead>
          <tr>
          <th>#</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>handle</th>
          </tr>
        </thead>
        <tbody>
            {
              listname.map((item,index)=>
                <Renderlist key={index} item={item} index={index}/>
              )
            }
        </tbody>
      </table>
    </div>
  );
}

export default App;
