import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
}) {
    return (
        <>
            <Form.Group>
                <Form.Input
                    icon="tags"
                    width={8}
                    label="Description"
                    placeholder="Salary"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    icon="rupee"
                    width={8}
                    label="Value"
                    placeholder="100.00"
                    iconPosition="left"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    label="is expense"
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </>
    );
}

export default EntryForm;
