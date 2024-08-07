import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//import { LoginComponent } from './login/login.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './components/auth/auth.service';




// Dashboard
import { DashboardV1Page }          from './pages/dashboard/v1/dashboard-v1';
import { DashboardV2Page }          from './pages/dashboard/v2/dashboard-v2';
import { DashboardV3Page }          from './pages/dashboard/v3/dashboard-v3';

// Email
import { EmailInboxPage }           from './pages/email/inbox/email-inbox';
import { EmailComposePage }         from './pages/email/compose/email-compose';
import { EmailDetailPage }          from './pages/email/detail/email-detail';

// Widgets
import { WidgetPage }               from './pages/widget/widget';

// UI Element
import { UIGeneralPage }            from './pages/ui-elements/general/general';
import { UITypographyPage }         from './pages/ui-elements/typography/typography';
import { UITabsAccordionsPage }     from './pages/ui-elements/tabs-accordions/tabs-accordions';
import { UIModalNotificationPage }  from './pages/ui-elements/modal-notification/modal-notification';
import { UIWidgetBoxesPage }        from './pages/ui-elements/widget-boxes/widget-boxes';
import { UIMediaObjectPage }        from './pages/ui-elements/media-object/media-object';
import { UIButtonsPage }            from './pages/ui-elements/buttons/buttons';
import { UIIconFontAwesomePage }    from './pages/ui-elements/icon-fontawesome/icon-fontawesome';
import { UIIconDuotonePage }        from './pages/ui-elements/icon-duotone/icon-duotone';
import { UIIconSimpleLineIconsPage }from './pages/ui-elements/icon-simple-line-icons/icon-simple-line-icons';
import { UIIconBootstrapPage }      from './pages/ui-elements/icon-bootstrap/icon-bootstrap';
import { UILanguageIconPage }    		from './pages/ui-elements/language-icon/language-icon';
import { UISocialButtonsPage }      from './pages/ui-elements/social-buttons/social-buttons';

// Bootstrap 5
import { Bootstrap5Page }           from './pages/bootstrap-5/bootstrap-5';

// Form
import { FormElementsPage }         from './pages/form/form-elements/form-elements';
import { FormWizardsPage }          from './pages/form/form-wizards/form-wizards';
import { FormPluginsPage }          from './pages/form/form-plugins/form-plugins';

// Table
import { TableBasicPage }           from './pages/tables/table-basic/table-basic';
import { TableDataPage }            from './pages/tables/table-data/table-data';

// Pos
import { PosCounterCheckoutPage }   from './pages/pos/counter-checkout/counter-checkout';
import { PosKitchenOrderPage }      from './pages/pos/kitchen-order/kitchen-order';
import { PosCustomerOrderPage }     from './pages/pos/customer-order/customer-order';
import { PosMenuStockPage }         from './pages/pos/menu-stock/menu-stock';
import { PosTableBookingPage }      from './pages/pos/table-booking/table-booking';

// Chart
import { ChartNgxPage }             from './pages/chart/chart-ngx/chart-ngx';
import { ChartApexPage }             from './pages/chart/chart-apex/chart-apex';
import { ChartJsPage }             from './pages/chart/chart-js/chart-js';

// Calendar
import { CalendarPage }             from './pages/calendar/calendar';

// Map
import { MapPage }            			from './pages/map/map';

// Gallery
import { GalleryV1Page }            from './pages/gallery/gallery-v1/gallery-v1';
import { GalleryV2Page }            from './pages/gallery/gallery-v2/gallery-v2';

