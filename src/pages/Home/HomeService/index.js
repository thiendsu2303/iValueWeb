import classNames from 'classnames/bind';
import styles from './HomeService.module.scss';

const cx = classNames.bind(styles);

const HomeService = () => {
    return (
        <div className={cx('main-dichvu')}>
            <div className={cx('clear40')}></div>
            <div className={cx('container')}>
                <h3 className={cx('tit-pub', 'center')}>Dịch vụ</h3>
                <div className={cx('clear40')}></div>
                <div className={cx('row', 'flex-wrap')}>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')}>
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')} data-aos="flip-left">
                            <div className={cx('eff-scale')}>
                                <a href="#">
                                    <img></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt', 'text-uppercase')}>
                                    <a href="#" className={cx('clblack')}>
                                        THẨM ĐỊNH GIÁ BẤT ĐỘNG SẢN
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')}>
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')} data-aos="flip-left">
                            <div className={cx('eff-scale')}>
                                <a href="#">
                                    <img></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt', 'text-uppercase')}>
                                    <a href="#" className={cx('clblack')}>
                                        THẨM ĐỊNH GIÁ ĐỘNG SẢN
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')}>
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')} data-aos="flip-left">
                            <div className={cx('eff-scale')}>
                                <a href="#">
                                    <img></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt', 'text-uppercase')}>
                                    <a href="#" className={cx('clblack')}>
                                        THẨM ĐỊNH GIÁ DOANH NGHIỆP
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')}>
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')} data-aos="flip-left">
                            <div className={cx('eff-scale')}>
                                <a href="#">
                                    <img></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt', 'text-uppercase')}>
                                    <a href="#" className={cx('clblack')}>
                                        THẨM ĐỊNH GIÁ TRỊ VÔ HÌNH
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')}>
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')} data-aos="flip-left">
                            <div className={cx('eff-scale')}>
                                <a href="#">
                                    <img></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt', 'text-uppercase')}>
                                    <a href="#" className={cx('clblack')}>
                                        TƯ VẤN ĐẦU TƯ
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')}>
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')} data-aos="flip-left">
                            <div className={cx('eff-scale')}>
                                <a href="#">
                                    <img></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt', 'text-uppercase')}>
                                    <a href="#" className={cx('clblack')}>
                                        TƯ VẤN BẤT ĐỘNG SẢN
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')}>
                        <div className={cx('list-gt', 'aos-init', 'aos-animate')} data-aos="flip-left">
                            <div className={cx('eff-scale')}>
                                <a href="#">
                                    <img></img>
                                </a>
                            </div>
                            <div className={cx('info-gt')}>
                                <h4 className={cx('name-gt', 'text-uppercase')}>
                                    <a href="#" className={cx('clblack')}>
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
}

export default HomeService;