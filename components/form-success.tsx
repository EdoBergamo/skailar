import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) return null

  return (
    <div className="bg-green-100 p-3 mt-5 rounded-xl flex items-center gap-x-2 text-sm text-green-500" >
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div >
  )
}