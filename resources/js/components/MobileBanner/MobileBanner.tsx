import { config } from '@/config/config';
import { Link } from '@inertiajs/react';
import { Anchor, Burger, Flex, Image, Menu, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SiteLink } from '@/types/toadstones';
import { SearchForm } from '@/components/SearchForm/SearchForm';

interface MobileBannerProps {
    navLinks: SiteLink[];
}

export const MobileBanner = ({ navLinks }: MobileBannerProps) => {
    const [opened, { toggle }] = useDisclosure();

    return (<Flex justify="space-between" align="center">
        <Anchor component={Link} href="/" h="80px">
            <Image

                fit="contain"
                style={{height: "80px", width: "156px"}}
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
                <Menu.Item key={'search'}>
                    <SearchForm/>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    </Flex>);
};
