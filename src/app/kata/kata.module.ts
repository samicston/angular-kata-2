import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { KataComponent} from './kata.component';

@NgModule({
    declarations: [
        KataComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [KataComponent]
})
export class KataModule {}