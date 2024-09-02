import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

export default async function Home() {
    const loggedIn = await getLoggedInUser()
    console.log(loggedIn)
    return (
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox type="greeting" title="欢迎你，" user={loggedIn?.name || 'Guest'} subtext="
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
