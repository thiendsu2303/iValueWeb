import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div>
            <footer className={cx('footer')}>
                <div className={cx('footer-top')}>
                    <div className={cx('clear40')}></div>
                    <div className={cx('container')}>
                        <div className={cx('flex-bw')} data-aos="fade-down">
                            <div className={cx('col-md-4')}>
                                <div className={cx('info-com-ft')}>
                                    <p>
                                        <strong>CÔNG TY TNHH THẨM ĐỊNH GIÁ IVALUE</strong>
                                    </p>
                                    <p>
                                        <strong>Địa chỉ: </strong>
                                        L17-11, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, Thành
                                        phố Hồ Chí Minh
                                    </p>
                                    <p>
                                        <strong>Hotline: </strong>
                                        0926 37 9999
                                    </p>
                                    <p>
                                        <strong>Email: </strong>
                                        tdg@ivalue.com.vn
                                    </p>
                                </div>
                            </div>
                            <div className={cx('col-md-4')}>
                                <div className={cx('center')}>
                                    <h4 className={cx('dang-ky-form')}>ĐĂNG KÝ</h4>
                                    <div className={cx('clear10')}></div>
                                    <p className={cx('dang-ky-nhan-thong-tin')}>
                                        Đăng ký để nhận thêm thông tin mới nhất từ chúng tôi
                                    </p>
                                    <div className={cx('clear10')}></div>
                                    <form className={cx('f-from-se')}>
                                        <div className={cx('input-group')}>
                                            <input
                                                type="text"
                                                className={cx('form-control')}
                                                placeholder="Email của bạn..."
                                                name="email"
                                                required
                                            ></input>
                                            <span className={cx('input-group-addon')}>
                                                <button name="nhantin" type="submit">
                                                    <i className={cx('fas fa-paper-plane')}></i>
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={cx('col-md-4')}>
                                <div className={cx('social-ft')}>
                                    <a href="#" className={cx('')}>
                                        <i className={cx('fab fa-facebook-f')}></i>
                                    </a>
                                    <a href="#" className={cx('')}>
                                        <i className={cx('fab fa-twitter')}></i>
                                    </a>
                                    <a href="#" className={cx('')}>
                                        <i className={cx('fab fa-linkedin')}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('clear40')}></div>
                </div>
                <div className={cx('footer-bottom')}>
                    <div className={cx('container')}>
                        <p className={cx('center')}>© Copyright 2020 CÔNG TY TNHH THẨM ĐỊNH GIÁ IVALUE</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
