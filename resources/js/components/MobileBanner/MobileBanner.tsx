import { config } from '@/config/config';
import { Link, router } from '@inertiajs/react';
import { Anchor, Burger, Flex, Image, Menu, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SiteLink } from '@/types/toadstones';
import { FaSearch } from 'react-icons/fa';
import { useForm } from '@mantine/form';

interface MobileBannerProps {
    navLinks: SiteLink[];
}





export const MobileBanner = ({ navLinks }: MobileBannerProps) => {
    const [opened, { toggle }] = useDisclosure();

    const form = useForm({
        mode: 'uncontrolled'
    });

    const handleSubmit = (values) => {
        router.get(`/s/${values.query}`);
    };

    return (<Flex justify="space-between" align="center">
        <Anchor component={Link} href="/" h="80px">
            <Image
                fit="contain"
                style={{ height: '80px', width: '156px' }}
                src={config.logoUrl}
                alt={config.siteName}
            />
        </Anchor>
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Burger lineSize={2} opened={opened} onClick={toggle} aria-label="Toggle navigation" />
            </Menu.Target>
            <Menu.Dropdown bg="primary.3" bd="0">
                {navLinks.map((link) => (
                    <Menu.Item key={link.href}>
                        <Anchor component={Link} href={link.href} fw="bold" c="secondary.9">
                            {link.text}
                        </Anchor>
                    </Menu.Item>
                ))}
                <Menu.Item key={'search'} closeMenuOnClick={false}>
                    <Flex direction="row" align="center" justify="space-between" gap="0.5rem">
                        <FaSearch style={{fontSize: "1.5rem"}}/>
                        <form onSubmit={form.onSubmit(handleSubmit)}>
                            <TextInput
                                placeholder="Search"
                                {...form.getInputProps('query')}
                            />
                        </form>
                    </Flex>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    </Flex>);
};
