import { DefaultLayout } from '~/components/Layout';
import classNames from 'classnames/bind';
import styles from './dichvu.module.scss';
import Header from '~/components/Layout/DefaultLayout/Header';
import Sponsor from '~/components/Layout/DefaultLayout/Sponsor';
import Footer from '~/components/Layout/DefaultLayout/Footer';
import BackToTop from '~/components/Layout/DefaultLayout/BackToTop';
import SideBar from '~/components/Layout/DefaultLayout/SideBar';

const cx = classNames.bind(styles);

function dichvu() {
    return (
        <div>
            <Header />
            <div className={cx('clear40')}></div>
            <SideBar />
            <div className={cx('bodyDichvu')}>
                <div className={cx('bannerPage')}>
                    <img
                        src={
                            'https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-summer-outdoor-scene-banner-image_249780.jpg'
                        }
                        className={cx('bannerImage')}
                    />
                    <h3 className={cx('titleLienHe')}>Dịch vụ</h3>
                </div>
                <div className={cx('container')}>
                    <div className={cx('tdg-bds')}>
                        <img className={cx('tdg-bds-img')}></img>
                        <h3 className={cx('tdg-bds-text')}>Thẩm định giá bất động sản</h3>
                        <p className={cx('tdg-bds-para')}>
                            Bất động sản là các tài sản bao gồm: đất đai, nhà, công trình xây dựng và các tài sản khác
                            gắn liền với đất đai; các tài sản khác do pháp luật quy định. Dịch vụ thẩm định giá trị bất
                            động sản của iValue sẽ cung cấp cho Quý khách hàng số tiền ước tính về giá trị của quyền sử
                            dụng đất, quyền sở sở hữu nhà, công trình vật kiến trúc gắn liền với đất đang được mua bán
                            trên thị trường vào thời điểm thẩm định giá và cho một mục đích đã được xác định rõ trong
                            những điều kiện của một thị trường nhất định với những phương pháp phù hợp được quy định
                            trong các tiêu chuẩn thẩm định giá Việt Nam hoặc thông lệ quốc tế.
                        </p>
                    </div>
                    <div className={cx('clear40')}></div>
                    <div className={cx('tdg-ds')}>
                        <img className={cx('tdg-ds-img')}></img>
                        <h3 className={cx('tdg-ds-text')}>Thẩm định giá động sản</h3>
                        <p className={cx('tdg-ds-para')}>
                            Động sản bao gồm: Máy móc thiết bị, phương tiện vận tải, các hàng hóa dịch vụ khác. Dịch vụ
                            thẩm định giá trị động sản của iValue sẽ cung cấp cho Quý khách hàng số tiền ước tính về giá
                            trị của các quyền sở hữu tài sản cụ thể bằng hình thức tiền tệ cho một mục đích đã được xác
                            định rõ trong những điều kiện của một thị trường nhất định với những phương pháp phù hợp.
                        </p>
                    </div>
                    <div className={cx('clear40')}></div>
                    <div className={cx('tdg-dn')}>
                        <img className={cx('tdg-dn-img')}></img>
                        <h3 className={cx('tdg-dn-text')}>Thẩm định giá doanh nghiệp</h3>
                        <p className={cx('tdg-dn-para')}>
                            Thẩm định giá trị doanh nghiệp được hiểu là việc đánh giá các hoạt động, tài sản, các khoản
                            ghi nợ của doanh nghiệp cũng như xác định giá trị hiện hữu và tiềm năng của doanh nghiệp.
                            Dịch vụ thẩm định giá trị doanh nghiệp của iValue sẽ cung cấp cho Quý khách hàng trong các
                            hoạt động mua bán, sáp nhập, hợp nhất hoặc chia nhỏ doanh nghiệp; nâng cao uy tín kinh
                            doanh, khả năng tài chính và vị thế tín dụng đối với các nhà đầu tư hoặc chủ nợ.
                        </p>
                    </div>
                    <div className={cx('clear40')}></div>
                    <div className={cx('tdg-vh')}>
                        <img className={cx('tdg-vh-img')}></img>
                        <h3 className={cx('tdg-vh-text')}>Thẩm định giá trị vô hình</h3>
                        <p className={cx('tdg-vh-para')}></p>
                    </div>
                    <div className={cx('clear40')}></div>
                    <div className={cx('tv-dt')}>
                        <img className={cx('tv-dt-img')}></img>
                        <h3 className={cx('tv-dt-text')}>Tư vấn đầu tư</h3>
                        <p className={cx('tv-dt-para')}>
                            Đánh giá tiềm nằng môi trường đầu tư Nghiên cứu tính khả thi của dự án Lập dự án đầu tư Đăng
                            ký kế hoạch đầu tư Thiết lập quan hệ kinh doanh
                        </p>
                    </div>
                    <div className={cx('clear40')}></div>
                    <div className={cx('tv-bds')}>
                        <img className={cx('tv-bds-img')}></img>
                        <h3 className={cx('tv-bds-text')}>Tư vấn bất động sản</h3>
                        <p className={cx('tv-bds-para')}></p>
                    </div>
                    <div className={cx('clear40')}></div>
                    <div className={cx('cc-ttkt')}>
                        <img className={cx('cc-ttkt-img')}></img>
                        <h3 className={cx('cc-ttkt-text')}>Cung cấp thông tin kinh tế</h3>
                        <p className={cx('cc-ttkt-para')}></p>
                    </div>
                    <div className={cx('clear40')}></div>
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
