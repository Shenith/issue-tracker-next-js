import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className=" max-w-lg space-y-3">
      <TextField.Root placeholder="Issue title"></TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit issue</Button>
    </div>
  );
};

export default NewIssuePage;
