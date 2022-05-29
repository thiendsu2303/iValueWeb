import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('col-md-3', 'order-3', 'aos-init', 'aos-animate')} data-aos="fade-right">
            <div className={cx('aside-giaidap')}>
                <h4 className={cx('tit-giaidap')}>Giải đáp thắc mắc</h4>
                <div className={cx('des-gd')}>Hãy đặt câu hỏi cho chúng tôi để được giải đáp</div>
                <a href="lienhe" className={cx('a-giaidap')}>
                    "Liên hệ"
                    <i className={cx('fas', 'fa-chevron-right')}></i>
                </a>
            </div>
            <hr></hr>
            <div className={cx('call-us')}>
                <h4 className={cx('tit-aside')}>Hoặc gọi đến đường dây nóng ngay lập tức:</h4>
                <a href="tel:0926 37 9999" className={cx('a-all-us')}>
                    0926 37 9999
                </a>
            </div>
            <hr></hr>
            <div className={cx('khachhangdanggia')}>
                <h4 className={cx('tit-aside')}>Khách hàng đánh giá:</h4>
                <div className={cx('block-slider-kh')}>
                    <div className={cx('slider-kh', 'owl-carousel', 'owl-theme', 'owl-loaded', 'owl-drag')}>
                        <div className={cx('owl-stage-outer')}>
                            <div
                                className={cx('owl-stage')}
                                style="width: 1728px ; transform: translate3d(-576px,0px,0px); transition: all 0s ease 0s; "
                            >
                                <div className={cx('owl-item', 'cloned')} style="width: 278px; margin-right: 10px">
                                    <div className={cx('item-kh')}>
                                        <div className={cx('img-avatar')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('rating')}>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                        </div>
                                        <div className={cx('des-kh')}>
                                            Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực
                                            như: tài chính, chứng khoán, luật, đầu tư…
                                        </div>
                                        <p className={cx('name-kh')}>Khách hàng</p>
                                    </div>
                                </div>
                                <div className={cx('owl-item', 'cloned')} style="width: 278px; margin-right: 10px">
                                    <div className={cx('item-kh')}>
                                        <div className={cx('img-avatar')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('rating')}>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                        </div>
                                        <div className={cx('des-kh')}>
                                            Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực
                                            như: tài chính, chứng khoán, luật, đầu tư…
                                        </div>
                                        <p className={cx('name-kh')}>Khách hàng</p>
                                    </div>
                                </div>
                                <div className={cx('owl-item', 'active')} style="width: 278px; margin-right: 10px">
                                    <div className={cx('item-kh')}>
                                        <div className={cx('img-avatar')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('rating')}>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                        </div>
                                        <div className={cx('des-kh')}>
                                            Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực
                                            như: tài chính, chứng khoán, luật, đầu tư…
                                        </div>
                                        <p className={cx('name-kh')}>Khách hàng</p>
                                    </div>
                                </div>
                                <div className={cx('owl-item')} style="width: 278px; margin-right: 10px">
                                    <div className={cx('item-kh')}>
                                        <div className={cx('img-avatar')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('rating')}>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                        </div>
                                        <div className={cx('des-kh')}>
                                            Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực
                                            như: tài chính, chứng khoán, luật, đầu tư…
                                        </div>
                                        <p className={cx('name-kh')}>Khách hàng</p>
                                    </div>
                                </div>
                                <div className={cx('owl-item', 'cloned')} style="width: 278px; margin-right: 10px">
                                    <div className={cx('item-kh')}>
                                        <div className={cx('img-avatar')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('rating')}>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                        </div>
                                        <div className={cx('des-kh')}>
                                            Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực
                                            như: tài chính, chứng khoán, luật, đầu tư…
                                        </div>
                                        <p className={cx('name-kh')}>Khách hàng</p>
                                    </div>
                                </div>
                                <div className={cx('owl-item', 'cloned')} style="width: 278px; margin-right: 10px">
                                    <div className={cx('item-kh')}>
                                        <div className={cx('img-avatar')}>
                                            <img></img>
                                        </div>
                                        <div className={cx('rating')}>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                            <span className={cx('fa', 'fa-star', 'checked')}></span>
                                        </div>
                                        <div className={cx('des-kh')}>
                                            Chuyên tư vấn giải pháp cho các doanh nghiệp lớn, vừa nhỏ trong các lĩnh vực
                                            như: tài chính, chứng khoán, luật, đầu tư…
                                        </div>
                                        <p className={cx('name-kh')}>Khách hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('owl-nav', 'disabled')}>
                            <button type="button" role="presentation" className={cx('owl-prev')}>
                                <span aria-label="Previous"></span>
                            </button>
                            <button type="button" role="presentation" className={cx('owl-next')}>
                                <span aria-label="Previous"></span>
                            </button>
                        </div>
                        <div className={cx('owl-dots', 'disabled')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
