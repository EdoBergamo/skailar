"use client"

import { newVerification } from "@/actions/new-verification"
import { CardWrapper } from "./card-wrapper"

import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

import { BeatLoader } from 'react-spinners'
import { FormSuccess } from "../form-success"
import { FormError } from "../form-error"

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParams = useSearchParams();

  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing token")
      return;
    }

    newVerification(token)
    .then((data) => {
      setError(data.error)
      setSuccess(data.success)
    })
    .catch(() => {
      setError("Something went wrong")
    })
  }, [token, error, success])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper headerLabel="Confirming your verification" backButtonHref="/login" backButtonLabel="Back to login">
      <div className="flex items-center w-full justify-center">
        {!success && !error && (
          <BeatLoader color="red" />
        )}
        {!success && (
          <FormError message={error} />
        )}
        <FormSuccess message={success} />
      </div>
    </CardWrapper>
  )
}