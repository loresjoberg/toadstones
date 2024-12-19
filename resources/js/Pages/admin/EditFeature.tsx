import {
    Box,
    Button,
    Checkbox,
    Container,
    FileInput, Group,
    NativeSelect, Stack,
    Textarea,
    TextInput,
    Title
} from "@mantine/core";
import React, {useState} from "react";
import {DateTimePicker} from '@mantine/dates';
import {useForm} from "@mantine/form";
import axios from "axios";
import {config} from "@/config/config";

interface FeatureForm {
    section_id: number;
    title: string;
    launch: string;
    status: string;
    slug: string;
    html?: string
    medium?: string;
    isPopular: boolean;
}

export default function EditFeature() {
    const [featureMedium, setFeatureMedium] = useState('image')
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            title: '',
            slug: '',
            section_id: 1,
            medium: 'image',
            html: '',
            image: null,
            video: null,
            status: 'active',
            isPopular: false,
            thumbnail: null,
            launch: new Date()
        },
        validate: {
            title: (value) => (value ? null : 'Title Required'),
            slug: (value) => (value ? null : 'Slug Required'),
            thumbnail: (value) => (value ? null : 'Thumbnail Required'),
            launch: (value) => (value ? null : 'Launch Required'),
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
            isPopular: values.isPopular,
            thumbnail: values.thumbnail,
            launch: formatDate(values.launch)
        }),
        onValuesChange: (values) => {
            setFeatureMedium(values.medium);
        },
    });

    const formatDate = (launch: Date) => {
        const date = launch;
        const dateString = date.toISOString().split('T')[0]
        const timeString = date.toISOString().split('T')[1].split('.')[0]
        return `${dateString} ${timeString}`;
    }

    const handleForm = (values: FeatureForm) => {
        // const date = new Date(values.launch);
        // const dateString = date.toISOString().split('T')[0]
        // const timeString = date.toISOString().split('T')[1].split('.')[0]
        // values.launch = `${dateString} ${timeString}`;
        console.log('values', values)
        axios.post(config.apiFeatures, values, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Container size="sm">
            <Title>New Feature</Title>
            <Box mt="3rem">
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
                                data={[{label: 'Speak With Monsters', value: '1'},
                                    {label: 'Bandwidth Theater', value: '2'},
                                    {label: 'The Ratings', value: '3'},
                                    {label: 'Toadstones', value: '4'},
                                    {label: 'Apocrypha', value: '5'}]}
                                key={form.key('section_id')}
                                {...form.getInputProps('section_id')}
                            />
                            <NativeSelect radius="xl"
                                          label="Medium"
                                          w="20%"
                                          data={[
                                              {label: 'image', value: 'image'},
                                              {label: 'video', value: 'video'},
                                              {label: 'html', value: 'html'},
                                          ]}
                                          key={form.key('medium')}
                                          {...form.getInputProps('medium')}/>
                            <NativeSelect radius="xl"
                                          label="Status"
                                          w="20%"
                                          data={[{label: 'active', value: 'active'},
                                              {label: 'inactive', value: 'inactive'},
                                              {label: 'draft', value: 'draft'},
                                              {label: 'archived', value: 'archived'},]}
                                          key={form.key('status')}
                                          {...form.getInputProps('status')}/>
                        </Group>
                        <FileInput
                            radius="xl"
                            label="Upload Thumbnail"
                            w="20%"
                            withAsterisk
                            key={form.key('thumbnail')}
                            {...form.getInputProps('thumbnail')}
                        />
                        {featureMedium === 'image' && <FileInput
                            radius="xl"
                            label="Upload Image"
                            w="20%"
                            key={form.key('image')}
                            {...form.getInputProps('image')}
                        />
                        }
                        {featureMedium === 'video' && <FileInput
                            radius="xl"
                            label="Upload Video"
                            w="20%"
                            key={form.key('video')}
                            {...form.getInputProps('video')}
                        />
                        }
                        {featureMedium === 'html' && <Textarea
                            label="HTML"
                            radius="xl"
                            key={form.key('html')}
                            {...form.getInputProps('html')}
                        />}
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
                                {...form.getInputProps('isPopular', {type: 'checkbox'})}
                            />
                        </Group>
                        <Group justify="flex-start" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </Stack>
                </form>
            </Box>
        </Container>
    );
}
