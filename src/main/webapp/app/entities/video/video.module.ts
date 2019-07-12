import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OpenLearnrSharedModule } from 'app/shared';
import {
  VideoComponent,
  VideoDetailComponent,
  VideoUpdateComponent,
  VideoDeletePopupComponent,
  VideoDeleteDialogComponent,
  videoRoute,
  videoPopupRoute
} from './';

const ENTITY_STATES = [...videoRoute, ...videoPopupRoute];

@NgModule({
  imports: [OpenLearnrSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [VideoComponent, VideoDetailComponent, VideoUpdateComponent, VideoDeleteDialogComponent, VideoDeletePopupComponent],
  entryComponents: [VideoComponent, VideoUpdateComponent, VideoDeleteDialogComponent, VideoDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OpenLearnrVideoModule {}
