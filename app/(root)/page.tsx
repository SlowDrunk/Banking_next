import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
// import { useTranslation } from 'next-i18next'

export default function Home() {
    const loggedIn = { firstName: "Admin" }
    // const { t } = useTranslation()
    return (
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox type="greeting" title="Welcome" user={loggedIn.firstName || 'Guest'} subtext="Access and manage your account and transactions efficiently." />
                    <TotalBalanceBox
                        accounts={[]} totalBanks={1} totalCurrentBalance={1250.13}></TotalBalanceBox>
                </header>
            </div>
        </section>
    )
}
