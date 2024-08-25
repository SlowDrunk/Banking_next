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
                    <HeaderBox type="greeting" title="欢迎你，" user={loggedIn.firstName || 'Guest'} subtext="
有效地访问和管理您的帐户和交易。" />
                    <TotalBalanceBox
                        accounts={[]} totalBanks={1} totalCurrentBalance={1250.13}></TotalBalanceBox>
                </header>
            </div>
        </section>
    )
}
