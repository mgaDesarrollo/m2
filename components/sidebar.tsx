"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  FileText,
  Users,
  Home,
  Settings,
  BarChart3,
  Grid3X3,
  LogOut,
} from "lucide-react"

export function Sidebar() {
  const [userEmail, setUserEmail] = useState("")
  const router = useRouter()

  useEffect(() => {
    const email = localStorage.getItem("userEmail")
    if (email) {
      setUserEmail(email)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  // Determina qué página está activa
  const isActive = (path) => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.includes(path)
    }
    return false
  }

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border lg:block hidden">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-light tracking-tight text-sidebar-foreground">Metro Cuadrado</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <Button
            variant={isActive("/dashboard") && !isActive("/dashboard/") ? "default" : "ghost"}
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
            onClick={() => router.push("/dashboard")}
          >
            <Home className="mr-3 h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
          >
            <Calculator className="mr-3 h-4 w-4" />
            Calculadora de Materiales
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
          >
            <FileText className="mr-3 h-4 w-4" />
            Proyectos
          </Button>
          <Button
            variant={isActive("/dashboard/rubros") ? "default" : "ghost"}
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
            onClick={() => router.push("/dashboard/rubros")}
          >
            <Grid3X3 className="mr-3 h-4 w-4" />
            Rubros
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
          >
            <BarChart3 className="mr-3 h-4 w-4" />
            Reportes
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
          >
            <Users className="mr-3 h-4 w-4" />
            Equipo
          </Button>
          <Button
            variant={isActive("/dashboard/permisos") ? "default" : "ghost"}
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
            onClick={() => router.push("/dashboard/permisos")}
          >
            <Settings className="mr-3 h-4 w-4" />
            Permisos de Usuarios
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
          >
            <Settings className="mr-3 h-4 w-4" />
            Configuración
          </Button>
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-sidebar-accent-foreground">
                  {userEmail.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">{userEmail}</p>
                <p className="text-xs text-sidebar-foreground/70">Administrador</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
