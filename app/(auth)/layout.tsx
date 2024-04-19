const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col items-center h-screen justify-center">
      {children}
    </div>
  )
}

export default AuthLayout