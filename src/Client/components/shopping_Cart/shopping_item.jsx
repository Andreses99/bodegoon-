const Item = (props) => {
    return (
      <>
        {props.cart.map((value,index) => {
          <div key={index} class="sidebar_cart-shopping_products-content">
            <div class="sidebar_cart-shopping_products-content-img">
              <img src={value.route} />
            </div>
            <div class="sidebar_cart-shopping_products-content-desc">
              <div class="sidebar_cart-shopping_products-content-desc_one">
                <b>{value.name}</b>
                <div>
                  <button>-</button>
                  <input type="numbre" Value="20"></input>
                  <button>+</button>
                </div>
                <b class="btn_remove">Remover</b>
              </div>
              <div class="sidebar_cart-shopping_products-content-desc_one">
                <p>$27000 COP</p>
              </div>
            </div>
          </div>;
        })}
      </>
    );
  };
  
  export default Item;
  