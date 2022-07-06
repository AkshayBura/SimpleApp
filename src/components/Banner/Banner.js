import banner from './banner1.jpg';

function Banner() {
    return (
        <section className="banner" >
            <div className="container">
                <img src={banner} alt="logo" width="100%" />
            </div>
        </section>
    );
}

export default Banner;