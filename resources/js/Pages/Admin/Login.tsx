import {
    Box,
    Button,
    Container,
    Group,
    Stack,
    TextInput,
    Title
} from "@mantine/core";
import React from "react";
import {useForm} from "@mantine/form";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

interface LoginForm {
    username: string;
    password: string;
}

export default function Login() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            username: '',
            password: '',
        },
        validate: {
            username: (value) => (value ? null : 'Username Required'),
            password: (value) => (value ? null : 'Password Required'),
        },
    });

    axios.get('http://api.badgods.com/sanctum/csrf-cookie').then(response => {
       console.log('csrf-cookie', response);
    });

    const signIn = useSignIn()

    const handleForm = (values: LoginForm) => {
        axios.post('/api/login', values)
            .then((res)=>{
                if(res.status === 200){
                    if(signIn({
                        auth: {
                            token: res.data.token,
                            type: 'Bearer'
                        },
                        refresh: res.data.refreshToken,
                        userState: res.data.authUserState
                    })){ // Only if you are using refreshToken feature
                        console.log(res.data)
                    }else {
                        console.log(res.status)
                    }
                }
            })
    }

    return (
        <Container size="sm">
            <Title>Login</Title>
            <Box mt="3rem">
                <form onSubmit={form.onSubmit((values) => handleForm(values))}>
                    <Stack>
                        <TextInput
                            label="Username"
                            placeholder=""
                            radius="xl"
                            withAsterisk
                            key={form.key('username')}
                            {...form.getInputProps('username')}
                        />
                        <TextInput
                            label="Password"
                            placeholder=""
                            radius="xl"
                            withAsterisk
                            key={form.key('password')}
                            {...form.getInputProps('password')}
                        />
                        <Group justify="flex-start" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </Stack>
                </form>
            </Box>
        </Container>
    );
}
