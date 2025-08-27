"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sidebar } from "@/components/sidebar"
import {
  TrendingUp,
  Building2,
  Package,
  DollarSign,
  Grid3X3,
  Bell,
  AlertTriangle,
  Clock,
  CheckCircle,
} from "lucide-react"

export function DashboardContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated")
    const email = localStorage.getItem("userEmail")

    if (auth === "true" && email) {
      setIsAuthenticated(true)
      setUserEmail(email)
    } else {
      router.push("/")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    )
  }

  const stats = [
    {
      title: "Proyectos Activos",
      value: "12",
      description: "3 nuevos esta semana",
      icon: Building2,
      trend: "+15%",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Materiales Calculados",
      value: "1,247",
      description: "Este mes",
      icon: Package,
      trend: "+8%",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Ahorro Estimado",
      value: "$45,230",
      description: "Optimización de costos",
      icon: DollarSign,
      trend: "+12%",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Precisión Promedio",
      value: "94.2%",
      description: "En estimaciones",
      icon: TrendingUp,
      trend: "+2%",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const recentProjects = [
    { name: "Edificio Residencial Norte", status: "En progreso", materials: 45, cost: "$12,500" },
    { name: "Centro Comercial Plaza", status: "Completado", materials: 78, cost: "$28,900" },
    { name: "Casa Unifamiliar Premium", status: "En revisión", materials: 23, cost: "$8,750" },
    { name: "Oficinas Corporativas", status: "En progreso", materials: 56, cost: "$19,200" },
  ]

  const alerts = [
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Presupuesto Excedido",
      description: "Proyecto Plaza Norte supera el 15% del presupuesto",
      time: "Hace 2 horas",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      type: "info",
      icon: Clock,
      title: "Entrega Próxima",
      description: "Casa Premium debe entregarse en 3 días",
      time: "Hace 4 horas",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      type: "success",
      icon: CheckCircle,
      title: "Proyecto Completado",
      description: "Centro Comercial Plaza finalizado exitosamente",
      time: "Hace 1 día",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
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
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
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
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
              onClick={() => (window.location.href = "/dashboard/rubros")}
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
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
              onClick={() => (window.location.href = "/dashboard/permisos")}
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

      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm">
          <Grid3X3 className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <div className="mb-6 lg:mb-8 mt-12 lg:mt-0">
          <h1 className="text-2xl lg:text-3xl font-light text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground text-sm lg:text-base">
            Bienvenido de vuelta. Aquí tienes un resumen de tus proyectos de construcción.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className={`absolute top-0 right-0 w-16 h-16 ${stat.bgColor} rounded-bl-full opacity-20`}></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-xl lg:text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span>{stat.description}</span>
                  <Badge variant="secondary" className={`text-xs ${stat.color} bg-opacity-10`}>
                    {stat.trend}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
          {/* Proyectos Recientes */}
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle className="text-foreground">Proyectos Recientes</CardTitle>
              <CardDescription>Tus proyectos más recientes y su estado actual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {project.materials} materiales • {project.cost}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`ml-2 shrink-0 ${
                        project.status === "Completado" 
                          ? "bg-green-100 text-green-700 border-green-300" 
                          : project.status === "En progreso" 
                            ? "bg-blue-100 text-blue-700 border-blue-300"
                            : project.status === "En revisión"
                              ? "bg-amber-100 text-amber-700 border-amber-300"
                              : "bg-gray-100 text-gray-700 border-gray-300"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                Alertas y Notificaciones
              </CardTitle>
              <CardDescription>Eventos importantes y recordatorios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      alert.type === "warning" 
                        ? "bg-amber-50 border-amber-200" 
                        : alert.type === "info"
                          ? "bg-blue-50 border-blue-200" 
                          : alert.type === "success"
                            ? "bg-green-50 border-green-200"
                            : "bg-gray-50 border-gray-200"
                    } hover:bg-opacity-70 transition-colors duration-200`}
                  >
                    <div className="flex items-start space-x-3">
                      <alert.icon className={`h-4 w-4 ${
                        alert.type === "warning" 
                          ? "text-amber-600" 
                          : alert.type === "info"
                            ? "text-blue-600" 
                            : alert.type === "success"
                              ? "text-green-600"
                              : "text-gray-600"
                      } mt-0.5 shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-foreground text-sm">{alert.title}</h5>
                        <p className="text-xs text-muted-foreground mt-1">{alert.description}</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Acciones Rápidas */}
        <Card className="mt-4 lg:mt-6">
          <CardHeader>
            <CardTitle className="text-foreground">Acciones Rápidas</CardTitle>
            <CardDescription>Herramientas más utilizadas para tus cálculos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <Button className="justify-start bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200">
                <Calculator className="mr-3 h-4 w-4" />
                <span className="truncate">Nueva Calculadora</span>
              </Button>
              <Button
                variant="outline"
                className="justify-start bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <FileText className="mr-3 h-4 w-4" />
                <span className="truncate">Crear Proyecto</span>
              </Button>
              <Button
                variant="outline"
                className="justify-start bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <BarChart3 className="mr-3 h-4 w-4" />
                <span className="truncate">Generar Reporte</span>
              </Button>
              <Button
                variant="outline"
                className="justify-start bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Package className="mr-3 h-4 w-4" />
                <span className="truncate">Gestionar Inventario</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
