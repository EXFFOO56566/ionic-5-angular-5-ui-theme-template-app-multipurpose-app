import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { RestGuardGuard } from './restGuard/restGuard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slider',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./pages/slider/slider.module').then(m => m.SliderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'fireLogin',
    loadChildren: () => import('./pages/firebase/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'fireRegister',
    loadChildren: () => import('./pages/firebase/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'fireHome',
    loadChildren: () => import('./pages/firebase/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'fireReset',
    loadChildren: () => import('./pages/firebase/reset/reset.module').then(m => m.ResetPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./pages/woocommerce/product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'chat-home',
    loadChildren: () => import('./pages/chat/chat-home/chat-home.module').then(m => m.ChatHomePageModule)
  },
  {
    path: 'chat-ex1',
    loadChildren: () => import('./pages/chat/chat-ex1/chat-ex1.module').then(m => m.ChatEx1PageModule)
  },
  {
    path: 'chat-ex2',
    loadChildren: () => import('./pages/chat/chat-ex2/chat-ex2.module').then(m => m.ChatEx2PageModule)
  },
  {
    path: 'chat-ex3',
    loadChildren: () => import('./pages/chat/chat-ex3/chat-ex3.module').then(m => m.ChatEx3PageModule)
  },
  {
    path: 'chat-ex4',
    loadChildren: () => import('./pages/chat/chat-ex4/chat-ex4.module').then(m => m.ChatEx4PageModule)
  },
  {
    path: 'chat-ex5',
    loadChildren: () => import('./pages/chat/chat-ex5/chat-ex5.module').then(m => m.ChatEx5PageModule)
  },
  {
    path: 'login-home',
    loadChildren: () => import('./pages/loginScreens/login-home/login-home.module').then(m => m.LoginHomePageModule)
  },
  {
    path: 'login-ex1',
    loadChildren: () => import('./pages/loginScreens/login-ex1/login-ex1.module').then(m => m.LoginEx1PageModule)
  },
  {
    path: 'login-ex2',
    loadChildren: () => import('./pages/loginScreens/login-ex2/login-ex2.module').then(m => m.LoginEx2PageModule)
  },
  {
    path: 'login-ex3',
    loadChildren: () => import('./pages/loginScreens/login-ex3/login-ex3.module').then(m => m.LoginEx3PageModule)
  },
  {
    path: 'login-ex4',
    loadChildren: () => import('./pages/loginScreens/login-ex4/login-ex4.module').then(m => m.LoginEx4PageModule)
  },
  {
    path: 'login-ex5',
    loadChildren: () => import('./pages/loginScreens/login-ex5/login-ex5.module').then(m => m.LoginEx5PageModule)
  },
  {
    path: 'login-ex6',
    loadChildren: () => import('./pages/loginScreens/login-ex6/login-ex6.module').then(m => m.LoginEx6PageModule)
  },
  {
    path: 'grid-ex1',
    loadChildren: () => import('./pages/gridScreens/grid-ex1/grid-ex1.module').then(m => m.GridEx1PageModule)
  },
  {
    path: 'grid-ex2',
    loadChildren: () => import('./pages/gridScreens/grid-ex2/grid-ex2.module').then(m => m.GridEx2PageModule)
  },
  {
    path: 'grid-ex3',
    loadChildren: () => import('./pages/gridScreens/grid-ex3/grid-ex3.module').then(m => m.GridEx3PageModule)
  },
  {
    path: 'grid-ex4',
    loadChildren: () => import('./pages/gridScreens/grid-ex4/grid-ex4.module').then(m => m.GridEx4PageModule)
  },
  {
    path: 'grid-ex5',
    loadChildren: () => import('./pages/gridScreens/grid-ex5/grid-ex5.module').then(m => m.GridEx5PageModule)
  },
  {
    path: 'grid-home',
    loadChildren: () => import('./pages/gridScreens/grid-home/grid-home.module').then(m => m.GridHomePageModule)
  },
  {
    path: 'profile-home',
    loadChildren: () => import('./pages/profile-screens/profile-home/profile-home.module').then(m => m.ProfileHomePageModule)
  },
  {
    path: 'profile-ex1',
    loadChildren: () => import('./pages/profile-screens/profile-ex1/profile-ex1.module').then(m => m.ProfileEx1PageModule)
  },
  {
    path: 'profile-ex2',
    loadChildren: () => import('./pages/profile-screens/profile-ex2/profile-ex2.module').then(m => m.ProfileEx2PageModule)
  },
  {
    path: 'profile-ex3',
    loadChildren: () => import('./pages/profile-screens/profile-ex3/profile-ex3.module').then(m => m.ProfileEx3PageModule)
  },
  {
    path: 'profile-ex4',
    loadChildren: () => import('./pages/profile-screens/profile-ex4/profile-ex4.module').then(m => m.ProfileEx4PageModule)
  },
  {
    path: 'profile-ex5',
    loadChildren: () => import('./pages/profile-screens/profile-ex5/profile-ex5.module').then(m => m.ProfileEx5PageModule)
  },
  {
    path: 'grid-ex6',
    loadChildren: () => import('./pages/gridScreens/grid-ex6/grid-ex6.module').then(m => m.GridEx6PageModule)
  },
  {
    path: 'grid-model',
    loadChildren: () => import('./pages/gridScreens/grid-model/grid-model.module').then(m => m.GridModelPageModule)
  },
  {
    path: 'register-home',
    loadChildren: () => import('./pages/register/register-home/register-home.module').then(m => m.RegisterHomePageModule)
  },
  {
    path: 'register-ex1',
    loadChildren: () => import('./pages/register/register-ex1/register-ex1.module').then(m => m.RegisterEx1PageModule)
  },
  {
    path: 'register-ex2',
    loadChildren: () => import('./pages/register/register-ex2/register-ex2.module').then(m => m.RegisterEx2PageModule)
  },
  {
    path: 'register-ex3',
    loadChildren: () => import('./pages/register/register-ex3/register-ex3.module').then(m => m.RegisterEx3PageModule)
  },
  {
    path: 'register-ex4',
    loadChildren: () => import('./pages/register/register-ex4/register-ex4.module').then(m => m.RegisterEx4PageModule)
  },
  {
    path: 'register-ex5',
    loadChildren: () => import('./pages/register/register-ex5/register-ex5.module').then(m => m.RegisterEx5PageModule)
  },
  {
    path: 'register-ex6',
    loadChildren: () => import('./pages/register/register-ex6/register-ex6.module').then(m => m.RegisterEx6PageModule)
  },
  {
    path: 'slider-ex1',
    loadChildren: () => import('./pages/sliderScreens/slider-ex1/slider-ex1.module').then(m => m.SliderEx1PageModule)
  },
  {
    path: 'slider-ex2',
    loadChildren: () => import('./pages/sliderScreens/slider-ex2/slider-ex2.module').then(m => m.SliderEx2PageModule)
  },
  {
    path: 'slider-ex3',
    loadChildren: () => import('./pages/sliderScreens/slider-ex3/slider-ex3.module').then(m => m.SliderEx3PageModule)
  },
  {
    path: 'slider-home',
    loadChildren: () => import('./pages/sliderScreens/slider-home/slider-home.module').then(m => m.SliderHomePageModule)
  },
  {
    path: 'example1',
    loadChildren: () => import('./pages/ecommerce/example1/example1.module').then(m => m.Example1PageModule)
  },
  {
    path: 'example2',
    loadChildren: () => import('./pages/ecommerce/example2/example2.module').then(m => m.Example2PageModule)
  },
  {
    path: 'example3',
    loadChildren: () => import('./pages/ecommerce/example3/example3.module').then(m => m.Example3PageModule)
  },
  {
    path: 'example4',
    loadChildren: () => import('./pages/ecommerce/example4/example4.module').then(m => m.Example4PageModule)
  },
  {
    path: 'example-home',
    loadChildren: () => import('./pages/ecommerce/example-home/example-home.module').then(m => m.ExampleHomePageModule)
  },
  {
    path: 'example5',
    loadChildren: () => import('./pages/ecommerce/example5/example5.module').then(m => m.Example5PageModule)
  },
  {
    path: 'example10',
    loadChildren: () => import('./pages/ecommerce/example10/example10.module').then(m => m.Example10PageModule)
  },
  {
    path: 'sidemenu-home',
    loadChildren: () => import('./pages/sidemenu/sidemenu-home/sidemenu-home.module').then(m => m.SidemenuHomePageModule)
  },
  {
    path: 'timeline1',
    loadChildren: () => import('./pages/timeline/timeline1/timeline1.module').then(m => m.Timeline1PageModule)
  },
  {
    path: 'timeline2',
    loadChildren: () => import('./pages/timeline/timeline2/timeline2.module').then(m => m.Timeline2PageModule)
  },
  {
    path: 'timeline3',
    loadChildren: () => import('./pages/timeline/timeline3/timeline3.module').then(m => m.Timeline3PageModule)
  },
  {
    path: 'timeline4',
    loadChildren: () => import('./pages/timeline/timeline4/timeline4.module').then(m => m.Timeline4PageModule)
  },
  {
    path: 'timeline-home',
    loadChildren: () => import('./pages/timeline/timeline-home/timeline-home.module').then(m => m.TimelineHomePageModule)
  },
  {
    path: 'user-avatar',
    loadChildren: () => import('./pages/user-avatar/user-avatar.module').then(m => m.UserAvatarPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/firebase/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/firebase/details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'fire-image-list',
    loadChildren: () => import('./pages/firebase/fire-image-list/fire-image-list.module').then(m => m.FireImageListPageModule)
  },
  {
    path: 'fire-image-create',
    loadChildren: () => import('./pages/firebase/fire-image-create/fire-image-create.module').then(m => m.FireImageCreatePageModule)
  },
  {
    path: 'fire-image-detail',
    loadChildren: () => import('./pages/firebase/fire-image-detail/fire-image-detail.module').then(m => m.FireImageDetailPageModule)
  },
  {
    path: 'firebase',
    loadChildren: () => import('./pages/firebase/firebase/firebase.module').then(m => m.FirebasePageModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./pages/forms/forms/forms.module').then(m => m.FormsPageModule)
  },
  {
    path: 'forms1',
    loadChildren: () => import('./pages/forms/forms1/forms1.module').then(m => m.Forms1PageModule)
  },
  {
    path: 'forms2',
    loadChildren: () => import('./pages/forms/forms2/forms2.module').then(m => m.Forms2PageModule)
  },
  {
    path: 'forms3',
    loadChildren: () => import('./pages/forms/forms3/forms3.module').then(m => m.Forms3PageModule)
  },
  {
    path: 'forms4',
    loadChildren: () => import('./pages/forms/forms4/forms4.module').then(m => m.Forms4PageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'animations',
    loadChildren: () => import('./pages/animations/animations.module').then(m => m.AnimationsPageModule)
  },
  {
    path: 'calendars',
    loadChildren: () => import('./pages/calendars/calendars.module').then(m => m.CalendarsPageModule)
  },
  {
    path: 'input-mask',
    loadChildren: () => import('./pages/input-mask/input-mask.module').then(m => m.InputMaskPageModule)
  },
  {
    path: 'tooltip',
    loadChildren: () => import('./pages/tooltip/tooltip.module').then(m => m.TooltipPageModule)
  },
  {
    path: 'payment1',
    loadChildren: () => import('./pages/paymentScreens/payment1/payment1.module').then(m => m.Payment1PageModule)
  },
  {
    path: 'payment2',
    loadChildren: () => import('./pages/paymentScreens/payment2/payment2.module').then(m => m.Payment2PageModule)
  },
  {
    path: 'payment3',
    loadChildren: () => import('./pages/paymentScreens/payment3/payment3.module').then(m => m.Payment3PageModule)
  },
  {
    path: 'payment-home',
    loadChildren: () => import('./pages/paymentScreens/payment-home/payment-home.module').then(m => m.PaymentHomePageModule)
  },
  {
    path: 'payment-next',
    loadChildren: () => import('./pages/paymentScreens/payment-next/payment-next.module').then(m => m.PaymentNextPageModule)
  },
  {
    path: 'rest',
    loadChildren: () => import('./pages/rest/rest/rest.module').then(m => m.RestPageModule)
  },
  {
    path: 'rest-create',
    loadChildren: () => import('./pages/rest/rest-create/rest-create.module').then(m => m.RestCreatePageModule)
  },
  {
    path: 'rest-details',
    loadChildren: () => import('./pages/rest/rest-details/rest-details.module').then(m => m.RestDetailsPageModule)
  },
  {
    path: 'rest-image-create',
    loadChildren: () => import('./pages/rest/rest-image-create/rest-image-create.module').then(m => m.RestImageCreatePageModule)
  },
  {
    path: 'rest-image-details',
    loadChildren: () => import('./pages/rest/rest-image-details/rest-image-details.module').then(m => m.RestImageDetailsPageModule)
  },
  {
    path: 'rest-image-list',
    loadChildren: () => import('./pages/rest/rest-image-list/rest-image-list.module').then(m => m.RestImageListPageModule)
  },
  {
    path: 'rest-home',
    loadChildren: () => import('./pages/rest/rest-home/rest-home.module').then(m => m.RestHomePageModule),
    canActivate: [RestGuardGuard]
  },
  {
    path: 'rest-login',
    loadChildren: () => import('./pages/rest/rest-login/rest-login.module').then(m => m.RestLoginPageModule)
  },
  {
    path: 'rest-register',
    loadChildren: () => import('./pages/rest/rest-register/rest-register.module').then(m => m.RestRegisterPageModule)
  },
  {
    path: 'parallax1',
    loadChildren: () => import('./pages/parallax/parallax1/parallax1.module').then(m => m.Parallax1PageModule)
  },
  {
    path: 'parallax2',
    loadChildren: () => import('./pages/parallax/parallax2/parallax2.module').then(m => m.Parallax2PageModule)
  },
  {
    path: 'parallax-home',
    loadChildren: () => import('./pages/parallax/parallax-home/parallax-home.module').then(m => m.ParallaxHomePageModule)
  },
  {
    path: 'parallax5',
    loadChildren: () => import('./pages/parallax/parallax5/parallax5.module').then(m => m.Parallax5PageModule)
  },
  {
    path: 'simple',
    loadChildren: () => import('./pages/maps/simple/simple.module').then(m => m.SimplePageModule)
  },
  {
    path: 'marker',
    loadChildren: () => import('./pages/maps/marker/marker.module').then(m => m.MarkerPageModule)
  },
  {
    path: 'distance-matrix',
    loadChildren: () => import('./pages/maps/distance-matrix/distance-matrix.module').then(m => m.DistanceMatrixPageModule)
  },
  {
    path: 'styled',
    loadChildren: () => import('./pages/maps/styled/styled.module').then(m => m.StyledPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./pages/maps/maps/maps.module').then(m => m.MapsPageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsPageModule)
  },
  {
    path: 'accordions',
    loadChildren: () => import('./pages/accordions/accordions.module').then(m => m.AccordionsPageModule)
  },
  {
    path: 'item-ribbon',
    loadChildren: () => import('./pages/item-ribbon/item-ribbon.module').then(m => m.ItemRibbonPageModule)
  },
  {
    path: 'ck-editor',
    loadChildren: () => import('./pages/ck-editor/ck-editor.module').then(m => m.CkEditorPageModule)
  },
  {
    path: 'signature-pad',
    loadChildren: () => import('./pages/signature-pad/signature-pad.module').then(m => m.SignaturePadPageModule)
  },
  {
    path: 'signature-picker',
    loadChildren: () => import('./modals/signature-picker/signature-picker.module').then(m => m.SignaturePickerPageModule)
  },
  {
    path: 'translate',
    loadChildren: () => import('./pages/translate/translate.module').then(m => m.TranslatePageModule)
  },
  {
    path: 'theme',
    loadChildren: () => import('./pages/theme/theme.module').then(m => m.ThemePageModule)
  },
  {
    path: 'tabs2',
    loadChildren: () => import('./pages/tabs2/tabs2.module').then(m => m.Tabs2PageModule)
  },
  {
    path: 'video-player',
    loadChildren: () => import('./pages/video-player/video-player.module').then(m => m.VideoPlayerPageModule)
  },
  {
    path: 'offline-home',
    loadChildren: () => import('./pages/offline/offline-home/offline-home.module').then(m => m.OfflineHomePageModule)
  },
  {
    path: 'offline-create',
    loadChildren: () => import('./pages/offline/offline-create/offline-create.module').then(m => m.OfflineCreatePageModule)
  },
  {
    path: 'offline-details',
    loadChildren: () => import('./pages/offline/offline-details/offline-details.module').then(m => m.OfflineDetailsPageModule)
  },
  {
    path: 'admob',
    loadChildren: () => import('./pages/admob/admob.module').then( m => m.AdmobPageModule)
  },
  {
    path: 'barcode-scanner',
    loadChildren: () => import('./pages/barcode-scanner/barcode-scanner.module').then( m => m.BarcodeScannerPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
