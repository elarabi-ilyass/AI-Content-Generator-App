'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import OutputSection from '../_components/OutputSection';
import FormSection from '../_components/FormSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';


const CreateNewBlog = () => {
  const { slug } = useParams(); // Destructure `slug` directly
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/posts?slug=${slug}`); // Use backticks for template literals
        const data = await response.json();
        console.log(data);
        setBlog(data[0]); // Assuming `data` is an array and you need the first item
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [slug]); // Add `slug` as a dependency

  return (
<div className='p-10'>
    <Link href={`/Dashboard`}>
      <Button className="bg-gradient-to-r from-indigo-500 to-indigo-200 hover:bg-gradient-to-r to-indigo-400 from-indigo-300"> <MoveLeft/> Back</Button>
    </Link>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      {blog ? (
        <>
          <FormSection blog={blog} />
          <div className='col-span-2'>
            <OutputSection />
          </div>
        </>
      ) : (
        <p>Loading...</p> // Display a loading state
      )}
    </div>
  </div>
  );
};

export default CreateNewBlog;
