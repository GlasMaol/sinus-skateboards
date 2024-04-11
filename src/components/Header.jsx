

function Header() {

    return (
        <section className="header__container">
            <article>
                <img src="../src/assets/sinus-logo.png" alt="logo" className="logo" />
            </article>
            <article className="header-right__container">
                <nav className="nav">
                    <ul className="nav__ul">
                        <li>Products</li>
                        <li>My Account</li>
                    </ul>
                </nav>
                <img className="cart-red" src="../src/assets/cart-red.png" alt="cart icon" />
            </article>
        </section>

    )
}

export default Header
