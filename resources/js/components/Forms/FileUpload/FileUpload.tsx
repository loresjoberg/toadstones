import { Box, Button, Center, FileButton, Group, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import { FaVideo } from 'react-icons/fa';

interface FileUploadProps {
    type: string;
    fileKey: string;
    file: File;
    label: string;
    src: string;
    updateForm: (File, string) => void;
}


export function FileUpload({ type, fileKey, file, label, src, updateForm }: FileUploadProps) {
    const [fileValue, setFileValue] = useState(file);

    useEffect(() => {
        console.log('file changed',fileValue)
    }, [fileValue]);

    const handleChange = (newFile: File) => {
        if (!newFile) {
            return;
        }
        updateForm(newFile, type);
        setFileValue(newFile);
    }

    const getPreview = (type: string) =>
    {


        if (fileValue && type === 'video') {
            console.log('getPreview type video');

            return <Center fz="4rem" bd="2px solid black">
                <FaVideo />
            </Center>;
        }

        if (fileValue) {
            console.log('getPreview file', fileValue);

            const src = URL.createObjectURL(fileValue);
            return <Image
                fit="contain"
                src={src}
                maw="200px"
                onLoad={() =>
                    URL.revokeObjectURL(src)
                }
            />;
        }

        if (src) {
            return <Image
                fit="contain"
                src={src}
                maw="200px"
            />;
        }

        return <></>


    };


    return (
        <Group>
            <FileButton
                accept="image/png,image/jpeg"
                radius="xl"
                label={label}
                w="30%"
                key={fileKey}
                onChange={handleChange}
                value={fileValue}
            >
                {(props) => <Button onClick={props.onClick}>{label}</Button>}
            </FileButton>
            <Center gap={0}>
                <Box w="200px">{getPreview(type)}</Box>
            </Center>
        </Group>
    );
}
