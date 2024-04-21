"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AddIssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<AddIssueForm>();
  const onSubmit: SubmitHandler<AddIssueForm> = async (data) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("Unexpected error occered");
    }
  };
  return (
    <div className="max-w-lg ">
      {error && (
        <Callout.Root className=" mb-5" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3">
        <TextField.Root
          placeholder="Issue title"
          {...register("title")}
        ></TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE {...field} placeholder="Description" />
          )}
        />

        <Button type="submit">Submit issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
