import React from 'react'
import Title from '../../Title'
import DeleteAccountForm from './DeleteAccountForm';
import { useTranslation } from 'react-i18next';

export const DeleteAccount = () => {
    const {t} = useTranslation();

  return (
    <section id="delete-account" className='py-[4.5rem]'>
        <div className="container flex flex-col items-center">
            <Title text={t("deleteAccount.title")} />
            <DeleteAccountForm />
        </div>
    </section>
  )
}
