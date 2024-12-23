import { Box, Button, Center, FileButton, Group } from '@mantine/core';
import { ReactNode } from 'react';

interface FileUploadProps {
    form;
    name: string;
    type: string;
    preview: ReactNode;
}

export function FileUpload({ form, name, type, preview }: FileUploadProps) {
    return (
        <Group>
            <FileButton
                radius="xl"
                label={`Upload ${type}`}
                w="30%"
                key={form.key(name)}
                {...form.getInputProps(name)}
            >
                {(props) => <Button {...props}>Upload {type}</Button>}
            </FileButton>
            <Center gap={0}>
                <Box w="200px">{preview}</Box>
            </Center>
        </Group>
    );
}
