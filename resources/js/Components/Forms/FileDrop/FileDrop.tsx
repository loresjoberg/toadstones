import { Group, rem, SimpleGrid, Text, Image, Box, Center } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";


interface FileDropProps {
    file: File | null,
    type: string
}

export function FileDrop({ file, type }: FileDropProps) {
    const [files, setFiles] = useState<FileWithPath[]>([]);
    const [preview, setPreview] = useState(<></>);

    useEffect(() => {
        console.log("files", files);
        if (files.length > 0) {
            const imageUrl = URL.createObjectURL(files[0]);
            const element = <Image src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
            setPreview(element);
        }
    }, [files]);


    return <Box w="500px">
        <Dropzone
            w="300px"
            h="150px"
            onDrop={(files) => setFiles(files)}
            onReject={(files) => console.log("rejected files", files)}
        >
            <Group justify="center" gap="sm" style={{ pointerEvents: "none" }}>
                <Dropzone.Accept>
                    <IconUpload
                        style={{ width: rem(52), height: rem(52), color: "var(--mantine-color-blue-6)" }}
                        stroke={1.5}
                    />
                </Dropzone.Accept>
                <Dropzone.Reject>
                    <IconX
                        style={{ width: rem(52), height: rem(52), color: "var(--mantine-color-red-6)" }}
                        stroke={1.5}
                    />
                </Dropzone.Reject>
                <Dropzone.Idle>
                    <IconPhoto
                        style={{ width: rem(42), height: rem(42), color: "var(--mantine-color-dimmed)" }}
                        stroke={1.5}
                    />
                </Dropzone.Idle>
                <Center>
                    <Text size="sm" w="60%" align="center">
                        Drag {type} or click to select a file
                    </Text>
                </Center>
            </Group>
        </Dropzone>

        <SimpleGrid cols={{ base: 1, sm: 4 }}>
            {preview}
        </SimpleGrid>
    </Box>;
}
