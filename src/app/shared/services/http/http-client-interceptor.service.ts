
import {tap} from 'rxjs/operators';
import {Injectable, Injector} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';

import {flow, get} from 'lodash';
import {Router} from '@angular/router';
import {LoaderService} from '../loader/loader.service';



@Injectable()
export class HttpClientInterceptorService implements HttpInterceptor {
  private routerService: Router;
  private HTTP_FORBIDDEN = 403;
  HTTP_UNAUTHORIZED = 401;
  constructor(
              private injector: Injector,
              private loaderService: LoaderService,
             ) {
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Do not show loader when isLoading exist
    if (!this.isLoaderInHeader(req)) {
      this.showLoader();
    }

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // this.logger.error('Http request done', event);
        this.onEnd();
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        this.handleError(err);
        this.onEnd();
      }
    }));
  }
  private get router(): Router {
    if (!this.routerService) {
      this.routerService = this.injector.get(Router);
    }
    return this.routerService;
  }
  handleError(error: HttpErrorResponse) {
    if (error.status === this.HTTP_FORBIDDEN || error.status === this.HTTP_UNAUTHORIZED) {
      this.router.navigate(['']);
    } else {
    ///  this.openErrorModal(error);
    }
  }

  // getAuthorizationHeader() {
  //   const authentication: any = environment.authentication;
  //   const headerName: string = authentication.headerName;
  //   const headerValue = this.localStorageService.retrieve('token') || null;
  //   if (headerValue) {
  //     return {name: headerName, value: headerValue};
  //   }
  //   return null;
  // }
  //
  // setAuthorizationHeader(){
  //   const authHeader = this.getAuthorizationHeader();
  //   let addHeaderFunc: Function;
  //   if (authHeader && !(req.url === '/compass/security/auth/login')) {
  //     addHeaderFunc = flow((currentReq: HttpRequest<any>) => {
  //         return currentReq.headers.set(requestIdHeader.name, requestIdHeader.value);
  //       },
  //       (headers: HttpHeaders) => {
  //         return headers.set(authHeader.name, authHeader.value);
  //       });
  //   } else {
  //     addHeaderFunc = (currentReq: HttpRequest<any>) => {
  //       return currentReq.headers.set(requestIdHeader.name, requestIdHeader.value);
  //     };
  //   }
  //   const newReq = req.clone({
  //     headers: addHeaderFunc(req)
  //   });
  // }

  isLoaderInHeader(req: HttpRequest<any>) {
    const headers: HttpHeaders = get(req, 'headers', {});
    return headers.get('isLoader') === 'false';
  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    setTimeout(() => { this.loaderService.hide(); }, 1500);
  }

}
