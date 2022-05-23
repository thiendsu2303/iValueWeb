import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div>
            <footer className={cx('')}>
                <div className={cx('footer-top')}>
                    <div className={cx('clear')}></div>
                    <div className={cx('container')}>
                        <div className={cx('row flex-bw aos init aos-animate')} data-aos="fade-down">
                            <div className={cx('col-md-4')}>
                                <div className={cx('info-com-ft')}>
                                    <p>
                                        <strong>CÔNG TY THẨM ĐỊNH GIÁ IVALUE</strong>
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
                                    <h4 className={cx('dang-ky-form')}>Đăng ký</h4>
                                    <div className={cx('clear10')}></div>
                                    <p style="color: #a4a4a4;">Đăng ký để nhận thông tin mới nhất từ chúng tôi</p>
                                </div>
                            </div>
                            <div className={cx('col-md-4')}></div>
                        </div>
                    </div>
                    <div className={cx('clear')}></div>
                </div>
                <div className={cx('footer-bottom')}></div>
            </footer>
        </div>
    );
}

export default Footer;
