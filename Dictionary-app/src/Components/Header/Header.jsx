import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import './Header.css'
import categories from '../../Data/Category'

export default function Header({category,setCategory,word,setWord}) {

  // const darkTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#fff"
  //     },
  //     type: 'dark',
  //   },
  // });

  const handleChange = (Language) =>{
    setCategory(Language)
    setWord("")
  }

  return (
    <div className='header'>
      <span className='title'>{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        {/* <ThemeProvider theme={darkTheme}> */}
          <TextField className='feildcolor search' label="search a word" id="standard-basic" 
          value={word}
          onChange={(e)=>setWord(e.target.value)}
          />
          <TextField
            className='feildcolor select'
            select
            label="Language"
            value={category}
            onChange={(e)=> handleChange(e.target.value)}
          >
            {
              categories.map((option) => (
                <MenuItem key={option.lable} value={option.lable}>{option.value}</MenuItem>
              ))
            }
          </TextField>
        {/* </ThemeProvider> */}
      </div>
    </div>
  )
}
