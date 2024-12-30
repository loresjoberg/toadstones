import { FileUpload } from '@/components/Forms/FileUpload/FileUpload';
import { FeatureFormValues, Section } from '@/types/toadstones';
import {
    Button,
    Checkbox,
    Group,
    NativeSelect,
    Stack,
    Textarea,
    TextInput
} from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm, UseFormReturnType } from '@mantine/form';
import { useState } from 'react';
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

export function FeatureForm({ initialValues, submitRoute, action }: FeatureFormProps) {
    const [featureMedium, setFeatureMedium] = useState<string>(initialValues.medium);

    const { sections }: PageProps = usePage().props;

    const sectionOptions = sections.map((section) => {
        return { label: section.title, value: section.id };
    });

    const form: UseFormReturnType<FeatureFormValues> = useForm<FeatureFormValues>({
        mode: 'uncontrolled',
        initialValues: initialValues,
        validate: {
            title: (value) => (value ? null : 'Title Required'),
            slug: (value) => (value ? null : 'Slug Required'),
            launch: (value) => (value ? null : 'Launch Required')
        },
        onValuesChange: (values) => {
            // console.log('onValuesChange', values);
            if (values.medium) {
                setFeatureMedium(values.medium);
            }

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

            if (values.title && !form.isTouched('slug') && action !== 'edit') {
                form.setFieldValue('slug', changeCase.kebabCase(values.title));
                form.setTouched({ slug: false });
            }

        }
    });

    const handleFile = (file, field) => {
        form.setFieldValue(field, file)
    }

    const handleForm = (form: FeatureFormValues) => {
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
                    src={initialValues['thumbnailUrl']}
                    fileKey={form.key('thumbnail')}
                    updateForm={handleFile}
                    file={form.getValues().thumbnail}
                />
                {(featureMedium === 'image') && (
                    <FileUpload
                        type="image"
                        label="Upload Image"
                        src={initialValues['imageUrl']}
                        fileKey={form.key('image')}
                        updateForm={handleFile}
                        file={form.getValues().image}
                    />
                )}
                {featureMedium === 'video' && (
                    <FileUpload
                        type="video"
                        label="Upload Video"
                        src={initialValues['videoUrl']}
                        fileKey={form.key('video')}
                        updateForm={handleFile}
                        file={form.getValues().video}
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
