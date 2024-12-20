import { NativeSelect } from "@mantine/core";
import React from "react";
import { UseFormReturnType } from "@mantine/form/lib/types";
import { SelectorOption } from "@/types/toadstones";

interface SelectorProps {
    label: string;
    name: string,
    selections: SelectorOption[],
    form: UseFormReturnType<any>,
}

export function Selector({ label, name, selections, form }: SelectorProps) {
    return  <NativeSelect
        radius="xl"
        label={label}
        data={selections}
        key={form.key(name)}
        {...form.getInputProps(name)}
    />;
}
