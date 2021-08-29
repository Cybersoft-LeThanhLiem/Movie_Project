import { quanLyPhimService } from '../../Services/QuanLyPhimService';
import { SET_CAROUSEL } from './types/CarouselType';

export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachBanner();

            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        } catch (error) {
            console.log('errors', error);
        }
    }
};