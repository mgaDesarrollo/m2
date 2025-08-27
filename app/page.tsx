import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-light bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent mb-3 animate-in fade-in-0 slide-in-from-bottom-5 duration-700">
            Metro Cuadrado
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto">
            Sistema profesional de cálculo de materiales de construcción
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
