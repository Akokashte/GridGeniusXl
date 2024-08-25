const cell = (value = 't', cellFormat = null) => (
    {
        value,
        cellFormat
    }
)

export const initialGrid = Array.from({ length: 50 }, () => 
    Array.from({ length: 20 }, ()=>cell())
)
