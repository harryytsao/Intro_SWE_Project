"use client";

import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validations/user';
import * as z from "zod";
import { Button } from '../ui/button';
import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        name: string,
    };
    btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }:
    Props) => {
    const router = useRouter();
    const pathName = usePathname();
    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            name: user?.name || '',
            username: user?.username || '',
        }
    })

    const onSubmit = async (values: z.infer<typeof UserValidation>) => {
        await updateUser({
            userId: user.id,
            username: values.username,
            name: values.name,
            path: pathName,
        });
        if (pathName === '/profile/edit') {
            router.back();
        } else {
            router.push('/home');
        }
    }


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-start gap-10"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full gap-3">
                            <FormLabel className="text-[#e5e5e7]" style={{ fontWeight: 'bold' }}>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    className="account-for  m_input no-focus"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full gap-3">
                            <FormLabel className="text-[#e5e5e7]" style={{ fontWeight: 'bold' }}>
                                Username
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    className="account-form_input no-focus"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}

export default AccountProfile;
