import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        rental,
        totalItem,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();
    if (isEmpty) return <h5 className='text-center py-5'>Cart is Empty</h5>
    return (
        <div>
            <div className='container-fluid py-5'>
                <div className='row justify-content-center'>
                    <h4 className='text-center py-3 text-decoration-underline'>My Cart</h4>
                    <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4'>
                        <div className='d-flex justify-content-center py-3'>
                            <h5 className='position-relative fw-bolder text-title'>Cart<span className='position-absolute  translate-middle rounded-pill badge bg-success mx-1'>{totalItem}</span></h5>
                            <p>Cart {{ totalItem }}</p>
                        </div>
                        <div>
                            <table className='table.table.table-light table-hover m-0'>
                                <tbody>
                                    {DataTransferItemList.map((item, index) => {
                                        return (
                                            <tr key={index} className='align-middle'>
                                                <td>{rental.housetype}</td>
                                                <td>{rental.description}</td>
                                                <td>Cost per Night: ${rental.price}</td>
                                                <td>Nights: {rental.quantity}</td>
                                                <td>
                                                    <button onClick={() => updateItemQuantity(rental.title, rental.quanity - 1)} className='btn btn-outline-dark ms-1'>-</button>
                                                    <button onClick={() => updateItemQuantity(rental.title, rental.quanity + 1)} className='btn btn-outline-dark ms-1'>+</button>
                                                    <button onClick={() => removeItem(rental.title)} className='btn btn-outline-danger ms-5'>Remove Rental</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between py-3'>
                        <button onClick={() => emptyCart()} className='btn btn-outline-danger'>Clear Cart</button>
                        <h3>Cart Total: ${cartTotal}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart