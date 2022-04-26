import React from 'react'
import s from './Pagination.module.css'
import {showPages} from "../../utils/showPages";

type PaginationPropsType = {
    totalCount: number
    interval?: number
    currentPageNumber: number
    pageSize: number
    callBack: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = (
    {
        totalCount,
        interval,
        currentPageNumber,
        pageSize,
        callBack
    }
) => {
    const pagesCount = Math.ceil(totalCount / pageSize)
    const allPages = new Array(pagesCount).fill('').map((el, i) => i+1)

    const onClickHandler = (pageNumber: number) => {
        callBack(pageNumber)
    }


    const pages = showPages(pagesCount, currentPageNumber ).map((el,i) => {
        return (
            <span
                key={i}
                className={`${s.page_item} 
                ${currentPageNumber === el ? s.active_page : ''}`}
                onClick={() => {onClickHandler(el)}}
            >{el}
            </span>
        )
    })


    return (
        <div className={s.wrapper}>
            <span>
                {pages}
            </span>
        </div>
    )
}