// Page Options
import { PageBlank }                from './pages/page-options/page-blank/page-blank';
import { PageFooter }               from './pages/page-options/page-with-footer/page-with-footer';
import { PageFixedFooter }          from './pages/page-options/page-with-fixed-footer/page-with-fixed-footer';
import { PageWithoutSidebar }       from './pages/page-options/page-without-sidebar/page-without-sidebar';
import { PageSidebarRight }         from './pages/page-options/page-with-right-sidebar/page-with-right-sidebar';
import { PageSidebarMinified }      from './pages/page-options/page-with-minified-sidebar/page-with-minified-sidebar';
import { PageTwoSidebar }           from './pages/page-options/page-with-two-sidebar/page-with-two-sidebar';
import { PageFullHeight }   			  from './pages/page-options/page-full-height/page-full-height';
import { PageSidebarWide }          from './pages/page-options/page-with-wide-sidebar/page-with-wide-sidebar';
import { PageSidebarLight }         from './pages/page-options/page-with-light-sidebar/page-with-light-sidebar';
import { PageSidebarTransparent }   from './pages/page-options/page-with-transparent-sidebar/page-with-transparent-sidebar';
import { PageTopMenu }              from './pages/page-options/page-with-top-menu/page-with-top-menu';
import { PageMixedMenu }            from './pages/page-options/page-with-mixed-menu/page-with-mixed-menu';
import { PageMegaMenu }             from './pages/page-options/page-with-mega-menu/page-with-mega-menu';
import { PageBoxedLayout }          from './pages/page-options/page-with-boxed-layout/page-with-boxed-layout';
import { PageBoxedLayoutMixedMenu } from './pages/page-options/page-boxed-layout-with-mixed-menu/page-boxed-layout-with-mixed-menu';
import { PageSidebarSearch }        from './pages/page-options/page-with-search-sidebar/page-with-search-sidebar';

// Extra Pages
import { ExtraTimelinePage }        from './pages/extra/extra-timeline/extra-timeline';
import { ExtraComingSoonPage }      from './pages/extra/extra-coming-soon/extra-coming-soon';
import { ExtraSearchResultsPage }   from './pages/extra/extra-search-results/extra-search-results';
import { ExtraInvoicePage }         from './pages/extra/extra-invoice/extra-invoice';
import { ExtraErrorPage }           from './pages/extra/extra-error/extra-error';
import { ExtraProfilePage }         from './pages/extra/extra-profile/extra-profile';
import { ExtraScrumBoardPage }      from './pages/extra/extra-scrum-board/extra-scrum-board';
import { ExtraCookieAcceptanceBannerPage } from './pages/extra/extra-cookie-acceptance-banner/extra-cookie-acceptance-banner';
import { ExtraOrdersPage }          from './pages/extra/extra-orders/extra-orders';
import { ExtraOrderDetailsPage }    from './pages/extra/extra-order-details/extra-order-details';
import { ExtraProductsPage }        from './pages/extra/extra-products/extra-products';
import { ExtraProductDetailsPage }  from './pages/extra/extra-product-details/extra-product-details';
import { ExtraFileManagerPage }     from './pages/extra/extra-file-manager/extra-file-manager';
import { ExtraPricingPage }         from './pages/extra/extra-pricing-page/extra-pricing-page';
import { ExtraMessengerPage }       from './pages/extra/extra-messenger-page/extra-messenger-page';
import { ExtraDataManagementPage }  from './pages/extra/extra-data-management/extra-data-management';
import { ExtraSettingsPage }        from './pages/extra/extra-settings-page/extra-settings-page';

// User Login / Register / Forgot / Reset
import { LoginV1Page }              from './pages/login/login-v1/login-v1';
import { LoginV2Page }              from './pages/login/login-v2/login-v2';
import { LoginV3Page }              from './pages/login/login-v3/login-v3';
import { RegisterV2Page }           from './pages/register/register-v3/register-v2';
import { RegisterV3Page }           from './pages/register/register-v3/register-v3';
import { ForgotV1Page }             from './pages/forgotPassword/forgot-password-v1';
import { ResetPasswordV1Page }      from './pages/resetPassword/resetPassword-v1';
import { Activate } from './pages/register/register-v3/activate';
//edit perfil

import { SettingsPageV1 } from './pages/perfil/settings-page';

