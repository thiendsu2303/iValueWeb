import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '../../../../assets/images/logo.jpg';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [Header, setHeader] = useState(false);
    const [open, setOpen] = useState(false);
    const [openSideNav, setOpenSideNav] = useState(false);

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
            <header className={Header ? cx('header-fixed') : cx(' ')}>
                <div className={cx('header-top')}>
                    <div className={cx('container')}>
                        <div className={cx('flex-box')}>
                            <Link to="/" className={cx('Logo')}>
                                <img src={logo} alt="logo"></img>
                            </Link>
                            <div className={cx('info')}>
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
                                <p className={cx('p-info')}>
                                    <span>
                                        <i className={cx('glyphicon', 'glyphicon-home')}></i>
                                    </span>
                                    L17-11, Vincom Center, 72 Lê Thánh Tôn, P.Bến Nghé, Q.1, TP.HCM
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
                            <div className={cx('show990')}>
                                <span className={cx('sp-sn')}>
                                    <i
                                        className={cx('fas', 'fa-bars', 'fa-2x')}
                                        onClick={() => setOpenSideNav(!openSideNav)}
                                        style={{ color: '#084b2a' }}
                                    ></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('header-bottom')}>
                    <div className={cx('container')}>
                        <ul className={cx('ul-main-menu')}>
                            <li className={cx('header-home')}>
                                <Link to="/">
                                    <i className={cx('fas', 'fa-home')}></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="/gioi-thieu">GIỚI THIỆU</Link>
                            </li>
                            <li className={cx('header-service')}>
                                <Link to="/dich-vu">
                                    DỊCH VỤ
                                    <i className={cx('fas', 'fa-chevron-down')}></i>
                                </Link>
                                <ul className={cx('header-service-menu')}>
                                    <li>
                                        <Link to="/dich-vu">THẨM ĐỊNH GIÁ BẤT ĐỘNG SẢN</Link>
                                    </li>
                                    <li>
                                        <Link to="/dich-vu">THẨM ĐỊNH GIÁ ĐỘNG SẢN</Link>
                                    </li>
                                    <li>
                                        <Link to="/dich-vu">THẨM ĐỊNH GIÁ DOANH NGHIỆP</Link>
                                    </li>
                                    <li>
                                        <Link to="/dich-vu">THẨM ĐỊNH GIÁ TRỊ VÔ HÌNH</Link>
                                    </li>
                                    <li>
                                        <Link to="/dich-vu">TƯ VẤN ĐẦU TƯ</Link>
                                    </li>
                                    <li>
                                        <Link to="/dich-vu">TƯ VẤN BẤT ĐỘNG SẢN</Link>
                                    </li>
                                    <li>
                                        <Link to="/dich-vu">CUNG CẤP THÔNG TIN KINH TẾ</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/du-an">DỰ ÁN</Link>
                            </li>
                            <li>
                                <Link to="/tin-tuc">TIN TỨC</Link>
                            </li>
                            <li>
                                <Link to="/lien-he">LIÊN HỆ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Collapse in={openSideNav}>
                <div className={cx('show990')}>
                    <div className={cx('sidenav')}>
                        <div className={cx('social-mb')}>
                            <div className={cx('contact-mb')}>
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
                            <span className={cx('sp-cn')}>
                                <i class="fas fa-times fa-2x" onClick={() => setOpenSideNav(!openSideNav)}></i>
                            </span>
                        </div>
                        <ul className={cx('menu-mobile')}>
                            <li>
                                <Link to="/">TRANG CHỦ</Link>
                            </li>
                            <li>
                                <Link to="/gioi-thieu">GIỚI THIỆU</Link>
                            </li>
                            <li className={cx('hassub-mb')}>
                                <p className={cx('phelp')}>
                                    <Link to="/dich-vu">DỊCH VỤ</Link>
                                    <a onClick={() => setOpen(!open)} className={cx('a-icon', 'collapsed')}>
                                        <i class="fas fa-angle-down"></i>
                                    </a>
                                </p>
                                <Collapse in={open}>
                                    <ul className={cx('sub-menu-mb')}>
                                        <li>
                                            <Link to="/dich-vu/#">THẨM ĐỊNH GIÁ BẤT ĐỘNG SẢN</Link>
                                        </li>
                                        <li>
                                            <Link to="/dich-vu/#tdg-ds">THẨM ĐỊNH GIÁ ĐỘNG SẢN</Link>
                                        </li>
                                        <li>
                                            <Link to="/dich-vu">THẨM ĐỊNH GIÁ DOANH NGHIỆP</Link>
                                        </li>
                                        <li>
                                            <Link to="/dich-vu">THẨM ĐỊNH GIÁ TRỊ VÔ HÌNH</Link>
                                        </li>
                                        <li>
                                            <Link to="/dich-vu">TƯ VẤN ĐẦU TƯ</Link>
                                        </li>
                                        <li>
                                            <Link to="/dich-vu">TƯ VẤN BẤT ĐỘNG SẢN</Link>
                                        </li>
                                        <li>
                                            <Link to="/dich-vu">CUNG CẤP THÔNG TIN KINH TẾ</Link>
                                        </li>
                                    </ul>
                                </Collapse>
                            </li>
                            <li>
                                <Link to="/du-an">DỰ ÁN</Link>
                            </li>
                            <li>
                                <Link to="/tin-tuc">TIN TỨC</Link>
                            </li>
                            <li>
                                <Link to="/lien-he">LIÊN HỆ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;
