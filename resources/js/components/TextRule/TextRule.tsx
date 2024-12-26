import { Box, Flex, Text } from '@mantine/core';


interface TextRuleProps {
    label: string;
}

export function TextRule({ label }: TextRuleProps) {
    return <Flex direction="row" gap="0.25rem" align="center">
        <Box w="0.5rem" style={{flexGrow: 0, borderRight: "4px solid #B29BC1"}}>
            <hr style={{border: 0, height: "4px", backgroundColor: "#B29BC1"}}/>
        </Box>
        <Text fw="bold" pr="0.1rem" fz="1.375rem" c="primary.6" style={{flexGrow: 0}}>{label}</Text>
        <Box style={{flexGrow: 1, borderLeft: "4px solid #B29BC1"}}>
            <hr style={{border: 0, height: "4px", backgroundColor: "#B29BC1"}}/>
        </Box>
    </Flex>;
}
