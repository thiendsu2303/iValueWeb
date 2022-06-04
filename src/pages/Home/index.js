import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { DefaultLayout } from '~/components/Layout';
import PrincipalOperation from './OperatingPrincipal';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <Header />
            <div className={cx('main-banner')}></div>
            <div className={cx('main-gioithieu', 'aos-init', 'aos-animate')}>
                <div className={cx('clear40')}></div>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')}>
                            <h3 className={cx('tit-pub')}>Giới thiệu</h3>
                            <div className={cx('editer')}>
                                <p></p>
                                <p>
                                    Là một doanh nghiệp hoạt động lâu năm trong lĩnh vực vận tải hàng hóa, nhằm đáp ứng
                                    nhu cầu vận chuyển hàng hóa ngày càng lớn của quý khách hàng, Chúng tôi đã đầu tư
                                    một lượng lớn phương tiện vận tải với nhiều loại trọng tải khác nhau, nhằm đáp ứng
                                    một cách tốt nhất nhu cầu vận chuyển hàng hóa. Chúng tôi cam kết cung cấp một dịch
                                    vụ hoàn hảo về vận chuyển hàng hóa bằng đường bộ, đường không, đường biển trên khắp
                                    mọi miền đất nước trên thế giới. Dịch vụ vận chuyển hàng hóa của Chúng tôi đã làm
                                    cho khách hàng thực sự an tâm khi hàng hoá của họ được giao cho chúng tôi. Chúng tôi
                                    đảm bảo sẽ đưa hàng của Quý khách đến nơi an toàn, đúng lịch trình. Đội ngũ nhân
                                    viên dày dặn kinh nghiệm trong lĩnh vực vận tải, được đào tạo bài bản, chịu được áp
                                    lực rất cao, đảm bảo an toàn cho hàng hóa của quý khách. Với đội ngũ cán bộ, nhân
                                    viên điều hành năng động, nhiệt tình được đào tạo bài bản, am hiểu mọi khía cạnh
                                    trong lĩnh vực giao nhận vận tải, có thể tư vấn cho quý khách chọn được giải pháp an
                                    toàn, nhanh chóng và hiệu quả nhất, đáp ứng mọi yêu cầu vận chuyển của quý khách.
                                    Cùng với hệ thống kho bãi rộng, sạch sẽ, an ninh đảm bảo cho hàng hóa của quý khách.
                                    Chúng tôi sẽ tiếp tục khẳng định, phát triển để cung cấp những dịch vụ hoàn hảo và
                                    hiệu quả hơn để đáp ứng mọi yêu cầu của Quý khách hàng. Đến với Công Ty INTERLINK,
                                    quyền lợi của Quý khách hàng luôn luôn được đảm bảo. Chúng tôi cam đoan rằng sẽ trở
                                    thành một trong những nhà vận tải chuyên nghiệp hàng đầu Việt Nam.
                                </p>
                                <p></p>
                            </div>
                            <div className={cx('clear20')}></div>
                            <a href="gioi-thieu" className={cx('a-lienhe')}>
                                Tìm hiểu thêm
                                <i className={cx('fas fa-angle-right')}></i>
                            </a>
                        </div>
                        <div className={cx('col-md-8', 'col-sm-12', 'col-xs-12')}>
                            <div className={cx('row flex-wrap')}>
                                <div className={cx('col-md-6', 'col-sm-6', 'col-xs-6', 'fwmb')}>
                                    <div className={cx('list-gt')}>
                                        <div className={cx('eff-scale')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('info-gt')}>
                                            <h4 className={cx('name-gt')}>Tầm nhìn & sứ mệnh</h4>
                                            <div>
                                                Phong cách phục vụ uy tín - chuyên nghiệp - thân thiện đã góp phần xây
                                                dựng nên thương hiệu vận chuyển hàng hóa hàng đầu tại Việt Nam
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col-md-6', 'col-sm-6', 'col-xs-6', 'fwmb')}>
                                    <div className={cx('list-gt')}>
                                        <div className={cx('eff-scale')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('info-gt')}>
                                            <h4 className={cx('name-gt')}>Giá trị cốt lõi</h4>
                                            <div>Cải tiến liên tục, Hợp tác, Tôn trọng, Chăm sóc, Trách nhiệm</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col-md-6', 'col-sm-6', 'col-xs-6', 'fwmb')}>
                                    <div className={cx('list-gt')}>
                                        <div className={cx('eff-scale')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('info-gt')}>
                                            <h4 className={cx('name-gt')}>Văn hóa doanh nghiệp</h4>
                                            <div>Nhiệt tình, năng động, hết lòng vì khách hàng</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('col-md-6', 'col-sm-6', 'col-xs-6', 'fwmb')}>
                                    <div className={cx('list-gt')}>
                                        <div className={cx('eff-scale')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('info-gt')}>
                                            <h4 className={cx('name-gt')}>Đội ngũ</h4>
                                            <div>
                                                Đội ngũ nhân viên chuyên nghiệp, giày dặn kinh nghiệm trong lĩnh vực vận
                                                chuyển hàng hóa
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <PrincipalOperation />
            <div className={cx('clear40')}></div>
            <Sponsor />
            <div className={cx('clear40')}></div>
            <Footer />
        </div>
    );
}

export default Home;
