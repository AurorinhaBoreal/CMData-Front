import avatarD from '../../assets/dark-avatar.png'
import changeD from '../../assets/dark-switchTheme.png'
import interD from '../../assets/dark-switchLanguage.png'
import { useCallback, useEffect, useState } from 'react'
import { Image } from '@chakra-ui/react'
import styles from './icon.module.css'

interface IconInfo {
    type: string
}
const Icon = ({type}: IconInfo) => {
    const [source, setSource] = useState<string | undefined>()

    const selectIconImage = useCallback(() => {
        switch (type) {
            case 'avatar':
                setSource(avatarD)
                break;
            case 'changeTheme':
                setSource(changeD)
                break;
            case 'inter':
                setSource(interD)
                break;
        }
    }, [type])

    useEffect(() => {
        selectIconImage()
    }, [selectIconImage]);

    return(
        <Image src={source} className={styles.headerIcon}/>
    )
}

export default Icon;