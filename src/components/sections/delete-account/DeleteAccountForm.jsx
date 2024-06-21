import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
// import { errorNotify } from '../../utils/notifies';
import FormInput from '../../ui/FormInput';
import Textarea from '../../ui/Textarea';
import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';
import Select from '../../ui/select-field/Select';
// import Select from "react-select";
import { useFetch } from '../../../hooks/useFetch';
import { api } from '../../../constant';
import { useNavigate } from 'react-router-dom';

export default function DeleteAccountForm() {
  const navigate = useNavigate();
  const {
    control,
    register,
    watch,
    reset,
    setValue,
    handleSubmit, 
    trigger,
    getValues,
    formState: {errors, isSubmitSuccessful, isValid}
}= useForm({mode: "all"});

    const {t, i18n} = useTranslation();
    const sublevelApi = useFetch();
  const onSubmit = (data)=>{
    // console.log("data", data)
    window.localStorage.setItem("data", JSON.stringify(data));
    navigate("/delete-account", {preventScrollReset: true});
  }

  useEffect(()=>{
    sublevelApi.get(api + "/sublevels", {})
  }, [])
  
  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className='form max-w-[500px] w-full flex-1 flex flex-col justify-center text-black bg-white px-6 sm:px-8 py-8 gap-6 rounded-xl shadow mt-9'
      >
      <FormInput 
        label={t("form.mobile")}
        name={"phone"}
        placeholder={t("form.mobilePlaceholder")}
        register={register("phone",{
            required:{
                value: true,
                message: t("validation.requiredField")
            },
            pattern: {
                value: /^[0-9]{11}$/,
                message: t("form.validation.invalidMobile")
            }
        })} 
        requireFlag={true}
        errorMsg={errors["phone"]?.message}
        className="w-full"
      />
      <FormInput 
        label={t("form.name")}
        name={"name"}
        placeholder={t("form.namePlaceholder")}
        register={register("name", {
          required: {
            value: true,
            message: t("validation.requiredField")
          }
        })}
        requireFlag={true}
        errorMsg={errors["name"]?.message}
      />
      <FormInput 
        label={t("form.email")}
        name={"email"}
        placeholder={t("form.emailPlaceholder")}
        register={register("email", {
          required: {
            value: true,
            message: t("validation.requiredField")
          },
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: t("form.validation.invalidEmail"),
          },
        })}
        requireFlag={true}
        errorMsg={errors["email"]?.message}
      />
      {/* <div className="w-full min-w-36">
          <label htmlFor={"sublevelSelect"} className="block mb-2 capitalize text-sm font-medium text-slate-400">
            {t("form.schoolYear")} <span className="text-red-400">*</span>
          </label>
      </div> */}
      <Controller
        name='subLevel'
        control={control}
        rules={{
          required: {
            value: true,
            message: t("validation.requiredField")
          }
        }}
        render={({field: {value, onChange}})=>{
          // console.log("selectValue", value)
          return (
            <Select
              onChange={onChange}
              value={value}
              labelKey={"name"}
              valueKey={"id"}
              props={{
                id: "sublevelSelect", 
                name:"subLevel", 
                placholder: t("form.schoolYearPlaceholder")
              }}
              label={t("form.schoolYear")}
              options={(!!sublevelApi.data?.data?.length)? sublevelApi.data?.data: []}
              requireFlag={true}
              errors={errors}
              selectClassName={"w-full min-w-36"}
            />
          )
        }}
        />
        
        {/* // <Select
        //   onChange={onChange}
        //   value= {value}
        //   name='subLevel'
        //   id='sublevelSelect'
        //   placeholder={t("form.sublevelPlaceholder")}
        //   isSearchable={true}
        //   isRtl={i18n.language === "ar"}
        //   options={sublevelOptions || []}
        //   className={`form-input !text-sm !rounded-lg ${sublevelApi.status !== "success"? "disabled": ""}`}
        // /> */}
      

      <Textarea 
        label={t("form.note")}
        textareaProps={{
          name: "note", 
          placeholder:t("form.notePlaceholder")
        }}
        requireFlag={true}
        register={register("note", {
          required: {
            value: true,
            message: t("validation.requiredField")
          }
        })} 
        errorMsg={errors["note"]?.message}
        textareaClassName={"min-h-[100px]"}
      />
      <Button 
        text={t("delete")} 
        type= "submit"
        className= "w-full !mt-4 !py-3 capitalize button"
        disabled= {!isValid || sublevelApi?.status !== "success"}
      />
    </form>
  )
}
