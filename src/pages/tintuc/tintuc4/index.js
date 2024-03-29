import classNames from 'classnames/bind';
import styles from './tintuc.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import SideBar from '~/components/Layout/DefaultLayout/SideBar';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import img1 from '../../../assets/images/tintuc/tintuc4-1.png';

const cx = classNames.bind(styles);

function gioithieu() {
    document.title = 'Tin tức';
    window.scrollTo(0, 0);
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
                                        <strong>Biểu phí dịch vụ iValue năm 2022</strong>
                                    </p>

                                    <p className={cx('introductionParagraph')}>
                                        Công ty TNHH Thẩm định giá <strong>iValue</strong> thông báo biểu phí thẩm định
                                        giá mới áp dụng từ ngày 05/01/2022.
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
