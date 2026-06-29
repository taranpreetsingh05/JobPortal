import React, { useEffect, useState } from 'react'
import { RadioGroup,RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '../redux/jobSlice'
const filterData=[
    {
        filterType:"Location",
        array:["Delhi NCR","Bangalore","Hyderabad","Pune","Mumbai","Noida"]
    },
     {
        filterType:"Industry",
        array:["Front-end developer","back-end developer","full stack engineer intern","data scientist","Software Engineer Intern","MERN stack"]
    },
     {
        filterType:"Salary",
        array:["0-40K","41K-1L","1L-5l"]
    },

]
const FilterCard = () => {
    const dispatch=useDispatch();
    const [selectedValue,setSelectedValue]=useState("");
    const changeHandler=(value)=>{
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue]);
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
            filterData.map((data,index)=>{
               return  <div key={index}>
                    <h1 className='font-bold'>
                        {data.filterType}
                    </h1>
                    {
                        data.array.map((item,inx)=>{
                            const itemid=`r${index}-${inx}`
                            return <div key={inx} className='flex items-center space-x-2 my-2'>
                                <RadioGroupItem value={item} id={itemid}/>
                                    <Label htmlFor={itemid}>{item}</Label>
                                
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
