import React,{useState} from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"; // Assuming the Button component is imported

type BlogProps = {
  blog: {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiPrompt: string;
    slug: string;
    form: FORM[];
  };
};

interface FORM {
  label: string;
  fields: string; // 'fields' instead of 'field' to match the interface
  name: string;
  required: boolean;
}

const FormSection = ({ blog }: BlogProps) => {

  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)
  };

  return (
    <div className="p-5 shadow-md border rounded-lg">
      <Image
        src={blog?.icon}
        alt="icon"
        width={70}
        height={70}
      />
      <h2 className="text-2xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-200">
        {blog?.name}
      </h2>
      <p className="text-gray-500 text-sm">
        {blog?.desc}
      </p>

      <form className="mt-6" onSubmit={handleSubmit}>
        {blog.form.map((form, index) => (
          <div className="flex flex-col my-2 gap-2 mb-2" key={index}>
            <label className="font-bold">{form.label}</label>
            {form.field === "input" ? (
              <Input
                type="text"
                name={form.name}
                required={form.required}
                onChange={handleValueChange}
              />
            ) : (
              <Textarea
                name={form.name}
                required={form.required}
                onChange={handleValueChange}
              />
            )}
          </div>
        ))}
        <Button className="w-full py-6 bg-gradient-to-r from-indigo-500 to-indigo-200">Generate Content</Button>
      </form>
    </div>
  );
};

export default FormSection;
