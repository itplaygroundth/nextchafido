import React, { PureComponent } from 'react'
import AddProduct from '../src/components/MainProduct'
interface Props {
    
}

export default class Product extends PureComponent<Props> {
    render() {
        return (
            <div>
                <AddProduct></AddProduct>
            </div>
        )
    }
}
