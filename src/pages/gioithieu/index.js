import classNames from 'classnames/bind';
import styles from './gioithieu.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import SideBar from '~/components/Layout/DefaultLayout/SideBar';
import Banner from '~/components/Layout/DefaultLayout/Banner';

const cx = classNames.bind(styles);

function gioithieu() {
    return (
        <div>
            <Header />
            <BackToTop />
            <section className= {cx('hidden-container')}>
                <Banner content="GIỚI THIỆU" />

                <div className = {cx('main-introduction')}>
                    <div className = 'clear40'></div>
                    <div className = {cx('container')}>
                        <SideBar/>

                        <div className = {cx('col-md-9', 'order-1')}>
                            <div className = {cx('introductionContent')}>
                                <div className = {cx('center')}>
                                    <img src = {'https://cdn.tgdd.vn/hoi-dap/1369909/200-anh-lam-slide-powerpoint-cuc-dep-chuyen-nghiep-khong%20(5).jpg'} />
                                </div>

                                <div className = 'clear40'></div>

                                <div className = {cx('introductionText')}>
                                    <p className = {cx('introductionParagraph')}>Lời đầu tiên <strong>INTERLINK </strong>xin gửi đến Quý Khách hàng lời chào trân trọng và chúc quý Công ty ngày càng phát triển thịnh vượng.</p>

                                    <p className = {cx('introductionParagraph')}>Là một doanh nghiệp hoạt động lâu năm trong lĩnh vực vận tải hàng hóa, nhằm đáp ứng nhu cầu vận chuyển hàng hóa ngày càng lớn của quý khách hàng, Chúng tôi đã đầu tư một lượng lớn phương tiện vận tải với nhiều loại trọng tải khác nhau, nhằm đáp ứng một cách tốt nhất nhu cầu vận chuyển hàng hóa. Chúng tôi cam kết cung cấp một dịch vụ hoàn hảo về vận chuyển hàng hóa bằng đường bộ, đường không, đường biển trên khắp mọi miền đất nước trên thế giới. Dịch vụ vận chuyển hàng hóa của Chúng tôi đã làm cho khách hàng thực sự an tâm khi hàng hoá của họ được giao cho chúng tôi. Chúng tôi đảm bảo sẽ đưa hàng của Quý khách đến nơi an toàn, đúng lịch trình.</p>

                                    <p className = {cx('introductionParagraph')}>Đội ngũ nhân viên dày dặn kinh nghiệm trong lĩnh vực vận tải, được đào tạo bài bản, chịu được áp lực rất cao, đảm bảo an toàn cho hàng hóa của quý khách.</p>

                                    <p className = {cx('introductionParagraph')}>Với đội ngũ cán bộ, nhân viên điều hành năng động, nhiệt tình được đào tạo bài bản, am hiểu mọi khía cạnh trong lĩnh vực giao nhận vận tải, có thể tư vấn cho quý khách chọn được giải pháp an toàn, nhanh chóng và hiệu quả nhất, đáp ứng mọi yêu cầu vận chuyển của quý khách. Cùng với hệ thống kho bãi rộng, sạch sẽ, an ninh đảm bảo cho hàng hóa của quý khách.</p>

                                    <p className = {cx('introductionParagraph')}>Đội ngũ bốc xếp được huấn luyện chuyên nghiệp bên cạnh các phương tiện hổ trợ như xe nâng,xe cẩu sẽ đáp ứng được yêu cầu trong quá trình bốc xếp hàng hóa.</p>

                                    <p className = {cx('introductionParagraph')}>Chúng tôi sẽ tiếp tục khẳng định, phát triển để cung cấp những dịch vụ hoàn hảo và hiệu quả hơn để đáp ứng mọi yêu cầu của Quý khách hàng. Đến với Công Ty INTERLINK, quyền lợi của Quý khách hàng luôn luôn được đảm bảo. Chúng tôi cam đoan rằng sẽ trở thành một trong những nhà vận tải chuyên nghiệp hàng đầu Việt Nam.</p>

                                    {/* <h2 className = {cx('introductionParagraph')}><span style="font-size:16px;"><strong>Mọi thông tin chi tiết quý khách hàng liên hệ:</strong></span></h2> */}

                                    <p className = {cx('introductionParagraph')}><strong>Công Ty TNHH Vận Tải Liên Kết Quốc Tế </strong></p>

                                    <p className = {cx('introductionParagraph')}>Địa chỉ:  Lầu 3, Cao Ốc Đinh Lễ, P.12, Quận 4, TpHCM<br />
                                    Điện thoại: 028 5447 7070<br />
                                    Hotline: 0987 910 347<br />
                                    Email: info@intertransco.com.vn</p>
                                </div>

                                <div className = 'clear40'></div>

                                <div className= {cx("mainPrincipalOperation")} >
                                    <div className= {cx("col-md-6")} data-aos="fade-left">
                                        <div className = {cx('principalBlock')}>
                                            <h3 className= {cx("principalTitle")}>Nguyên tắc hoạt động</h3>
                                            <ul class= {cx('principalList')}>
                                                <li><i class="far fa-check-square"></i> Phong cách phục vụ uy tín - chuyên nghiệp - thân thiện đã góp phần xây dựng nên thương hiệu vận chuyển hàng hóa hàng đầu tại Việt Nam</li>
                                                <li><i class="far fa-check-square"></i> Nhiệt tình, chu đáo, chuyên nghiệp và luôn bảo vệ các quyền hợp pháp của khách hàng</li>
                                                <li><i class="far fa-check-square"></i> Tối đa hóa giá trị gia tăng cho khách hàng</li>
                                                <li><i class="far fa-check-square"></i> Đặc biệt đánh giá cao “LÒNG TIN” bởi sự hài lòng của khách hàng.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className = 'clear40'></div>

            <Footer />
        </div>
    );
}

export default gioithieu;
