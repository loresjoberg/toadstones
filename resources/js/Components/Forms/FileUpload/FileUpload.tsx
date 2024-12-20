import { Box, Button, Center, FileButton, Group, Image, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { FileWithPath } from "@mantine/dropzone";

interface FileUploadProps {
    file?: File | null,
    form,
    name: string,
    type: string
}

export function FileUpload({ file, form, name, type, preview }: FileUploadProps) {

    return  <Group>
        <FileButton
            radius="xl"
            label={"Upload"+type}
            w="30%"
            key={form.key(name)}
            {...form.getInputProps(name)}
        >{(props) => <Button {...props}>Upload {type}</Button>}
        </FileButton>
        <Center gap={0}>
            <Box>
                {preview}
                {file && file.name}
            </Box>
        </Center>
    </Group>;
}
