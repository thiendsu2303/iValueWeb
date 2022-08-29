import classNames from 'classnames/bind';
import styles from './tintuc.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import SideBar from '~/components/Layout/DefaultLayout/SideBar';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import img1 from '../../../assets/images/tintuc/tintuc5-1.jpg';

const cx = classNames.bind(styles);

function gioithieu() {
    document.title = 'Giới thiệu';
    return (
        <div>
            <Header />
            <BackToTop />
            <section className={cx('hidden-container')}>
                <div className={cx('main-introduction')}>
                    <div className="clear40"></div>
                    <div className={cx('container')}>
                        <SideBar />

                        <div className={cx('col-md-9', 'order-1')}>
                            <div className={cx('introductionContent')}>
                                <div className={cx('introductionText')}>
                                    <p className={cx('introductionParagraph')}>
                                        <strong>Hệ thống văn phòng đại diện iValue</strong>
                                    </p>
                                </div>

                                <div className={cx('center')}>
                                    <img src={img1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="clear40"></div>

            <Sponsor />

            <div className="clear40"></div>

            <Footer />
        </div>
    );
}

export default gioithieu;
