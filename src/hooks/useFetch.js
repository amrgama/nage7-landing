"use client"
import React, { useState } from 'react'
import { errorNotify } from '../utils/notifies';
import { useTranslation } from 'react-i18next';

function initOptions (method, lang, ...options){
    console.log("options", options)
    return {
        ...options,
        method,
        headers: {
            ...((!!options?.legnth)? options[0]?.headers : {}),
            "Accept-Language": lang,
            'Content-Type': 'application/json'
        }
    }
}
export const useFetch = () => {
 const [status, setStatus] = useState("idle");
 const [errMsg, setErrMsg] = useState("");
 const [data, setData] = useState(null);
 const {i18n: {language}} = useTranslation();
    console.log("language", language);
 return {
    status,
    errMsg,
    data,
    get: async (url, config, navigate)=>{
        try{
            setStatus("pending")
            
            const response = await fetch(url, {
                ...initOptions("GET", language, config )
            });
            if(!response.ok){
                console.log("error with response", response, "errorMsg", response?.data?.errors, response?.errors)
                const status = response.status;
                const data = await response.json();
                const error = {
                    status,
                    message: (Array.isArray(data?.errors))? data?.errors[0]?.msg: data.errors
                }
                throw error;
             }
             const resData = await response.json();
             console.log("getResponse", resData)
             setData(resData);
             setStatus("success");
        }
        catch (error) {
            console.log("error", error)
            
            setErrMsg(error.message)
            setStatus("error")
            errorNotify(error.message);
            if(error.status === 401 && !!navigate){
                navigate("/auth/signin")
            }
        }
    },
    post: async (url, data, config, navigate)=>{
        console.log("post data", data);
        try{
            setStatus("pending")
            const response = await fetch(url, {
                body: JSON.stringify(data),
                ...initOptions("POST", language, config )
            });
            if(!response.ok){
                console.log("error with response", response, "errorMsg", response?.data?.errors, response?.errors)
                const status = response.status;
                const data = await response.json();
                const error = {
                    status,
                    message: (Array.isArray(data?.errors))? data?.errors[0]?.msg: data.errors
                }
                throw error;
             }
             const resData = await response.json();
             console.log("getResponse", resData)
             setData(resData);
             setStatus("success");
        }
        catch (error) {
            console.log("error", error)
            
            setErrMsg(error.message)
            setStatus("error")
            errorNotify(error.message);
            if(error.status === 401 && !!navigate){
                navigate("/auth/signin")
            }
        }
    },
    put: async (url, data, config, navigate)=>{
        try{
            setStatus("pending")
            const response = await fetch(url, {
                body: JSON.stringify(data),
                ...initOptions("PUT", language, config )
            });
            if(!response.ok){
                console.log("error with response", response, "errorMsg", response?.data?.errors, response?.errors)
                const status = response.status;
                const data = await response.json();
                const error = {
                    status,
                    message: (Array.isArray(data?.errors))? data?.errors[0]?.msg: data.errors
                }
                throw error;
             }
             const resData = await response.json();
             console.log("getResponse", resData)
             setData(resData);
             setStatus("success");
        }
        catch (error) {
            console.log("error", error)
            
            setErrMsg(error.message)
            setStatus("error")
            errorNotify(error.message);
            if(error.status === 401 && !!navigate){
                navigate("/auth/signin")
            }
        }
    },
    delete: async (url, data, config, navigate)=>{
        console.log("data in delete", data)
        try{
            setStatus("pending")
            const response = await fetch(url, {
                body: JSON.stringify(data),
                ...initOptions("DELETE", language, config ),
            });
            if(!response.ok){
                console.log("error with response", response, "errorMsg", response?.data?.errors, response?.errors)
                const status = response.status;
                const data = await response.json();
                const error = {
                    status,
                    message: (Array.isArray(data?.errors))? data?.errors[0]?.msg: data.errors
                }
                throw error;
             }
             const resData = await response.json();
             console.log("getResponse", resData)
             setData(resData);
             setStatus("success");
        }
        catch (error) {
            console.log("error", error)
            
            setErrMsg(error.message)
            setStatus("error")
            errorNotify(error.message);
            if(error.status === 401 && !!navigate){
                navigate("/auth/signin")
            }
        }
    },
 }
}
