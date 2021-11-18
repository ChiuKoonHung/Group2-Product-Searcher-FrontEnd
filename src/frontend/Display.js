

function Display({filteredData, handleInput}) {
    
        return (
          <>
          <div className="search-bar-container">
            <h2>Product Search:</h2>
              <input type="text" placeholder="Enter Product" name="product" onChange={handleInput} />
          </div>
          <br />
          <div className="data-container">
            {filteredData.map(p => 
              <div className="individual-box" key={p.id}>
                <div className="title">{p.name}</div> 
                <div className="price">Price: {p.price}</div>
              </div>)}
          </div>
          </>
        );
}
    
    export default Display;