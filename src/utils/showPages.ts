export const showPages = (pagesCount: number, currentPage: number, pages: Array<number>, interval: number = 5) => {
    /*interval - количество показанных страниц: interval = 5 => 1... 2 3 4 5 6 ...100  (Не включая первую и последнюю
    * , они будут показаны всегда. По умолчанию interval = 5. С каждыцй стороны от currentPage будет по 2 элемента
    * + первый и последний.
    * Индекс массива начинается с 0, а страницы с 1. Высчитаем количество элементов слева и справа,
    * затем interval уменьшим на еденицу, что бы соответствовало индексам массива!!!*/
    let partOfPages = Math.floor(interval / 2)
    let result: Array<number> = [];

    interval -= 1

    if (pagesCount <= interval) {
        result =  [...pages]
    }
    else {
        if (currentPage < interval ) {
            if (currentPage === 1) {

                result = pages.slice(0,interval + partOfPages).concat(pagesCount)
            }
            else if (currentPage - partOfPages === 0) {
                result =  pages.slice(0, interval + partOfPages).concat(pagesCount)
            }
            else {
                result = [pages[0]].concat(pages.slice(currentPage - partOfPages, currentPage + partOfPages + 1)).concat(pagesCount)
            }
        }
        else {
            if (currentPage + partOfPages === pagesCount) {
                result = [pages[0]].concat(pages.slice(currentPage-interval))
            }
            else if ( currentPage === pagesCount || currentPage >= pagesCount - partOfPages) {
                result = [pages[0]].concat(pages.slice(pagesCount-interval - partOfPages))
            }
            else {
                result =  [pages[0]].concat(pages.slice(currentPage - partOfPages-1, currentPage + partOfPages)).concat(pagesCount)
            }
        }
    }
    return result
}