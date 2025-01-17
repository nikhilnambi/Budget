import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";


function ModalEdit(
  { isOpen, 
    setIsOpen,
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Form unstackable>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense} />
          </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>Save</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
