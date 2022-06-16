import classNames from 'classnames/bind';
import styles from './HomeService.module.scss';
import img1 from '../../../assets/images/homeservice/service-img1.jpeg';
import img2 from '../../../assets/images/homeservice/service-img2.jpeg';
import img3 from '../../../assets/images/homeservice/service-img3.jpg';
import img4 from '../../../assets/images/homeservice/service-img4.jpeg';
import img5 from '../../../assets/images/homeservice/service-img5.jpg';
import img6 from '../../../assets/images/homeservice/service-img6.jpg';
import img7 from '../../../assets/images/homeservice/service-img7.jpg';

const cx = classNames.bind(styles);

const HomeService = () => {
    return (
        <div className={cx('main-dichvu')}>
            <div className={cx('clear40')}></div>
            <div className={cx('container')}>
                <h3 className={cx('tit-pub', 'center')}>Dịch vụ</h3>
                <div className={cx('clear40')}></div>
                <div className={cx('row', 'flex-wrap')}>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')} data-aos="flip-left">
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')}>
                            <div className={cx('eff-scale')}>
                                <a href="/dich-vu">
                                    <img src={img1}></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt')}>
                                    <a href="/dich-vu" className={cx('clblack', 'text-uppercase')}>
                                        THẨM ĐỊNH GIÁ BẤT ĐỘNG SẢN
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')} data-aos="flip-left">
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')}>
                            <div className={cx('eff-scale')}>
                                <a href="/dich-vu">
                                    <img src={img2}></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt')}>
                                    <a href="/dich-vu" className={cx('clblack', 'text-uppercase')}>
                                        THẨM ĐỊNH GIÁ ĐỘNG SẢN
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')} data-aos="flip-left">
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')}>
                            <div className={cx('eff-scale')}>
                                <a href="/dich-vu">
                                    <img src={img3}></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt')}>
                                    <a href="/dich-vu" className={cx('clblack', 'text-uppercase')}>
                                        THẨM ĐỊNH GIÁ TRỊ DOANH NGHIỆP
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')} data-aos="flip-left">
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')}>
                            <div className={cx('eff-scale')}>
                                <a href="/dich-vu">
                                    <img src={img4}></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt')}>
                                    <a href="/dich-vu" className={cx('clblack', 'text-uppercase')}>
                                        THẨM ĐỊNH GIÁ TRỊ VÔ HÌNH
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')} data-aos="flip-left">
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')}>
                            <div className={cx('eff-scale')}>
                                <a href="/dich-vu">
                                    <img src={img5}></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt')}>
                                    <a href="/dich-vu" className={cx('clblack', 'text-uppercase')}>
                                        TƯ VẤN ĐẦU TƯ
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')} data-aos="flip-left">
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')}>
                            <div className={cx('eff-scale')}>
                                <a href="/dich-vu">
                                    <img src={img6}></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt')}>
                                    <a href="/dich-vu" className={cx('clblack', 'text-uppercase')}>
                                        TƯ VẤN BẤT ĐỘNG SẢN
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')} data-aos="flip-left">
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')}>
                            <div className={cx('eff-scale')}>
                                <a href="/dich-vu">
                                    <img src={img7}></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt')}>
                                    <a href="/dich-vu" className={cx('clblack', 'text-uppercase')}>
                                        CUNG CẤP THÔNG TIN KINH TẾ
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('clear40')}></div>
        </div>
    );
};

export default HomeService;
