import { baseService } from "./baseService";
import { GROUPID} from '../Util/settings/config'
export class QuanLyDatVeService  extends baseService{

    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => { // mã lịch chiếu lấy từ url 
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }

}

export const quanLyDatVeService = new QuanLyDatVeService();