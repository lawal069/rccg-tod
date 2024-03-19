"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "This field is required" }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ ...values });

    form.reset();
  }
  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 lg:space-y-10 text-custom-gray mt-10 lg:mt-20 w-full max-w-[800px] mx-auto"
        >
          {/* firstname */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <div className="">
                <FormItem className="lg:text-sm font-normal mb-2 text-custom-text border-b-2 border-secondary-text">
                  <FormLabel className="px-2 lg:px-6">FirstName</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <Input
                        placeholder="Input your First Name"
                        {...field}
                        className={`flex-1 border-none px-2 lg:px-6 shadow-none bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${
                          form.formState.errors[field.name]
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      <p className="pr-6 text-sm">*Required</p>
                    </div>
                  </FormControl>
                </FormItem>
                <FormMessage />
              </div>
            )}
          />

          {/* lastname */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <div className="">
                <FormItem className="lg:text-sm font-normal mb-2 text-custom-text border-b-2 border-secondary-text">
                  <FormLabel className="px-2 lg:px-6">Last Name</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <Input
                        placeholder="Input your Last Name"
                        {...field}
                        className={`flex-1 border-none px-2 lg:px-6 shadow-none bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${
                          form.formState.errors[field.name]
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      <p className="pr-6 text-sm">*Required</p>
                    </div>
                  </FormControl>
                </FormItem>
                <FormMessage />
              </div>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <div className="">
                <FormItem className="lg:text-sm font-normal mb-2 text-custom-text border-b-2 border-secondary-text">
                  <FormLabel className="px-2 lg:px-6">Email Address</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <Input
                        placeholder="Input your Email Address"
                        {...field}
                        className={`flex-1 border-none px-2 lg:px-6 shadow-none bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${
                          form.formState.errors[field.name]
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      <p className="pr-6 text-sm">*Required</p>
                    </div>
                  </FormControl>
                </FormItem>
                <FormMessage />
              </div>
            )}
          />

          {/* message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <div className="">
                <FormItem className="lg:text-sm font-normal mb-2 text-custom-text border-b-2 border-secondary-text">
                  <FormLabel className="px-2 lg:px-6">Message</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <Input
                        placeholder="Input your Message"
                        {...field}
                        className={`flex-1 border-none px-2 lg:px-6 shadow-none bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${
                          form.formState.errors[field.name]
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      <p className="pr-6 text-sm">*Required</p>
                    </div>
                  </FormControl>
                </FormItem>
                <FormMessage />
              </div>
            )}
          />

          {/* button */}
          <div className="flex justify-center w-full">
            <Button
              type="submit"
              className="text-btn-color hover:text-white hover:bg-btn-color hover:boreder-0 bg-transparent border-2 border-btn-color py-5 rounded-[10px] w-[767px] h-14 lg:text-base text-sm lg:mx-0"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactPage;
