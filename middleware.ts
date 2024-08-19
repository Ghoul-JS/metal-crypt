import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) { 

 // Redireccionamos al usuario a la ruta `/` si no está autenticado  
  if (!request.cookies.get('band_id')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  // Si el usuario está autenticado, lo dejamos continuar con su solicitud
  else return NextResponse.next();

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile'],
}