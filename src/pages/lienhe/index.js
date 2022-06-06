import classNames from 'classnames/bind';
import styles from './lienhe.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';

const cx = classNames.bind(styles);

function LienHePage() {
    return (
        <div>
            <Header />

            <div className={cx('bodyLienHe')}>
                <div className={cx('bannerPage')}>
                    <img
                        src={
                            'https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-summer-outdoor-scene-banner-image_249780.jpg'
                        }
                        className={cx('bannerImage')}
                    />
                    <h3 className={cx('titleLienHe')}>Liên Hệ</h3>
                </div>

                <div className={cx('LienHeProcess')}>
                    <div className="clear40"></div>
                    <div className={cx('interactiveProcess')}>
                        <div className={cx('col-md-6')} data-aos="faded-right">
                            <h3 className={cx('bold', 'nomargin', 'text-uppercase')}>THÔNG TIN LIÊN HỆ</h3>
                            <div className="clear20"></div>
                            <div className={cx('ivalueAddress')}>
                                <p>
                                    <i class="fas fa-map-marker-alt"></i> L17-11, Tòa nhà Vincom Center, 72 Lê Thánh
                                    Tôn, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
                                </p>
                                <p>
                                    <i class="fas fa-phone"></i> 0926 37 9999
                                </p>
                                <p>
                                    <i class="fas fa-envelope-open-text"></i> tdg@ivalue.com.vn
                                </p>
                            </div>

                            <div className="clear10"></div>

                            <div className={cx('social-lh', 'flex')}>
                                <a href="#" className={cx('so-fb')}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className={cx('so-tw')}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className={cx('so-in')}>
                                    <i className="fab fa-linkedin"></i>
                                </a>

                                <div className="clear20"></div>
                            </div>
                        </div>

                        <div className={cx('col-md-6')} data-aos="fade-left">
                            <form method="POST" action="">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={cx('form-control')}
                                            placeholder="Họ và tên"
                                            name="name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={cx('form-group')}>
                                        <input
                                            type="email"
                                            className={cx('form-control')}
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={cx('form-group')}>
                                        <input
                                            type="text"
                                            className={cx('form-control')}
                                            placeholder="Số điện thoại"
                                            name="phone"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={cx('form-group')}>
                                        <input
                                            type="text"
                                            className={cx('form-control')}
                                            placeholder="Địa chỉ"
                                            name="address"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div class="form-group">
                                        <textarea
                                            className={cx('form-control')}
                                            rows="4"
                                            placeholder="Lời nhắn"
                                            name="message"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={cx('center')}>
                                    <button className={cx('a-lienhe')} type="submit" name="lienhe">
                                        GỬI
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('distance50')}></div>

            <div className={cx('ggmap')}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57508.93082445637!2d106.68804588171352!3d10.779397636975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f47df3d1ecf%3A0x2b9938216230e217!2zVmluY29tIENlbnRlciAoVmluY29tIMSQ4buTbmcgS2jhu59pKQ!5e1!3m2!1svi!2s!4v1621419873227!5m2!1svi!2s"
                    width="600"
                    height="450"
                    frameborder="0"
                ></iframe>
            </div>

            <div className="clear40"></div>

            <Sponsor />
            <div className={cx('clear40')}></div>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default LienHePage;
