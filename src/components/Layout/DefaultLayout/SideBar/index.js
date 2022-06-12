import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedBack from '../FeedBack';
import projectimg1 from '../../../../assets/images/duan/duan1.jpg';
import projectimg2 from '../../../../assets/images/duan/duan2.jpg';
import projectimg3 from '../../../../assets/images/duan/duan3.jpg';
import projectimg4 from '../../../../assets/images/duan/duan4.jpg';
import projectimg5 from '../../../../assets/images/duan/duan5.jpg';
import projectimg6 from '../../../../assets/images/duan/duan6.jpg';
import projectimg7 from '../../../../assets/images/duan/duan7.jpg';
import projectimg8 from '../../../../assets/images/duan/duan8.jpg';
import projectimg9 from '../../../../assets/images/duan/duan9.jpg';
import projectimg10 from '../../../../assets/images/duan/duan10.jpg';
const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('col-md-3', 'order-3', 'aos-init', 'aos-animate')} data-aos="fade-right">
            <div className={cx('aside-giaidap')} data-aos="fade-right">
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
                {/* <h4 className={cx('tit-aside')}>Khách hàng đánh giá:</h4> */}
                <div className={cx('block-slider-kh')}>
                    <div className={cx('slider-kh', 'owl-carousel', 'owl-theme', 'owl-loaded', 'owl-drag')}>
                        <div className={cx('owl-stage-outer')}>
                            <div className={cx('owl-stage')}>
                                <Carousel indicators={false} controls={false}>
                                    <Carousel.Item interval={2000}>
                                        <FeedBack
                                            content="Dự án Khách sạn Senla Boutique"
                                            image={projectimg1}
                                            name="Viet"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <FeedBack
                                            content="Hệ thống kho chứa LPG - Khu công nghiệp Đình Vũ"
                                            image={projectimg2}
                                            name="Viet"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <FeedBack content="Dự án Tân Cảng Sài Gòn" image={projectimg3} name="Viet" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