//plataforma

import { BuscarCursosPage } from './pages/vercursos/buscar-cursos';
import { MisCursosPage } from './pages/miscursos/mis-cursos';

//Inicio
import { InicioPage } from './pages/inicio/Inicio';
//curso
import { Crear_curso} from './pages/addinfo/crear_curso';
import { ConfiguracionCurso } from './pages/vercursos/configuracion_curso';
//hacer curso
import { HacerPrimerafase } from './pages/hacercurso/primera_fase';
import { HacerSegundafase } from './pages/hacercurso/segunda_fase';
import { HacerTercerafase } from './pages/hacercurso/tercera_fase';
import { HacerCuartafase } from './pages/hacercurso/cuarta_fase';
import { HacerQuintafase } from './pages/hacercurso/quinta_fase';
import { MiProgreso } from './pages/progreso/mi_progreso';
import { ProgresoEstudiantes } from './pages/progreso/progreso_estudiante';
// Helper
import { HelperCssPage }            from './pages/helper/helper-css/helper-css';

// Error
import { ErrorPage }                from './pages/error/error';





//import { title } from 'process';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'login', component: LoginV1Page, data: { title: 'Inciar sesión'}},
  { path: 'forgot-password', component: ForgotV1Page, data: { title: 'Olvidé mi contraseña'}},
  { path: 'activate-account', component: Activate, data: { title: 'Activar cuenta'}},
  { path: 'register', component: RegisterV2Page, data: { title: 'Registro'} },
  { path: 'reset-password', component: ResetPasswordV1Page, data: { title: 'Reiniciar contraseña'}, canActivate: [AuthService]  },
  // { path: 'dashboard', component: DashboardV1Page, data: { title: 'Dashboard'}, canActivate: [AuthService] },
  { path: 'inicio', component: InicioPage, data: { title: 'Inicio'}, canActivate: [AuthService] },

  
  
  // { path: 'dashboard/v1', component: DashboardV1Page, data: { title: 'Dashboard V1'},canActivate: [AuthService] },
  // { path: 'dashboard/v2', component: DashboardV2Page, data: { title: 'Dashboard V2'},canActivate: [AuthService]  },
  // { path: 'dashboard/v3', component: DashboardV3Page, data: { title: 'Dashboard V3'},canActivate: [AuthService] },

  //cursos

  {path:'buscar-cursos', component:BuscarCursosPage, data: {title: 'Buscar Cursos'},canActivate: [AuthService]},
  {path:'mis-cursos', component:MisCursosPage, data: {title: 'Mis Cursos'},canActivate: [AuthService]},
  {path: 'crear_curso', component: Crear_curso, data: { title: 'Crear Curso',expectedRole: 'docente'}, canActivate: [AuthService] },
  {path:'configuracion_curso', component:ConfiguracionCurso, data: {title: 'Configurar Cursos',expectedRole: 'docente'},canActivate: [AuthService]},
  //cursos

  //hacer curso
  { path: 'primera_fase/:id', component: HacerPrimerafase, data: { title: 'Realizar Primera Fase',expectedRole: 'docente'}, canActivate: [AuthService] },
  { path: 'segunda_fase/:id', component: HacerSegundafase, data: { title: 'Realizar Segunda Fase',expectedRole: 'docente'}, canActivate: [AuthService] },
  { path: 'tercera_fase/:id', component: HacerTercerafase, data: { title: 'Realizar Tercera Fase',expectedRole: 'docente'}, canActivate: [AuthService] },
  { path: 'cuarta_fase/:id', component: HacerCuartafase, data: { title: 'Realizar Cuarta Fase',expectedRole: 'docente'}, canActivate: [AuthService] },
  { path: 'quinta_fase/:id', component: HacerQuintafase, data: { title: 'Realizar Quinta fase',expectedRole: 'docente'}, canActivate: [AuthService] },
  //hacer curso

  //progreso
  { path: 'mi_progreso', component: MiProgreso, data: { title: 'Mi Progreso'}, canActivate: [AuthService] },
  { path: 'progreso_estudiante', component: ProgresoEstudiantes, data: { title: 'Progreso Estudiantes',expectedRole: 'docente'}, canActivate: [AuthService] },
  //progreso
  // { path: 'email/inbox', component: EmailInboxPage, data: { title: 'Email Inbox'}, canActivate: [AuthService]},
  // { path: 'email/compose', component: EmailComposePage, data: { title: 'Email Compose'},  canActivate: [AuthService] },
  // { path: 'email/detail', component: EmailDetailPage, data: { title: 'Email Detail'},canActivate: [AuthService]},
  {path: 'settings-page', component: SettingsPageV1, data: {title:'Editar Perfil'},canActivate: [AuthService]},

  // { path: 'widget', component: WidgetPage, data: { title: 'Widgets'}, canActivate: [AuthService]  },
  
  // { path: 'ui/general', component: UIGeneralPage, data: { title: 'UI General'}, canActivate: [AuthService]  },
  // { path: 'ui/typography', component: UITypographyPage, data: { title: 'UI Typography'},  canActivate: [AuthService] },
  // { path: 'ui/tabs-accordions', component: UITabsAccordionsPage, data: { title: 'UI Tabs & Accordions'}, canActivate: [AuthService]  },
  // { path: 'ui/modal-notification', component: UIModalNotificationPage, data: { title: 'UI Modal & Notification'}, canActivate: [AuthService]  },
  // { path: 'ui/widget-boxes', component: UIWidgetBoxesPage, data: { title: 'UI Widget Boxes'},  canActivate: [AuthService] },
  // { path: 'ui/media-object', component: UIMediaObjectPage, data: { title: 'UI Media Object'}, canActivate: [AuthService]  },
  // { path: 'ui/buttons', component: UIButtonsPage, data: { title: 'UI Buttons'},   },
  // { path: 'ui/icon-fontawesome', component: UIIconFontAwesomePage, data: { title: 'UI FontAwesome Icon'}, canActivate: [AuthService]  },
  // { path: 'ui/icon-duotone', component: UIIconDuotonePage, data: { title: 'UI Duotone Icon'}, canActivate: [AuthService]  },
  // { path: 'ui/icon-simple-line-icons', component: UIIconSimpleLineIconsPage, data: { title: 'UI SimpleLineIcons'}, canActivate: [AuthService]  },
  // { path: 'ui/icon-bootstrap', component: UIIconBootstrapPage, data: { title: 'UI Bootstrap'}, canActivate: [AuthService]  },
  // { path: 'ui/language-icon', component: UILanguageIconPage, data: { title: 'UI Language Bar Icon'},   canActivate: [AuthService]},
  // { path: 'ui/social-buttons', component: UISocialButtonsPage, data: { title: 'UI Social Buttons'}, canActivate: [AuthService]  },

  // { path: 'bootstrap-5', component: Bootstrap5Page, data: { title: 'Bootstrap 5'},canActivate: [AuthService]   },

  // { path: 'form/elements', component: FormElementsPage, data: { title: 'Form Elements'},  canActivate: [AuthService] },
  // { path: 'form/wizards', component: FormWizardsPage, data: { title: 'Form Wizards'},canActivate: [AuthService]   },
  // { path: 'form/plugins', component: FormPluginsPage, data: { title: 'Form Plugins'},canActivate: [AuthService]   },
  
  // { path: 'table/basic', component: TableBasicPage, data: { title: 'Basic Tables'}, canActivate: [AuthService]  },
  // { path: 'table/data', component: TableDataPage, data: { title: 'Ngx DataTable'}, canActivate: [AuthService]  },
	
  // { path: 'pos/counter-checkout', component: PosCounterCheckoutPage, data: { title: 'POS - Counter Checkout'}, canActivate: [AuthService]  },
  // { path: 'pos/kitchen-order', component: PosKitchenOrderPage, data: { title: 'POS - Kitchen Order'}, canActivate: [AuthService]  },
  // { path: 'pos/customer-order', component: PosCustomerOrderPage, data: { title: 'POS - Customer Order'}, canActivate: [AuthService]  },
  // { path: 'pos/menu-stock', component: PosMenuStockPage, data: { title: 'POS - Menu Stock'}, canActivate: [AuthService]},
  // { path: 'pos/table-booking', component: PosTableBookingPage, data: { title: 'POS - Table Booking'}, canActivate: [AuthService]  },
  
  // { path: 'chart/ngx', component: ChartNgxPage, data: { title: 'Chart Ngx'}, canActivate: [AuthService]  },
  // { path: 'chart/apex', component: ChartApexPage, data: { title: 'Chart Apex'}, canActivate: [AuthService]  },
  // { path: 'chart/js', component: ChartJsPage, data: { title: 'Chart JS'}, canActivate: [AuthService]  },
   
  // { path: 'calendar', component: CalendarPage, data: { title: 'Calendar'},canActivate: [AuthService]   },
  
  // { path: 'map', component: MapPage, data: { title: 'Google Map'}, canActivate: [AuthService]  },
  
  // { path: 'gallery/v1', component: GalleryV1Page, data: { title: 'Gallery V1'} ,canActivate: [AuthService] },
  // { path: 'gallery/v2', component: GalleryV2Page, data: { title: 'Gallery V2'}, canActivate: [AuthService]  },
  
	// { path: 'page-option/page-blank', component: PageBlank, data: { title: 'Blank Page'} ,canActivate: [AuthService] },
	// { path: 'page-option/page-with-footer', component: PageFooter, data: { title: 'Page with Footer' } , canActivate: [AuthService]},
	// { path: 'page-option/page-with-fixed-footer', component: PageFixedFooter, data: { title: 'Page with Fixed Footer' } , canActivate: [AuthService]},
	// { path: 'page-option/page-without-sidebar', component: PageWithoutSidebar, data: { title: 'Page without Sidebar' },  canActivate: [AuthService] },
	// { path: 'page-option/page-with-right-sidebar', component: PageSidebarRight, data: { title: 'Page with Right Sidebar' } , canActivate: [AuthService]},
	// { path: 'page-option/page-with-minified-sidebar', component: PageSidebarMinified, data: { title: 'Page with Minified Sidebar'},  canActivate: [AuthService] },
	// { path: 'page-option/page-with-two-sidebar', component: PageTwoSidebar, data: { title: 'Page with Two Sidebar' } , canActivate: [AuthService]},
	// { path: 'page-option/page-full-height', component: PageFullHeight, data: { title: 'Full Height Content' }, canActivate: [AuthService]  },
	// { path: 'page-option/page-with-wide-sidebar', component: PageSidebarWide, data: { title: 'Page with Wide Sidebar' } , canActivate: [AuthService]},
	// { path: 'page-option/page-with-light-sidebar', component: PageSidebarLight, data: { title: 'Page with Light Sidebar' } ,canActivate: [AuthService] },
	// { path: 'page-option/page-with-transparent-sidebar', component: PageSidebarTransparent, data: { title: 'Page with Transparent Sidebar' } ,canActivate: [AuthService] },
	// { path: 'page-option/page-with-top-menu', component: PageTopMenu, data: { title: 'Page with Top Menu' } , canActivate: [AuthService]},
	// { path: 'page-option/page-with-mixed-menu', component: PageMixedMenu, data: { title: 'Page with Mixed Menu' },   canActivate: [AuthService]},
	// { path: 'page-option/page-with-boxed-layout', component: PageBoxedLayout, data: { title: 'Page with Boxed Layout' } ,canActivate: [AuthService] },
	// { path: 'page-option/page-with-mega-menu', component: PageMegaMenu, data: { title: 'Page with Mega Menu' } , canActivate: [AuthService]},
	// { path: 'page-option/boxed-layout-with-mixed-menu', component: PageBoxedLayoutMixedMenu, data: { title: 'Boxed Layout with Mixed Menu' },   canActivate: [AuthService]},
	// { path: 'page-option/page-with-search-sidebar', component: PageSidebarSearch, data: { title: 'Page with Search Sidebar' } ,canActivate: [AuthService] },
  
  // { path: 'extra/timeline', component: ExtraTimelinePage, data: { title: 'Timeline'} , canActivate: [AuthService]},
  // { path: 'extra/coming-soon', component: ExtraComingSoonPage, data: { title: 'Coming Soon Page'} ,canActivate: [AuthService] },
  // { path: 'extra/search-results', component: ExtraSearchResultsPage, data: { title: 'Search Results Page'} , canActivate: [AuthService]},
  // { path: 'extra/error-page', component: ExtraErrorPage, data: { title: 'Error Page'}, canActivate: [AuthService]  },
  // { path: 'extra/invoice', component: ExtraInvoicePage, data: { title: 'Invoice'}, canActivate: [AuthService]  },
  // { path: 'extra/profile', component: ExtraProfilePage, data: { title: 'Profile Page'},  canActivate: [AuthService] },
  // { path: 'extra/scrum-board', component: ExtraScrumBoardPage, data: { title: 'Scrum Board'},canActivate: [AuthService]   },
  // { path: 'extra/cookie-acceptance-banner', component: ExtraCookieAcceptanceBannerPage, data: { title: 'Cookie Acceptance Banner'} , canActivate: [AuthService]},
  // { path: 'extra/orders', component: ExtraOrdersPage, data: { title: 'Orders'} ,canActivate: [AuthService] },
  // { path: 'extra/order-details', component: ExtraOrderDetailsPage, data: { title: 'Order Details'} , canActivate: [AuthService]},
  // { path: 'extra/products', component: ExtraProductsPage, data: { title: 'Products'} , canActivate: [AuthService]},
	// { path: 'extra/product-details', component: ExtraProductDetailsPage, data: { title: 'Product Details'} ,canActivate: [AuthService] },
  // { path: 'extra/file-manager', component: ExtraFileManagerPage, data: { title: 'File Manager'} , canActivate: [AuthService]},
  // { path: 'extra/pricing-page', component: ExtraPricingPage, data: { title: 'Pricing Page'} , canActivate: [AuthService]},
  // { path: 'extra/messenger-page', component: ExtraMessengerPage, data: { title: 'Messenger Page'} ,canActivate: [AuthService] },
  // { path: 'extra/data-management', component: ExtraDataManagementPage, data: { title: 'Data Management'} ,canActivate: [AuthService] },
  // { path: 'extra/settings-page', component: ExtraSettingsPage, data: { title: 'Settings Page'},  canActivate: [AuthService] },
	
  // { path: 'login/v1', component: LoginV1Page, data: { title: 'Login V1 Page'} ,canActivate: [AuthService]},
  // { path: 'login/v2', component: LoginV2Page, data: { title: 'Login V2 Page'} ,canActivate: [AuthService]},
  // { path: 'login/v3', component: LoginV3Page, data: { title: 'Login V3 Page'} ,canActivate: [AuthService]},

  // { path: 'register/v2', component: RegisterV2Page, data: { title: 'Register V2 Page'} ,canActivate: [AuthService]},
  // { path: 'register/v3', component: RegisterV3Page, data: { title: 'Register V3 Page'},canActivate: [AuthService]   },
  
  // { path: 'helper/css', component: HelperCssPage, data: { title: 'Helper CSS'} ,canActivate: [AuthService] },
  
	{ path: '**', component: ErrorPage, data: { title: '404 Error'} ,canActivate: [AuthService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }