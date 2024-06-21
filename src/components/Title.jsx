// import { Amiri, Rakkas } from 'next/font/google';
import React from 'react'
// const amiri = Amiri({ subsets: ["latin", "arabic"], weight: ["700", "400"], display: "block", });
// const rakkas = Rakkas({ subsets: ["latin", "arabic"], weight: ["400"], });

export default function Title({text}) {
  return (
    <h1 className={`text-3xl sm:text-4xl text-primary-900 capitalize font-medium`}>
        {text}
    </h1>
  )
}
