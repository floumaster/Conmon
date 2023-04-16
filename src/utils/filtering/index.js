export const filterSpendingsWithParams = (
    spendings,
    isCompletedShown,
    isNotCompletedShown,
    dateFrom,
    dateTo,
    multiAmountValue
) => {
    const filterByCompletion = spendings.filter(spending => {
        if(!isCompletedShown)
            return !spending.isCompleted
        return spending
    })
    const filterByNotCompletion = filterByCompletion.filter(spending => {
        if(!isNotCompletedShown)
            return spending.isCompleted
        return spending
    })
    const filterByDate = filterByNotCompletion.filter(spending => {
        return dateFrom <= spending.creationDate && spending.creationDate <= dateTo
    })
    const filterByAmount = filterByDate.filter(spending => {
        return multiAmountValue[0] <= spending.amount && spending.amount <= multiAmountValue[1]
    })
    return filterByAmount
}