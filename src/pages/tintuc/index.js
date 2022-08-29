import classNames from 'classnames/bind';
import styles from './tintuc.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Banner from '~/components/Layout/DefaultLayout/Banner';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import img1 from '../../assets/images/tintuc/tintuc1.png';
import img2 from '../../assets/images/tintuc/tintuc2-1.png';
import img3 from '../../assets/images/tintuc/tintuc3-1.png';
import img4 from '../../assets/images/tintuc/tintuc4-1.png';
import img5 from '../../assets/images/tintuc/tintuc5-1.jpg';

const cx = classNames.bind(styles);

function tintuc() {
    document.title = 'Tin tức';
    return (
        <div className={cx('tintucDiv')}>
            <Header />
            <Banner content="TIN TỨC" />

            <div className={cx('clear40')}></div>

            <div className={cx('block-news')}>
                <div className={cx('container')}>
                    <div className={cx('row', 'row-news')}>
                        <div className={cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className={cx('item-news', 'item-normal')}>
                                <div className={cx('item-wrap')}>
                                    <div className={cx('item-thumb')}>
                                        <a href="#">
                                            <img
                                                src={img1}
                                                alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "
                                            />
                                        </a>
                                        <div className={cx('type-news')}>
                                            <a href="/tin-tuc-1">Tin Tức Nổi Bật</a>
                                        </div>
                                    </div>

                                    <div className={cx('caption-item')}>
                                        <h4>
                                            <a href="/tin-tuc-1">
                                                {' '}
                                                Bộ Tài chính cấp Giấy Chứng nhận đủ điều kiện kinh doanh dịch vụ thẩm
                                                định giá cho iValue năm 2020{' '}
                                            </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className={cx('read-more')}>
                                        <div className={cx('date')}>
                                            <span> 10/06/2020</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className={cx('item-news', 'item-normal')}>
                                <div className={cx('item-wrap')}>
                                    <div className={cx('item-thumb')}>
                                        <a href="#">
                                            <img
                                                src={img2}
                                                alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "
                                            />
                                        </a>
                                        <div className={cx('type-news')}>
                                            <a href="/tin-tuc-2">Tin Tức Nổi Bật</a>
                                        </div>
                                    </div>

                                    <div className={cx('caption-item')}>
                                        <h4>
                                            <a href="/tin-tuc-2">
                                                {' '}
                                                Danh sách Thẩm định viên về giá đủ điều kiện hành nghề thẩm định giá tài
                                                sản tại iValue năm 2020
                                            </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className={cx('read-more')}>
                                        <div className={cx('date')}>
                                            <span> 12/06/2020 </span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className={cx('item-news', 'item-normal')}>
                                <div className={cx('item-wrap')}>
                                    <div className={cx('item-thumb')}>
                                        <a href="#">
                                            <img
                                                src={img3}
                                                alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "
                                            />
                                        </a>
                                        <div className={cx('type-news')}>
                                            <a href="/tin-tuc-3">Tin Tức Nổi Bật</a>
                                        </div>
                                    </div>

                                    <div className={cx('caption-item')}>
                                        <h4>
                                            <a href="/tin-tuc-3">
                                                {' '}
                                                Danh sách Thẩm định viên về giá đủ điều kiện hành nghề thẩm định giá tài
                                                sản tại iValue năm 2022{' '}
                                            </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className={cx('read-more')}>
                                        <div className={cx('date')}>
                                            <span> 30/12/2021</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className={cx('item-news', 'item-normal')}>
                                <div className={cx('item-wrap')}>
                                    <div className={cx('item-thumb')}>
                                        <a href="#">
                                            <img
                                                src={img4}
                                                alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "
                                            />
                                        </a>
                                        <div className={cx('type-news')}>
                                            <a href="/tin-tuc-4">Tin Tức Nổi Bật</a>
                                        </div>
                                    </div>

                                    <div className={cx('caption-item')}>
                                        <h4>
                                            <a href="/tin-tuc-4"> Biểu phí dịch vụ iValue năm 2022 </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className={cx('read-more')}>
                                        <div className={cx('date')}>
                                            <span> 05/01/2022</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col-lg-4', 'col-md-6', 'col-12')}>
                            <div className={cx('item-news', 'item-normal')}>
                                <div className={cx('item-wrap')}>
                                    <div className={cx('item-thumb')}>
                                        <a href="#">
                                            <img
                                                src={img5}
                                                alt="ĐẠI HỘI ĐOÀN CƠ SỞ CÔNG TY CỔ PHẦN THÔNG TIN VÀ THẨM ĐỊNH GIÁ MIỀN NAM (SIVC) NHIỆM KỲ 2022 – 2027 "
                                            />
                                        </a>
                                        <div className={cx('type-news')}>
                                            <a href="/tin-tuc-5">Tin Tức Nổi Bật</a>
                                        </div>
                                    </div>

                                    <div className={cx('caption-item')}>
                                        <h4>
                                            <a href="/tin-tuc-5"> Hệ thống văn phòng đại diện iValue </a>
                                        </h4>
                                        <p></p>
                                    </div>

                                    <div className={cx('read-more')}>
                                        <div className={cx('date')}>
                                            <span> 29/09/2021</span>
                                        </div>
                                        {/* <div class="button-more">
                                            <a href="https://www.sivc.com.vn/vi/news/da-i-ho-i-doa-n-co-so-cong-ty-co-phan-thong-tin-va-tham-dinh-gia-mien-nam-sivc-nhie-m-ky-2022-2027--p53.html">
                                                <img src="/assets/images/Icon feather-arrow-right.svg" alt=""/>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('clear40')}></div>
            <Sponsor />
            <div className={cx('clear40')}></div>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default tintuc;
