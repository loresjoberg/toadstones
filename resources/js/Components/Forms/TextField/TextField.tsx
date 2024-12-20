import { TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/types';

interface TextFieldProps {
    label: string;
    name: string;
    form: UseFormReturnType<never>;
    withAsterisk: boolean;
}

export function TextField({ label, name, form, withAsterisk }: TextFieldProps) {
    return (
        <TextInput
            label={label}
            placeholder={label}
            radius="xl"
            withAsterisk={withAsterisk}
            key={form.key(name)}
            {...form.getInputProps(name)}
        />
    );
}
