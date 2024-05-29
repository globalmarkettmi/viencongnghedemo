import { NgModule } from '@angular/core';
import { DateFormatPipe } from './dateformatpipe';
import { DateNumberFormatPipe } from './datenumberformatpipe';
import { DateTimeFormatPipe } from './datetimeformat';
import { DateTimeNumberFormatPipe } from './datetimenumberformat';
import { ImagePopupComponent } from './image-popup/image-popup.component';
@NgModule({
    imports: [
    ],
    exports: [DateNumberFormatPipe, DateTimeNumberFormatPipe, DateFormatPipe, 
        DateTimeFormatPipe, ImagePopupComponent],
    declarations: [
        DateNumberFormatPipe, DateTimeNumberFormatPipe, DateFormatPipe, 
        DateTimeFormatPipe, ImagePopupComponent
    ],
    providers: [],
})
export class SharedModule { }
