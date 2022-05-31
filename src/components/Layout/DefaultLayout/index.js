import classNames from 'classnames/bind';
import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const afterScroll = () => {
        const backToTop = document.getElementById("back-to-top");
        if(window.scrollY >= 5) {
            backToTop.style.display = "block";
        }
        else {
            backToTop.style.display = "none";
        }
    }
    window.addEventListener('scroll', afterScroll);
    return (
        <div>
            <Header />
            <div className="container">
                <div className="clear40"></div>
                <SideBar />
                {/* <div className="content">{children}</div> */}
            </div>
            <Footer />
            <a id="back-to-top" href="/" className={cx('btn', 'btn-primary', 'btn-lg', 'back-to-top')} role="button">
                <span className={cx('glyphicon', 'glyphicon-chevron-up')}></span>
            </a>
        </div>
    );
}

export default DefaultLayout;
