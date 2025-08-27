"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, UserPlus, Edit, Trash2, Shield, Grid3X3 } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function PermisosPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan@metrocuadrado.com",
      role: "Administrador",
      permissions: {
        dashboard: true,
        calculadora: true,
        proyectos: true,
        reportes: true,
        equipo: true,
        permisos: true,
        configuracion: true,
      },
      status: "Activo",
    },
    {
      id: 2,
      name: "María González",
      email: "maria@metrocuadrado.com",
      role: "Supervisor",
      permissions: {
        dashboard: true,
        calculadora: true,
        proyectos: true,
        reportes: true,
        equipo: false,
        permisos: false,
        configuracion: false,
      },
      status: "Activo",
    },
    {
      id: 3,
      name: "Carlos López",
      email: "carlos@metrocuadrado.com",
      role: "Operador",
      permissions: {
        dashboard: true,
        calculadora: true,
        proyectos: false,
        reportes: false,
        equipo: false,
        permisos: false,
        configuracion: false,
      },
      status: "Inactivo",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  const permissionLabels = {
    dashboard: "Dashboard",
    calculadora: "Calculadora de Materiales",
    proyectos: "Proyectos",
    reportes: "Reportes",
    equipo: "Equipo",
    permisos: "Permisos de Usuarios",
    configuracion: "Configuración",
  }

  const handleEditUser = (user) => {
    setEditingUser(user)
    setIsDialogOpen(true)
  }

  const handleSaveUser = () => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)))
    }
    setIsDialogOpen(false)
    setEditingUser(null)
  }

  const handlePermissionChange = (permission, value) => {
    if (editingUser) {
      setEditingUser({
        ...editingUser,
        permissions: {
          ...editingUser.permissions,
          [permission]: value,
        },
      })
    }
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
        <div className="mb-8">
          <h1 className="text-3xl font-light text-foreground mb-2">Permisos de Usuarios</h1>
          <p className="text-muted-foreground">
            Gestiona los usuarios y sus permisos de acceso a diferentes secciones del sistema.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Usuarios</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{users.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Usuarios Activos</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {users.filter((u) => u.status === "Activo").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Administradores</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {users.filter((u) => u.role === "Administrador").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-foreground">Lista de Usuarios</CardTitle>
                <CardDescription>Administra los permisos y roles de cada usuario</CardDescription>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <UserPlus className="mr-2 h-4 w-4" />
                Agregar Usuario
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-0 sm:px-6">
            <div className="overflow-auto">
              <Table className="min-w-[800px]">
                <TableHeader>
                  <TableRow>
                    <TableHead>Usuario</TableHead>
                    <TableHead className="hidden md:table-cell">Rol</TableHead>
                    <TableHead className="hidden md:table-cell">Estado</TableHead>
                    <TableHead className="hidden md:table-cell">Permisos</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium text-foreground">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                          <div className="md:hidden mt-2 space-y-1">
                            <div className="flex items-center space-x-2">
                              <Badge variant={user.role === "Administrador" ? "default" : "secondary"}>{user.role}</Badge>
                              <Badge variant={user.status === "Activo" ? "default" : "secondary"}>{user.status}</Badge>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {Object.values(user.permissions).filter(Boolean).length} de{" "}
                              {Object.keys(user.permissions).length} permisos
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant={user.role === "Administrador" ? "default" : "secondary"}>{user.role}</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant={user.status === "Activo" ? "default" : "secondary"}>{user.status}</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="text-sm text-muted-foreground">
                          {Object.values(user.permissions).filter(Boolean).length} de{" "}
                          {Object.keys(user.permissions).length} permisos
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditUser(user)}
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                          >
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

        {/* Edit User Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Editar Permisos de Usuario</DialogTitle>
              <DialogDescription>Configura los permisos de acceso para {editingUser?.name}</DialogDescription>
            </DialogHeader>
            {editingUser && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="role">Rol</Label>
                  <Select
                    value={editingUser.role}
                    onValueChange={(value) => setEditingUser({ ...editingUser, role: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Administrador">Administrador</SelectItem>
                      <SelectItem value="Supervisor">Supervisor</SelectItem>
                      <SelectItem value="Operador">Operador</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label>Permisos de Acceso</Label>
                  {Object.entries(permissionLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center justify-between">
                      <Label htmlFor={key} className="text-sm">
                        {label}
                      </Label>
                      <Switch
                        id={key}
                        checked={editingUser.permissions[key]}
                        onCheckedChange={(checked) => handlePermissionChange(key, checked)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleSaveUser} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Guardar Cambios
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
