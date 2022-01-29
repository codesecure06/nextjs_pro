import BottomNavigation from "../../components/BottomNavigation";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import SearchBar from "../../components/SearchBar";
import Select from "../../components/Select";
import Toggle from "../../components/Toggle";
import Wrapper from "../../components/Wrapper";
import styles from './index.module.scss'


function Dashboard(){
    let dashboardIndex = 1
    let dashboardCard = [
        {
            id: dashboardIndex++,
            name: 'Enquiries',
            number: 621,
            percentage: 28.23,
            status: 'increased',
            image: 'enquiries.png'
        },
        {
            id: dashboardIndex++,
            name: 'Follow up',
            number: 127,
            percentage: 18.23,
            status: 'decreased',
            image: 'follow-up.png'
        },
        {
            id: dashboardIndex++,
            name: 'Deals closed',
            number: 521,
            percentage: 28.54,
            status: 'increased',
            image: 'deals-closed.png'
        }
    ]
    let productPerformanceIndex = 1
    let product_performance = [
        {
            id: productPerformanceIndex++,
            product: 'Metal & Alloys',
            number: 230,
            status: 'increased',
            percentage: 28
        },
        {
            id: productPerformanceIndex++,
            product: 'Building & Construction',
            number: 230,
            status: 'increased',
            percentage: 28
        },
        {
            id: productPerformanceIndex++,
            product: 'Industrial Plants & Machinery',
            number: 230,
            status: 'increased',
            percentage: 28
        }
    ]
    return (
        <Wrapper active="Dashboard">
            <div className={[styles.DashboardContainer].join(" ")}>
                <div className={[styles.DashboardHeader, "flex"].join(" ")}>
                    <div className="flex-grow flex">
                        <div className={[styles.HeadingDiv, "flex-grow"].join(" ")}>
                            <Heading heading="Dashboard"/>
                        </div>
                        <div className="flex items-center">
                            <Toggle leftText="Current month" rightText="Previous month"/>
                        </div>
                    </div>
                    <div className={[styles.SelectDivs, "flex"].join(" ")}>
                        <div className={[styles.SelectDiv].join(" ")}>
                            <Select label="Monthly"/>
                        </div>
                        <div className={[styles.SelectDiv].join(" ")}>
                            <Select label="All Products"/>
                        </div>
                    </div>
                </div>
                <div className={[styles.DashboardCards, "flex"].join(" ")}>
                    {
                        dashboardCard.map((item) => {
                            return (
                                <div key={item.id} className={styles.DashboardCardDiv}>
                                    <div className={[styles.DashboardCardContainer, "relative w-full"].join(" ")}>
                                        <div className={styles.ScoreDiv}>
                                            {item.number}
                                        </div>
                                        <div className={[styles.StatusDiv, "flex items-center"].join(" ")}>
                                            <p>{item.percentage}%</p>
                                            <img src={`/dashboard/images/icons/dashboard/${item.status}-icon.svg`}/>
                                        </div>
                                        <div className={styles.TitleDiv}>{item.name}</div>
                                        <div className={[styles.ImageDiv, "absolute flex items-center justify-end"].join(" ")}>
                                            <img src={`/dashboard/images/icons/dashboard/${item.image}`}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={[styles.DashboardDetailsDiv, "flex"].join(" ")}>
                    <div className={styles.ProductPerformanceDiv}>
                        <div className={styles.DashboardHeading}>Product Performance</div>
                        <div className={[styles.DateDiv, "flex items-center"].join(" ")}>
                            <p>01 July 2021-31 July 2021</p>
                            <img src="/dashboard/images/icons/dashboard/chevron-down-grey.svg"/>
                        </div>
                        <div className={styles.ListDiv}>
                            {
                                product_performance.map((item) => {
                                    return (
                                        <div key={item.id} className={[styles.ListItem, "flex items-center"].join(" ")}>
                                            <img className={[styles.BulletImage, "flex-shrink-0"].join(" ")} src="/dashboard/images/icons/dashboard/bullet-point-orange.svg"/>
                                            <p className={styles.ProductName}>{item.product}-</p>
                                            <p className={styles.NumberDiv}>{item.number}</p>
                                            <p className={[styles.PercentageDiv, "flex items-center"].join(" ")}><p>({item.percentage}%</p><img src={`/dashboard/images/icons/dashboard/${item.status}-icon.svg`}/><p>)</p></p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={[styles.ProductDetailsCardDiv, "flex"].join(" ")}>
                            <div className={styles.ProductDetailsCard}>
                                <p>720</p>
                                <div>Direct Enquiry</div>
                            </div>
                            <div className={styles.ProductDetailsCard}>
                                <p>421</p>
                                <div>Online Enquiry</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Dashboard