import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../../../assets/images/logo.jpg';

const cx = classNames.bind(styles);
// console.log(images);
function Header() {
    return (
        <div>
            <header className={cx('')}>
                <div className={cx('header-top')}>
                    <div className={cx('container')}>
                        <div className={cx('flex-box')}>
                            <a href="#" className={cx('Logo')}>
                                <img src={logo} alt="logo"></img>
                            </a>
                            <div className={cx('info')}>
                                <p className={cx('p-info')}>
                                    <span>
                                        <i className={cx('glyphicon', 'glyphicon-home')}></i>
                                    </span>
                                    L17-11, Vincom Center, 72 Lê Thánh Tôn, P.Bến Nghé, Q.1, TP.HCM
                                </p>
                                <p className={cx('p-info')}>
                                    <span>
                                        <i className={cx('glyphicon', 'glyphicon-earphone')}></i>
                                    </span>
                                    0926 37 9999
                                </p>
                                <p className={cx('p-info')}>
                                    <span>
                                        <i className={cx('glyphicon', 'glyphicon-envelope')}></i>
                                    </span>
                                    tdg@ivalue.com.vn
                                </p>
                            </div>
                            <div className={cx('social')}>
                                <div className={cx('social-top')}></div>
                                <div className={cx('social-bottom')}>
                                    <a href="#">
                                        <i className={cx('fab', 'fa-facebook-f')}></i>
                                    </a>
                                    <a href="#">
                                        <i className={cx('fab', 'fa-twitter')}></i>
                                    </a>
                                    <a href="#">
                                        <i className={cx('fab', 'fa-linkedin')}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('header-bottom')}>
                    <div className={cx('header-bottom-container')}>
                        <ul className={cx('ul-main-menu')}>
                            <li className={cx('header-home')}>
                                <a href="#">
                                    <i className={cx('fas', 'fa-home')}></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">GIỚI THIỆU</a>
                            </li>
                            <li className={cx('header-service')}>
                                <a href="#">
                                    DỊCH VỤ
                                    <i className={cx('fas', 'fa-chevron-down')}></i>
                                </a>
                                <ul className={cx('header-service-menu')}>
                                    <li>
                                        <a href="#">THẨM ĐỊNH GIÁ BẤT ĐỘNG SẢN</a>
                                    </li>
                                    <li>
                                        <a href="#">THẨM ĐỊNH GIÁ ĐỘNG SẢN</a>
                                    </li>
                                    <li>
                                        <a href="#">THẨM ĐỊNH GIÁ DOANH NGHIỆP</a>
                                    </li>
                                    <li>
                                        <a href="#">THẨM ĐỊNH GIÁ TRỊ VÔ HÌNH</a>
                                    </li>
                                    <li>
                                        <a href="#">TƯ VẤN ĐẦU TƯ</a>
                                    </li>
                                    <li>
                                        <a href="#">TƯ VẤN BẤT ĐỘNG SẢN</a>
                                    </li>
                                    <li>
                                        <a href="#">CUNG CẤP THÔNG TIN KINH TẾ</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">DỰ ÁN</a>
                            </li>
                            <li>
                                <a href="#">LIÊN HỆ</a>
                            </li>
                            {/* <li className={cx('has-search')}>
                                <a href="#">
                                    <i className={cx('fas fa-search')}></i>
                                </a>
                                <div className={cx('block-search')}>
                                    <form className={cx('f-search')} method="POST" action="timkiem">
                                        <div className={cx('input-group stylish-input-group')}>
                                            <input
                                                type="text"
                                                className={cx('form-color')}
                                                placeholder="Tìm kiếm"
                                                name="search"
                                                required
                                            ></input>
                                            <span className={cx('input-group-addon')}>
                                                <button type="submit" name="timkiem">
                                                    <span className={cx('glyphicon glyphicon-search')}></span>
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className={cx('show')}></div>
            </header>
        </div>
    );
}

export default Header;
