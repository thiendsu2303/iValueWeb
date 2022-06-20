import classNames from 'classnames/bind';
import styles from './dichvu.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import SideBar from '~/components/Layout/DefaultLayout/SideBar';
import Banner from '~/components/Layout/DefaultLayout/Banner';
import img1 from '../../assets/images/homeservice/service-img1.jpeg';
import img2 from '../../assets/images/homeservice/service-img2.jpeg';
import img3 from '../../assets/images/homeservice/service-img3.jpg';
import img4 from '../../assets/images/homeservice/service-img4.jpeg';
import img5 from '../../assets/images/homeservice/service-img5.jpg';
import img6 from '../../assets/images/homeservice/service-img6.jpg';
import img7 from '../../assets/images/homeservice/service-img7.jpg';

const cx = classNames.bind(styles);

function dichvu() {
    document.title = 'Dịch vụ';
    return (
        <div>
            <Header />
            <Banner content="DỊCH VỤ" />
            <div className={cx('bodyDichvu')}>
                <div className={cx('container')}>
                    <div className={cx('clear40')}></div>
                    <SideBar />
                    <div className={cx('content')}>
                        <div id="tdg-bds" className={cx('main-content')}>
                            <h3 className={cx('text')}>1. Thẩm định giá bất động sản</h3>
                            <div className={cx('image')}>
                                <img src={img1}></img>
                            </div>
                            <p className={cx('para')}>
                                Bất động sản là các tài sản bao gồm: đất đai, nhà, công trình xây dựng và các tài sản
                                khác gắn liền với đất đai; các tài sản khác do pháp luật quy định.
                                <br />
                                Dịch vụ thẩm định giá trị bất động sản của <strong>iValue</strong> sẽ tư vấn cho Quý
                                khách hàng giá trị của quyền sử dụng đất, quyền sở hữu nhà, công trình vật kiến trúc gắn
                                liền với đất đang được giao dịch trên thị trường vào thời điểm thẩm định giá và cho một
                                mục đích đã được xác định rõ trong những điều kiện của một thị trường nhất định với
                                những phương pháp phù hợp theo các tiêu chuẩn thẩm định giá Việt Nam và thông lệ quốc
                                tế.
                            </p>
                        </div>
                        <div className={cx('clear40')}></div>
                        <div id="tdg-ds" className={cx('main-content')}>
                            <h3 className={cx('text')}>2. Thẩm định giá động sản</h3>
                            <div className={cx('image')}>
                                <img src={img2}></img>
                            </div>
                            <p className={cx('para')}>
                                Động sản bao gồm: Máy móc thiết bị, phương tiện vận tải, các hàng hóa dịch vụ khác.
                                <br />
                                Dịch vụ thẩm định giá trị động sản của <strong>iValue</strong> sẽ tư vấn cho Quý khách
                                hàng giá trị của các quyền sở hữu tài sản cho một mục đích đã được xác định rõ trong
                                những điều kiện của một thị trường nhất định với những phương pháp phù hợp.
                            </p>
                        </div>
                        <div className={cx('clear40')}></div>
                        <div id="tdg-dn" className={cx('main-content')}>
                            <h3 className={cx('text')}>3. Thẩm định giá trị doanh nghiệp</h3>
                            <div className={cx('image')}>
                                <img src={img3}></img>
                            </div>
                            <p className={cx('para')}>
                                Thẩm định giá trị doanh nghiệp được hiểu là việc đánh giá các hoạt động, tài sản, các
                                khoản ghi nợ của doanh nghiệp cũng như xác định giá trị hiện hữu và tiềm năng của doanh
                                nghiệp. Dịch vụ thẩm định giá trị doanh nghiệp của <strong>iValue</strong> sẽ tư vấn cho
                                Quý khách hàng trong các hoạt động mua bán, sáp nhập, hợp nhất và các hoạt động khác;
                                nâng cao uy tín kinh doanh, khả năng tài chính và vị thế tín dụng đối với các nhà đầu tư
                                hoặc chủ nợ.
                            </p>
                        </div>
                        <div className={cx('clear40')}></div>
                        <div id="tdg-vh" className={cx('main-content')}>
                            <h3 className={cx('text')}>4. Thẩm định giá trị vô hình</h3>
                            <div className={cx('image')}>
                                <img src={img4}></img>
                            </div>
                            <p className={cx('para')}>
                                Tài sản vô hình đóng vai trò quan trọng trong sự thành công của doanh nghiệp, giúp doanh
                                nghiệp tạo ra được dấu hiệu khác biệt trong thương trường cũng như tạo ra dấu ấn riêng
                                có để đảm bảo doanh nghiệp phát triển, có nhiều cơ hội đặc biệt và thành công chung.
                                <br />
                                Dịch vụ thẩm định giá trị vô hình bao gồm dịch vụ thẩm định giá trị thương hiệu, công
                                nghệ, quyền sở hữu trí tuệ, giá trị nhân sự, lợi thế thương mại, giá trị lợi thế quyền
                                thuê.
                                <br />
                                Dịch vụ thẩm định vô hình của <strong>iValue</strong> sẽ tư vấn cho doanh nghiệp định
                                lượng giá trị vô hình tiềm ẩn, đánh giá tiềm năng và sự phát triển, thiết lập nên hệ
                                thống quản lý tài sản cố định vô hình của doanh nghiệp trên cơ sở giá trị hiện hữu một
                                cách hiệu quả.
                            </p>
                        </div>
                        <div className={cx('clear40')}></div>
                        <div id="tv-dt" className={cx('main-content')}>
                            <h3 className={cx('text')}>5. Tư vấn đầu tư</h3>
                            <div className={cx('image')}>
                                <img src={img5}></img>
                            </div>
                            <p className={cx('para')}>
                                Đầu tiên phải khẳng định rằng Tư vấn đầu tư là một lĩnh vực rất khó và không phải bất kỳ
                                ai, bất kỳ doanh nghiệp nào cũng đủ khả năng thực hiện. Trên thực tế, các nhà tư vấn đầu
                                tư ngoài việc phải nắm rõ kiến thức của lĩnh vực, am hiểu pháp luật chuyên ngành thì còn
                                cần phải có những hiểu biết sâu rộng và thực tế của các dự án tư vấn nhằm mang lại hiệu
                                quả thực tế và giảm thiểu tối đa rủi ro có thể xảy ra cho khách hàng. Do vậy,{' '}
                                <strong>iValue</strong> có đội ngũ Chuyên viên tư vấn đảm bảo đủ các yếu tố:
                                <ul>
                                    <li>- Có hiểu biết về pháp luật, lĩnh vực đầu tư</li>
                                    <li>- Kinh nghiệm chuyên môn</li>
                                    <li>- Bảo mật và am hiểu nhu cầu đầu tư của khách hàng</li>
                                </ul>
                                Việc tư vấn đầu tư nhằm hướng tới mục đích cuối cùng đó là lợi nhuận thu được sau đầu
                                tư. <strong>iValue</strong> tự tin cung cấp Dịch vụ Tư vấn Đầu tư với những nội dung chủ
                                yếu như sau:
                                <ul>
                                    <li>- Đánh giá môi trường đầu tư</li>
                                    <li>- Nghiên cứu khả thi</li>
                                    <li>- Lập dự án đầu tư</li>
                                    <li>- Đăng ký kế hoạch đầu tư</li>
                                    <li>- Thiết lập quan hệ kinh doanh</li>
                                </ul>
                            </p>
                        </div>
                        <div className={cx('clear40')}></div>
                        <div id="tv-bds" className={cx('main-content')}>
                            <h3 className={cx('text')}>6. Tư vấn bất động sản</h3>
                            <div className={cx('image')}>
                                <img src={img6}></img>
                            </div>
                            <p className={cx('para')}>
                                Kinh doanh bất động sản vẫn luôn là ngành nghề phát triển mạnh nhất tại Việt Nam với các
                                giao dịch như chuyển nhượng, mua bán, cho thuê, cho thuê mua bất động sản. Với năng lực
                                sâu rộng của chúng tôi trên các lĩnh vực kinh doanh, kiến thức thị trường địa phương và
                                thành tích đã đạt được trong hoạt động tư vấn, <strong>iValue</strong> là một địa chỉ lý
                                tưởng để giúp Quý khách hàng hoàn tất nhu cầu một cách nhanh chóng và với một mức giá
                                tối ưu.
                            </p>
                        </div>
                        <div className={cx('clear40')}></div>
                        <div id="cc-ttkt" className={cx('main-content')}>
                            <h3 className={cx('text')}>7. Cung cấp thông tin kinh tế</h3>
                            <div className={cx('image')}>
                                <img src={img7}></img>
                            </div>
                            <p className={cx('para')}>
                                <strong>iValue</strong> sẽ cung cấp cho các nhà đầu tư, doanh nghiệp dịch vụ cung cấp
                                thông tin kinh tế, thương mại, chính sách...để phục vụ chiến lược, mục tiêu kinh doanh
                                của nhà đầu tư.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('clear40')}></div>
            <Sponsor />
            <div className={cx('clear40')}></div>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default dichvu;
