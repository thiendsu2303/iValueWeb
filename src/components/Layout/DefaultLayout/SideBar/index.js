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
                <h4 className={cx('tit-aside')}>Hoặc gọi cho chúng tôi ngay lập tức:</h4>
                <a href="tel:0926 37 9999" className={cx('a-call-us')}>
                    0926 37 9999
                </a>
            </div>
            <hr></hr>
            <div className={cx('service')} data-aos="fade-right">
                <Carousel className={cx('service-slider')} indicators={false} controls={true}>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Khách sạn Senla Boutique" image={projectimg1} />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Hệ thống kho chứa LPG - Khu công nghiệp Đình Vũ" image={projectimg2} />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Tân Cảng Sài Gòn" image={projectimg3} />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Bệnh viện Chợ Rẫy" image={projectimg4} />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Charm Plaza (Dĩ An, Bình Dương)" image={projectimg5} />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Làng du lịch Cù Lần" image={projectimg6} />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Hệ thống nổi hơi" image={projectimg7} />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Vườn cao su Bình Phước" image={projectimg8} />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Dự án Picity" image={projectimg9} />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <FeedBack content="Hệ thống máy móc phương tiện vận tải" image={projectimg10} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default SideBar;
