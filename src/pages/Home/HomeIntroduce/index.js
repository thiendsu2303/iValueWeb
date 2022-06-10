import classNames from 'classnames/bind';
import styles from './HomeIntroduce.module.scss';
import img1 from '../../../assets/images/homeintro/homeintro-img1.jpg';
import img2 from '../../../assets/images/homeintro/homeintro-img2.jpg';
import img3 from '../../../assets/images/homeintro/homeintro-img3.jpg';
import img4 from '../../../assets/images/homeintro/homeintro-img4.jpg';

const cx = classNames.bind(styles);

const HomeIntroduce = () => {
    return (
        <div className={cx('main-gioithieu')} data-aos="fade-right">
            <div className={cx('clear40')}></div>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-md-4', 'col-sm-12', 'col-xs-12')}>
                        <h3 className={cx('tit-pub')}>Giới thiệu</h3>
                        <div className={cx('editer')}>
                            <p></p>
                            <p>
                                Công ty TNHH Thẩm định giá iValue là doanh nghiệp đủ điều kiện 
                                kinh doanh dịch vụ thẩm định giá theo quy định tại Luật Giá số 
                                11/2012/QH13 và Nghị Định số 89/2013/NĐ-CP ngày 06/08/2013 của 
                                Chính Phủ quy định chi tiết thi hành một số điều của Luật Giá 
                                về thẩm định giá. iValue là công ty chuyên ngành về thẩm định 
                                giá, tư vấn đầu tư và tư vấn dự án. iValue đã cung cấp dịch vụ 
                                chất lượng cao cho nhiều khách hàng, khẳng định được năng lực, 
                                uy tín, thương hiệu trong nước và các đối tác nước ngoài, đáp 
                                ứng các chuẩn mực cao theo thông lệ quốc tế.
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
                                        <img src={img1}></img>
                                    </div>
                                    <div className={cx('info-gt')}>
                                        <h4 className={cx('name-gt')}>Tầm nhìn</h4>
                                        <div>
                                            Trở thành doanh nghiệp hàng đầu Việt Nam trong lĩnh vực thẩm định giá và tư vấn đầu tư. 
                                            <br></br>
                                            Xây dựng hình ảnh doanh nghiệp thẩm định giá chuyên nghiệp mang tầm quốc tế, đóng góp 
                                            cho sự phát triển lành mạnh, bền vững của nền kinh tế.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-6', 'col-sm-6', 'col-xs-6', 'fwmb')}>
                                <div className={cx('list-gt')}>
                                    <div className={cx('eff-scale')}>
                                        <img src={img2}></img>
                                    </div>
                                    <div className={cx('info-gt')}>
                                        <h4 className={cx('name-gt')}>Sứ mệnh</h4>
                                        <div>
                                            Hướng tới xây dựng hình ảnh doanh nghiệp uy tín, cung cấp dịch vụ chất lượng cao.
                                            <br></br>
                                            Xây dựng môi trường làm việc chuyên nghiệp, thân thiện. 
                                            <br></br>
                                            Tạo ra lợi ích bền vững cho các chủ sở hữu.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-6', 'col-sm-6', 'col-xs-6', 'fwmb')}>
                                <div className={cx('list-gt')}>
                                    <div className={cx('eff-scale')}>
                                        <img src={img3}></img>
                                    </div>
                                    <div className={cx('info-gt')}>
                                        <h4 className={cx('name-gt')}>Giá trị cốt lõi</h4>
                                        <div>
                                            Uy tín – Vũ khí cạnh tranh & Danh dự của doanh nghiệp.
                                            <br></br>
                                            Chất lượng – Chính xác & Khoa học.
                                            <br></br>
                                            Nhân lực – Chuyên môn xuất sắc & Đạo đức tốt.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col-md-6', 'col-sm-6', 'col-xs-6', 'fwmb')}>
                                <div className={cx('list-gt')}>
                                    <div className={cx('eff-scale')}>
                                        <img src={img4}></img>
                                    </div>
                                    <div className={cx('info-gt')}>
                                        <h4 className={cx('name-gt')}>Đội ngũ</h4>
                                        <div>
                                            Đội ngũ nhân sự có trình độ chuyên môn cao, giàu kinh nghiệm, năng động, sáng tạo.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeIntroduce;