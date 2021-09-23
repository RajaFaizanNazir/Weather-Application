import {Box, Container, makeStyles, TextField } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
import './Header.css'
import Button from "@material-ui/core/Button"
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import lottie from 'lottie-web'
import { border, borderRadius, width } from '@mui/system';
import { classicNameResolver } from 'typescript';


function Header(props:any) {
    
    const head = useRef(document.createElement("span"))
    useEffect(() => {
        lottie.loadAnimation({
            container: head.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../WelcomeWeather-icon.json'),
            
            
        })
    }, [])
    const useStyles = makeStyles({
        root: {
        background: 'linear-gradient(#8c7ae6, #0097e6, #00a8ff)',
        border: 0,
        borderRadius: 15,
        color: 'White',
        width: "200px",
        height: "40px",
        marginTop: "10px",
        marginLeft: "68px",
        position: "absolute"
        
    }
    },
    
    )
    const classes = useStyles();
    
    return (
        <div className="header">
           
            <h2 className="welcome-heading">
            Weather Application</h2>        
            <span className="head" ref={head}>
            </span>
                   
            <h1 className="mainTemperature">{(parseFloat(props.temp)-273.15).toFixed(1)}&deg;C</h1>   
            <br/>
            <h2 className="atmosphere">{props.main}</h2>
            <div className="inputs">
            <Box
                sx={{
                     
                     width: 350,
                     maxWidth: '100%',
                 }}>
            <TextField 
             variant= "standard"
             fullWidth
             color= "primary"
             helperText="Enter your city here..."
              id="TextFiled-input" 
              onChange={(e)=>props.setcity(e.target.value)}
              />
            
             </Box>
             </div> 
             
             
             <Button 
              className={classes.root}
              variant="contained"
              startIcon = {<LocationOnTwoToneIcon/>}
              onClick={()=>{props.fetchLiveWeather()}}>
                Live Location
            </Button>
            
            <h1 className="cityName">{props.name}</h1>
            <h3 className="stateName">{props.State}</h3>
            <h3 className="otherTemp">Min: {(parseFloat(props.min_temp)-273.15).toFixed(1)} &deg;C 
              || Max: {(parseFloat(props.max_temp)-273.15).toFixed(1)}&deg;C 
              || Humidity: {props.humidity}%</h3>
            </div>
            


            
        
    )
}

export default Header
