import { FileUpload } from '@/components/Forms/FileUpload/FileUpload';
import { FeatureFormValues } from '@/types/toadstones';
import {
    Button,
    Center,
    Checkbox,
    Group,
    Image,
    NativeSelect,
    Stack,
    Textarea,
    TextInput
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import '@mantine/dropzone/styles.css';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { usePage } from '@inertiajs/react';

interface FeatureFormProps {
    initialValues: FeatureFormValues;
    submitRoute;
}

export function FeatureForm({ initialValues, submitRoute }: FeatureFormProps) {
    const [featureMedium, setFeatureMedium] = useState<string>('image');
    const [thumbnailPreview, setThumbnailPreview] = useState(<></>);
    const [imagePreview, setImagePreview] = useState(<></>);
    const [videoPreview, setVideoPreview] = useState(<></>);

    const { sections } = usePage().props;

    const sectionOptions = sections.map((section) => {
        return { label: section.title, value: section.id };
    });


    if (initialValues.thumbnailUrl) {
        setThumbnailPreview(
            <Image
                src={initialValues.thumbnailUrl}
                maw="200px"
                onLoad={() =>
                    URL.revokeObjectURL(initialValues.thumbnailUrl)
                }
            />
        );
    }

    if (initialValues.imageUrl) {
        setImagePreview(
            <Image
                src={initialValues.imageUrl}
                maw="200px"
                onLoad={() => URL.revokeObjectURL(initialValues.imageUrl)}
            />
        );
    }
    if (initialValues.videoUrl) {
        setVideoPreview(
            <Center fz="4rem" bd="2px solid black">
                <FaVideo />
            </Center>
        );
    }


    const form = useForm({
        mode: 'uncontrolled',
        initialValues: initialValues,
        validate: {
            title: (value) => (value ? null : 'Title Required'),
            slug: (value) => (value ? null : 'Slug Required'),
            thumbnail: (value) => (value ? null : 'Thumbnail Required'),
            launch: (value) => (value ? null : 'Launch Required')
        },
        transformValues: (values) => ({
            title: values.title,
            slug: values.slug,
            section_id: values.section_id,
            medium: values.medium,
            html: values.html,
            image: values.image,
            video: values.video,
            status: values.status,
            isPopular: !!values.isPopular,
            thumbnail: values.thumbnail,
            launch: formatDate(values.launch)
        }),
        onValuesChange: (values) => {
            setFeatureMedium(values.medium);
            if (values.thumbnail) {
                setUpPreview(values.thumbnail, 'thumbnail');
            }
            if (values.image) {
                setUpPreview(values.image, 'image');
            }
            if (values.video) {
                setUpPreview(values.video, 'video');
            }
        }
    });

    const setUpPreview = (fileObject, type) => {
        const imageUrl = URL.createObjectURL(fileObject);

        if (type === 'thumbnail') {
            setThumbnailPreview(
                <Image
                    src={imageUrl}
                    maw="200px"
                    onLoad={() => URL.revokeObjectURL(imageUrl)}
                />
            );
        }

        if (type === 'image') {
            setImagePreview(
                <Image
                    src={imageUrl}
                    maw="200px"
                    onLoad={() => URL.revokeObjectURL(imageUrl)}
                />
            );
        }

        if (type === 'video') {
            setVideoPreview(
                <Center fz="4rem" bd="2px solid black">
                    <FaVideo />
                </Center>
            );
        }
    };

    const formatDate = (launch: Date) => {
        const date = launch;
        const dateString = date.toISOString().split('T')[0];
        const timeString = date.toISOString().split('T')[1].split('.')[0];
        return `${dateString} ${timeString}`;
    };

    const handleForm = (values) => {
        const date = new Date(values.launch);
        const dateString = date.toISOString().split('T')[0];
        const timeString = date.toISOString().split('T')[1].split('.')[0];
        values.launch = `${dateString} ${timeString}`;
        submitRoute(values);
    };

    return (
        <form onSubmit={form.onSubmit((values) => handleForm(values))}>
            <Stack>
                <TextInput
                    label="Title"
                    placeholder="Title"
                    radius="xl"
                    withAsterisk
                    key={form.key('title')}
                    {...form.getInputProps('title')}
                />
                <TextInput
                    label="Slug"
                    placeholder="Slug"
                    radius="xl"
                    withAsterisk
                    key={form.key('slug')}
                    {...form.getInputProps('slug')}
                />
                <Group>
                    <NativeSelect
                        radius="xl"
                        label="Section"
                        w="30%"
                        data={sectionOptions}
                        key={form.key('section_id')}
                        {...form.getInputProps('section_id')}
                    />
                    <NativeSelect
                        radius="xl"
                        label="Medium"
                        w="20%"
                        data={[
                            { label: 'image', value: 'image' },
                            { label: 'video', value: 'video' },
                            { label: 'html', value: 'html' }
                        ]}
                        key={form.key('medium')}
                        {...form.getInputProps('medium')}
                    />
                    <NativeSelect
                        radius="xl"
                        label="Status"
                        w="20%"
                        data={[
                            { label: 'active', value: 'active' },
                            { label: 'inactive', value: 'inactive' },
                            { label: 'draft', value: 'draft' },
                            { label: 'archived', value: 'archived' }
                        ]}
                        key={form.key('status')}
                        {...form.getInputProps('status')}
                    />
                </Group>
                <FileUpload
                    form={form}
                    name="thumbnail"
                    type="Thumbnail"
                    preview={thumbnailPreview}
                />
                {featureMedium === 'image' && (
                    <FileUpload
                        form={form}
                        name="image"
                        type="Image"
                        preview={imagePreview}
                    />
                )}
                {featureMedium === 'video' && (
                    <FileUpload
                        form={form}
                        name="video"
                        type="Video"
                        preview={videoPreview}
                    />
                )}
                {featureMedium === 'html' && (
                    <Textarea
                        label="HTML"
                        radius="xl"
                        key={form.key('html')}
                        {...form.getInputProps('html')}
                    />
                )}
                <Group>
                    <DateTimePicker
                        valueFormat="DD MMM YYYY hh:mm:ss"
                        defaultValue={new Date()}
                        label="Launch Date"
                        radius="xl"
                        w="25%"
                        withAsterisk
                        key={form.key('launch')}
                        {...form.getInputProps('launch')}
                    />

                    <Checkbox
                        mt="md"
                        label="Popular"
                        key={form.key('isPopular')}
                        {...form.getInputProps('isPopular', {
                            type: 'checkbox'
                        })}
                    />
                </Group>
                <Group justify="flex-start" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </Stack>
        </form>
    );
}
