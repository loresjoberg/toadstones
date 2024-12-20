import { SelectorOption } from '@/types/toadstones';
import { NativeSelect } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/types';

interface SelectorProps {
    label: string;
    name: string;
    selections: SelectorOption[];
    form: UseFormReturnType<never>;
}

export function Selector({ label, name, selections, form }: SelectorProps) {
    return (
        <NativeSelect
            radius="xl"
            label={label}
            data={selections}
            key={form.key(name)}
            {...form.getInputProps(name)}
        />
    );
}
