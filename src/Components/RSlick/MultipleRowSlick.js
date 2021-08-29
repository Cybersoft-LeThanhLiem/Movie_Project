import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from './MultipleRowSlick.module.css'
import Film from '../../Components/Film/Film';
import Film_Flip from "../Film/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../Redux/actions/types/QuanLyPhimType";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", color: "black" }}
            onClick={onClick}
        />
    );
}


const MultipleRowSlick = (props) => {
    const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer);
    let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";
    let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";
    const dispatch = useDispatch();


    const renderFilms = () => {
        return props.arrFilm.slice(0, 12).map((item, index) => {
            return <div className={`mt-2`} key={index} >
                <Film_Flip item={item} />
            </div>
        })
    }

    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            <button className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                const action = { type: SET_FILM_DANG_CHIEU }
                dispatch(action);
            }}>PHIM ĐANG CHIẾU</button>
            <button className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`} onClick={() => {
                const action = { type: SET_FILM_SAP_CHIEU }
                dispatch(action);
            }}>PHIM SẮP CHIẾU</button>
            <Slider {...settings}>
                {renderFilms()}
            </Slider>
        </div>
    );
}

export default MultipleRowSlick;