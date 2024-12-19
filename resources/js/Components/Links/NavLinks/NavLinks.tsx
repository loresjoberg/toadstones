import {Box, Container, Group} from "@mantine/core";
import {dsColors} from "@/config/dsColors";
import React from "react";
import {NavLink} from "@/components/Link/NavLink/Navlink";
import {SearchForm} from "@/components/SearchForm/SearchForm";
import { SiteLink } from "@/types/toadstones";


interface NavLinksProps {
    navLinks: SiteLink[],
    search?: boolean,
    stageWidth?: string | undefined
}

export function NavLinks({navLinks, search, stageWidth}: NavLinksProps) {


    return <Box bg={dsColors.lightBlue}>
        <Container size="100%" style={{maxWidth: stageWidth}}>
            <Group justify="space-between" gap={0} bg={dsColors.lightBlue} mt="xs" mb="md">
                {
                    navLinks.map(link => (
                        <NavLink color={dsColors.deepPurple} key={link.href} text={link.text} href={link.href}/>))
                }
                {
                    search && <SearchForm/>
                }
            </Group>
        </Container>
    </Box>
}
