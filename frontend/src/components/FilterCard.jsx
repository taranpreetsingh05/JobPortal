import React from 'react'
import { RadioGroup,RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
const filterData=[
    {
        filterType:"Location",
        array:["Delhi NCR","Bangalore","Hyderabad","Pune","Mumbai"]
    },
     {
        filterType:"Industry",
        array:["Front-end developer","back-end developer","full-stack deve;oper"]
    },
     {
        filterType:"Salary",
        array:["0-40K","41K-1L","1L-5l"]
    },

]
const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
            filterData.map((data,index)=>{
               return  <div>
                    <h1 className='font-bold'>
                        {data.filterType}
                    </h1>
                    {
                        data.array.map((item,index)=>{
                            return <div className='flex items-center space-x-2 my-2'>
                                <RadioGroupItem value={item}/>
                                    <Label>{item}</Label>
                                
                            </div>
                        })
                    }
                </div>
            })
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
