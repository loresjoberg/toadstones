import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';
import { Anchor, Box, Container, Flex } from '@mantine/core';

export default function AuthenticatedLayout({ children }: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    return (
        <Box mih={'100vh'} bg="grey">
            <Box bg="white" style={{ borderBottom: '1px solid #555555' }}>
                <Container>
                    <Flex mih="5rem" align="center" justify="space-between" direction="row" bg="white">
                        <Box mt="0.25rem" pb="0.75rem" pt="0.5rem">
                            <Anchor component={Link} href="/admin/dashboard">
                                Dashboard
                            </Anchor>
                        </Box>

                        <Box pl="1rem" pr="1rem">
                            <Box fz="1rem" fw="normal" c="#888">
                                {user.name}
                            </Box>
                            <Box fz="0.875rem" fw="normal" c="#555">
                                {user.email}
                            </Box>
                        </Box>

                        <Box mt="0.75rem" ml="0.25rem" mr="0.25rem">
                            <Anchor component={Link} href={route('profile.edit')}>
                                Profile
                            </Anchor>
                        </Box>
                        <Box mt="0.75rem" ml="0.25rem" mr="0.25rem">
                            <Anchor component={Link}
                                    method="post"
                                    href={route('logout')}>
                                Log Out
                            </Anchor>
                        </Box>

                    </Flex>
                </Container>
            </Box>
            <Container pt="2rem" pb="20rem" bg="white">{children}</Container>
        </Box>
    );
}
