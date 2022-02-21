import React from 'react'

const Coin = ({ image, name, symbol, price, volume, market, priceChange }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <div className='img-container'>
                        <img src={image} alt='crypto'
                        />
                    </div>
                    <div className='header-text'>

                        <h3>{name}</h3>
                    </div>
                    <div className='text'>
                        <p className='coin-symbol'>{symbol}</p>
                    </div>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price.toLocaleString()}</p>
                    {priceChange < 0 ? (<p className='coin-percentage-change red'>
                        {priceChange.toFixed(2)}%
                    </p>) :
                        (<p className='coin-percentage-change green'>
                            {priceChange.toFixed(2)}%
                        </p>)}
                    <p className='coin-volume'>${volume.toLocaleString()}</p>
                    <p className='coin-market'>{market.toLocaleString()}</p>

                </div>
            </div>
        </div>
    )
}

export default Coin;