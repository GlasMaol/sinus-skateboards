

function ProductModal({ product, onClose }) {
    return (
        <>
            <div className="modal-overlay"></div>
            <div className="modal">
                <div className="modal-content">
                    <div className="row">
                        <div className="left-section">
                            <div className="product-picture">
                                <img src={product.image} alt={product.title} style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="detailed-info">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: {product.price}</p>
                                <button onClick={onClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModal
