import React from 'react';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import moment from 'moment';
const { TabPane } = Tabs;

export default class Demo extends React.PureComponent {
    state = {
        tabPosition: 'left',
    };

    componentDidMount() {

    }

    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };

    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((heThongRap, index) => {
            let { tabPosition } = this.state;
            return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '300px', display: 'flex' }}>
                                <img src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" width="50" />
                                <div className="text-left ml-2">
                                    {cumRap.tenCumRap}
                                    <p className="text-red-200">Chi tiết</p>
                                </div>
                            </div>
                        }
                            key={index}>
                            {cumRap.danhSachPhim.slice(0, 8).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="my-5">
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />
                                            <div className="ml-2">
                                                <h1 className="text-xl text-blue-800">{phim.tenPhim}</h1>
                                                <p>{cumRap.diaChi}</p>
                                                <div className="grid grid-cols-6 gap-10">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-2xl text-green-700" to="/" key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }

    render() {
        console.log(this.props, 'props123');
        const { tabPosition } = this.state;
        return (
            <>
                <Tabs tabPosition={tabPosition}>
                    {this.renderHeThongRap()};
                </Tabs>
            </>
        );
    }
}