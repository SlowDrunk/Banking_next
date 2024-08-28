'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { authFormSchema } from '@/lib/utils';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import CustomInput from './CustomInput'
import { Loader2 } from 'lucide-react'
import { signIn, signUp } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'

export default function AuthForm({ type }: { type: string }) {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ''
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            // Sign up with Appwrite & create plaid token

            if (type === 'sign-up') {
                const userData = {
                    firstName: data.firstName!,
                    lastName: data.lastName!,
                    address1: data.address1!,
                    city: data.city!,
                    state: data.state!,
                    postalCode: data.postalCode!,
                    dateOfBirth: data.dateOfBirth!,
                    ssn: data.ssn!,
                    email: data.email,
                    password: data.password
                }

                const newUser = await signUp(userData);

                setUser(newUser);
            }

            if (type === 'sign-in') {
                const response = await signIn({
                    email: data.email,
                    password: data.password,
                })

                if (response) router.push('/')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href="/" className='flex items-center gap-1 '>
                    <Image src={'/icons/logo.svg'} width={34} height={34} alt='Horizon logo' className='text-26 font-ibm-plex-serif font-bold text-black-1' />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3" >
                    <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>{user ? '关联账户' : type === 'sign-in' ? '登录' : '注册'}</h1>
                    <p className='text-16 font-normal text-gray-600'>{user ? '关联您的账户并登录' : '请输入您的详细信息'}</p>
                </div>
            </header>
            {
                user ? (
                    <div className='flex flex-col gap-4'>

                    </div>
                ) : (
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                {type === 'sign-up' && (
                                    <>
                                        <div className="flex gap-4">
                                            <CustomInput control={form.control} name='firstName' label="名字" placeholder='请输入您的名字' />
                                            <CustomInput control={form.control} name='lastName' label="姓氏" placeholder='请输入您的姓氏' />
                                        </div>
                                        <CustomInput control={form.control} name='address1' label="地址" placeholder='请输入您的具体地址' />
                                        <CustomInput control={form.control} name='city' label="城市" placeholder='请输入您的城市' />
                                        <div className="flex gap-4">
                                            <CustomInput control={form.control} name='state' label="省份" placeholder='例如: 北京' />
                                            <CustomInput control={form.control} name='postalCode' label="邮政编码" placeholder='例如: 11101' />
                                        </div>
                                        <div className="flex gap-4">
                                            <CustomInput control={form.control} name='dateOfBirth' label="出生日期" placeholder='YYYY-MM-DD' />
                                            <CustomInput control={form.control} name='ssn' label="SSN" placeholder='例如: 1234' />
                                        </div>
                                    </>
                                )}

                                <CustomInput control={form.control} name='email' label="邮箱" placeholder='请输入您的邮箱地址' />

                                <CustomInput control={form.control} name='password' label="密码" placeholder='请输入您的密码' />

                                <div className="flex flex-col gap-4">
                                    <Button type="submit" disabled={isLoading} className="form-btn">
                                        {isLoading ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" /> &nbsp;
                                                加载中...
                                            </>
                                        ) : type === 'sign-in'
                                            ? '登录' : '注册'}
                                    </Button>
                                </div>
                            </form>
                        </Form>

                        <footer className="flex justify-center gap-1">
                            <p className="text-14 font-normal text-gray-600">
                                {type === 'sign-in'
                                    ? "还没有账号?"
                                    : "已经拥有一个账号?"}
                            </p>
                            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
                                {type === 'sign-in' ? '注册' : '登录'}
                            </Link>
                        </footer>
                    </>
                )
            }
        </section>
    )
}
