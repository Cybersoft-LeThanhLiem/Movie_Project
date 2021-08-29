import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'

import { useSelector, useDispatch } from 'react-redux'
import MultipleRowSlick from '../../Components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../Redux/actions/QuanLyPhimAction';

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    console.log("propsHome", arrFilm);


    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />
    //     });
    // }

    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action); // dispatch function từ thunk
    }, []);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <MultipleRowSlick arrFilm={arrFilm} />
                    {/* <div className="flex flex-wrap -m-4 justify-center">
                        {renderFilms()}
                    </div> */}
                </div>
            </section>

            <HomeMenu />
        </div>
    )
}
