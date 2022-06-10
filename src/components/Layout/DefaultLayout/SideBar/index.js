import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Croursel from 'react-elastic-carousel';
import FeedBack from '../FeedBack';
import customerImg1 from '../../../../assets/images/sidebar-bg2.png';
const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('col-md-3', 'order-3', 'aos-init', 'aos-animate')} data-aos="fade-right">
            <div className={cx('aside-giaidap')} data-aos="fade-right">
                <h4 className={cx('tit-giaidap')}>Giải đáp thắc mắc</h4>
                <div className={cx('des-gd')}>Hãy đặt câu hỏi cho chúng tôi để được giải đáp</div>
                <a href="/lien-he" className={cx('a-giaidap')}>
                    Liên hệ
                    <i className={cx('fas fa-chevron-right')}></i>
                </a>
            </div>
            <hr></hr>
            <div className={cx('call-us')} data-aos="fade-right">
                <h4 className={cx('tit-aside')}>Hoặc gọi đến đường dây nóng ngay lập tức:</h4>
                <a href="tel:0926 37 9999" className={cx('a-call-us')}>
                    0926 37 9999
                </a>
            </div>
            <hr></hr>
            <div className={cx('khachhangdanggia')} data-aos="fade-right">
                <h4 className={cx('tit-aside')}>Khách hàng đánh giá:</h4>
                <div className={cx('block-slider-kh')}>
                    <div className={cx('slider-kh', 'owl-carousel', 'owl-theme', 'owl-loaded', 'owl-drag')}>
                        <div className={cx('owl-stage-outer')}>
                            <div className={cx('owl-stage')}>
                                <Croursel showArrows={false} pagination={false}>
                                    <FeedBack content="Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực như: tài chính, chứng khoán, luật, đầu tư…" image={customerImg1} name="Khách hàng" />
                                    <FeedBack content="Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực như: tài chính, chứng khoán, luật, đầu tư…" image={customerImg1} name="Khách hàng" />
                                    <FeedBack content="Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực như: tài chính, chứng khoán, luật, đầu tư…" image={customerImg1} name="Khách hàng" />
                                    <FeedBack content="Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực như: tài chính, chứng khoán, luật, đầu tư…" image={customerImg1} name="Khách hàng" />
                                    <FeedBack content="Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực như: tài chính, chứng khoán, luật, đầu tư…" image={customerImg1} name="Khách hàng" />
                                </Croursel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
