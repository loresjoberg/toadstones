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
} from "@mantine/core";
import React, { useState } from "react";
import { FileUpload } from "@/Components/Forms/FileUpload/FileUpload";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import '@mantine/dropzone/styles.css';
import { FaVideo } from "react-icons/fa";


interface FeatureFormProps {
    initialValues,
    submitRoute
}

export function FeatureForm({ initialValues, submitRoute }: FeatureFormProps) {
    const [featureMedium, setFeatureMedium] = useState("image");
    const [thumbnail, setThumbnail] = useState();
    const [image, setImage] = useState();
    const [video, setVideo] = useState();
    const [thumbnailPreview, setThumbnailPreview] = useState(<></>);
    const [imagePreview, setImagePreview] = useState(<></>);
    const [videoPreview, setVideoPreview] = useState(<></>);

    const form = useForm({
        mode: "uncontrolled",
        initialValues: initialValues,
        validate: {
            title: (value) => (value ? null : "Title Required"),
            slug: (value) => (value ? null : "Slug Required"),
            thumbnail: (value) => (value ? null : "Thumbnail Required"),
            launch: (value) => (value ? null : "Launch Required")
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
            if (values.thumbnail) {
                setUpPreview(values.thumbnail, "thumbnail");
            }
            if (values.image) {
                setUpPreview(values.image, "image");
            }
            if (values.video) {
                setUpPreview(values.video, "video");
            }
        }
    });

    const setUpPreview = (fileObject, type) => {
        const imageUrl = URL.createObjectURL(fileObject);

        if (type === "thumbnail") {
            setThumbnailPreview(<Image src={imageUrl} maw="200px" onLoad={() => URL.revokeObjectURL(imageUrl)} />);
            setThumbnail(fileObject);
        }

        if (type === "image") {
            setImagePreview(<Image src={imageUrl} maw="200px" onLoad={() => URL.revokeObjectURL(imageUrl)} />);
            setImage(fileObject);
        }

        if (type === "video") {
            setVideoPreview(<Center fz="4rem" bd="2px solid black"><FaVideo /></Center>);
            setVideo(fileObject);
        }
    };


    const formatDate = (launch: Date) => {
        const date = launch;
        const dateString = date.toISOString().split("T")[0];
        const timeString = date.toISOString().split("T")[1].split(".")[0];
        return `${dateString} ${timeString}`;
    };

    const handleForm = (values) => {
        const date = new Date(values.launch);
        const dateString = date.toISOString().split("T")[0];
        const timeString = date.toISOString().split("T")[1].split(".")[0];
        values.launch = `${dateString} ${timeString}`;
        submitRoute(values)
    };

    return <form onSubmit={form.onSubmit((values) => handleForm(values))}>
        <Stack>
            <TextInput
                label="Title"
                placeholder="Title"
                radius="xl"
                withAsterisk
                key={form.key("title")}
                {...form.getInputProps("title")}
            />
            <TextInput
                label="Slug"
                placeholder="Slug"
                radius="xl"
                withAsterisk
                key={form.key("slug")}
                {...form.getInputProps("slug")}
            />
            <Group>
                <NativeSelect
                    radius="xl"
                    label="Section"
                    w="30%"
                    data={[{ label: "Speak With Monsters", value: "1" },
                        { label: "Bandwidth Theater", value: "2" },
                        { label: "The Ratings", value: "3" },
                        { label: "Toadstones", value: "4" },
                        { label: "Apocrypha", value: "5" }]}
                    key={form.key("section_id")}
                    {...form.getInputProps("section_id")}
                />
                <NativeSelect radius="xl"
                              label="Medium"
                              w="20%"
                              data={[
                                  { label: "image", value: "image" },
                                  { label: "video", value: "video" },
                                  { label: "html", value: "html" }
                              ]}
                              key={form.key("medium")}
                              {...form.getInputProps("medium")} />
                <NativeSelect radius="xl"
                              label="Status"
                              w="20%"
                              data={[{ label: "active", value: "active" },
                                  { label: "inactive", value: "inactive" },
                                  { label: "draft", value: "draft" },
                                  { label: "archived", value: "archived" }]}
                              key={form.key("status")}
                              {...form.getInputProps("status")} />
            </Group>
            <FileUpload form={form} file={thumbnail} name='thumbnail' type='Thumbnail' preview={thumbnailPreview} />
            {featureMedium === "image" && <FileUpload form={form}
                                                      file={image}
                                                      name="image"
                                                      type="Image"
                                                      preview={imagePreview} />}
            {featureMedium === "video" && <FileUpload form={form}
                                                      file={video}
                                                      name="video"
                                                      type="Video"
                                                      preview={videoPreview} />}
            {featureMedium === "html" && <Textarea
                label="HTML"
                radius="xl"
                key={form.key("html")}
                {...form.getInputProps("html")}
            />}
            <Group>
                <DateTimePicker
                    valueFormat="DD MMM YYYY hh:mm:ss"
                    defaultValue={new Date()}
                    label="Launch Date"
                    radius="xl"
                    w="25%"
                    withAsterisk
                    key={form.key("launch")}
                    {...form.getInputProps("launch")}
                />

                <Checkbox
                    mt="md"
                    label="Popular"
                    key={form.key("isPopular")}
                    {...form.getInputProps("isPopular", { type: "checkbox" })}
                />
            </Group>
            <Group justify="flex-start" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </Stack>
    </form>

        ;
}
