import { Box, Flex, Image, Icon, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import styles from './home.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import docker from '../../assets/tools/tool-docker.png';
import git from '../../assets/tools/tool-git.png';
import bash from '../../assets/tools/tool-bash.png';
import { IoIosArrowForward } from 'react-icons/io';

const Home = () => {

    return (
        <>
            <Header/>
            <Flex className={styles.homeBody}>
                <Text className={styles.slogan}>
                    Forgot a command? Just search for the data!
                </Text>

                {/* Transformar em um componente separado */}
                
                
                <InputGroup className={styles.searchBar}>
                    <InputLeftElement>
                        <Icon as={IoIosArrowForward} boxSize={7} color="#2e2e2e"/>
                    </InputLeftElement>
                    <Input 
                        placeholder='git clone' 
                        borderRadius={50}
                    />
                </InputGroup>

                <Box>
                    <Text className={styles.toolsText}>
                        Tools Supported:
                    </Text>
                    <Flex className={styles.toolsWrapper}>
                        <Image className={styles.toolIcon} src={docker}/>
                        <Image className={styles.toolIcon} src={git}/>
                        <Image className={styles.toolIcon} src={bash}/>
                    </Flex>
                </Box>
            </Flex>
            <Footer/>
        </>
    )
}

export default Home;