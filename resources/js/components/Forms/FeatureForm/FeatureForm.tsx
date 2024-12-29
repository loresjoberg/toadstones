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
import * as changeCase from 'change-case';


interface FeatureFormProps {
    initialValues: FeatureFormValues;
    submitRoute: (FormValues) => void;
    action: string;
}

interface PageProps {
    sections: Section[];
}

export interface FormInputProps {
    onChange: (payload: (File | null)) => void;
    value: File;
}

export function FeatureForm({ initialValues, submitRoute, action }: FeatureFormProps) {
    const [featureMedium, setFeatureMedium] = useState<string>(initialValues.medium);
    const [thumbSrc, setThumbSrc] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string>('');

    const { sections }: PageProps = usePage().props;

    const sectionOptions = sections.map((section) => {
        return { label: section.title, value: section.id };
    });

    const getPreview = (type: string) => {

        let src = '';

        if (type === 'video' && initialValues.videoUrl) {
            return <Center fz="4rem" bd="2px solid black">
                <FaVideo />
            </Center>;

        }

        if (type === 'thumbnail') {
            src = thumbSrc ? thumbSrc : initialValues.thumbnailUrl;

        }

        if (type === 'image') {
            src = imageSrc ? imageSrc : initialValues.imageUrl;
        }

        return <Image
            fit="contain"
            src={src}
            maw="200px"
            onLoad={() =>
                URL.revokeObjectURL(src)
            }
        />;
    };


    const onFileChange = (form: UseFormReturnType<FeatureFormValues>, type: string) => {
        const props: FormInputProps = form.getInputProps(type) as FormInputProps;
        return props.onChange;
    };

    const fileValue = (form: UseFormReturnType<FeatureFormValues>, type: string) => {
        const props = form.getInputProps(type) as FormInputProps;
        return props.value;
    };


    const form: UseFormReturnType<FeatureFormValues> = useForm<FeatureFormValues>({
        mode: 'controlled',
        initialValues: initialValues,
        validate: {
            title: (value) => (value ? null : 'Title Required'),
            slug: (value) => (value ? null : 'Slug Required'),
            launch: (value) => (value ? null : 'Launch Required')
        },
        onValuesChange: (values) => {
            console.log('onValuesChange', values);
            if (values.title && !form.isTouched('slug') && action !== 'edit') {
                console.log('Slug', values.slug, form.isTouched('slug'));
                values.slug = changeCase.kebabCase(values.title);
            }

            console.log('section_id & form', typeof values.section_id, form.isTouched('medium'));

            if (parseInt(values.section_id) === 2 && !form.isTouched('medium')) {
                form.setFieldValue('medium', 'video');
            }

            if ((parseInt(values.section_id) === 1 || parseInt(values.section_id) === 4)
                && !form.isTouched('medium')) {

                form.setFieldValue('medium', 'image');
            }

            if ((parseInt(values.section_id) === 3) && !form.isTouched('medium')) {
                form.setFieldValue('medium', 'html');
            }

            if (values.thumbnail) {
                setThumbSrc(URL.createObjectURL(values.thumbnail));
            }

            if (values.image) {
                setImageSrc(URL.createObjectURL(values.image));
            }

            // if (values.medium) {
            //     setFeatureMedium(values.medium);
            // }
        }
    });

    const handleForm = (form: FeatureFormValues) => {
        console.log('FeatureForm.handleForm.form', form);
        submitRoute(form);
    };

    return (
        <form onSubmit={form.onSubmit((values: FeatureFormValues) => handleForm(values))}>
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
                    type="thumbnail"
                    label="Upload Thumbnail"
                    fileKey={form.key('thumbnail')}
                    file={fileValue(form, 'thumbnail')}
                    handleChange={onFileChange(form, 'thumbnail')}
                    preview={getPreview('thumbnail')} />
                {(featureMedium === 'image') && (
                    <FileUpload
                        type="image"
                        label="Upload Image"
                        fileKey={form.key('image')}
                        file={fileValue(form, 'image')}
                        handleChange={onFileChange(form, 'image')}
                        preview={getPreview('image')} />
                )}
                {featureMedium === 'video' && (
                    <FileUpload
                        type="video"
                        label="Upload Video"
                        fileKey={form.key('video')}
                        file={fileValue(form, 'video')}
                        handleChange={onFileChange(form, 'video')}
                        preview={getPreview('video')} />
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
