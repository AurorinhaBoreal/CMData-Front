import { Flex, Text } from '@chakra-ui/react'
import styles from './footer.module.css'

const Footer = () => {
    return(
        <Flex className={styles.footerContainer}>
            <Text className={styles.textFooter}>
                2024 Made by Aurora Kruschewsky
            </Text>
        </Flex>
    )
}

export default Footer;