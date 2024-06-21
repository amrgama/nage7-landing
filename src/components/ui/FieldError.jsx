import React, { useEffect, useRef, useState } from 'react'

export default function FieldError({errorMsg, classNames}) {
    const [errMsgHeight, setErrMsgHeight] = useState(0);
  const errorMsgEle = useRef();

  useEffect(() => {
    if (errorMsgEle) {
      setErrMsgHeight(errorMsgEle.current.clientHeight);
    }
  }, [errorMsg]);

  return (
    <div
        style={{ height: `${errorMsg ? errMsgHeight : 0}px` }}
        className={`overflow-hidden duration-200 ${!!errorMsg? "mt-1": ""} ${classNames ?? ""}`}
      >
        <p ref={errorMsgEle} className="text-[13px] text-red-600">
          {errorMsg}
        </p>
      </div>
  )
}
