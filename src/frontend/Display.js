

function Display({filteredData, handleInput}) {
    
        return (
          <>
          <div>
            <h3>Product Search:</h3>
            <input type="text" placeholder="Enter Product" name="product" onChange={handleInput} />
          </div>
          <ul>
            {filteredData.map(p => <li key={p.id}>{p.name}, {p.price}</li>)}
          </ul>
          </>
        );
}
    
    export default Display;