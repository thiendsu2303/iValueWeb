import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../../assets/images/homeslider/slider-img1.jpg';
import img2 from '../../../assets/images/homeslider/slider-img2.jpg';
import img3 from '../../../assets/images/homeslider/slider-img3.jpg';
import logo from '../../../assets/images/logo_nobg.png';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('slider')}>
            <Carousel indicators={false} controls={false}>
                <Carousel.Item interval={2000}>
                    <div className={cx('slider-content')} data-aos="fade-up-right">
                        <h3>CÔNG TY TNHH</h3>
                        <h2>THẨM ĐỊNH GIÁ IVALUE</h2>
                        <div className={cx('img-box')}>
                            <img src={logo}></img>
                        </div>
                        <h2>IVALUE APPRAISAL CO., LTD</h2>
                    </div>
                    <img className={cx('slider-images')} src={img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className={cx('slider-content')} data-aos="fade-up-right">
                        <h3>CÔNG TY TNHH</h3>
                        <h2>THẨM ĐỊNH GIÁ IVALUE</h2>
                        <div className={cx('img-box')}>
                            <img src={logo}></img>
                        </div>
                        <h2>IVALUE APPRAISAL CO., LTD</h2>
                    </div>
                    <img className={cx('slider-images')} src={img2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className={cx('slider-content')} data-aos="fade-up-right">
                        <h3>CÔNG TY TNHH</h3>
                        <h2>THẨM ĐỊNH GIÁ IVALUE</h2>
                        <div className={cx('img-box')}>
                            <img src={logo}></img>
                        </div>
                        <h2>IVALUE APPRAISAL CO., LTD</h2>
                    </div>
                    <img className={cx('slider-images')} src={img3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;
