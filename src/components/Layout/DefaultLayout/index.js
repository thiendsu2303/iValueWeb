import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
            <Footer />
            <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button">
                <span class="glyphicon glyphicon-chevron-up"></span>
            </a>
        </div>
    );
}

export default DefaultLayout;
