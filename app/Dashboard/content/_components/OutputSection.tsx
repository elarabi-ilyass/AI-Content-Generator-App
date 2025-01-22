import React,{useRef} from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { Geist_Mono } from 'next/font/google';

const OutputSection = () => {
  const editorRef:any=useRef()
  return (
  <>
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between p-2 items-center bg-gradient-to-r from-indigo-500 to-indigo-200 '>
        <h2 className='font-bold'>Your Result</h2>
        <Button className='bg-gradient-to-r to-indigo-300 from-indigo-100'> <Copy/> Copy </Button>
      </div>
      <Editor
      ref={editorRef}
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
      onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
    />
    </div>
  </>
  )
}

export default OutputSection
