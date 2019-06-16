import React from 'react';

class Cart extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          cart: [],
          showCart: false,
          id: ''
      };
      this.delete = this.delete.bind(this);
    }

    delete = (book) => {
        //const cartItem = this.state.cart.find(x => x.ID === book.ID);
        const items = this.props.cart.filter(item => item.ID !== book.ID);
        this.setState({cart : items});

        console.log(this.state.cart);
    }

    render() {
        const {cart, showCart, id} = this.props;
        const showHideClassName = showCart ? "modal display-block" : "modal display-none"
        return (
                    <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Libros a solicitar</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {cart.map(item => {
                                    return (
                                            <ul className="list-group" key={item.ID}>
                                                <li className="list-group-item">
                                                    {item.title}  <button className="btn btn-primary" data-dismiss="modal" onClick={this.delete.bind(this, item)}>X</button>
                                                </li>
                                            </ul>
                                    )
                                })}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Crear ticket</button>
                            </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Cart
