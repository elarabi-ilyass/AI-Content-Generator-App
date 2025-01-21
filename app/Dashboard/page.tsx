'use client'
import React,{ useState } from "react";
import SearchSection from './_components/SearchSection';
import { TemplatesList } from './_components/TemplatesList';


const Dashboard = () => {
  const [search ,setSearch]= useState('')
  console.log(search)
  return (
    <div> 
      <SearchSection search={search} setSearch={setSearch}/>

      <TemplatesList search={search}/>
    </div>
  )
}

export default Dashboard