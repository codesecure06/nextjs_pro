import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import Wrapper from '../../../components/Wrapper'

function ProductGroupsIndex(){

    const router = useRouter()
    const {product_group_id} = router.query
    useEffect(() => {
        if(router.isReady){
            window.location.href = `${product_group_id}/products`
        }
    }, [router.query])
    return (
        <Wrapper></Wrapper>
    )
}

export default ProductGroupsIndex