import InputError from '@/components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Button, Container, Stack, TextInput, Title, Checkbox } from '@mantine/core';


export default function Login({
                                  status,
                                  canResetPassword
                              }: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post,  errors, reset } = useForm({
        email: '',
        password: '',
        remember: false
    });

    const submit: FormEventHandler = (e) => {
        console.log("Submitting")
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password')
        });
    };

    return (<Container size="20rem" mt="5rem">
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <Title mb="1rem" pb="0.25rem" style={{borderBottom: "1px solid black"}}>Log In</Title>
            <form onSubmit={submit}>
                <Stack>

                    <div>
                        <TextInput
                            radius="xl"
                            id="email"
                            label="Email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">

                        <TextInput
                            radius="xl"
                            label="Password"
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4 block">
                        <label className="flex items-center">
                            <Checkbox
                                label="Remember me"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                        </label>
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <Button type="submit">
                            Log in
                        </Button>
                    </div>
                </Stack>

            </form>
        </Container>
    );
}
