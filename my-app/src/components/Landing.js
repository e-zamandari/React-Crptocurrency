import React , {useEffect , useState} from 'react';
//styles
import styles from "./Landing.module.css";
//componets
import Loading from './Loading';
import Coin from './Coin';
//api
import { getCoin } from '../services/api';
const Landing = () => {
    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");
    useEffect(()=>{
        const fetchApi = async ()=>{
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }
        fetchApi()
    } , [])
    const changeHandler = (event)=>{
        setSearch(event.target.value)
    }
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <input className={styles.input} type="text"  placeholder='Search ...' value={search} onChange={changeHandler}/>
            <div className={styles.coinContainer}>
                {
                    coins.length ?
                    searchCoins.map((coin)=><Coin 
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    marketCap={coin.market_cap}
                    priceChange={coin.price_change_percentage_24h}
                    />) :
                    <Loading />
                }
            </div>
        </>
    );
};

export default Landing;