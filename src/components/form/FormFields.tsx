"use client";

import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

export type AppFormFieldBase = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  helpText?: string;
  error?: boolean;
  errorText?: string;
  success?: boolean;
  successText?: string;
};

export type FormSelectOption = {
  value: string;
  label: string;
};

type SharedOmit = Omit<
  TextFieldProps,
  | "label"
  | "error"
  | "helperText"
  | "color"
  | "id"
  | "name"
  | "required"
  | "disabled"
  | "select"
  | "children"
>;

function pickHelper(base: AppFormFieldBase): {
  helperText: string | undefined;
  error: boolean;
  color: TextFieldProps["color"] | undefined;
} {
  const hasErr = Boolean(base.error && base.errorText);
  if (hasErr) {
    return { helperText: base.errorText, error: true, color: undefined };
  }
  if (base.success && base.successText) {
    return { helperText: base.successText, error: false, color: "success" };
  }
  return { helperText: base.helpText, error: false, color: undefined };
}

const commonFieldProps = {
  variant: "outlined" as const,
  fullWidth: true as const,
};

/** Single-line text. */
export function FormFieldText({
  id,
  name,
  label,
  required,
  disabled,
  helpText,
  error,
  errorText,
  success,
  successText,
  ...rest
}: AppFormFieldBase & SharedOmit) {
  const { helperText: h, error: err, color } = pickHelper({
    id,
    name,
    label,
    required,
    disabled,
    helpText,
    error,
    errorText,
    success,
    successText,
  });

  return (
    <TextField
      {...commonFieldProps}
      id={id}
      name={name}
      label={label}
      required={required}
      disabled={disabled}
      error={err}
      color={color}
      helperText={h}
      {...rest}
    />
  );
}

/** Email with `type` and `autoComplete`. */
export function FormFieldEmail({
  id,
  name,
  label,
  required,
  disabled,
  helpText,
  error,
  errorText,
  success,
  successText,
  inputProps: userInputProps,
  ...rest
}: AppFormFieldBase & SharedOmit) {
  const { helperText: h, error: err, color } = pickHelper({
    id,
    name,
    label,
    required,
    disabled,
    helpText,
    error,
    errorText,
    success,
    successText,
  });

  return (
    <TextField
      {...commonFieldProps}
      id={id}
      name={name}
      label={label}
      required={required}
      disabled={disabled}
      error={err}
      color={color}
      helperText={h}
      type="email"
      autoComplete="email"
      inputProps={{
        ...userInputProps,
        inputMode: "email",
      }}
      {...rest}
    />
  );
}

/** URL for site or reference link. */
export function FormFieldUrl({
  id,
  name,
  label,
  required,
  disabled,
  helpText,
  error,
  errorText,
  success,
  successText,
  inputProps: userInputProps,
  ...rest
}: AppFormFieldBase & SharedOmit) {
  const { helperText: h, error: err, color } = pickHelper({
    id,
    name,
    label,
    required,
    disabled,
    helpText,
    error,
    errorText,
    success,
    successText,
  });

  return (
    <TextField
      {...commonFieldProps}
      id={id}
      name={name}
      label={label}
      required={required}
      disabled={disabled}
      error={err}
      color={color}
      helperText={h}
      type="url"
      autoComplete="url"
      inputProps={{
        ...userInputProps,
        inputMode: "url",
      }}
      {...rest}
    />
  );
}

/** Multiline. */
export function FormFieldTextarea({
  id,
  name,
  label,
  required,
  disabled,
  helpText,
  error,
  errorText,
  success,
  successText,
  minRows = 4,
  ...rest
}: AppFormFieldBase & SharedOmit & { minRows?: number }) {
  const { helperText: h, error: err, color } = pickHelper({
    id,
    name,
    label,
    required,
    disabled,
    helpText,
    error,
    errorText,
    success,
    successText,
  });

  return (
    <TextField
      {...commonFieldProps}
      id={id}
      name={name}
      label={label}
      required={required}
      disabled={disabled}
      error={err}
      color={color}
      helperText={h}
      multiline
      minRows={minRows}
      {...rest}
    />
  );
}

export type FormFieldSelectProps = AppFormFieldBase &
  SharedOmit & {
    options: readonly FormSelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: TextFieldProps["onChange"];
    placeholderLabel?: string;
  };

export function FormFieldSelect({
  id,
  name,
  label,
  required,
  disabled,
  helpText,
  error,
  errorText,
  success,
  successText,
  options,
  value,
  defaultValue,
  onChange,
  placeholderLabel,
  ...rest
}: FormFieldSelectProps) {
  const { helperText: h, error: err, color } = pickHelper({
    id,
    name,
    label,
    required,
    disabled,
    helpText,
    error,
    errorText,
    success,
    successText,
  });

  return (
    <TextField
      {...commonFieldProps}
      id={id}
      name={name}
      label={label}
      required={required}
      disabled={disabled}
      error={err}
      color={color}
      helperText={h}
      select
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      SelectProps={{
        displayEmpty: Boolean(placeholderLabel),
        ...rest.SelectProps,
      }}
      {...rest}
    >
      {placeholderLabel ? (
        <MenuItem value="" disabled>
          {placeholderLabel}
        </MenuItem>
      ) : null}
      {options.map((o) => (
        <MenuItem key={o.value} value={o.value}>
          {o.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
