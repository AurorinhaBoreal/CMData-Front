import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './login.module.css'
import { Box, Button, Flex, FormControl, Input, Textarea, Text, Image } from '@chakra-ui/react'
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'

const Login = () => {
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    // Quando ocorrer uma mudança no input, ele executa a função
    // Parâmetro event passa o evento de mudança do input
    const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
        // O event.targe recebe o componente que a mudança ocorreu
        const input = event.target as HTMLInputElement;
        // Caso o input tenha um arquivo, ele irá coloca-lo em uma váriavel
        const file = input.files ? input.files[0] : null;
        if (file) {
            // Função assincrona que permite ler o conteúdo de arquivos
            const reader = new FileReader();
        
            // Quando o FileReader realizar a leitura
            // Vai passar o progresso da mesma como parâmetro
            reader.onload = function(e: ProgressEvent<FileReader>) {
                // Verifica se recebu corretamente o FileReader e o componente imagePreview
                if (e.target?.result) {
                    // Pega o atributo src do componente
                    // E o define como o resultado da leitura do FileReader
                    setImgSrc(e.target.result as string);
                }
            }

            // Caso o FileReader não tenha começado a leitura (que é o estado inicial)
            // Ele vai iniciar e posteriormente entrar na função
            reader.readAsDataURL(file);
        };
    }

    return(
        <>
            <Header/>
            <Box className={styles.suggestToolBody}>
                <Flex className={styles.titleContainer}>
                    <IoIosArrowForward/>
                    {/* <Image src={arrowTitle}/> */}
                    <Text className={styles.pageTitle}>
                        Login
                    </Text>
                </Flex>
                <FormControl className={styles.toolForm}>
                    <Flex className={styles.topRow}>
                        <Box display="flex" flexDirection="column">
                            <label>
                                Avatar
                            </label>
                            <Input w="15vw" placeholder="Arduino CLI" textAlign="center"/>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <label>
                                Platforms
                            </label>
                            <Textarea className={styles.textAreaPlat} placeholder="Windows, Linux..."/>
                        </Box>
                    </Flex>
                    <Flex className={styles.bottomRow}>
                        <Box display="flex" flexDirection="column">
                            <label>
                                Logo
                            </label>
                            <Input onChange={handleImagePreview} className={styles.inputLogo} type='file' placeholder="Tool's logo" border='none' id='logoInput'/>
                            {imgSrc && <Image src={imgSrc} id='imagePreview' w='10vw' margin='auto'/>}
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <label>
                                Documentation
                            </label>
                            <Textarea className={styles.textAreaDoc} placeholder="Link of the Tool Documentation..."/>
                        </Box>
                    </Flex>
                    <Button className={styles.suggestButton}>
                        Suggest
                    </Button>
                </FormControl>
            </Box>
            <Footer/>
        </>
    )
}

export default Login;