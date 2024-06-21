import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

export const loginNotify = (data) =>
  toast.custom((customT) => (
    <div
      className={`${
        customT.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white dark:bg-secondary-900 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img className="h-10 w-10 rounded-full" src={data.image} alt="" />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-secondary-100">
              {data.fullName}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-secondary-100">
              {data.message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(customT.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  ));

export const successNotify = (message) => toast.success((typeof message === 'string')? message: "not valid success message");

export const errorNotify = (message) => toast.error((typeof message === 'string')? message: "not valid error message");
