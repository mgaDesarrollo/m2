"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Grid3X3, Plus, Edit, Trash2 } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function RubrosPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated")
    if (auth !== "true") {
      router.push("/")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const rubros = [
    { id: 1, nombre: "Estructura", descripcion: "Columnas, vigas, losas", materiales: 15, activo: true },
    { id: 2, nombre: "Albañilería", descripcion: "Muros, tabiques, revoques", materiales: 12, activo: true },
    { id: 3, nombre: "Instalaciones Eléctricas", descripcion: "Cables, tomas, tableros", materiales: 8, activo: true },
    { id: 4, nombre: "Instalaciones Sanitarias", descripcion: "Tuberías, accesorios", materiales: 10, activo: true },
    { id: 5, nombre: "Terminaciones", descripcion: "Pisos, pinturas, revestimientos", materiales: 20, activo: false },
    { id: 6, nombre: "Carpintería", descripcion: "Puertas, ventanas, marcos", materiales: 6, activo: true },
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar - responsive */}
      <Sidebar 
        isMobileOpen={isMobileSidebarOpen} 
        onCloseMobile={() => setIsMobileSidebarOpen(false)} 
      />

      {/* Botón para mostrar sidebar en móvil */}
      <div className="fixed top-4 left-4 z-20 lg:hidden">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="bg-background shadow-md"
        >
          <Grid3X3 className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Content - responsive */}
      <div className="pt-16 lg:pt-0 lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div>
              <h1 className="text-3xl font-light text-foreground flex items-center">
                <Grid3X3 className="mr-3 h-8 w-8 text-green-600" />
                Gestión de Rubros
              </h1>
              <p className="text-muted-foreground">Administra las categorías de materiales de construcción</p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Rubro
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Crear Nuevo Rubro</DialogTitle>
                <DialogDescription>Agrega una nueva categoría de materiales de construcción</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="nombre" className="text-right">
                    Nombre
                  </Label>
                  <Input id="nombre" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="descripcion" className="text-right">
                    Descripción
                  </Label>
                  <Input id="descripcion" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                  Crear Rubro
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Rubros</CardTitle>
              <Grid3X3 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">6</div>
              <p className="text-xs text-muted-foreground">Categorías activas</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Materiales Totales</CardTitle>
              <Grid3X3 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">71</div>
              <p className="text-xs text-muted-foreground">En todos los rubros</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Rubros Activos</CardTitle>
              <Grid3X3 className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">5</div>
              <p className="text-xs text-muted-foreground">De 6 totales</p>
            </CardContent>
          </Card>
        </div>

        {/* Rubros Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Rubros</CardTitle>
            <CardDescription>Gestiona las categorías de materiales de construcción</CardDescription>
          </CardHeader>
          <CardContent className="px-0 sm:px-6">
            <div className="overflow-auto">
              <Table className="min-w-[700px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="hidden sm:table-cell">Descripción</TableHead>
                    <TableHead className="hidden md:table-cell">Materiales</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rubros.map((rubro) => (
                    <TableRow key={rubro.id}>
                      <TableCell className="font-medium">
                        {rubro.nombre}
                        <div className="sm:hidden text-xs text-muted-foreground mt-1">
                          {rubro.descripcion}
                        </div>
                        <div className="md:hidden text-xs text-muted-foreground mt-1">
                          {rubro.materiales} items
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">{rubro.descripcion}</TableCell>
                      <TableCell className="hidden md:table-cell">{rubro.materiales} items</TableCell>
                      <TableCell>
                        <Badge variant={rubro.activo ? "default" : "secondary"}>
                          {rubro.activo ? "Activo" : "Inactivo"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
