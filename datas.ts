const data = [
{
    period: {
    year: 2024,
    month: 1,
    initial_amount:4546546
  },
  spending:[
    {
        id: 46546,
         amount: 445646
    }
  ]

}
]
interface moneyObject{
    id: number|string,
    name: string,
    amount: number|string,
    data?: number|string,
  }


interface financialIndicators {
  period:{
       year: number|string,
    month: number|string,
    initial_amount: number|string
  },
  spending : moneyObject[],
  replenishment: moneyObject[]
}

interface reportsPhotos {
  id: number | string,
  img: string,
  description: string,
  date: string,
  
}