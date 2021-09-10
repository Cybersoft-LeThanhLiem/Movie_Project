import { quanLyNguoiDungService } from "../../Services/QuanLyNguoiDungService"
import { DANG_NHAP_ACTION } from "./types/QuanLyNguoiDungType";
import {history} from '../../App'

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                });
                history.goBack();
            }
            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}