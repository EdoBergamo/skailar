import { ResetForm } from "@/components/auth/reset-form";
import { Suspense } from "react";

const ResetPasswordPage = () => {
  return (
    <Suspense>
      <ResetForm />
    </Suspense>
  );
}
 
export default ResetPasswordPage;