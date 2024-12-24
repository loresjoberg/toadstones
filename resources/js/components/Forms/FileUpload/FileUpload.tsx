import { Box, Button, Center, FileButton, Group } from '@mantine/core';
import { ReactNode } from 'react';

interface FileUploadProps {
    fileKey: string
    handleChange: (payload: (File | null)) => void;
    preview: ReactNode;
    file: File;
    label: string;
}


export function FileUpload({ fileKey, handleChange, file,  preview, label }: FileUploadProps) {
    return (
        <Group>
            <FileButton
                radius="xl"
                label={label}
                w="30%"
                key={fileKey}
                onChange={handleChange}
                value={file}
            >
                {(props) => <Button onClick={props.onClick}>{label}</Button>}
            </FileButton>
            <Center gap={0}>
                <Box w="200px">{preview}</Box>
            </Center>
        </Group>
    );
}
