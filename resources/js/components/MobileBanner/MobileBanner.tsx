import { config } from '@/config/config';
import { Link } from '@inertiajs/react';
import { Anchor, Burger, Flex, Image, Menu, TextInput } from '@mantine/core';
import classes from './MobileBanner.module.css';
import { useDisclosure } from '@mantine/hooks';
import { NavBarLink } from '@/components/Link/NavLink/NavBarLink';
import { SiteLink } from '@/types/toadstones';
import { SearchForm } from '@/components/SearchForm/SearchForm';
import { FaSearch } from 'react-icons/fa';

interface MobileBannerProps {
    navLinks: SiteLink[];
}

export const MobileBanner = ({ navLinks }: MobileBannerProps) => {
    const [opened, { toggle }] = useDisclosure();

    return (<Flex justify="space-between" align="center">
        <Anchor component={Link} href="/">
            <Image
                mah="80px"
                className={classes.logo}
                src={config.logoUrl}
                alt={config.siteName}
            />
        </Anchor>
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Burger lineSize={2} opened={opened} onClick={toggle} aria-label="Toggle navigation" />
            </Menu.Target>
            <Menu.Dropdown>
                {navLinks.map((link) => (
                    <Menu.Item key={link.href}>
                        <Anchor component={Link} href={link.href} c="secondary.9">
                            {link.text}
                        </Anchor>
                    </Menu.Item>
                ))}
                <Menu.Item key={'search'} leftSection={<FaSearch />} rightSection={<TextInput/>}/>
            </Menu.Dropdown>
        </Menu>
    </Flex>);
};
