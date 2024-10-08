import React from 'react'
import BankCard from './BankCard'
import Link from 'next/link'
import Image from 'next/image'
import { countTransactionCategories } from '@/lib/utils';
import Category from './Category';

export default function RightSidebar({ user, transactions, banks }: RightSidebarProps) {
    console.log(user)
    const categories: CategoryCount[] = countTransactionCategories(transactions);
    return (
        <aside className='right-sidebar'>
            <section className="flex flex-col pb-8">
                <div className="profile-banner" />
                <div className="profile">
                    <div className="profile-img">
                        <span className="text-5xl font-bold text-blue-500">{user.lastName}</span>
                    </div>

                    <div className="profile-details">
                        <h1 className='profile-name'>
                            {`${user.lastName}${user.firstName}`}
                        </h1>
                        <p className="profile-email">
                            {user?.email}
                        </p>
                    </div>
                </div>
            </section>
            <section className="banks">
                <div className="flex w-full justify-between">
                    <h2 className="header-2">我的银行</h2>
                    <Link href="/" className="flex gap-2">
                        <Image
                            src="/icons/plus.svg"
                            width={20}
                            height={20}
                            alt="plus"
                        />
                        <h2 className="text-14 font-semibold text-gray-600">
                            添加银行
                        </h2>
                    </Link>
                </div>

                {banks?.length > 0 && (
                    <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
                        <div className='relative z-10'>
                            <BankCard
                                key={banks[0].$id}
                                account={banks[0]}
                                userName={`${user.name}`}
                                showBalance={false}
                            />
                        </div>
                        {banks[1] && (
                            <div className="absolute right-0 top-8 z-0 w-[90%]">
                                <BankCard
                                    key={banks[1].$id}
                                    account={banks[1]}
                                    userName={`${user.name}`}
                                    showBalance={false}
                                />
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-10 flex flex-1 flex-col gap-6">
                    <h2 className="header-2">热门类别</h2>

                    <div className='space-y-5'>
                        {categories.map((category, index) => (
                            <Category key={category.name} category={category} />
                        ))}
                    </div>
                </div>
            </section>
        </aside>
    )
}
