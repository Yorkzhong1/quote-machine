//remark:
// 第一，需要做一个hook，设定当时的quote内容，以备后续 tweet，
// 第二，另一个hook，启动时就执行，选择random quote
// 第三，把quote放到服务器里，用api方式取出来


'use client'

import Link from 'next/link';
// import styles from './globals.css'
import Head from 'next/head'
import React, { useState,useEffect } from 'react';
import axios from 'axios'
// import quotes from './quotes'

import Script from 'next/script'

export default function Home() {
    const [quote,setQuote]=useState('')



    async function getQuote2(){
        const quote = await axios.get('/api/quote')
        console.log(quote.data)
        document.getElementById("text").innerText=quote.data
        setQuote(quote.data)
    }
    
    useEffect(()=>{
        getQuote2()
    },[]

    )

    return <div>

        <Head>
          <title>Quote Machine</title>
          <link rel="icon" href="/favicon.ico" />
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
        </Head>
            <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
            

            <div className="container text-center" >
                <div className="row justify-content-md-center">
                    
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Confuzi quotes
                            </div>
                            <div className="card-body" id="quote-box">
                                    <h6 className="card-subtitle mb-2 text-body-secondary" id="text">quotes</h6>
                                    <p id="author"> Confuzi</p>
                                    <button type="button btn-block" className="btn btn-info" id='new-quote' onClick={()=>{
                                        getQuote2()
                                        console.log(quote)
                                    }}>new-quote</button>
                                    <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" className="btn btn-primary" tabindex="-1" role="button" aria-disabled="true">Tweet quote</a>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

       
        


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

    </div>
  }

  