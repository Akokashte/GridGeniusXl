const cell = (value = 't', cellFormat = null) => (
    {
        value,
        cellFormat:{
            fontSize:"",
            alignMent:""
        }
    }
)

export const initialGrid = Array.from({ length: 50 }, () => 
    Array.from({ length: 20 }, ()=>cell())
)
