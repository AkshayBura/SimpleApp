import logo from './logo-dark.jpg';

function Header() {
    return (
        <section className="navigation-bar">
            <div className="menu">
                <div className="container">
                    <div className="navbar-header">
                        <img src = {logo} alt="logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;