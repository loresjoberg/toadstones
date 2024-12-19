import React from "react";
import {SocialLinks} from "@/components/Links/SocialLinks/SocialLinks";
import {Box, Container, Group, Stack} from "@mantine/core";
import {dsColors} from "@/config/dsColors";
import { SiteLink } from "@/types/toadstones";

interface PageFooterProps {
    socialLinks: SiteLink[]
}

export function PageFooter({socialLinks}: PageFooterProps) {
    return <Box bg={dsColors.deepPurple} pt="2rem" pb="2rem">
        <Container size="1120px">
            <Group justify="space-between" align="top">
                <Stack c={dsColors.lightPurple}>Copyright &copy; 2024 Lore Sjöberg</Stack>
                <SocialLinks socialLinks={socialLinks}/>
            </Group>
        </Container>
    </Box>;
}
