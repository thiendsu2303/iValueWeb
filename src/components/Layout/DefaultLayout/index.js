import classNames from 'classnames/bind';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import Sponsor from './Sponsor';
import BackToTop from './BackToTop';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="clear40"></div>
                <SideBar />
                <div className="clear40"></div>
            </div>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default DefaultLayout;
