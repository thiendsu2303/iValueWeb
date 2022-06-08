import classNames from 'classnames/bind';
import styles from './gioithieu.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import SideBar from '~/components/Layout/DefaultLayout/SideBar';
import Banner from '~/components/Layout/DefaultLayout/Banner';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';

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
                                    <p className = {cx('introductionParagraph')}><strong>Kính gửi: Quý khách hàng</strong></p>

                                    <p className = {cx('introductionParagraph')}>Công ty TNHH Thẩm định giá <strong>iValue</strong> xin gửi tới Quý khách hàng lời chào trân trọng và hợp tác.</p>

                                    <p className = {cx('introductionParagraph')}><strong>iValue</strong> được Bộ Tài chính và Sở kế hoạch và Đầu tư Thành phố Hồ Chí Minh công nhận là một doanh nghiệp có đầy đủ điều kiện hoạt động trong lĩnh vực Thẩm định giá.</p>

                                    <p className = {cx('introductionParagraph')}>Trong quá trình hoạt động, Công ty chúng tôi đã đào tạo đội ngũ nhân sự có trình độ chuyên môn cao, giàu kinh nghiệm, năng động, sáng tạo gồm những thẩm định viên về giá, các chuyên gia về tài chính - kế toán, các kỹ sư chuyên ngành. Đội ngũ nhân viên của <strong>iValue</strong> luôn nhiệt tình, trách nhiệm và khát vọng vươn lên không ngừng để đáp ứng tất cả nhu cầu của Quý khách hàng.</p>

                                    <p className = {cx('introductionParagraph')}>Với phương châm hoạt động "Uy tín – Chất lượng – Chuyên nghiệp", <strong>iValue</strong> cam kết  luôn cung cấp các dịch vụ Thẩm định giá một cách hoàn hảo nhất, trong thời gian ngắn nhất với mức phí hợp lý nhất.</p>

                                    <p className = {cx('introductionParagraph')}>Xin trân trọng cảm ơn sự quan tâm của Quý khách hàng đã dành cho Công ty chúng tôi.</p>

                                    <div className = 'clear40'></div>
                                    
                                    <div className = {cx('ivalueTarget')}>
                                        <h2 className = {cx('introductionParagraph')}><strong>Tầm nhìn</strong></h2>

                                        <ul class= {cx('listIntroduction')}>
                                            <li> Trở thành doanh nghiệp hàng đầu Việt Nam trong lĩnh vực thẩm định giá và tư vấn đầu tư.</li>
                                            <li> Xây dựng hình ảnh doanh nghiệp thẩm định giá chuyên nghiệp mang tầm quốc tế, đóng góp cho sự phát triển lành mạnh, bền vững của nền kinh tế.</li>
                                        </ul>
                                    </div>

                                    <div className = 'clear40'></div>

                                    <div className = {cx('ivalueTarget')}>
                                        <h2 className = {cx('introductionParagraph')}><strong>Sứ mệnh</strong></h2>

                                        <ul class= {cx('listIntroduction')}>
                                            <li> Hướng tới xây dựng hình ảnh doanh nghiệp uy tín, cung cấp dịch vụ chất lượng cao,  trở thành đối tác tin cậy cho các doanh nghiệp trong và ngoài nước.</li>
                                            <li> Xây dựng môi trường làm việc chuyên nghiệp, thân thiện. Đào tạo đội ngũ nhân sự đủ năng lực và phẩm chất.</li>
                                            <li> Tạo ra lợi ích bền vững cho các chủ sở hữu. Xác định giá trị chuẩn xác cho các doanh nghiệp, cá nhân có nhu cầu xác định giá trị tài sản của mình.</li>
                                        </ul>
                                    </div>

                                    <div className = 'clear40'></div>

                                    <div className = {cx('ivalueTarget')}>
                                        <h2 className = {cx('introductionParagraph')}><strong>Giá trị cốt lõi</strong></h2>

                                        <ul class= {cx('listIntroduction')}>
                                            <li> Uy tín – Vũ khí cạnh tranh & Danh dự của doanh nghiệp.</li>
                                            <li> Chất lượng – Chính xác & Khoa học.</li>
                                            <li> Nhân lực – Chuyên môn xuất sắc & Đạo đức tốt.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className = 'clear40'></div>

                                <div className= {cx("mainPrincipalOperation")} >
                                    <div className= {cx("col-md-10")} data-aos="fade-left">
                                        <div className = {cx('principalBlock')}>
                                            <h3 className= {cx("principalTitle")}>Nguyên tắc hoạt động</h3>
                                            <ul class= {cx('principalList')}>
                                                <li> Phong cách phục vụ uy tín - chuyên nghiệp - thân thiện đã góp phần xây dựng nên thương hiệu vận chuyển hàng hóa hàng đầu tại Việt Nam</li>
                                                <li> Nhiệt tình, chu đáo, chuyên nghiệp và luôn bảo vệ các quyền hợp pháp của khách hàng</li>
                                                <li> Tối đa hóa giá trị gia tăng cho khách hàng</li>
                                                <li> Đặc biệt đánh giá cao “LÒNG TIN” bởi sự hài lòng của khách hàng.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className = 'clear40'></div>

                                <h2 className = {cx('introductionParagraph')}><strong>Mọi thông tin chi tiết quý khách hàng liên hệ:</strong></h2>

                                <p className = {cx('introductionParagraph')}><strong>Công ty TNHH Thẩm định giá iValue</strong></p>

                                <p className = {cx('introductionParagraph')}>Địa chỉ:  L17-11, Tòa nhà Vincom Center, 72 Lê Thánh
                                    Tôn, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh<br />
                                Hotline: 0926 37 9999<br />
                                Email: tdg@ivalue.com.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className = 'clear40'></div>

            <Sponsor />

            <div className = 'clear40'></div>
            
            <Footer />
        </div>
    );
}

export default gioithieu;
