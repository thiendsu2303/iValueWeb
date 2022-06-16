import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../../../assets/images/logo.jpg';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [Header, setHeader] = useState(false);

    const afterScroll = () => {
        if (window.scrollY >= 50) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };
    window.addEventListener('scroll', afterScroll);
    return (
        <div>
            <header className={Header ? cx('header-pad') : cx(' ')}></header>
            <header className={Header ? cx('') : cx(' ')}>
                <div className={cx('header-top')}>
                    <div className={cx('container')}>
                        <div className={cx('flex-box')}>
                            <a href="/" className={cx('Logo')}>
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
                                    <a href="/" title="facebook">
                                        <i className={cx('fab', 'fa-facebook-f')}></i>
                                    </a>
                                    <a href="/" title="twitter">
                                        <i className={cx('fab', 'fa-twitter')}></i>
                                    </a>
                                    <a href="/" title="linkedin">
                                        <i className={cx('fab', 'fa-linkedin')}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('header-bottom')}>
                    <div className={cx('container')}>
                        <ul className={cx('ul-main-menu')}>
                            <li className={cx('header-home')}>
                                <a href="/">
                                    <i className={cx('fas', 'fa-home')}></i>
                                </a>
                            </li>
                            <li>
                                <a href="/gioi-thieu">GIỚI THIỆU</a>
                            </li>
                            <li className={cx('header-service')}>
                                <a href="/dich-vu">
                                    DỊCH VỤ
                                    <i className={cx('fas', 'fa-chevron-down')}></i>
                                </a>
                                <ul className={cx('header-service-menu')}>
                                    <li>
                                        <a href="/dich-vu/#">THẨM ĐỊNH GIÁ BẤT ĐỘNG SẢN</a>
                                    </li>
                                    <li>
                                        <a href="/dich-vu/#tdg-ds">THẨM ĐỊNH GIÁ ĐỘNG SẢN</a>
                                    </li>
                                    <li>
                                        <a href="/dich-vu/#tdg-dn">THẨM ĐỊNH GIÁ DOANH NGHIỆP</a>
                                    </li>
                                    <li>
                                        <a href="/dich-vu/#tdg-vh">THẨM ĐỊNH GIÁ TRỊ VÔ HÌNH</a>
                                    </li>
                                    <li>
                                        <a href="/dich-vu/#tv-dt">TƯ VẤN ĐẦU TƯ</a>
                                    </li>
                                    <li>
                                        <a href="/dich-vu/#tv-bds">TƯ VẤN BẤT ĐỘNG SẢN</a>
                                    </li>
                                    <li>
                                        <a href="/dich-vu/#cc-ttkt">CUNG CẤP THÔNG TIN KINH TẾ</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/du-an">DỰ ÁN</a>
                            </li>
                            <li>
                                <a href="/tin-tuc">TIN TỨC</a>
                            </li>
                            <li>
                                <a href="/lien-he">LIÊN HỆ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
