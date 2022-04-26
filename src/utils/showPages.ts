export const showPages = (pagesCount: number, currentPage: number, interval: number = 5) => {
    /*interval - количество показанных страниц: interval = 5 => 1... 2 3 4 5 6 ...100  (Не включая первую и последнюю
    * , они будут показаны всегда. По умолчанию interval = 5. С каждыцй стороны от currentPage будет по 2 элемента
    * + первый и последний.
    * Индекс массива начинается с 0, а страницы с 1. Высчитаем количество элементов слева и справа,
    * затем interval уменьшим на еденицу, что бы соответствовало индексам массива!!!*/
    let partOfPages = Math.floor(interval / 2)
    let result: Array<number> = [];

    if (pagesCount <= interval) {
        for (let i = 1; i <= pagesCount; i++) {
            result[i] = i
        }
    } else {
        if (currentPage <= interval) {
            if (currentPage === 1) {
                for (let i = 1; i < interval + partOfPages; i++) {
                    result[i] = i
                }
                result.push(pagesCount)
            } else if (currentPage - partOfPages === 0) {

                for (let i = 1; i < interval + partOfPages; i++) {
                    result[i] = i
                }
                result.push(pagesCount)
            } else {
                // добавляем +1 в max, что бы сохранить количество страниц равное interval
                if (currentPage - partOfPages === 1) {
                    let i = currentPage - partOfPages
                    let max = currentPage + partOfPages + 1
                    for (i; i <= max; i++) {
                        result.push(i)
                    }
                    result.push(pagesCount)
                } else {
                    let i = currentPage - partOfPages
                    let max = currentPage + partOfPages
                    for (i; i <= max; i++) {
                        result.push(i)
                    }
                    result.push(pagesCount)
                    result = [1].concat(result)
                }
            }
        } else {
            if (currentPage + partOfPages === pagesCount) {
                let i = currentPage - partOfPages - 1  // -1 что бы сохранить количество страниц, равное interval
                let max = currentPage + partOfPages
                for (i; i <= max; i++) {
                    result.push(i)
                }
            } else if (currentPage === pagesCount) {
                let i = currentPage - interval
                for (i; i <= pagesCount; i++) {
                    result.push(i)
                }
            } else if (currentPage > pagesCount - partOfPages) {
                let i = pagesCount - interval
                for (i; i <= pagesCount; i++) {
                    result.push(i)
                }
            } else {
                let i = currentPage - partOfPages
                let max = currentPage + partOfPages
                for (i; i <= max; i++) {
                    result.push(i)
                }
                result.push(pagesCount)
            }
            result = [1].concat(result)
        }
    }
    return result
}