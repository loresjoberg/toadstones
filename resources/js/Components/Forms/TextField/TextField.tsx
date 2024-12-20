import { Button, FileButton, Group, Image, Stack, Text, TextInput, Title } from "@mantine/core";
import { dsColors } from "@/config/dsColors";
import { Feature } from "@/types/toadstones";
import { config } from "@/config/config";
import { Link } from "@inertiajs/react";
import React from "react";
import { UseFormInput, UseFormReturnType } from "@mantine/form/lib/types";

interface TextFieldProps {
    label: string,
    name: string,
    form: UseFormReturnType<any>,
    withAsterisk: boolean
}

export function TextField({ label, name, form, withAsterisk }: TextFieldProps) {
    return  <TextInput
        label={label}
        placeholder={label}
        radius="xl"
        withAsterisk={withAsterisk}
        key={form.key(name)}
        {...form.getInputProps(name)}
    />;
}
