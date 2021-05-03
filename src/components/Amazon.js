import React from 'react'
import Navbar from "./Navbar" 
import { Typography } from "@material-ui/core"
import style from './ActionServices.module.css'
import axios from "axios";


const ActionItem = ({
    text1,
    text2,
    text3
  }) => {
    return (
      <div className={style.ActionItemContainer}>
        <Typography style={{color: "#fff"}}>Source_id: {text1}</Typography>
        <Typography style={{color: "#fff"}}>Name: {text2}</Typography>
        <Typography style={{color: "#fff"}}>Id: {text3}</Typography>
      </div>
    )
}
const Amazon = () => {
    const [categories, setCategories] = React.useState([]);
    
    const getCategories = () => {
        axios
        .get("https://api.datos.gob.mx/v1/calidadAire", {
        })
        .then((response) => {
            setCategories(response.data.results);

        })
        .catch((err) => {
            console.log(err);
        });
    };
    React.useEffect(() => {
        getCategories();
    }, []);

    let listCategories = categories.map((category) => {
        let count = 0   
        const aux = (
            <div className="category">
            <br/>
            <div className={style.ActionServicesContainer} >
            <div className={style.ItemContainer}>
                <ActionItem 
                    text1={category.stations[count].source_id}
                    text2={category.stations[count].name}
                    text3={category.stations[count].id}
            />
            </div>
            <div className={style.ItemContainer}>
                <ActionItem 
                    text1={category.stations[count].source_id}
                    text2={category.stations[count].name}
                    text3={category.stations[count].id}
                />
            </div>
            <div className={style.ItemContainer}>
                <ActionItem 
                    text1={category.stations[count].source_id}
                    text2={category.stations[count].name}
                    text3={category.stations[count].id}
                />
            </div>
            </div>   
        </div>
        )
        count++
        return aux
    })
    return (
        <div>
        <Navbar />
        <br/>
        <br/>
        <br/>
        <Typography style={{color: "#fff"}}>Consumo de la api: https://api.datos.gob.mx/v1/calidadAire</Typography>
            <div className="categories">
            {listCategories}
            </div>
        
        </div>
    )
}

export default Amazon
