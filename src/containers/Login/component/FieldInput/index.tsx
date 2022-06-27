import React from "react";
import { TextField } from "@material-ui/core";
import { Field } from "react-final-form";

export const FieldInput = ({
  name,
  validate,
}: {
  name: string;
  validate: (value: string) => string;
}): React.ReactElement => {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div>
          <TextField
            {...input}
            type= "text"
            placeholder={name}
            variant="outlined"
          />

          {(meta.error || meta.submitError) && meta.touched && (
            <span>{meta.error || meta.submitError}</span>
          )}
        </div>
      )}
    </Field>
  );
};
