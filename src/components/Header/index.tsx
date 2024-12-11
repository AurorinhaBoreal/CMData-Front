import { Flex, Text, Image } from '@chakra-ui/react'
import logo from '../../assets/dark-logo.png'
import styles from './header.module.css'
import HeaderDivider from './HeaderDivider'
import Icon from '../Icon'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <Flex className={styles.headerContainer}>
            <Flex className={styles.mainWrapper}>
                <Link to={'/'}>
                    <Image src={logo} className={styles.headerLogo}/>
                </Link>
                <Text className={styles.headerTitle}>
                    CMData
                </Text>
            </Flex>
            <Flex className={styles.routerWrapper}>
                <Link to={'/'}>
                    <Text>
                        New Additions
                    </Text>
                </Link>
                <HeaderDivider/>
                <Link to={'/'}>
                    <Text>
                        Commands
                    </Text>
                </Link>
                <HeaderDivider/>
                {/* IMPROVISED LINK!! CHANGE LATER! */}
                <Link to={'/suggest-tool'}>
                    <Text>
                        Suggestion Form
                    </Text>
                </Link>
            </Flex>
            <Flex className={styles.iconsWrapper}>
                <Icon type='avatar'/>
                <Icon type='changeTheme'/>
                <Icon type='inter'/>
            </Flex>

        </Flex>
    )
}

export default Header;