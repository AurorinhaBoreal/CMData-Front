import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './register.module.css'
import {v4 as uuidv4} from 'uuid'
import {storage} from '../../utils/useFirebase'
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";
import { Box, Button, Flex, FormControl, Input, Text, Image } from '@chakra-ui/react'
import { IoIosArrowForward } from 'react-icons/io'
import User from '../../types/User'
import { useState } from 'react'
import api from '../../utils/useApi'

const Register = () => {
    const [imgSrc, setImgSrc] = useState<Blob | undefined>(undefined);
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        nickname: "",
        avatarUrl: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUser((prevUserInfo) => ({
        ...prevUserInfo,
        [name]: value
        }));
    }

    const handleAvatarUrl = (url: string) => {
        setUser((prevUserInfo) => ({
            ...prevUserInfo,
            avatarUrl: url
            }));
    }

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

    const onSubmit = async () => {
        if (!imgSrc) {
            throw new Error("Avatar is null. It cannot be stored properly.");            
        }

        const imageRef = storageRef(storage, `avatars/${uuidv4()}`)

        uploadBytes(imageRef, imgSrc)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        handleAvatarUrl(url)
                    })
            })

        const response = await api.post('/user/register', user)

        console.log(response)
    }

    return(
        <>
            <Header/>
            <Box className={styles.suggestToolBody}>
                <Flex className={styles.titleContainer}>
                    <IoIosArrowForward/>
                    <Text className={styles.pageTitle}>
                        Register
                    </Text>
                </Flex>
                <FormControl className={styles.toolForm}>
                    <Flex className={styles.topRow}>
                        <Box display="flex" flexDirection="column" textAlign="center">
                            <label>
                                Avatar
                            </label>
                            <Input onChange={handleImagePreview} className={styles.inputLogo} type='file' placeholder="Your Avatar" border='none' id='logoInput'/>
                            {/* {imgSrc && <Image src={imgSrc as string} id='imagePreview' w='8vw' margin='auto'/>} */}
                        </Box>
                        <Box display="flex" flexDirection="column" gap="30%">
                            <Flex gap="10%">
                                <Box display="flex" flexDirection="column">
                                    <label>
                                        First Name
                                    </label>
                                    <Input name="firstName" value={user?.firstName || ""} onChange={handleChange} w="95%" placeholder="Aurora" textAlign="center"/>
                                </Box>
                                <Box display="flex" flexDirection="column">
                                    <label>
                                        Last Name
                                    </label>
                                    <Input name="lastName" value={user?.lastName || ""} onChange={handleChange} w="95%" placeholder="Rossi" textAlign="center"/>
                                </Box>
                            </Flex>
                            <Flex flexDirection="column">
                                <label>
                                    Email
                                </label>
                                <Input name="email" value={user?.email || ""} onChange={handleChange} placeholder="teste@gmail.com" textAlign="center"/>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex className={styles.bottomRow} gap="20%">
                        <Box display="flex" flexDirection="column">
                            <label>
                                Nickname
                            </label>
                            <Input name="nickname" value={user?.nickname || ""} onChange={handleChange} w="15vw" placeholder="Aurorinha" textAlign="center"/>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <label>
                                Password
                            </label>
                            <Input name="password" value={user?.password || ""} onChange={handleChange} w="15vw" placeholder="securePassword123" textAlign="center"/>
                        </Box>
                    </Flex>
                    <Button onClick={onSubmit} className={styles.suggestButton}>
                        Register
                    </Button>
                </FormControl>
            </Box>
            <Footer/>
        </>
    )
}

export default Register;
