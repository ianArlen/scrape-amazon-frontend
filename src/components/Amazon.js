import React from 'react'
import Navbar from "./Navbar" 
import { Typography } from "@material-ui/core"
import style from './ActionServices.module.css'
import axios from "axios";
import { Style } from '@material-ui/icons';

const ActionItem = ({
    image, 
    altImage, 
    text1,
    text2,
    text3,
    text4
  }) => {
    return (
      <div className={style.ActionItemContainer}>
        <div className={style.foto} >
            <img width={"100%"} src={image} alt={altImage} />
        </div>
            <Typography style={{color: "#fff"}}>Nombre: {text1}</Typography>
            <Typography style={{color: "#fff"}}> {text2}</Typography>
            <Typography style={{color: "#fff"}}>Total: {text3}</Typography>
            <Typography style={{color: "#fff"}}>Valor: {text4}</Typography>
      </div>
    )
}
const Amazon = () => {
    const [categories, setCategories] = React.useState([]);
    
    const getCategories = () => {
        axios
        .get("http://localhost:3001/amazon", {
        })
        .then((response) => {
            setCategories(response.data);

        })
        .catch((err) => {
            console.log(err);
        });
    };
    React.useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
        <Navbar />
        <br/>
        <br/>
        <br/>
        
            <div className="categories">
                {categories.map((category) => (
                <div className="category">
                    <Typography style={{color: "#fff"}} variant="h4" align={'center'}>
                        {category.category}
                    </Typography>
                    <br/>
                    <div className={style.ActionServicesContainer} >
                    <div className={style.ItemContainer}>
                        <ActionItem 
                            image={category.products[0].coverImage}
                            altImage="Ian"
                            text1={category.products[0].name}
                            text2={category.products[0].author}
                            text3={category.products[0].rating.total}
                            ext4={category.products[0].rating.value}
                    />
                    </div>
                    <div className={style.ItemContainer}>
                        <ActionItem 
                            image={category.products[1].coverImage}
                            altImage="Ian"
                            text1={category.products[1].name}
                            text2={category.products[1].author}
                            text3={category.products[1].rating.total}
                            text4={category.products[1].rating.value}
                        />
                    </div>
                    <div className={style.ItemContainer}>
                        <ActionItem 
                            image={category.products[2].coverImage}
                            altImage="Ian"
                            text1={category.products[2].name}
                            text2={category.products[2].author}
                            text3={category.products[2].rating.total}
                            text4={category.products[2].rating.value}
                        />
                    </div>
                </div>
            </div> 
            ))}
            </div>

 
    </div>    
    )
}

export default Amazon
