import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
// import { useTranslation } from 'next-i18next'

export default function Home() {
    const loggedIn = { firstName: "Admin", lastName: 'JSM',email:'admin@jsm.com' }
    // const { t } = useTranslation()
    return (
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox type="greeting" title="欢迎你，" user={loggedIn.firstName || 'Guest'} subtext="
有效地访问和管理您的帐户和交易。" />
                    <TotalBalanceBox
                        accounts={[]} totalBanks={1} totalCurrentBalance={1250.13}></TotalBalanceBox>
                </header>
                RENCENT CONTENT
            </div>
            <RightSidebar user={loggedIn} transactions={[]} banks={[]}></RightSidebar>
        </section>
    )
}
