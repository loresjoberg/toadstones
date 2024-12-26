import { router } from '@inertiajs/react';
import { Box, FocusTrap, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchForm = () => {
    // const navigate = useNavigate()
    const [view, setView] = useState(false);
    const onClick = () => {
        setView(!view);
        toggle();
    };

    const [active, { toggle }] = useDisclosure(false);

    const handleSubmit = (values) => {
        setView(false);
        router.get(`/s/${values.query}`);
    };

    const form = useForm({
        mode: 'uncontrolled'
    });

    return (
        <>
            <FaSearch onClick={onClick} />
            {view && (
                <Box style={{position: "absolute", right: -10}}>
                    <FocusTrap active={active}>
                        <form onSubmit={form.onSubmit(handleSubmit)}>
                            <TextInput
                                placeholder="Search"
                                rightSection={<FaSearch onClick={onClick} />}
                                {...form.getInputProps('query')}
                            />
                        </form>
                    </FocusTrap>
                </Box>
            )}
        </>
    );
};
