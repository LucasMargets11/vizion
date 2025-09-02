export const routes = {
  servicios: '#servicios',
  trabajos: '/trabajos',
  equipo: '#equipo',
  contacto: '#contacto'
} as const;

export type RouteKey = keyof typeof routes;
