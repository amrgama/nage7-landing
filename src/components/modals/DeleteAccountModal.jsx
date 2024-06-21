import React, { useEffect, useMemo, useState } from 'react'
import ModalContainer from './ModalContainer';
import { successNotify } from '../../utils/notifies';
import { api } from '../../constant';
import Button from '../ui/Button';
import { useFetch } from '../../hooks/useFetch';
import { IoWarning } from "react-icons/io5";
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function DeleteAccountModal() {
    const {t}= useTranslation();
    const {
        register,
        setValue,
        setError,
        clearErrors,
        handleSubmit, 
        formState: {errors, isValid}
    }= useForm({mode: "onTouched"});

    const { post, data: resData, status } = useFetch();
    const {pathname} = useLocation();
    const [data, setData] = useState({});
    // console.log("pathname", pathname)
    const navigate = useNavigate();
    const steps = 2;
    const [step, setStep] = useState(0);
    const StepsViews = [
        <ul className='text-start text-sm sm:text-base space-y-3 list-disc'>
            <li className='ms-4'>{t("deleteAccount.modal.retainPolicy.first")}</li>
            <li className='ms-4'>{t("deleteAccount.modal.retainPolicy.second")}</li>
        </ul>,
        <div className='flex flex-col gap-5'>
            <IoWarning className='mx-auto text-red-500 text-5xl sm:text-6xl' />
            <h3 className="font-normal sm:text-lg text-red-900">{t("deleteAccount.modal.deleteAccountQuestion")}</h3>
        </div>
    ]

    useEffect(()=>{
        const values= {...(JSON.parse(window?.localStorage?.getItem("data")) || {})};
        // console.log("data", values);
        setData({...values});
    }, [])

    
    // console.log("step", step)
    const next = ()=> setStep(prev => {
       return (prev < steps - 1)? prev + 1 : prev;
    });
    const close = ()=> {
        navigate(-1)
        window?.localStorage?.removeItem("data")
    };
    console.log("api", api + "/delete-requests")
    const onSubmit = (accountName)=>{
        // console.log("accountName", accountName);
        // console.log("data", data)
        post(api + "/delete-requests", data)
    }
    useEffect(()=>{
        if(status === "success"){
            console.log("resData", resData)
            successNotify(t("deleteAccount.successMsg"));
            window?.localStorage?.removeItem("data")
            navigate(-1)
        }
        else if(status === "error"){
            window?.localStorage?.removeItem("data")
            navigate(-1)
        }
    }, [status])
  return (
    <ModalContainer id={"delete-student-modal"}>
        <div className="relative p-4 w-full max-w-lg max-h-full">
            <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-center justify-between px-4 md:px-5 py-4 border-b rounded-t">
                    <h3 className="sm:text-lg font-medium text-gray-900">
                        {t("deleteAccount.modal.title")}
                    </h3>
                    <button onClick={close} className="absolute end-2 sm:end-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="delete-account-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>                    
                <div
                    className='px-5 py-7 sm:px-7 space-y-8 text-center'
                >
                    {StepsViews[step]}
                    <div className="flex items-center justify-center gap-5">
                        <Button
                            type="button"
                            onClick={close}
                            text={t("cancel")}
                            // props={{"data-modal-hide": "delete-account-modal"}}
                            className={"button !text-sm shadow !bg-transparent hover:!bg-primary-300 hover:!text-white !text-black"}
                        />
                        {
                            step !== (steps - 1)?
                                <Button
                                    type="button"
                                    onClick={next}
                                    text={t("continue")}
                                    className={"button !text-sm shadow hover:!bg-primary-30 hover:!text-whit"}
                                />
                            :
                                <Button
                                    onClick={onSubmit}
                                    text={t("confirm")}
                                    isLoading={status === "pending"}
                                    datamodalhide= "delete-account-modal"
                                    className={"button !bg-red-100 hover:!bg-red-400 hover:!text-white text-red-400 !text-sm shadow"}
                                    disabled={!!!Object.keys(data || {})?.length}
                                />
                        }
                    </div>
                </div>
            </div>
        </div>
    </ModalContainer>
  )
}
