import { FileUpload } from '@/components/Forms/FileUpload/FileUpload';
import { FeatureFormValues, Section } from '@/types/toadstones';
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
import { useForm, UseFormReturnType } from '@mantine/form';
import { useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { usePage } from '@inertiajs/react';
import _ from 'lodash';

interface FeatureFormProps {
    initialValues: FeatureFormValues;
    submitRoute: (FormValues) => void;
    action: string;
}

interface PageProps {
    sections: Section[];
}

interface FormValues {
    title: string,
    slug: string,
    section_id: number,
    medium: string,
    html: string,
    thumbnail: File,
    image: File,
    video: File,
    status: File,
    isPopular: boolean,
    launch: string
}

export function FeatureForm({ initialValues, submitRoute, action }: FeatureFormProps) {
    const [featureMedium, setFeatureMedium] = useState<string>('');

    const { sections }: PageProps = usePage().props;

    const sectionOptions = sections.map((section) => {
        return { label: section.title, value: section.id };
    });

    const getThumbnailPreview = () => {
        return <Image
            src={initialValues.thumbnailUrl}
            maw="200px"
            onLoad={() =>
                URL.revokeObjectURL(initialValues.thumbnailUrl)
            }
        />;
    };

    const getImagePreview = () => {
        return <Image
            src={initialValues.imageUrl}
            maw="200px"
            onLoad={() => URL.revokeObjectURL(initialValues.imageUrl)}
        />;
    };

    const getVideoPreview = () => {
        return <Center fz="4rem" bd="2px solid black">
            <FaVideo />
        </Center>;
    };


    const form: UseFormReturnType<FeatureFormValues> = useForm<FeatureFormValues>({
        mode: 'uncontrolled',
        initialValues: initialValues,
        validate: {
            title: (value) => (value ? null : 'Title Required'),
            slug: (value) => (value ? null : 'Slug Required'),
            thumbnail: (value) => (_.isUndefined(value) ? 'Thumbnail Required' : null),
            launch: (value) => (value ? null : 'Launch Required')
        },
        onValuesChange: (values) => {
            setFeatureMedium(values.medium);
        }
    });


    // const formatDate = (launch: Date) => {
    //     const date = launch;
    //     const dateString = date.toISOString().split('T')[0];
    //     const timeString = date.toISOString().split('T')[1].split('.')[0];
    //     return `${dateString} ${timeString}`;
    // };

    const handleForm = (values: FormValues) => {
        console.log('handleForm');
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
                    disabled={action === 'edit'}
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
                    preview={getThumbnailPreview()}
                />
                {featureMedium === 'image' && (
                    <FileUpload
                        form={form}
                        name="image"
                        type="Image"
                        preview={getImagePreview()}
                    />
                )}
                {featureMedium === 'video' && (
                    <FileUpload
                        form={form}
                        name="video"
                        type="Video"
                        preview={getVideoPreview()}
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
