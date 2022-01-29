import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import Wrapper from '../../../../components/Wrapper'

function ServiceGroupsIndex(){

    const router = useRouter()
    const {service_group_id} = router.query
    useEffect(() => {
        if(router.isReady){
            window.location.href = `${service_group_id}/services`
        }
    }, [router.query])
    return (
        <Wrapper></Wrapper>
    )
}

export default ServiceGroupsIndex