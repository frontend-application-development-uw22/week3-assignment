import { useCart } from 'react-use-cart';

const RentalCard = (props) => {
    const { addRental } = useCart();
    return (
        <>
            <div clasasName="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
                <div className="card h-100 shadow">
                    <img src="{props.image}" alt="{props.housetype}" className="card-img top-fluid"></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.housetype}</h5>
                        <span className="fw-bolder">{props.cost}</span>
                    </div>
                    <div className="">
                        <p className="card-text">${props.description}</p>
                    </div>
                    <div className="d-grid justify-content-end mt-4">
                        <button className=" btn btn-sm btn-outline-success" onClick={() => addRental(props.item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RentalCard