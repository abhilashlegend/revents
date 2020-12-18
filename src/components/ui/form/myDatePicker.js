import { useField, useFormikContext } from 'formik';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { FormField, Label } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = props => {
    const [field, meta] = useField(props);
    const {setFieldValue} = useFormikContext();
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <ReactDatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value))}
                onChange={value => setFieldValue(field.name, value)}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </FormField>
    )
}

export default MyDatePicker;