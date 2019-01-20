import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginWrapperComponent } from './site/login/components/login-wrapper/login-wrapper.component';
import { LoginMaskComponent } from './site/login/components/login-mask/login-mask.component';
import { LoginLegalNoticeComponent } from './site/login/components/login-legal-notice/login-legal-notice.component';
import { LoginPrivacyPolicyComponent } from './site/login/components/login-privacy-policy/login-privacy-policy.component';
import { ResetPasswordComponent } from './site/login/components/reset-password/reset-password.component';
import { ResetPasswordConfirmComponent } from './site/login/components/reset-password-confirm/reset-password-confirm.component';
import { FullscreenProjectorComponent } from './site/projector/components/fullscreen-projector/fullscreen-projector.component';

/**
 * Global app routing
 */
const routes: Routes = [
    {
        path: 'login',
        component: LoginWrapperComponent,
        children: [
            { path: '', component: LoginMaskComponent },
            { path: 'reset-password', component: ResetPasswordComponent },
            { path: 'reset-password-confirm', component: ResetPasswordConfirmComponent },
            { path: 'legalnotice', component: LoginLegalNoticeComponent },
            { path: 'privacypolicy', component: LoginPrivacyPolicyComponent }
        ]
    },
    { path: 'projector', component: FullscreenProjectorComponent },
    { path: 'projector/:id', component: FullscreenProjectorComponent },
    { path: '', loadChildren: './site/site.module#SiteModule' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
