import React, {useMemo} from 'react'
import s from './Pagination.module.css'
import {showPages} from "../../utils/showPages";

type PaginationPropsType = {
    totalCount: number
    currentPageNumber: number
    pageSize: number
    callBack: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = React.memo( (
    {
        totalCount,
        currentPageNumber,
        pageSize,
        callBack
    }
) => {
    const pagesCount = useMemo(() => {
        return Math.ceil(totalCount / pageSize)
    }, [totalCount, pageSize])

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
})