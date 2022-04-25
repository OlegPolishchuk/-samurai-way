import React from 'react'
import s from './Pagination.module.css'

type PaginationPropsType = {
    totalCount: number
    interval?: number
    currentPageNumber: number
}

export const Pagination: React.FC<PaginationPropsType> = (
    {
        totalCount,
        interval,
        currentPageNumber
    }
) => {

    const pages = new Array(totalCount).map((el, i) => {
        return (
            <span className={currentPageNumber === i ? s.active_page : ''}>
                {i + 1}
            </span>
        )
    })

    return (
        <div className={s.wrapper}>
            { pages }
        </div>
    )
}