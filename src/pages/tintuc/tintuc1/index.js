import classNames from 'classnames/bind';
import styles from './tintuc.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import SideBar from '~/components/Layout/DefaultLayout/SideBar';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import img1 from '../../../assets/images/tintuc/tintuc1.png';
import img2 from '../../../assets/images/tintuc/tintuc1-2.png';

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
                                        <strong>
                                            Bộ Tài chính cấp Giấy Chứng nhận đủ điều kiện kinh doanh dịch vụ thẩm định
                                            giá cho iValue năm 2020
                                        </strong>
                                    </p>

                                    <p className={cx('introductionParagraph')}>
                                        Công ty TNHH Thẩm định giá <strong>iValue</strong> được Bộ Tài chính cấp Giấy
                                        chứng nhận đủ điều kiện kinh doanh dịch vụ thẩm định giá ngày 10 tháng 06 năm
                                        2020. Theo đó, kể từ ngày được cấp Giấy chứng nhận, <strong>iValue</strong> được
                                        thực hiện các hoạt động thẩm định giá theo Luật giá năm 2012 như Thẩm định giá
                                        bất động sản, Thẩm định giá động sản, Thẩm định giá doanh nghiệp, Thẩm định giá
                                        trị vô hình, Tư vấn đầu tư, Tư vấn bất động sản và Cung cấp thông tin kinh tế.
                                    </p>
                                </div>

                                <div className={cx('center')}>
                                    <img src={img1} />
                                </div>

                                {/* <div className="clear40"></div> */}

                                <div className={cx('center')}>
                                    <img src={img2} />
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
