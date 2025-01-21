'use client'
import React, { useState, useEffect } from 'react';
import TemplateCard from './TemplateCard';

export interface POSTS {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

export const TemplatesList: React.FC = ({search}:any) => {
  const [data, setData] = useState<POSTS[]>([]);

  useEffect(() => {
    // Make sure fetch is done inside an async function
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array means it runs once on component mount

  var myData= search ? data.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())) : data;
  

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-4'>
      {myData?.length > 0 ? (
        myData.map((item, index) => (
          <TemplateCard key={index} item={item} />
        ))
      ) : (
        <p>No templates available</p>
      )}
    </div>
  );
};
