import React from 'react'
import s from './Pagination.module.css'
import {showPages} from "../../utils/showPages";

type PaginationPropsType = {
    totalCount: number
    currentPageNumber: number
    pageSize: number
    callBack: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = (
    {
        totalCount,
        currentPageNumber,
        pageSize,
        callBack
    }
) => {
    const pagesCount = Math.ceil(totalCount / pageSize)

    const onClickHandler = (pageNumber: number) => {
        callBack(pageNumber)
    }


    const pages = showPages(pagesCount, currentPageNumber).map(el => {
        return (
            <span
                key={`${el}`}
                className={`${s.page_item} 
                ${currentPageNumber === el ? s.active_page : ''}`}
                onClick={() => {
                    onClickHandler(el)
                }}
            >{el}
            </span>
        )
    })


    return (
        <div className={s.wrapper}>
            {pages}
        </div>
    )
}