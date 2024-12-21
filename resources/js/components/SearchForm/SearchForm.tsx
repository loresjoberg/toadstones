import { router } from '@inertiajs/react';
import { FocusTrap, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchForm = () => {
    // const navigate = useNavigate()
    const [view, setView] = useState(false);
    const onClick = () => {
        setView(true);
        toggle();
    };

    const [active, { toggle }] = useDisclosure(false);

    const handleSubmit = (values) => {
        console.log('in handleSubmit', values);
        setView(false);
        router.get(`/s/${values.query}`);
    };

    const form = useForm({
        mode: 'uncontrolled',
    });

    return (
        <>
            {view || <FaSearch onClick={onClick} />}
            {view && (
                <FocusTrap active={active}>
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <TextInput
                            placeholder="Search"
                            rightSection={<FaSearch />}
                            {...form.getInputProps('query')}
                        />
                    </form>
                </FocusTrap>
            )}
        </>
    );
};
