export const sortSpendingsByCriteriaName = (spendings, criteriaName) => {
    switch(criteriaName){
        case 'A-Z':
            return spendings.sort((a, b) => a.name.localeCompare(b.name))
        case 'Z-A':
            return spendings.sort((a, b) => -1 * a.name.localeCompare(b.name))
        case 'Completed first':
            return [...spendings].filter(spending => spending.isCompleted)
            .concat([...spendings].filter(spending => !spending.isCompleted))
        case 'Pending first':
            return [...spendings].filter(spending => !spending.isCompleted)
            .concat([...spendings].filter(spending => spending.isCompleted))
        case 'By creation date':
            return spendings.sort((a, b) => new Date(b.date) - new Date(a.date))
        case 'By amount descending':
            return spendings.sort((a, b) => b.amount-a.amount)
        case 'By amount ascending':
            return spendings.sort((a, b) => a.amount-b.amount)
        default: 
            return spendings
    }
}