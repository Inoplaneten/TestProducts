import React from 'react';
import { connect } from 'react-redux';
import { Preloader } from './Preloader';

const PreloaderContainer = ({cardsProducts, formOrderProduct}) => {
    return (
        <Preloader isLoading={
            (cardsProducts.isLoading) || 
            (cardsProducts.isError) || 
            (formOrderProduct.isLoading)
        }>
            <div>
                {
                    cardsProducts.isLoading ? 'Loading in progress': 
                    cardsProducts.isError ? 'Server error': 
                    formOrderProduct.isLoading ? 'Sending data': null
                }
            </div>
        </Preloader>    
    )
}

const mapStateToProps = state => ({
    cardsProducts: {
        isLoading: state.cardsProducts.isLoading,
        isError: state.cardsProducts.isError
    },
    formOrderProduct: {
        isLoading: state.formOrderProduct.isLoading,
    }
})

export default connect(mapStateToProps, null)(PreloaderContainer);