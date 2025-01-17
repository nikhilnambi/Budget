import React, { Fragment }  from "react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import { Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function NewEntryForm({ addEntry,description,value,isExpense,setDescription,setValue,setIsExpense }) {
  
  return (
  <Fragment>
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel
        addEntry={addEntry}
      />
      </Form>
   </Fragment>
  );
}

export default NewEntryForm;
